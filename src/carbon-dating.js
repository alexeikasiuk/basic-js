const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sample) {
  // no arguments
  if (arguments.length == 0) return false;

  //not a string
  if (typeof sample != 'string') return false;

  let num = +sample;

  //after parsing not a number or < 0
  if (isNaN(num) || num <= 0) return false;

  let res = Math.ceil(
    Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD)
  );

  //inadequate values
  return res < 0 ? false : res;
}

module.exports = {
  dateSample,
};
