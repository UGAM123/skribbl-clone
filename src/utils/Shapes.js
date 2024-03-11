/**
 * CIRCLE
 */
const calculateRadius = (canvasRef, initialX, initialY, e) => {
  let currX = e.clientX - canvasRef.current.offsetLeft;
  let currY = e.clientY - canvasRef.current.offsetTop;
  let rad = Math.pow(
    Math.pow(initialX - currX, 2) + Math.pow(initialY - currY, 2),
    0.5
  );
  return rad;
};
const previewCircle = (canvasRef, previewCtx, initialX, initialY, e) => {
  let rad = calculateRadius(canvasRef, initialX, initialY, e);
  previewCtx.beginPath();
  previewCtx.arc(initialX, initialY, rad, 0, 2 * Math.PI);
  previewCtx.stroke();
  previewCtx.closePath();
};
const drawCircle = (canvasRef, ctx, initialX, initialY, e) => {
  let rad = calculateRadius(canvasRef, initialX, initialY, e);
  ctx.beginPath();
  ctx.arc(initialX, initialY, rad, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
};

/**
 * RECTANGLE
 */
const getRectSize = (canvasRef, initialX, initialY, e) => {
  let currX = e.clientX - canvasRef.current.offsetLeft;
  let currY = e.clientY - canvasRef.current.offsetTop;
  return { width: currX - initialX, height: currY - initialY };
};
const previewRect = (canvasRef, previewCtx, initialX, initialY, e) => {
  let sizes = getRectSize(canvasRef, initialX, initialY, e);
  previewCtx.beginPath();
  previewCtx.rect(initialX, initialY, sizes.width, sizes.height);
  previewCtx.stroke();
  previewCtx.closePath();
};
const drawRect = (canvasRef, ctx, initialX, initialY, e) => {
  let sizes = getRectSize(canvasRef, initialX, initialY, e);
  ctx.beginPath();
  ctx.rect(initialX, initialY, sizes.width, sizes.height);
  ctx.stroke();
  ctx.closePath();
};

/**
 * TRIANGLE
 */
const getMidPoint = (initialX, currX) => {
  return (
    Math.min(initialX, currX) +
    (Math.max(initialX, currX) - Math.min(initialX, currX)) / 2
  );
};
const previewTriangle = (canvasRef, previewCtx, initialX, initialY, e) => {
  let currX = e.clientX - canvasRef.current.offsetLeft;
  let currY = e.clientY - canvasRef.current.offsetTop;
  let midpoint = getMidPoint(initialX, currX);
  previewCtx.beginPath();
  previewCtx.moveTo(initialX, currY);
  previewCtx.lineTo(currX, currY);
  previewCtx.lineTo(midpoint, initialY);
  previewCtx.lineTo(initialX, currY);
  previewCtx.stroke();
  previewCtx.closePath();
};
const drawTriangle = (canvasRef, ctx, initialX, initialY, e) => {
  let currX = e.clientX - canvasRef.current.offsetLeft;
  let currY = e.clientY - canvasRef.current.offsetTop;
  let midpoint = getMidPoint(initialX, currX);
  ctx.beginPath();
  ctx.moveTo(initialX, currY);
  ctx.lineTo(currX, currY);
  ctx.lineTo(midpoint, initialY);
  ctx.lineTo(initialX, currY);
  ctx.stroke();
  ctx.closePath();
};

export {
  previewCircle,
  drawCircle,
  previewRect,
  drawRect,
  previewTriangle,
  drawTriangle,
};
