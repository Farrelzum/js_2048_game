'use strict';

/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */
class Game {
  /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialized with the provided
   * initial state.
   */
  board;

  constructor(initialState) {
    this.board = initialState || [
      [0, 2, 0, 2],
      [0, 0, 0, 0],
      [4, 0, 0, 0],
      [0, 64, 0, 0],
    ];

    // eslint-disable-next-line no-console
    console.log(initialState);
  }

  moveLeft() {}
  moveRight() {}
  moveUp() {}
  moveDown() {}

  /**
   * @returns {number}
   */
  getScore() {}

  /**
   * @returns {number[][]}
   */
  getState() {}

  /**
   * Returns the current game status.
   *
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   *
   * `idle` - the game has not started yet (the initial state);
   * `playing` - the game is in progress;
   * `win` - the game is won;
   * `lose` - the game is lost
   */
  getStatus() {}

  /**
   * Starts the game.
   */
  start() {
    const buttonStart = document.querySelector('.button.start');

    buttonStart.addEventListener('click', () => {
      const fieldCell = document.querySelectorAll('.field-cell');
      let cellNumber = 0;

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (this.board[i][j] > 0) {
            fieldCell[cellNumber].textContent = this.board[i][j];

            fieldCell[cellNumber].classList.add(
              `field-cell--${this.board[i][j]}`,
            );
          }
          cellNumber++;
        }
      }
    });
  }

  /**
   * Resets the game.
   */
  restart() {}

  // Add your own methods here
}

module.exports = Game;
