const promise1= new Promise(function(resolve,reject){
    const success=true;

    if(success){
        resolve("Promise resolved successfully!");
    }else{
        reject("Promise rejected")
    }
   
});

promise1.then((value)=>{
    console.log(value);
    

}).catch((error)=>{
    console.error(error)
}).finally(()=>{
    console.log("Promise settled (reject or resolve) ");
    
})

