const { NotImplementedError } = require("../extensions/index.js");

function repeater(string, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = "separator" in options ? String(options.separator) : "+";
  const addition = "addition" in options ? String(options.addition) : "";
  const additionSeparator = "additionSeparator" in options ? String(options.additionSeparator) : "|";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionString = (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);

  return (string + additionString + separator).repeat(repeatTimes).slice(0, -separator.length);
}

module.exports = {
  repeater,
};
