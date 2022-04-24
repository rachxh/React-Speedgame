import React from "react";

const Button = (props) => {
  return (
    <button type={props.type || "button"} onClick={props.click}>
      {props.children}
    </button>
  );
};

export default Button;
