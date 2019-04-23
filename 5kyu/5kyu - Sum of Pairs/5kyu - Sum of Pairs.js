module.exports = function sum_pairs(ints, s) {
  const result = {};
  for(let i = 0; i <= ints.length; i += 1) {
    const target = s - ints[i];
    if (result[target]) {
      return [target, ints[i]];
    }
    result[ints[i]] = true;
  }
};