import React, { useEffect, useRef, useState } from "react";
import { resizeCanvas } from "../utils/Canvas";

const ParticleCanvas = () => {
  const [renderer, setRenderer] = useState(true);
  const particleCanvas = useRef();
  const [ctx, setCtx] = useState("");

  useEffect(() => {
    setCtx(particleCanvas.current.getContext("2d"));
    resizeCanvas(particleCanvas);
    window.addEventListener("resize", () => {
      resizeCanvas(particleCanvas);
    });
  }, []);
  useEffect(() => {
    setRenderer(!renderer);
  }, [ctx]);
  return (
    <canvas
      id="particle-canvas"
      ref={particleCanvas}
      width="800"
      height="600"
      onResize={resizeCanvas}
    ></canvas>
  );
};

export default ParticleCanvas;
