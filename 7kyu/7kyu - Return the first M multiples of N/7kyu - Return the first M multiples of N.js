module.exports = function multiples(m, n){
  return new Array(m).fill(0).map((el, index) => n * (index + 1));
};