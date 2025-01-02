import React, { useState, useEffect } from "react";

const CounterWithEffects = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("the count is: ",{count})

  },[count])

  return (
    <>
      <div>CounterWithEffects</div>
      <p>counter: {count} </p>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </>
  );
};


export default CounterWithEffects;