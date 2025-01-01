//Avoid recalculation of an expensive operation-(large computatation)

// expensive calculaion example

import React, { useMemo, useState } from "react";

const calculateFactorial = (n) => {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
};

const UseMemoHook = () => {
  const [num, setNum] = useState(5);
  const [counter, setCounter] = useState(0);

  const factorial = useMemo(() => calculateFactorial(num), [num]);

  return (
    <>
      <h1>UseMemo Example</h1>
      <p>
        Factorial of {num} is: {factorial}
      </p>
      <button onClick={() => setNum(num + 1)}>Increment Number</button>" "
      <button onClick={() => setNum(num - 1)}>Decrement Number</button>" "
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <p>Counter: {counter}</p>
    </>
  );
};

export default UseMemoHook;
