import React from "react";

const Main = (props) => {
  const startHandler = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h1>Water the Flower 🌻</h1>
      <div class="game-area">
        <h2>
          Your score is: <span id="score">0</span>
        </h2>
        <div class="container">
          <div class="circle">
            <span class="flower">🌻</span>
          </div>
          <div class="circle">
            <span class="flower">🌻</span>
          </div>
          <div class="circle">
            <span class="flower">🌻</span>
          </div>
          <div class="circle">
            <span class="flower">🌻</span>
          </div>
        </div>
        <div class="container">
          <button type="button" id="start" onclick={startHandler}>
            Easy
          </button>
          <button type="button" id="start" onclick="play()">
            Medium
          </button>
          <button type="button" id="stop">
            Stop game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
