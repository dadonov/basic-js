const { NotImplementedError } = require('../extensions/index.js');

function getSumOfDigits(n) {
  if (n < 10) {
    return n;
  }
  return getSumOfDigits((n % 10) + getSumOfDigits(Math.floor(n / 10)));
}

module.exports = {
  getSumOfDigits,
};
