import React from "react";

const Colors = (props) => {
  const color = (e) => {
    let canvasContainer = document.getElementById("canvas-container");
    canvasContainer.classList.remove("eraser-cursor");
    canvasContainer.classList.add("pencil-cursor");

    switch (e.target.id) {
      case "green":
        props.setColor("green");
        break;
      case "blue":
        props.setColor("blue");
        break;
      case "red":
        props.setColor("red");
        break;
      case "yellow":
        props.setColor("yellow");
        break;
      case "orange":
        props.setColor("orange");
        break;
      case "black":
        props.setColor("black");
        break;
      case "shape-circle":
        props.setColor("shape-circle");
        break;
      case "shape-rect":
        props.setColor("shape-rect");
        break;
      case "shape-triangle":
        props.setColor("shape-triangle");
        break;
    }
  };

  const eraser = (e) => {
    props.setColor("eraser");
    let canvasContainer = document.getElementById("canvas-container");
    canvasContainer.classList.remove("pencil-cursor");
    canvasContainer.classList.add("eraser-cursor");
  };
  return (
    <>
      <div className="color-pallete-heading"> Choose Color </div>
      <div className="color-pallete-container">
        <section className="color-pallete-row">
          <div style={{ background: "green" }} id="green" onClick={color}></div>
          <div style={{ background: "blue" }} id="blue" onClick={color}></div>
          <div style={{ background: "red" }} id="red" onClick={color}></div>
          <div
            style={{ background: "yellow" }}
            id="yellow"
            onClick={color}
          ></div>
          <div
            style={{ background: "orange" }}
            id="orange"
            onClick={color}
          ></div>
          <div style={{ background: "black" }} id="black" onClick={color}></div>
          <div id="eraser" onClick={eraser}>
            <img src="https://cdn3.vectorstock.com/i/1000x1000/96/32/eraser-icon-vector-21679632.jpg" />
          </div>
        </section>
        <section className="color-pallete-row">
          <div
            style={{
              border: "1 px solid black",
              background: "white",
              borderRadius: "50%",
            }}
            id="shape-circle"
            onClick={color}
          ></div>
          <div
            style={{ border: "1 px solid black", background: "white" }}
            id="shape-rect"
            onClick={color}
          ></div>
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "none",
              borderLeft: "15px solid transparent",
              borderRight: "15px solid transparent",
              borderBottom: "22px solid white",
            }}
            id="shape-triangle"
            onClick={color}
          ></div>
        </section>
      </div>
      {/* <div style={{ position: "absolute", top: "20%", left: "43%" }}>
        Eraser
      </div>
      <div style={{ background: "white" }} id="white" onClick={color}></div> */}
    </>
  );
};

export default Colors;
