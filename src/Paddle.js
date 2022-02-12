import Sprite from './Sprite.js'
import {canvas} from './index.js';


class Paddle extends Sprite {
  constructor(x = canvas.width / 2, y = canvas.height - 20, color = 'green', width = 75, height = 10) {
    super(x, y, width, height, color)
  }
  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
export default Paddle;