const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split(''),
    res = '',
    letter = arr[0],
    count = 1;
  for (let i = 1; i < arr.length; i++) {
    let curLetter = arr[i];
    if (letter === curLetter) {
      count++;
    } else {
      res += (count === 1 ? '' : count) + letter;
      letter = curLetter;
      count = 1;
    }
    if (i == arr.length - 1) {
      res += (count === 1 ? '' : count) + letter;
    }
  }
  return res;
}

module.exports = {
  encodeLine,
};
