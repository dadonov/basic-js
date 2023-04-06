const { NotImplementedError } = require('../extensions/index.js');


function countCats(matrix) {
let catsQty = 0;

for(let i = 0; i < matrix.length; i++){
  for(let j = 0; j < matrix[i].length; j++){
    if(matrix[i][j] === '^^'){
      catsQty += 1
    }
  }
}
return catsQty
}

module.exports = {
  countCats
};
