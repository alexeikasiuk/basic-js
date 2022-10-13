const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(x) {
  let arr = x.toString().split('');
  return arr.reduce(
    (sum, e, i) =>
      Math.max(sum, +[].concat(arr.slice(0, i), arr.slice(i + 1)).join('')),
    -Infinity
  );
}

module.exports = {
  deleteDigit,
};
