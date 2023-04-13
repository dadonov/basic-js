// const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 */

function transform(array) {
  if (Array.isArray(array)) {
    const discardPrev = "--discard-prev";
    const discardNext = "--discard-next";
    const doublePrev = "--double-prev";
    const doubleNext = "--double-next";
    const transformedArr = [...array];

    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] == "string") {
        switch (array[i]) {
          case discardPrev:
            if (i !== 0) {
              transformedArr.splice(i - 1, 2);
            } else {
              transformedArr.splice(i, 1);
            }
            break;

          case discardNext:
            if (i !== array.length - 1) {
              transformedArr.splice(i, 2);
            } else {
              transformedArr.splice(i, 1);
            }
            break;

          case doublePrev:
            if (i !== 0) {
              transformedArr.splice(i - 1, 2, array[i - 1], array[i - 1]);
            } else {
              transformedArr.splice(i, 1);
            }
            break;

          case doubleNext:
            if (i !== array.length - 1) {
              transformedArr.splice(i, 2, array[i + 1], array[i + 1]);
            } else {
              transformedArr.splice(i, 1);
            }
        }
      }
    }
    return transformedArr;
  }
  throw new Error("'arr' parameter must be an instance of the Array!");
}
console.log(transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5]));
console.log(transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5]));

const cases = {
  doubleDiscarded: {
    input: [1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5],
    output: [1, 2, 3, 4, 5],
  },
  discardDiscarded: {
    input: [1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5],
    output: [1, 2, 3, 4, 5],
  },
};
module.exports = {
  transform,
};

