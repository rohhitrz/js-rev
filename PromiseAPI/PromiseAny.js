const promise1 = new Promise((res, rej) => {
  rej(100);
});

const promise2 = Promise.reject(330);

const promise3 = Promise.resolve(303);

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("either resolved or rejected");
  });
