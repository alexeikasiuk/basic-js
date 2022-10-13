const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {
  if (!Array.isArray(array))
    throw new Error("'arr' parameter must be an instance of the Array!");
  if (Array.isArray(array) && array.length == 0) return array;
  let arr = [].concat(array);

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
      switch (arr[i]) {
        case '--discard-next':
          if (arr[i + 1]) {
            arr[i + 1] = false;
          }
          arr[i] = false;
          break;
        case '--discard-prev':
          if (arr[i - 1]) {
            arr[i - 1] = false;
          }
          arr[i] = false;
          break;
        case '--double-next':
          arr[i] = arr[i + 1] ? arr[i + 1] : false;
          break;
        case '--double-prev':
          arr[i] = arr[i - 1] ? arr[i - 1] : false;
          break;
      }
    }
  }
  return arr.filter((e) => e != false);
}

module.exports = {
  transform,
};
