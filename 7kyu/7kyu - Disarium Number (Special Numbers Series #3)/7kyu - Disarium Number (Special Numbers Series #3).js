module.exports = function disariumNumber(n){
  return String(n)
    .split('')
    .map((el, index) => Math.pow(el, index + 1))
    .reduce((pre, cur) => pre + cur, 0) === n
      ? 'Disarium !!'
      : 'Not !!';
};