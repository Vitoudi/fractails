export function drawLine(coords, options) {
  const canvas = canvasRef.current;
  const context = canvas.getContext("2d");
  //if(options.end.x !== current.end.x) return
  //console.log(canvas)
  //console.log(options.end.y);

  //context.strokeStyle = 'purple'
  context.beginPath();
  context.moveTo(coords.begin.x, coords.begin.y);
  context.lineTo(coords.end.x, coords.end.y);
  context.stroke();
}