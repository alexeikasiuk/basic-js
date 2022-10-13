const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(arr) {
  let matrix = [];
  for (let i = 0; i < arr.length; i++) {
    let row = [];
    for (let j = 0; j < arr[i].length; j++) {
      let count = 0;

      //top left
      if (arr[i - 1] && arr[i - 1][j - 1] && arr[i - 1][j - 1] == true) count++;

      //top
      if (arr[i - 1] && arr[i - 1][j] == true) count++;

      //top right
      if (arr[i - 1] && arr[i - 1][j + 1] && arr[i - 1][j + 1] == true) count++;

      //left
      if (arr[i][j - 1] && arr[i][j - 1] == true) count++;

      //right
      if (arr[i][j + 1] && arr[i][j + 1] == true) count++;

      //down left
      if (arr[i + 1] && arr[i + 1][j - 1] && arr[i + 1][j - 1] == true) count++;

      //down
      if (arr[i + 1] && arr[i + 1][j] == true) count++;

      //down right
      if (arr[i + 1] && arr[i + 1][j + 1] && arr[i + 1][j + 1] == true) count++;

      row.push(count);
    }
    matrix.push(row);
  }
  return matrix;
}

module.exports = {
  minesweeper,
};
