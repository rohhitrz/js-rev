// setTimeout(()=>{
//     console.log("Rohit");
    
// },2000);

function sayName(){
    console.log("Rohit");
}

setTimeout(sayName,2000);

// document.querySelector('h1').innerHTML="hello";

const changeText = function(){
    document.querySelector('h1').innerHTML="HEY";
}

const changeMe=setTimeout(changeText,3000);

// document.querySelector('#stop').addEventListener('click',function(){
//     clearTimeout(changeMe);
//     console.log("stopped");
// })

const interval= function(){
    console.log(6, Date.now());
}

let keep;



document.querySelector('#start').addEventListener('click',function(){
    // keep
      keep=setInterval(interval,2000);
    

});

document.querySelector('#stop').addEventListener('click',function(){
    
    clearTimeout(keep);
    console.log("Interval Stopped");
})

