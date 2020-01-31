import { SVG_NS } from "../settings";

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2; 
      this.direction = 1;
      this.vx =1;
      this.vy =1; 
      this.reset();
    }


    reset(){
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2; 
        this.vy = 0;
        while (this.vy === 0){
            this.vy = (Math.random()* 10) -5;
        }
        this.vx = (6- Math.abs(this.vy)) * this.direction;
    }

    ballMove(){
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }

render(svg) {

    let ballCircle = document.createElementNS(SVG_NS, "circle");
    
    ballCircle.setAttributeNS(null, "r", this.radius);
    ballCircle.setAttributeNS(null, "cx", this.x);
    ballCircle.setAttributeNS(null, "cy", this.y);
    ballCircle.setAttributeNS(null, "fill", "white"); 
    svg.appendChild(ballCircle);
    this.ballMove();
}

  }
