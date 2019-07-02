module.exports = function tailSwap(arr) {
  let newArr = arr.map(el => el.split(':')).reduce((pre, cur) => pre.concat(cur), []);
  return [newArr[0].concat(`:${newArr[3]}`), newArr[2].concat(`:${newArr[1]}`)];
};