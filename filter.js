/**
  The filter() method creates a new array containing elements that satisfy a specific condition (i.e., the callback function returns true).
Non-matching elements are excluded from the new array.
Use Cases:
Extract specific items from an array based on conditions.
Remove invalid entries from a dataset.
Filter users based on age, roles, etc., in an object array.
 * 
 * 
 */

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 42 },
    { name: "Charlie", score: 60 },
    { name: "Diana", score: 30 }
  ];

  const passedStudents=students.filter((stu)=> stu.score>30)

  
  for(let i=0;i<passedStudents.length;i++){
    console.log(passedStudents[i].name);

  }
