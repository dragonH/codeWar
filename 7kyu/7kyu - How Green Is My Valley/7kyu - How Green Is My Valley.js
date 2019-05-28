module.exports = function makeValley(arr) {
  const left = [];
  const right = [];
  arr.sort((a, b) => b - a)
     .forEach((el, index) =>  index % 2 === 0
       ? left.push(el)
       : right.push(el));
  return left.concat(right.reverse());
};