module.exports = function positiveSum(arr) {
  return arr.filter(el => el > 0)
            .reduce((pre, cur) => pre + cur, 0);
};