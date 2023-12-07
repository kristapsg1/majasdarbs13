import { useRef } from "react";
import "./Pagethird.css";

const PageThird = () => {
  const goldRef = useRef(null);

  const goldDivRef = useRef(null);

  const cornerDivRef = useRef(null);

  const changeColor = () => {
    const goldColor = goldRef.current;

    if (goldColor) {
      goldColor.style.backgroundColor = "gold";
    }
  };

  const cloneDiv = () => {
    if (goldDivRef.current) {
      const clonedDiv = goldDivRef.current.cloneNode(true);

      goldDivRef.current.parentNode.insertBefore(
        clonedDiv,
        goldDivRef.current.nextSibling
      );
    }
  };

  const sendToCorner = () => {
    if (cornerDivRef.current) {
      cornerDivRef.current.style.position = "absolute";
      cornerDivRef.current.style.top = "0";
      cornerDivRef.current.style.right = "0";
    }
  };

  return (
    <div className="third-wrapper">
      <h3>Task 1</h3>
      <button onClick={changeColor}>Change To Gold</button>
      <div
        ref={goldRef}
        style={{ height: "100px", width: "100px", border: "1px solid black" }}
      ></div>
      <h3>Task 2</h3>
      <div className="clone-wrpper">
        <div className="next-gold">
          <div
            ref={goldDivRef}
            style={{ height: "100px", width: "100px", backgroundColor: "gold" , border: '1px black solid'}}
          ></div>
        </div>

        <button onClick={cloneDiv}>Clone div</button>
      </div>
      <h3>Task 3</h3>
      <div
        style={{
          height: "300px",
          width: "400px",
          border: "1px solid black",
          position: "relative",
          
        }}
      >
        <div
          ref={cornerDivRef}
          style={{ height: "50px", width: "50px", border: "1px solid black", position: "relative",top: "45%",right: '-40%', backgroundColor:'gold' }}
        ></div>
        <button className="last-button" onClick={sendToCorner}>Send div to corner</button>
      </div>
    </div>
  );
};

export default PageThird;
