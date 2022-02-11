import Ball from './Ball.js'
import Bricks from './Bricks.js'
import Paddle from './Paddle.js'
import Score from './Score.js'
import Background from './Background.js'
import Lives from './Lives.js'


// variables
export const canvas = document.getElementById('myCanvas');
export const ctx = canvas.getContext('2d');
const background = new Background();
const bricks = new Bricks();
const ball = new Ball();
const paddle = new Paddle()
const score = new Score();
const lives = new Lives();
// events
let rightPressed = false;
let leftPressed = false;

//----------------------------------------------------------------------
// event listeners

const keyDownHandler = (e) => {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

const keyUpHandler = (e) => {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

const mouseMoveHandler = (e) => {
  // make the paddle follow the position of the mouse cursor
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.x = relativeX - paddle.width / 2;
  }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);


// detect brick collisions
function collisionDetection() {
  // loop through brick rows & columns
  // console.log("collision Detection");
  for (let c = 0; c < bricks.brickColumnCount; c += 1) {
    for (let r = 0; r < bricks.brickRowCount; r += 1) {
      const b = bricks.bricks[c][r];
      // track & update the brick status
      if (b.status === true) {
        // make sure the center of the ball is inside the coordinates of one of our bricks
        if (ball.x > b.x && ball.x < b.x + b.width && ball.y > b.y && ball.y < b.y + b.height) {
          ball.dy = -ball.dy;
          b.status = 0;
          score.score += 1;
          if (score.score === bricks.brickRowCount * bricks.brickColumnCount) {
            alert('You win, Congratulations!');
            document.location.reload();
          }
        }
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.render(ctx);
  bricks.render(ctx);
  ball.render(ctx);
  paddle.render(ctx);
  score.render(ctx);
  lives.render(ctx);
  collisionDetection();

  // bounce off the walls
  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx = -ball.dx;
  }
  // create collision between ball and paddle
  if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ball.radius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
    // if ball misses paddle, remove lives until game over
    } else {
      lives.lives -= 1;
      if (!lives.lives) {
        alert('GAME OVER');
        document.location.reload();
        requestAnimationFrame(draw);
      } else {
        ball.x = canvas.width / 2;
        ball.y = canvas.height - 30;
        ball.dx = 2;
        ball.dy = -2;
        paddle.x = (canvas.width - paddle.width) / 2;
      }
    }
  }

  // move the paddle
  if (rightPressed && paddle.x < canvas.width - paddle.width) {
    paddle.x += 7;
  } else if (leftPressed && paddle.x > 0) {
    paddle.x += -7;
  }
  ball.x += ball.dx;
  ball.y += ball.dy;
  requestAnimationFrame(draw);
  }


draw();
collisionDetection();
