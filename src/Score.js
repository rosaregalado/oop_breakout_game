import Sprite from './Sprite.js';

class Score extends Sprite {
  constructor(x = 0, y = 0, color = 'blue', font = '10px Helvetica') {
    super(x, y, 0, 0, color)
    this.font = font
    this.score = 0

  }
  // render method
  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Score:  ${this.score}`, 8, 20);
  }
  // update points method
  update(points) {
    this.score += points;
  }
  // reset score to zero
  reset() {
    this.score = 0
  }
}
export default Score;