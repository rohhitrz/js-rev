//without useCallback
import React, { useState } from "react";

const ChildComponent = ({ onClick }) => {
  console.log("child component rendered");
  return <button onClick={onClick}>click me</button>;
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </>
  );
};

export default ParentComponent;
