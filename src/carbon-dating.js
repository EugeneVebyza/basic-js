const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sample) {
  if (typeof sample != "string") return false;

  sample = Number.parseFloat(sample);
  if (Number.isNaN(sample) || sample <= 0) return false;

  let age = Math.ceil(
    Math.log(MODERN_ACTIVITY / Number.parseFloat(sample)) /
      (0.693 / HALF_LIFE_PERIOD)
  );
  return age > 0 ? Math.ceil(age) : false;
};
