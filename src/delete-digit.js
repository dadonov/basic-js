const { NotImplementedError } = require("../extensions/index.js");

function deleteDigit(num) {
  let numToStr = num.toString().split("");
  let variants = [numToStr.slice(0, -1).join("")];

  for (let i = 0; i < numToStr.length; i++) {
    let current = "";
    for (let j = 0; j < numToStr.length; j++) {
      if (i !== j) {
        current += numToStr[j];
        if (j === numToStr.length - 1) {
          variants.push(current);
        }
      }
    }
  }
  return Math.max(...variants);
}

module.exports = {
  deleteDigit,
};
