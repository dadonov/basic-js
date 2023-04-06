const { NotImplementedError } = require('../extensions/index.js');


function createDreamTeam(members){
  let teamName = [];

  if(Array.isArray(members)){
    for(let name of members){
      if(typeof(name) === 'string'){
        let firstLetter = name.trimStart()[0]
         teamName.push(firstLetter.toUpperCase())
        }
      }
      return teamName.sort().join("")
  }
  return false;
}

module.exports = {
  createDreamTeam
};
