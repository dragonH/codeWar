module.exports = function step(g, m, n) {
  for (let num = m; num <= n - g; num += 1) {
    if (isPrime(num) && isPrime(num + g)) {
      return [num, num + g];
    }
  }
  return null;
};

function isPrime(num) {
  const limit = Math.sqrt(num) | 0;
  for (var i = 2; i <= limit && num % i; i += 1);
  return i > limit;
};