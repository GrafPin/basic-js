const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = [];
  let sum = 0;
  arr = ('' + n).split('');
  arr = arr.map(Number);
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  if (String(sum).length == 1) { return sum }
  else { return getSumOfDigits(sum) }
}

module.exports = {
  getSumOfDigits
};
