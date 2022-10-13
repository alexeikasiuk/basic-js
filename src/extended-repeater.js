const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let str1 = `${str}`;
  let str2 = 'addition' in options ? `${options.addition}` : '';
  let sep1 = 'separator' in options ? `${options.separator}` : '+';
  let sep2 =
    'additionSeparator' in options ? `${options.additionSeparator}` : '|';
  let t1 = isNaN(options.repeatTimes) ? 1 : +options.repeatTimes;
  let t2 = isNaN(options.additionRepeatTimes) ? 1 : options.additionRepeatTimes;

  let str22 = '';
  for (let i = 1; i <= t2; i++) {
    if (i == 1) str22 = str2;
    else str22 += sep2 + str2;
  }
  let res = '';
  for (let i = 1; i <= t1; i++) {
    if (i == 1) res += str1 + str22;
    else res += sep1 + str1 + str22;
  }
  return res;
}

module.exports = {
  repeater,
};
