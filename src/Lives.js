import Sprite from './Sprite.js';
import {canvas} from './index.js';


class Lives extends Sprite {
  constructor(x = 0, y = 0, color = 'blue', font = '10px Helvetica') {
    super(x, y, 0, 0, color)
    this.font = font
    this.lives = 5
    this.color = color
  }
  // render method
  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Lives: + ${this.lives}`, canvas.width - 85, 20);
  }
  // lose life method
  loseLife(life = 1) {
    this.lives -= life;
  }
  // reset method
  reset() {
    this.lives = this.lives;
  }
}
export default Lives;