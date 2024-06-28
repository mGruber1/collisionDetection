"use strict";

import Square from "./square.js";

let gameField = document.getElementById("gameField");
let ctx = gameField.getContext("2d");

const CELLCOUNT = 1000;
const GAMEFIELDWIDTH = 800;
const GAMEFIELDHEIGHT = 600;
var collisions = [];

var squares = [];
for (let i = 0; i < CELLCOUNT; i++) {
  squares[i] = new Square(GAMEFIELDWIDTH, GAMEFIELDHEIGHT);
  squares[i].draw(ctx);
}

const animateSquares = (ctx) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (let square of squares) {
    square.update();
    square.draw(ctx);
  }
  requestAnimationFrame(() => {
    animateSquares(ctx);
    checkCollision(squares);
  });
};

export default function rectangleOverlap(rectA, rectB) {
  return (
    rectA.x + rectA.width >= rectB.x &&
    rectA.x <= rectB.x + rectB.width &&
    rectA.y + rectA.height >= rectB.y &&
    rectA.y <= rectB.y + rectB.height
  );
}

export const checkCollision = (squares) => {
  const length = squares.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (rectangleOverlap(squares[i], squares[j])) {
        collisions.push([[i, j]]);
      }
    }
  }
};

animateSquares(ctx);
