//lexical scoping

// function init() {
//   const name = "benaam";
  
//   function username() {
     
//     console.log("the name of user is: ", name);
//   }
//   username();
// }
// init();


//closures

function closureFunction(){
    let name="no name";
    return function innerFunction(){
        console.log("hey I am accessing closureFunction from innerFunction, here is the proof :",name);
    }
}

const myFunc =closureFunction();
myFunc();






