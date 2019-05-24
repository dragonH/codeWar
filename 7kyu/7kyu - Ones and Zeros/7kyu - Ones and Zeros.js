module.exports = binaryArrayToNumber = arr => {
  return arr.reverse().reduce((pre, cur, index) => cur 
    ? pre + Math.pow(2, index)
    : pre + 0, 0);
};