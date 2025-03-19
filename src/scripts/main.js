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

    const info = document.querySelector('.message.message-start');

    info.classList.add('hidden');
  },
  { once: true },
);

// const restart = document.querySelector('.restart');

// restart.addEventListener('click', () => {
//   game.start();
//   game.score = 0;
//   updateScore(0);
// });

document.addEventListener('keydown', (arrow) => {
  const copiedBoard = [...game.board];

  switch (arrow.key) {
    case 'ArrowUp':
      game.moveUp();

      if (game.checkIfMoved(copiedBoard)) {
        game.getNewCell();
        updateSiteBoard();
        updateScore(game.getScore());
      }
      break;
    case 'ArrowDown':
      game.moveDown();

      if (game.checkIfMoved(copiedBoard)) {
        game.getNewCell();
        updateSiteBoard();
        updateScore(game.getScore());
      }
      break;
    case 'ArrowLeft':
      game.moveLeft();

      if (game.checkIfMoved(copiedBoard)) {
        game.getNewCell();
        updateSiteBoard();
        updateScore(game.getScore());
      }
      break;
    case 'ArrowRight':
      game.moveRight();

      if (game.checkIfMoved(copiedBoard)) {
        game.getNewCell();
        updateSiteBoard();
        updateScore(game.getScore());
      }
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

function updateScore(score) {
  const gameScore = document.querySelector('.game-score');

  gameScore.textContent = score;
}
