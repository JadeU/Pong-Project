import { SVG_NS } from "../settings";
import Ping from "../../public/sounds/pong-01.wav";

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.pingSound = new Audio(Ping);
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    this.direction = 1;
    this.vx = 1;
    this.vy = 1;
    this.reset();
  }

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    this.vy = 0;
    while (this.vy === 0) {
      this.vy = Math.random() * 10 - 5;
    }
    this.vx = (6 - Math.abs(this.vy)) * this.direction;
  }

  wallCollision(paddle1, paddle2) {
    if (this.y + this.radius >= this.boardHeight || this.y - this.radius <= 0) {
      this.vy = this.vy * -1;
    }

    if (this.x - this.radius >= this.boardWidth) {
      paddle1.increaseScore();
      this.direction = -1;
      this.reset();
    } else if (this.x + this.radius <= 0) {
      paddle2.increaseScore();
      this.direction = 1;
      this.reset();
    }
  }

  paddleCollision(paddle1, paddle2) {
    if (this.vx < 0) {
      const position = paddle1.getPaddlePosition();
      const hitRight = this.x + this.radius <= position.right;
      const belowTop = this.y - this.radius >= position.top;
      const aboveBottom = this.y + this.radius <= position.bottom;

      if (hitRight && belowTop && aboveBottom) {
        this.pingSound.play();
        this.vx = this.vx * -1;
      }
    } else {
      const position = paddle2.getPaddlePosition();
      const hitLeft = this.x - this.radius >= position.left;
      const belowTop = this.y - this.radius >= position.top;
      const aboveBottom = this.y + this.radius <= position.bottom;
      console.log(hitLeft, belowTop, aboveBottom);
      if (hitLeft && belowTop && aboveBottom) {
        this.pingSound.play();
        this.vx = this.vx * -1;
      }
    }
  }

  ballMove() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  render(svg, paddle1, paddle2) {
    let ballCircle = document.createElementNS(SVG_NS, "circle");

    ballCircle.setAttributeNS(null, "r", this.radius);
    ballCircle.setAttributeNS(null, "cx", this.x);
    ballCircle.setAttributeNS(null, "cy", this.y);
    ballCircle.setAttributeNS(null, "fill", "#FF4F00");
    svg.appendChild(ballCircle);
    this.ballMove();
    this.wallCollision(paddle1, paddle2);
    this.paddleCollision(paddle1, paddle2);
  }
  
  render(svg, paddle1, paddle2){
    let ballCircle2 = document.createElementNS(SVG_NS, "circle");

    ballCircle2.setAttributeNS(null, "r", this.radius);
    ballCircle2.setAttributeNS(null, "cx", this.x);
    ballCircle2.setAttributeNS(null, "cy", this.y);
    ballCircle2.setAttributeNS(null, "fill", "orangered");
    svg.appendChild(ballCircle2);
    this.ballMove();
    this.wallCollision(paddle1, paddle2);
    this.paddleCollision(paddle1, paddle2);
  }
}
