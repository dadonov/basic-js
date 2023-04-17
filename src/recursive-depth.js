const { NotImplementedError } = require("../extensions/index.js");

class DepthCalculator {
  calculateDepth(array) {
    let depth = 0;
    if (array instanceof Array) {
      for (let item in array) {
        depth = Math.max(depth, this.calculateDepth(array[item]));
      }
      depth++;
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator,
};
