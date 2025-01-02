const promise1= new Promise((resolve,reject)=>{
   setTimeout( reject("rejected for some reason"),500);
})

const promise2=Promise.resolve(10);
const promise3=Promise.reject(20);

Promise.allSettled([promise1,promise2,promise3]).then((val)=>{
    console.log(val);
    
}).catch((err)=>{
    console.error(err);
    
}).finally(()=>{
    console.log(" either resolved or rejected ");
    
})