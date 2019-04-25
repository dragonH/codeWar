module.exports = function nbYear(p0, percent, aug, p) {
  let counter = 1;
  let sum = p0;
  for(let i = 1;; i += 1) {
    sum += sum * (percent/100) + aug
    counter = i;
    if (sum >= p) {
      return counter;
    }
  }
};