import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("child component rerendered");
  return <button onClick={onClick}>Click me!</button>;
});

const ParentComponentOptimized = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount+ 1);
  }, []);

  return (
    <>
      <div>ParentComponentOptimized</div>

      <p>count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </>
  );
};

export default ParentComponentOptimized;
