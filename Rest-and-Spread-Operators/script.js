const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//spread=(...)

const arr2 = [...arr];
console.log(arr);
console.log(arr2);

let student = {
  name: "alpha",
  age: 68,
  class: 10,
};

let stu = { ...student };
console.log(stu.name);
stu["name"] = "beta";

console.log(stu.name);
console.log(student.name);

//rest opearator

function sum(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11);
