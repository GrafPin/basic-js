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
  str = String(str);
  add = String(options.addition);
  let one = [];
  let two = [];
  if (options.addition !== undefined) {
    if (options.additionRepeatTimes === undefined) { one.push(add); }
    else {
      for (let i = 0; i < options.additionRepeatTimes; i++) { one.push(add); }
    }
    if (options.additionSeparator !== undefined) {
      str = str + one.join(options.additionSeparator);
    }
    else { str = str + one.join("|"); }

    if (options.repeatTimes === undefined) { two.push(str); }
    else {
      for (let i = 0; i < options.repeatTimes; i++) { two.push(str); }
    }
    if (options.separator !== undefined) {
      return two.join(options.separator);
    }
    else { return two.join("+"); }
  }
  else {
    if (options.repeatTimes === undefined) { two.push(str); }
    else {
      for (let i = 0; i < options.repeatTimes; i++) { two.push(str); }
    }

    if (options.separator !== undefined) {
      return two.join(options.separator);
    }
    else { return two.join("+"); }
  }
}
module.exports = {
  repeater
};
