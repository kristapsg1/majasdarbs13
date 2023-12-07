import { useState, useRef, useEffect } from "react";
import "./App.css";

const App = () => {
  const [addItems, setAddItems] = useState("");
  const [itemsArray, setItemsArray] = useState([]);
  const inputRef = useRef(null);

  const [btnStat, setBtnStat] = useState(true);

  let [count, setCount] = useState(1);
  const [countMultiplie, setCountMultiplie] = useState(1);

  const [colors, setColors] = useState("red");
  const [colorArray, setColorArray] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBtnStat(false);
    }, 5000);
  }, []);

  const handleCount = () => {
    setCount((count += 1));
    setCountMultiplie(count * 2);
  };

  const handleColors = (e) => {
    e.preventDefault();

    const colorCollection = [...colorArray, colors];
    setColorArray(colorCollection);

    console.log(colorArray);
  };

  return (
    <div className="first-wrapper">
      <input type="text" placeholder="...focus on refresh" autoFocus />

      <form
        className="form-add"
        onSubmit={(e) => {
          e.preventDefault();

          const itemsColection = [...itemsArray, addItems];

          setItemsArray(itemsColection);

          setAddItems("");
        }}
      >
        <input
          type="text"
          placeholder="...Item"
          value={addItems}
          onChange={(e) => {
            setAddItems(e.target.value);
          }}
          ref={inputRef}
        />
        <button
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          Add
        </button>
      </form>
      <ul>
        {itemsArray.map((item) => {
          return <li key={Math.random()}>{item}</li>;
        })}
      </ul>

      <button
        disabled={btnStat}
        className={btnStat ? "disabled-button" : "enabled-button"}
        style={{
          cursor: btnStat ? "not-allowed" : "pointer",
          backgroundColor: btnStat ? 'grey' : '#1fa51f'
        }}
      >
        TO Btn
      </button>
      <button onClick={handleCount}>count: {count}</button>
      <div className="multiplie-box">{countMultiplie}</div>
      <form className="color-selector-wrapper" onSubmit={handleColors}>
        <button type="submit"> + </button>
        <select
          name="all-colors"
          className="select-style"
          value={colors}
          onChange={(e) => {
            setColors(e.target.value);
          }}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </form>
      <div className="color-wrapper">
        {colorArray.map((color) => {
          return (
            <div
              key={Math.random()}
              style={{
                backgroundColor: color,
                height: "100px",
                width: "100px",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
