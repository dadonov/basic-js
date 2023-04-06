const { NotImplementedError } = require("../extensions/index.js");
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sample) {
  const finalActivity = Number(sample)

  if (typeof sample === "string" && finalActivity > 0 && finalActivity < MODERN_ACTIVITY) {
    const K = Math.LN2 / HALF_LIFE_PERIOD;
    const activityRatio = MODERN_ACTIVITY / finalActivity;
    const age = Math.log(activityRatio) / K;

    return Math.ceil(age);
  }
  return false;
}

module.exports = {
  dateSample,
};
