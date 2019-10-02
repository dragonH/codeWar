module.exports = function sumOrProduct(array, n) {
  array.sort((a, b) => a - b);
  const sum = array.slice(-n).reduce((pre, cur) => pre + cur, 0);
  const product = array.slice(0, n).reduce((pre, cur) => pre * cur, 1);
  return sum === product
    ? 'same'
    : sum > product
      ? 'sum'
      : 'product';
}