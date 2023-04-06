const { NotImplementedError } = require("../extensions/index.js");

function encodeLine(str) {
  let encodedStr = "";
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }
    encodedStr += `${count > 1 ? count : ""}${str[i]}`;
  }
  return encodedStr;
}

module.exports = {
  encodeLine,
};
