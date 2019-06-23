const isPrime = (num) => {
  if (Number(num) === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(Number(num)); i += 1) {
    if (Number(num) % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = function pernicious(n){
  return n <= 2
    ? 'No pernicious numbers'
    : new Array(Math.floor(n))
            .fill(0)
            .map((el, index) => index + 1)
            .filter(num => isPrime(num.toString(2)
                                      .split('')
                                      .reduce((pre, cur) => pre + Number(cur), 0)));
};