module.exports = function per(n, result = []) {
  if (n < 10) {
    return [];
  }
  n = String(n).split('').reduce((pre, cur) => pre * Number(cur), 1);
  result.push(n);
  return n > 9
    ? per(n, result)
    : result;
};