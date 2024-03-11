import React, { useEffect, useRef } from "react";

const ClearScreen = () => {
  const clearScreen = () => {
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  };

  return (
    <button className="clear-button" onClick={clearScreen}>
      ClearScreen
    </button>
  );
};

export default ClearScreen;
