import React, { Component } from "react";

import Button from "./components/Button";
import Circle from "./components/Circle";
import GameOver from "./components/GameOver";
import { circles } from "./circles";

import startMusic from "./assets/sounds/bg.ogg";
import stopMusic from "./assets/sounds/gameover.ogg";
import click from "./assets/sounds/click.wav";

const clickSound = new Audio(click);
const startSound = new Audio(startMusic);
const stopSound = new Audio(stopMusic);

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: -1,
    showGameOver: false,
    pace: 1500,
    rounds: 0,
    gameOn: false,
  };

  timer = undefined;

  clickPlay = () => {
    if (clickSound.paused) {
      clickSound.play();
    } else {
      clickSound.currentTime = 0;
    }
  };

  clickHandler = (i) => {
    this.clickPlay();
    if (this.state.current !== i) {
      this.stopHandler();
      return;
    }
    this.setState({
      score: this.state.score + 10,
      rounds: this.state.rounds - 1,
    });
  };

  nextCircle = () => {
    if (this.state.rounds >= 1) {
      this.stopHandler();
      return;
    }

    let nextActive;

    do {
      nextActive = getRndInteger(0, 3);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      pace: this.state.pace * 0.95,
      rounds: this.state.rounds + 1,
    });
    console.log("rounds", this.state.rounds);

    this.timer = setTimeout(this.nextCircle, this.state.pace);
  };

  startHandler = () => {
    startSound.play();
    startSound.loop = true;
    this.nextCircle();
    this.setState({ gameOn: true });
  };

  stopHandler = () => {
    startSound.pause();
    stopSound.play();
    clearTimeout(this.timer);
    this.setState({ showGameOver: true, gameOn: false });
  };

  closeHandler = () => {
    window.location.reload();
  };

  render() {
    let message = "";

    if (this.state.score <= 50) {
      message = "You can do better";
    } else if (this.state.score >= 51 && this.state.score <= 100) {
      message = "Pretty good";
    } else {
      message = "wow!";
    }

    return (
      <div>
        <h1>Water The Sunflower 🌻</h1>
        <p>Your score: {this.state.score}</p>
        <div className="circles">
          {circles.map((_, i) => (
            <Circle
              key={i}
              id={i}
              click={() => this.clickHandler(i)}
              active={this.state.current === i}
              disabled={this.state.gameOn}
            />
          ))}
        </div>
        <div>
          {!this.state.gameOn && (
            <Button click={this.startHandler}>START</Button>
          )}
          {this.state.gameOn && <Button click={this.stopHandler}>STOP</Button>}
        </div>

        {this.state.showGameOver && (
          <GameOver
            click={this.closeHandler}
            score={this.state.score}
            message={message}
          />
        )}
      </div>
    );
  }
}

export default App;
