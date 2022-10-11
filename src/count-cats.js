const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (!Array.isArray(matrix)) return false;
  if (arguments.length == 0) return false;
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    let box = matrix[i];
    for (let j = 0; j < box.length; j++) {
      if (box[j] == '^^') count++;
    }
  }
  return count;
}

module.exports = {
  countCats,
};
