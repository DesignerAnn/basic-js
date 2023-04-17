const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let result = 0;
  matrix.forEach(function (item){
    item.forEach(function (i){
      if(i === '^^') result++;
    })
  })
  return result;
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
