const { NotImplementedError } = require("../extensions/index.js");

function renameFiles(names) {
  let uniqueNames = [...new Set(names)];
  for (let i = 0; i < uniqueNames.length; i++) {
    let count = 0;
    for (let j = 0; j < names.length; j++) {
      if (uniqueNames[i] === names[j]) {
        count++;
        if (count > 1) {
          names[j] += `(${count - 1})`;
        }
      }
    }
  }
  return names;
}

module.exports = {
  renameFiles,
};
