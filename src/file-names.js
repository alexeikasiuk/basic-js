const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arr) {
  let u = new Set(),
    obj = {},
    res = [];
  arr.forEach((e) => {
    if (!u.has(e)) {
      u.add(e);
      obj[e] = 1;
    } else {
      let s = e + '(' + obj[e] + ')';
      u.add(s);
      obj[s] = 1;
      obj[e] += 1;
    }
  });
  for (item of u) {
    res.push(item);
  }
  return res;
}

module.exports = {
  renameFiles,
};
