module.exports = function amIWilson(p) {
  let sum = 1;
  for (let i = 1; i <= p - 1; i += 1) {
    sum *= i;
  }
  return ((sum + 1) % Math.pow(p, 2)) === 0
    ? true
    : false;
};