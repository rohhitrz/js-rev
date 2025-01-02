document.getElementById("parent").addEventListener('click',()=>{
    console.log("parent clicked, event capturing");
    
},true)

document.getElementById("child").addEventListener('click',()=>{
    console.log("child clicked, event capturing");
    
},true);