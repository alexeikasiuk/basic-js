const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  let b = arr.map((e) => (x = e.split('.').reverse()));
  let array = [];
  b.forEach((e) => {
    for (let i = 1; i <= e.length; i++) {
      array.push('.' + e.slice(0, i).join('.'));
    }
  });
  let obj = {};
  array.forEach((e) => {
    if (obj[e]) obj[e] += 1;
    else obj[e] = 1;
  });
  return obj;
}

module.exports = {
  getDNSStats,
};
