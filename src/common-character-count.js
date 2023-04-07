const { NotImplementedError } = require("../extensions/index.js");

function getCommonCharacterCount(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      count++;
      arr2.splice(arr2.indexOf(arr1[i]), 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};