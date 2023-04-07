const { NotImplementedError } = require("../extensions/index.js");

function isMAC48Address(str) {
  let regExp = new RegExp("^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$");
  return regExp.test(str);
}

// ! Initial solution which can be hacked in certain conditions
// return str.split("-").filter((item) => parseInt(item, 16) <= 255).length === 6

module.exports = {
  isMAC48Address,
};
