const { NotImplementedError } = require('../extensions/index.js');

function getSeason(date) {
  if (date) {
    if (date instanceof Date && !date.hasOwnProperty("toString")) {
      const month = date.getMonth();
      if (month >= 2 && month <= 4) return "spring";
      else if (month >= 5 && month <= 7) return "summer";
      else if (month >= 8 && month <= 10) return "autumn";
      else return "winter";
    }
    throw new Error("Invalid date!");
  }
  return "Unable to determine the time of year!";
}

module.exports = {
  getSeason,
};
