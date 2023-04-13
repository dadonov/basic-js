const { NotImplementedError } = require("../extensions/index.js");

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

module.exports = {
  transform,
};
