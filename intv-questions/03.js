function A() {
  console.log("A");
}

setTimeout(() => {
  console.log("B");
}, 0);

A();

console.log("C");

Promise.resolve().then(() => {
  console.log("D");
});
