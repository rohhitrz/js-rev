// function x(){
//     var i=1;
//     setTimeout(()=>{
//         console.log(i); 
//     },3000);
//     console.log("hellooooyy")
// }
// x();


function x(){

    for(let i=1;i<=5;i++){
        setTimeout(()=>{
            console.log(i);

        },i*1000)
    }


}
x();