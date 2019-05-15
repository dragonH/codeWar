module.exports = function sumR(x) {
  return x.reduce((pre, cur) => pre + cur, 0);
};