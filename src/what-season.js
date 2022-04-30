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
  let season = ["winter", "spring", "summer", "autumn"];
  let error = new Error("Invalid date!");
  if (typeof date === "undefined") { return "Unable to determine the time of year!"; }
  else if (date instanceof Date === false || Object.keys(date).length > 0) { throw error;}
  else {
    let month = date.getMonth();
    if(month === 11 || month === 0 || month === 1) {return season[0];}
    if(month === 2 || month === 3 || month === 4) {return season[1];}
    if(month === 5 || month === 6 || month === 7) {return season[2];}
    if(month === 8 || month === 9 || month === 10) {return season[3];}
  }
}

module.exports = {
  getSeason
};
