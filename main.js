import Ball from './Ball.js'
import Bricks from './Bricks.js'
import Sprite from './Sprite.js';




const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const ball = new Ball();
const bricks = new Bricks();
const sprite = new Sprite();
sprite.render(ctx);




