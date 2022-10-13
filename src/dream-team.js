const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  return arr
    .reduce((str, e) => {
      if (typeof e != 'string') return str;

      let ch = e.trim().slice(0, 1);
      let code = ch.charCodeAt();

      ch =
        (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
          ? ch.toUpperCase()
          : '';
      return str + ch;
    }, '')
    .split('')
    .sort()
    .join('');
}

module.exports = {
  createDreamTeam,
};
