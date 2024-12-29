async function getData(){
    return 1;
}
function A() {
  console.log("A");
}

setTimeout(() => {
  console.log("B");
}, 0);

A();

//MICRO TASKS QUEUE ->PROMISES-> HIGH PRIORITY
getData().then((data)=>{
    console.log(data);
})

console.log("C");
console.log("C");



Promise.resolve().then(() => {
  console.log("D");
});
