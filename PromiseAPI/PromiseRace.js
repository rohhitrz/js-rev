const promise1= Promise.resolve(130);
const promise2=Promise.reject(20);

Promise.race([promise2,promise1]).then((val)=>{
    console.log(val);
    
}).catch((err)=>{
    console.error(err);
    
}).finally(()=>{
    console.log("either resolved or rejected");
    
})