module.exports = function findSum(n) {
  return new Array(n).fill(0).map((n, index) => {
    return (index + 1) % 3 === 0 || (index + 1) % 5 === 0
      ? index + 1
      : 0;
  }).reduce((pre, cur) => pre + cur, 0);
};