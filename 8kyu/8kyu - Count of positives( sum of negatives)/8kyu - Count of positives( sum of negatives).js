module.exports = function countPositivesSumNegatives(input) {
  if (input !== null && input.length) {
    return [input.filter(el => el > 0).length,
            input.filter(el => el < 0).reduce((pre, cur) => pre + cur, 0)];  
  }
  return [];
};