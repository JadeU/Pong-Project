import { SVG_NS } from "../settings";

export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2; 

    }

render(svg) {

    let ballCircle = document.createElementNS(SVG_NS, "circle");
    
    ballCircle.setAttributeNS(null, "r", this.radius);
    ballCircle.setAttributeNS(null, "cx", this.x);
    ballCircle.setAttributeNS(null, "cy", this.y);
    ballCircle.setAttributeNS(null, "fill", "white"); 

    svg.appendChild(ballCircle);
}

  }
