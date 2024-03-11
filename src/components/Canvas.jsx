import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
  previewCircle,
  drawCircle,
  previewRect,
  drawRect,
  previewTriangle,
  drawTriangle,
} from "../utils/Shapes";
import { resizeCanvas } from "../utils/Canvas";

const Canvas = (props) => {
  const canvasRef = useRef();
  const previewCanvasRef = useRef();
  const [ctx, setCTX] = useState("");
  const [previewCtx, setPreviewCTX] = useState("");
  const [renderer, setRenderer] = useState(true);
  const [isEraser, setIsEraser] = useState(false);
  const [isShape, setIsShape] = useState(false);

  var flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

  const draw = () => {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.stroke();
    ctx.closePath();
  };

  const findxy = (res, e) => {
    if (res == "down") {
      prevX = currX;
      prevY = currY;
      currX = e.clientX - canvasRef.current.offsetLeft;
      currY = e.clientY - canvasRef.current.offsetTop;
      flag = true;
      dot_flag = true;
      if (dot_flag && !isEraser) {
        ctx.beginPath();
        ctx.fillStyle = props.color;
        ctx.fillRect(currX, currY, 2, 2);
        ctx.closePath();
        dot_flag = false;
      } else {
        ctx.clearRect(currX - 4, currY - 16, 20, 20);
      }
    }
    if (res == "up" || res == "out") {
      flag = false;
    }
    if (res == "move") {
      if (flag) {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvasRef.current.offsetLeft;
        currY = e.clientY - canvasRef.current.offsetTop;
        if (isEraser) {
          ctx.clearRect(currX - 5, currY - 5, 20, 20);
        } else {
          draw();
        }
      }
    }
  };

  const handleMouseEvents = (e) => {
    if (e.type == "mousemove" && flag) {
      findxy("move", e);
    } else if (e.type == "mousedown") {
      findxy("down", e);
    } else if (e.type == "mouseout") {
      findxy("out", e);
    } else if (e.type == "mouseup") {
      findxy("up", e);
    }
  };

  const handleDrawShapeMouseEvents = (e) => {
    previewCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    previewCtx.beginPath();

    if (e.type == "mousemove" && flag) {
      if (props.color.includes("circle")) {
        previewCircle(canvasRef, previewCtx, prevX, prevY, e);
      } else if (props.color.includes("rect")) {
        previewRect(canvasRef, previewCtx, prevX, prevY, e);
      } else if (props.color.includes("triangle")) {
        previewTriangle(canvasRef, previewCtx, prevX, prevY, e);
      }
    } else if (e.type == "mousedown") {
      currX = e.clientX - canvasRef.current.offsetLeft;
      currY = e.clientY - canvasRef.current.offsetTop;
      prevX = currX;
      prevY = currY;
      ctx.beginPath();
      flag = true;
    } else if (e.type == "mouseout") {
      ctx.closePath();
      flag = false;
    } else if (e.type == "mouseup") {
      if (flag) {
        if (props.color.includes("circle")) {
          drawCircle(canvasRef, ctx, prevX, prevY, e);
        } else if (props.color.includes("rect")) {
          drawRect(canvasRef, ctx, prevX, prevY, e);
        } else if (props.color.includes("triangle")) {
          drawTriangle(canvasRef, ctx, prevX, prevY, e);
        }
      }
      flag = false;
    }
  };

  const handleResize = () => {
    resizeCanvas(canvasRef);
    resizeCanvas(previewCanvasRef);
  };

  useEffect(() => {
    setCTX(() => {
      return canvasRef.current.getContext("2d");
    });
    setPreviewCTX(() => {
      return previewCanvasRef.current.getContext("2d");
    });
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setRenderer(!renderer);
    if (props.color == "eraser") {
      setIsShape(false);
      setIsEraser(true);
    } else if (props.color.includes("shape")) {
      setIsEraser(false);
      setIsShape(true);
    } else {
      if (ctx && previewCtx) {
        ctx.strokeStyle = props.color;
        ctx.lineWidth = 2;
        ctx.border = null;
        previewCtx.strokeStyle = props.color;
        previewCtx.globalAlpha = "0.5";
        previewCtx.lineWidth = 2;
        previewCtx.border = null;
      }
      setIsShape(false);
      setIsEraser(false);
    }
  }, [ctx, previewCtx, props.color]);
  return (
    <>
      <canvas
        ref={canvasRef}
        id="can"
        width="800"
        height="600"
        onMouseDown={isShape ? handleDrawShapeMouseEvents : handleMouseEvents}
        onMouseMove={isShape ? handleDrawShapeMouseEvents : handleMouseEvents}
        onMouseUp={isShape ? handleDrawShapeMouseEvents : handleMouseEvents}
        onMouseOut={isShape ? handleDrawShapeMouseEvents : handleMouseEvents}
      ></canvas>
      <canvas
        ref={previewCanvasRef}
        id="drawCan"
        width="800"
        height="600"
        onMouseDown={isShape ? handleDrawShapeMouseEvents : handleMouseEvents}
        onMouseMove={isShape ? handleDrawShapeMouseEvents : handleMouseEvents}
        onMouseUp={isShape ? handleDrawShapeMouseEvents : handleMouseEvents}
        onMouseOut={isShape ? handleDrawShapeMouseEvents : handleMouseEvents}
      ></canvas>
    </>
  );
};

export default Canvas;
