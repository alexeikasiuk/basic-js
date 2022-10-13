const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let isZero = new Map();
  return matrix.reduce((sum, e) => {
    return (
      sum +
      e.reduce((s, el, i) => {
        if (isZero.get(i)) return s;
        if (el == 0) isZero.set(i, true);
        return s + el;
      }, 0)
    );
  }, 0);
}

module.exports = {
  getMatrixElementsSum,
};
