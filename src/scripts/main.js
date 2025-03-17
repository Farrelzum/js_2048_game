'use strict';

const Game = require('../modules/Game.class');
const game = new Game();

const startButton = document.querySelector('.button.start');
const fieldCell = document.querySelectorAll('.field-cell');

startButton.addEventListener(
  'click',
  () => {
    game.board = game.start();

    for (let i = 0; i < 16; i++) {
      const fieldValue = game.board[i];
      const currentCell = fieldCell[i];

      if (fieldValue !== 0) {
        currentCell.textContent = fieldValue;
        currentCell.classList.add(`field-cell--${fieldValue}`);
      }
    }

    startButton.classList.remove('start');
    startButton.textContent = 'Restart';
    startButton.classList.add('restart');
  },
  { once: true },
);

document.addEventListener('keydown', (arrow) => {
  switch (arrow.key) {
    case 'ArrowUp':
      game.moveUp();
      game.getNewCell();
      updateSiteBoard();
      break;
    case 'ArrowDown':
      game.moveDown();
      game.getNewCell();
      updateSiteBoard();
      break;
    case 'ArrowLeft':
      game.moveLeft();
      game.getNewCell();
      updateSiteBoard();
      break;
    case 'ArrowRight':
      game.moveRight();
      game.getNewCell();
      updateSiteBoard();
      break;
  }
});

function updateSiteBoard() {
  for (let i = 0; i < 16; i++) {
    const fieldValue = game.board[i];
    const currentCell = fieldCell[i];

    fieldCell[i].className = '';
    currentCell.classList.add(`field-cell`);

    if (fieldValue !== 0) {
      currentCell.textContent = fieldValue;
      currentCell.classList.add(`field-cell--${fieldValue}`);
    } else {
      currentCell.textContent = '';
    }
  }
}
