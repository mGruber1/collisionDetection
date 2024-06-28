export default class Square {
  constructor(gameFieldWidth, gameFieldHeight) {
    this.width = 2;
    this.height = 2;
    this.x = this.randomNum(800);
    this.y = this.randomNum(600);
    this.speed = 1.5;
    this.gameFieldWidth = gameFieldWidth;
    this.gameFieldHeight = gameFieldHeight;
  }
  randomNum(limit) {
    return Math.floor(Math.random() * (limit + 1));
  }

  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.height, this.width);
  }

  update() {
    let randomNum = this.randomNum(3);
    switch (randomNum) {
      case 0:
        // LEFT
        this.x = this.x - this.speed;
        break;
      case 1:
        // RIGHT
        this.x = this.x + this.speed;
        break;
      case 2:
        // DOWN
        this.y = this.y + this.speed;
        break;
      case 3:
        // UP
        this.y = this.y - this.speed;
        break;
    }
  }
}
