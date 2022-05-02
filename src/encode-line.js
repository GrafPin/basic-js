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
  let arr = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    count = 1;
    while (str[i] == str[i + 1] && i < str.length - 1) {
      count++;
      i++;
    }

    if (count > 1) {
      arr.push(count);
      arr.push(str[i]);
    }
    else {
      arr.push(str[i]);
    }
  }
  return arr.join("");
}


module.exports = {
  encodeLine
};
