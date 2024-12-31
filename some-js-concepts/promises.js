//promise object represents eventual completion or failure of an asynchronous operation
//promises has 3 states- 1. pending, 2. fulfilled, 3.rejected

const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  //db calls, cryptography, network calls

  setTimeout(() => {
    console.log("Async task completed");
    resolve();
    // reject();
  }, 3000);
});

promiseOne
  .then(() => {
    console.log("task completed");
  })
  .catch(() => console.log("task not completed"))
  .finally(() => console.log("over"));

//promise-2

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise-2 async task complted");
    resolve();
  }, 4000);
})
  .then(() => {
    console.log("task 2 completed");
  })
  .catch(() => {
    console.log("task 2 not completed");
  })
  .finally(() => {
    console.log("task 2 also done");
  });

//third promise

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Rohit", email: "xyz@gmail.com" });
  }, 2000);
});

promiseThree.then((user) => {
  console.log(user);
  //let's destructure
  const { username, email } = user;
  console.log("username: ", username);
});

//promise 4

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Gajar", password: "Halwa" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log("promise four fulfilled");
    return user.username;

  })
  .then((username)=>{
    console.log(username)

  })
  .catch(() => {
    console.log("error");
  })
  .finally(() => console.log("done-4"));


  //Promise-5 

  const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            // console.log("Promise 5 fulfilled")
            resolve({username: "JS-5", password:"javascript"})
        }else{
            reject("Error: JS went wrong");
        }

    },1000)

  })

  async function consumePromiseFive(){
    try{
    const response= await promiseFive;
    console.log("response= ",response)
    }catch(error){
        console.log(error);
    }
  }
  consumePromiseFive();


  async function getUsers(){
    try{
    const rawApiData = await fetch('https://jsonplaceholder.typicode.com/users');
    const response= await rawApiData.json();
    console.log(response);
    // const username= response.map(user=>user.username)   //to print only username
    // console.log(username)


    return response;
    }
    catch(error){
        console.log(error);
    }
  }

  getUsers();

