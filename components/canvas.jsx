import React, { useContext, useEffect, useRef, useState } from "react";
import {GlobalContext} from "../context/GlobalContext";

export default function Canvas({options}) {
  const [coords, setCoords] = useState(null)
  const [thisInterval, setThisInterval] = useState(null)
  const [lines, setLines] = useState([])
  const canvasRef = useRef(null);

  const [globalState, setGlobalState] = useContext(GlobalContext);
  const {color, lineWidth} = globalState

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  const painter = {
    coords: {},
    interval: null,
    lines: [],

    beginDraw(e) {
      painter.coords.begin = {
        x: e.pageX,
        y: e.pageY,
      };

      painter.interval = setInterval(() => {
        painter.coords.end = {
          x: e.pageX,
          y: e.pageY,
        };

        if (painter.lines.includes(JSON.stringify(painter.coords))) return;

        if (painter.coords?.begin?.x !== painter.coords?.end?.x) {
          requestAnimationFrame(drawLine.bind(painter, painter.coords));
          painter.lines.push(JSON.stringify(painter.coords));
        }
      }, 1000);
    },
  };

  function drawLine(coords, options) {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    //if(options.end.x !== current.end.x) return


    //switch()

    context.strokeStyle = color
    context.lineWidth = lineWidth

    console.log(lineWidth)

    context.beginPath();
    context.moveTo(coords.begin.x, coords.begin.y);
    context.lineTo(coords.end.x, coords.end.y);
    context.stroke();
  }

  function handleMouseDown(e) {
    painter.beginDraw(e);
  }

  return (
    <div style={{zIndex: `${-10}`, position: 'fixed'}}>
      <canvas
        style={{ backgroundColor: "white" }}
        onMouseDown={handleMouseDown}
        ref={canvasRef}
      />
    </div>
  );
}
