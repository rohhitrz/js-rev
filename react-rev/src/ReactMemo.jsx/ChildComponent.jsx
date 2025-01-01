import React from 'react'


//here React.memo is taking a function and we are destructuring name..
 const ChildComponent = React.memo(({name})=>{
    console.log("Child component is re-rendering...");
    return <p>Hi, my name is: {name}</p>
    

 })


 export default ChildComponent;