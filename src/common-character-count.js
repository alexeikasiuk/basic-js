const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = {},
    sum1 = {},
    sum2 = {},
    count = 0;

  s1.split('').forEach((e) => {
    if (sum1[e]) sum1[e] += 1;
    else sum1[e] = 1;
  });
  s2.split('').forEach((e) => {
    if (sum2[e]) sum2[e] += 1;
    else sum2[e] = 1;
  });
  for (key in sum1) {
    if (key in sum2) sum[key] = Math.min(sum1[key], sum2[key]);
  }
  for (key in sum2) {
    if (key in sum1) sum[key] = Math.min(sum1[key], sum2[key]);
  }
  for (key in sum) {
    count += sum[key];
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
