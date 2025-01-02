const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("all promises are either resolved or rejected");
  });

//reject promise.all

// const promise1 =  Promise.resolve(10);
// const promise2 = new Promise((_,reject) => {
//   setTimeout(() => {
//     reject(20);
//   }, 2000);
// });
// const promise3=  Promise.resolve(30);

// Promise.all([promise1,promise2,promise3]).then((result)=>{
//     console.log(result)

// }).catch((error)=>{
//     console.error(error)

// }).finally(()=>{
//     console.log("all promises are either resolved or rejected");

// })
