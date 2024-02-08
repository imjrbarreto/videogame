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
  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';

  mapRowCols.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementsSize*(colI + 1);
      const posY = elementsSize*(rowI + 1);
      game.fillText(emoji, posX, posY);
    });
  });
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
}
function moveLeft() {
  console.log('Move Left')
}
function moveRight() {
  console.log('Move Right')
}
function moveDown() {
  console.log('Move Down')
}