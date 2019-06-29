module.exports = function sumTwoSmallestNumbers(numbers) {  
  return numbers
    .sort((a, b) => a - b)
    .slice(0,2)
    .reduce((pre, cur) => pre + cur, 0);
};