import React, { useState, useEffect } from "react";

export default function Debouncing() {
  const [userInput, setUserInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(userInput);
    }, 500);

    return () => clearTimeout(timer);
  }, [userInput]);

  return (
    <div>
      <h2>Debounce Example</h2>
      <input
        type="text"
        placeholder="type something.."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <div>
        <strong>Input Value:</strong> {userInput}
      </div>
      <div>
        <strong>Debounced Value:</strong> {debouncedValue}
      </div>
    </div>
  );
}
