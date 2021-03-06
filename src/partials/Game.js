import {
  SVG_NS,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  BALL_RADIUS,
  PADDLE_GAP,
  PADDLE_SPEED,
  KEYS

  //add codepen file for key pressed to game.js
  //game stop variable just like game paused variable
} from "../settings";
import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";
import Score from "./Score";

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.paused = false;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);

    const paddle_mid = (this.height - PADDLE_HEIGHT) / 2;
    const right_gap = this.width - PADDLE_GAP - PADDLE_WIDTH;
    this.paddle1 = new Paddle(
      this.height,
      PADDLE_WIDTH,
      PADDLE_HEIGHT,
      PADDLE_GAP,
      paddle_mid,
      KEYS.p2up,
      KEYS.p2down
    );
    this.paddle2 = new Paddle(
      this.height,
      PADDLE_WIDTH,
      PADDLE_HEIGHT,
      right_gap,
      paddle_mid,
      KEYS.p1up,
      KEYS.p1down
    );
    this.ballCircle = new Ball(BALL_RADIUS, this.width, this.height);

    this.ballCircle2 = new Ball(BALL_RADIUS, this.width, this.height);

    this.ball = new Ball(BALL_RADIUS, this.width, this.height);

    this.score1 = new Score(this.width / 2 - 50, 30, 30);

    this.score2 = new Score(this.width / 2 + 25, 30, 30);

    // Other code goes here...
    document.addEventListener("keydown", event => {
      if (event.key === " ") {
        this.paused = !this.paused;
        if (this.paused === true) {
          this.paddle1.setSpeed(0);
          this.paddle2.setSpeed(0);
        } else {
          this.paddle1.setSpeed(PADDLE_SPEED);
          this.paddle2.setSpeed(PADDLE_SPEED);
        }
      }
    });

    
  }

  render() {
    // More code goes here....
    if (this.paused === false) {
      this.gameElement.innerHTML = "";
      let svg = document.createElementNS(SVG_NS, "svg");
      svg.setAttributeNS(null, "width", this.width);
      svg.setAttributeNS(null, "height", this.height);
      svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
      this.gameElement.appendChild(svg);

      this.board.render(svg);
      this.paddle1.render(svg);
      this.paddle2.render(svg);
      this.ballCircle.render(svg, this.paddle1, this.paddle2);
      this.score1.render(svg, this.paddle1.getScore());
      this.score2.render(svg, this.paddle2.getScore());
    }
  }
}
