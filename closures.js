// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();


function something(){
    let v=7;
    function otherThing(){
        console.log(v);
    }
    // v=100;                  -----------> this will give output as 100
    return otherThing;
}
let alpha =something();
console.log(alpha);

alpha();

