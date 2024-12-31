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
    
    clearInterval(keep);
    console.log("Interval Stopped");
})


//random color generator

function randomColor(){
    let color='#';
    let hex='0123456789ABCDEF';
    for(let i=0;i<6;i++){
        color+= Math.floor(Math.random()*10);
    }
    return color;
}

let colorInterval;

function startChangingColor(){
    clearInterval(colorInterval);

    colorInterval= setInterval(changebgColor,1000);

    function changebgColor(){
    document.body.style.backgroundColor= randomColor();
    }
    
}
function stopChangingColor(){
clearInterval(colorInterval);
const currentBgColor=document.body.style.backgroundColor;
colorInterval=null;

}


document.getElementById('start').addEventListener('click',startChangingColor);
document.getElementById('stop').addEventListener('click',stopChangingColor);

