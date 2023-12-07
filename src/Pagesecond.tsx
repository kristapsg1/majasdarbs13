import { useState, useEffect } from "react";
import "./Pagesecond.css";


const Pagesecond = () => {
  let [plusOne, setPlusOne] = useState(0);
  const [text, setText] = useState("");

  const clickFirst = () => {
    setPlusOne((plusOne += 1));

    console.log("changing count!");
  };

  useEffect(() => {
    document.title = text
 }, [text]);


  return (
    <div className="page-wrapper">
      <button onClick={clickFirst}> + </button>
      <h3>
        count: <span style={{ fontSize: `${plusOne}px` }}>{plusOne}</span>
      </h3>
      <input
        type="text"
        placeholder="...change title"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          console.log("Input Change");
        }}
      />
      <h3>Output: {text}</h3>
    </div>
  );
};

export default Pagesecond;
