import React, { useRef } from "react";

export const UseRefHook = () => {
  const initialRef = useRef(null);

  const handleFocus = () => {
    initialRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={initialRef} />
      <button onClick={handleFocus}>click</button>
    </div>
  );
};
