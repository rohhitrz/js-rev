import React, { useState, useEffect, useRef } from "react";

 const UseRefPreviousState = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);
  console.log(prevCountRef);

  useEffect(()=>{
    prevCountRef.current=count;


  },[count])

  return (
    <>
      <h1> Previous State Example</h1>
      <p>current count: {count}</p>
      <p>Previous count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </>
  );
};

export default UseRefPreviousState;
