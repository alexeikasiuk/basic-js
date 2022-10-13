const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length == 0) return 'Unable to determine the time of year!';
  if (date.toString() == new Date()) throw new Error('Invalid date!');
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  let m = date.getMonth();
  if (isNaN(m)) throw new Error('Invalid date!');
  return (m =
    m < 2
      ? 'winter'
      : m < 5
      ? 'spring'
      : m < 8
      ? 'summer'
      : m < 11
      ? 'autumn'
      : 'winter');
}

module.exports = {
  getSeason,
};
