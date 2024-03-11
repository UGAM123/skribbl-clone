import { useEffect, useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import Colors from "./components/Colors";
import ClearScreen from "./components/ClearScreen";
import ParticleCanvas from "./components/ParticleCanvas";
import { resizeCanvas } from "./utils/Canvas";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="pencil-cursor" id="canvas-container">
      <Canvas color={color} />
      <ParticleCanvas />
      <Colors setColor={setColor} />
      <ClearScreen />
      {/* <div
        id="cursor"
        style={{ left: `${cursor.cursorX}px`, top: `${cursor.cursorY}px` }}
      ></div> */}
    </div>
  );
}

export default App;
