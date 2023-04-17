const { NotImplementedError } = require("../extensions/index.js");

function sortByHeight(arr) {
  const positionsOfOne = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      positionsOfOne.push(i);
    }
  }
  const sortedAndFiltered = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  for (let i = 0; i < positionsOfOne.length; i++) {
    sortedAndFiltered.splice(positionsOfOne[i], 0, -1);
  }
  return sortedAndFiltered;
}

module.exports = {
  sortByHeight,
};
