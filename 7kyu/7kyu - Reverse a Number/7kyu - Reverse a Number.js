module.exports = function reverseNumber(n) {
  return Number(String(Math.abs(n)).split('').reverse().join('')) * Math.sign(n);
};