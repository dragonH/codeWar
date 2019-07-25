module.exports = function minSum(arr) {
  let arr1 = arr.sort((a, b) => a - b).slice(0, (arr.length / 2));
  let arr2 = arr.sort((a, b) => a  - b).slice(arr.length / 2).reverse();
  return arr1.reduce((pre, cur, index) => pre + cur * arr2[index], 0);
};