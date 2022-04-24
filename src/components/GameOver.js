import React from "react";

const GameOver = (props) => {
  return (
    <section className={`overlay ${props.active ? "active" : ""}`}>
      <div className="modal">
        <p>UPs... game over !</p>
        <p className="score">Score was: {props.score}</p>
        <p>{props.message}</p>
        <button onClick={props.click}>Close</button>
      </div>
    </section>
  );
};

export default GameOver;
