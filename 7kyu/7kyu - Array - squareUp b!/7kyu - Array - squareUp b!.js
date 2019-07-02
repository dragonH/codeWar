module.exports = function squareUp(n){
  return new Array(n)
    .fill(new Array(n).fill('0'))
    .map((el, index) => el.map((el1, index1) => index1 <= index ? index1 + 1 : 0).reverse())
    .reduce((pre, cur) => pre.concat(cur), []);
}