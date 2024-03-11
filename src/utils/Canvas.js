const resizeCanvas = (canvasRef) => {
  if (canvasRef) {
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
  }
};

export { resizeCanvas };
