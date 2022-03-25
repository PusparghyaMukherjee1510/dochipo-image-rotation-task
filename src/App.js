

import React, { useState, useRef } from "react";
import './App.css';

const App = () => {
  const boxRef = useRef();
  const [angle, setAngle]=useState(0);
  const onDragStart = (e) => {
    let box = e.target.parentElement;
    var rect = boxRef.current.getBoundingClientRect();
    box.setAttribute("data-center-x", rect.left + rect.width / 2);
    box.setAttribute("data-center-y", rect.top + rect.height / 2);
    box.setAttribute("data-angle", getDragAngle(e));
  };

  const onDrag = (e) => {
    let box = e.target.parentElement;
    let pos = {
      x: parseFloat(box.getAttribute("data-x")) || 0,
      y: parseFloat(box.getAttribute("data-y")) || 0,
    };

    let angle = getDragAngle(e);
    let angleDeg=angle*(180/Math.PI);
    setAngle(angleDeg);
    box.style.transform =
      "translate(" +
      pos.x +
      "px, " +
      pos.y +
      "px) rotate(" +
      angle +
      "rad" +
      ")";
  };

  const onDragEnd = (e) => {
    let box = e.target.parentElement;
    box.setAttribute("data-angle", getDragAngle(e));
  };

  function getDragAngle(event) {
    let box = event.target.parentElement;
    let startAngle = parseFloat(box.getAttribute("data-angle")) || 0;
    let center = {
      x: parseFloat(box.getAttribute("data-center-x")) || 0,
      y: parseFloat(box.getAttribute("data-center-y")) || 0,
    };
    let angle = Math.atan2(center.y - event.clientY, center.x - event.clientX);

    return angle - startAngle;
  }

  return (
    <div style={{ margin: 100 }}>
      <h4 style={{marginBottom:40}}>Current Angle:{angle}deg</h4>
      <div ref={boxRef} className="box">
        <img 
        src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
        />
        <div
          draggable
          onDrag={onDrag}
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
          className="rotation-handle"
        >
          X
        </div>
      </div>
    </div>
  );
};

export default App;