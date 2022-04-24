import React from "react";

const Circle = (props) => {
  return (
    <div
      style={{ pointerEvents: props.disabled ? "auto" : "no" }}
      className="circle"
      onClick={props.click}
    >
      {/* {props.id} */}
      <span className={`flower ${props.active ? "active" : ""}`}>🌻</span>
    </div>
  );
};

export default Circle;
