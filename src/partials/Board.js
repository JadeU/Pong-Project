import { SVG_NS } from "../settings";

export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render(svg) {
    //...
    let boardSvg = document.createElementNS(SVG_NS, "rect");

    boardSvg.setAttributeNS(null, "x", 0);
    boardSvg.setAttributeNS(null, "y", 0);
    boardSvg.setAttributeNS(null, "width", this.width);
    boardSvg.setAttributeNS(null, "height", this.height);
    boardSvg.setAttributeNS(null, "fill", "#353535");
    svg.appendChild(boardSvg);

    let lineSvg = document.createElementNS(SVG_NS, "line");

    lineSvg.setAttributeNS(null, "x1", 256);
    lineSvg.setAttributeNS(null, "x2", 256);
    lineSvg.setAttributeNS(null, "y1", 0);
    lineSvg.setAttributeNS(null, "y2", 256);
    lineSvg.setAttributeNS(null, "stroke", "#ffffff");
    lineSvg.setAttributeNS(null, "stroke-dasharray", "10 15");
    svg.appendChild(lineSvg);
  }
}
