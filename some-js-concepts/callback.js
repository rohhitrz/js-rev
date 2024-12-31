//Example-1
// function calaculate(a,b,operation){
//     return operation(a,b);
// }

// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function div(a,b){
//     if(b !==0){
//         return a/b;
//     }
//     throw new Error("Division by Zero not allowed")
// }
// function mul(a,b){
//     return a*b;
// }

// let res=calaculate(15,0,div);
// console.log(res);



//Example-2

// function callHello(){
// setTimeout(()=>{
//     console.log("hello");
// },3000)
// }

function callHello(callback) {
    setTimeout(() => {
        console.log("hello");
        if (typeof callback === "function") {
            callback(); // Call the callback only if it is a function
        }
    }, 3000);
}

// Call without a callback (no error)
callHello();

// Call with a callback
callHello(() => {
    console.log("This runs after 'hello'");
});

