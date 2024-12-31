import React, { useRef, useEffect } from "react";

export const UseRefHook = () => {
  const initialRef = useRef(null);

  useEffect(()=>{
  if(initialRef.current){
    initialRef.current.focus()
  }
})


  const handleFocus = () => {
    initialRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={initialRef}  />
      <button onClick={handleFocus}>click</button>
    </div>
  );
};
