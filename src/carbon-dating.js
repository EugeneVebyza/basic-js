const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sample != "string") return false;

  sample = Number.parseFloat(sampleActivity);
  if (Number.isNaN(sample) || sample <= 0) return false;

  let res = -HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / sample);
  return res;
};
