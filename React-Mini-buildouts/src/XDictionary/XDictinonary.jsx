import React, { useState } from "react";
useState;

const XDictinonary = () => {
  const [dictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);
  function handleClick() {
    const foundword = dictionary.find((item) => {
      return item.word.toLowerCase() === input.toLowerCase();
    });

    if (foundword) {
      setResult(foundword.meaning);
    } else {
      return "not found";
    }
  }

  const [input, setInput] = useState("");
  const [result, setResult] = useState("search something first..");
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleClick}>Search</button>

      {/* display result */}

      <div>{result}</div>
    </>
  );
};

export default XDictinonary;
