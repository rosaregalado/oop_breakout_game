import Brick from './Brick.js'

class Bricks {
  constructor() {
    this.bricks = [];
    this.brickColumnCount = 7;
    this.brickRowCount = 4;
    this.create_bricks()
  }
  // create bricks method
  create_bricks() {
    for (let c = 0; c < this.brickColumnCount; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.brickRowCount; r += 1) {
        const brickX = (c * (45 + 20)) + 20;
        const brickY = (r * (20 + 20)) + 30;
        if (c % 2 === 0) {
          this.bricks[c][r] = new Brick(brickX, brickY, 50, 20, 'red');
        } else {
          this.bricks[c][r] = new Brick(brickX, brickY, 50, 20, 'orange');
        }
      }
    }
  }
  // render method
  render(ctx) {
    for (let c = 0; c < this.brickColumnCount; c += 1) {
      for (let r = 0; r < this.brickRowCount; r += 1) {
        if (this.bricks[c][r].status === true) {
          const brick = this.bricks[c][r]
          brick.render(ctx);
        }
      }
    }
  }
}
export default Bricks;