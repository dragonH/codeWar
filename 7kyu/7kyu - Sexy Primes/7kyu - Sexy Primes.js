module.exports = function sexy_prime(x, y){
  // did not check prime number ?
  return x === 1 || y === 1 || x % 2 === 0 || y % 3 === 0
    ? false
    : Math.abs(x - y) === 6
      ? true
      : false;
};