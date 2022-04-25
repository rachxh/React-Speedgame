import React from "react";

const Circle = (props) => {
  return (
    <div
      style={{ pointerEvents: props.disabled ? "auto" : "none" }}
      className="circle"
      onClick={props.click}
    >
      <span className={`flower ${props.active ? "active" : ""}`}>🌻</span>
    </div>
  );
};

export default Circle;
