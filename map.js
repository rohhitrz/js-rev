/**
 map():
Overview:
The map() method creates a new array by applying a provided function to each element in the original array.
It does not modify the original array.
Ideal for transforming data.
Use Cases:
Modify elements of an array.
Convert an array of objects into another format.
Extract specific properties from an array of objects.

 */

//example- Convert an array of temperatures from Celsius to Fahrenheit.

const celsius= [0,20,30,40];
const fahrenheit= celsius.map((temp)=>(temp*9)/5 + 32);

console.log("Celsius:", celsius);       // [0, 20, 30, 40]
console.log("Fahrenheit:", fahrenheit); // [32, 68, 86, 104]
