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
function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let validMembers = [];
  for(let i = 0; i < members.length; i++){
    if(typeof(members[i]) === 'string' && !Number(members[i]))
    validMembers.push(members[i].toUpperCase());
  }
  if(validMembers === []) return false;
  let result = [];
  validMembers.forEach((i) => {
    for(let k = 0; k < i.length; k++){
      if(i[k]!== ' ') {
        result.push(i[k]);
        k = i.length;
      }
    }
  });
  result = result.sort();
  return result.join('');
}

module.exports = {
  createDreamTeam
};
