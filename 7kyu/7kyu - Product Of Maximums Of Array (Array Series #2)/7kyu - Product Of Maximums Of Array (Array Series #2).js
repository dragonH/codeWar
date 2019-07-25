module.exports = function maxProduct(numbers, size){
  return numbers.sort((a, b) => b - a)
                .slice(0, size)
                .reduce((pre, cur) => pre * cur, 1);
};