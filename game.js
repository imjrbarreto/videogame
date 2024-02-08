/**
 * @type {HTMLCanvasElement}
 */

window.addEventListener('keydown', moveByKeys);

const canvas = document.querySelector('#game');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const game = canvas.getContext('2d');


let canvasSize;
let elementsSize;

const playerPosition = {
  x: undefined,
  y: undefined
}

const giftPosition = {
  x: undefined,
  y: undefined
}

// Start of the game in windows:
window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);


function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

  elementsSize = canvasSize / 10;

  startGame();
}


const map = maps[0];
const mapRows = map.trim().split('\n');
const mapRowCols = mapRows.map(row => row.trim().split(''));


function startGame() {
  game.font = `${elementsSize*0.85}px Verdana`;
  game.textAlign = 'end';

  game.clearRect(0,0, canvasSize, canvasSize);
  mapRowCols.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementsSize*(colI + 1.1);
      const posY = elementsSize*(rowI + 0.8);
      game.fillText(emoji, posX, posY);
      if(col == 'O') {
        if(!playerPosition.x && !playerPosition.y) {
          playerPosition.x = posX;
          playerPosition.y = posY;
          console.log(playerPosition);
        }
      } else if(col == 'I') {
        giftPosition.x = posX;
        giftPosition.y = posY;
      }
    });
  });

  movePlayer();
}

function movePlayer() {

  const giftCollisionX = playerPosition.x.toFixed(2) == giftPosition.x.toFixed(2);
  const giftCollisionY = playerPosition.y.toFixed(2) == giftPosition.y.toFixed(2);
  const giftCollision = giftCollisionX && giftCollisionY;

  if (giftCollision) {
    console.log('Subiste de nivel')
  }
  game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveByKeys(event) {
  if (event.key == 'ArrowUp') moveUp();
  else if (event.key == 'ArrowLeft') moveLeft();
  else if (event.key == 'ArrowLeft') moveLeft();
  else if (event.key == 'ArrowRight') moveRight();
  else if (event.key == 'ArrowDown') moveDown();
}

function moveUp() {
  console.log('Move Up')
  if((playerPosition.y - elementsSize) < 0) {
    console.log('OUT')
  } else {
    playerPosition.y -= elementsSize;
    startGame()
  }
}
function moveLeft() {
  console.log('Move Left')
  if((playerPosition.x - elementsSize) < elementsSize) {
    console.log('OUT')
  } else {
    playerPosition.x -= elementsSize;
    startGame()
  }
}
function moveRight() {
  console.log('Move Right')
  if((playerPosition.x + elementsSize) > (canvasSize+elementsSize)) {
    console.log('OUT')
  } else {
    playerPosition.x += elementsSize;
    startGame()
  }
}
function moveDown() {
  console.log('Move Down')
  if((playerPosition.y + elementsSize) > canvasSize) {
    console.log('OUT')
  } else {
    playerPosition.y += elementsSize;
    startGame()
  }
}