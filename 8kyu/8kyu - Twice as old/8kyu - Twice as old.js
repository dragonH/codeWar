module.exports = function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs((2 * (dadYearsOld - sonYearsOld)) - dadYearsOld);
};