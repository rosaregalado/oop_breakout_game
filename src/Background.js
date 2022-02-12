import Sprite from './Sprite.js'
import {canvas} from './index.js';



class Background extends Sprite {
  constructor(x, y, width = canvas.width, height = canvas.height, color = 'pink') {
    super(x = 0, y = 0, width, height, color)
  }
} 
export default Background;