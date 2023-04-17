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
  const month = date.getMonth();
  console.log(date, month);
  switch (month) {
    case 0: case 1: case 2: case 01: case 02: return 'winter';
      break;
    case 3: case 4: case 5: case 03: case 04: case 05: return 'spring';
      break;
    case 6: case 7: case 8: case 06: case 07: case 08: return 'summer';
      break;
    case 9: case 10: case 11: case 09: return 'autumn';
      break;
    default: return false;
  }
}

module.exports = {
  getSeason
};
