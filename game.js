/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.querySelector('#game');
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


const map = maps[2];
const mapRows = map.trim().split('\n');
const mapRowCols = mapRows.map(row => row.trim().split(''))

console.log(map);
console.log(mapRows);
console.log(mapRowCols);

function startGame() {

  // console.log(canvasSize);
  // console.log(elementsSize);

  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';

  for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
      game.fillText(emojis[mapRowCols[row-1][col-1]], elementsSize * col, elementsSize * row);
    }
  }


  // window.innerWidth
  // window.innerHeight

  // game.fillRect(0,0,100,100);
  // game.clearRect(0,0,50,50);
  // game.clearRect(50,50,100,100);

  // game.font = '25px Verdana';
  // game.fillStyle = "purple";
  // game.textAlign = 'start'
  // game.fillText('Platzi', 100, 100);
}