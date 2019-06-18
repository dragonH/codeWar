module.exports = function partlist(arr) {
  return arr.map((el, index) => [arr.slice(0, index + 1).join(' '), arr.slice(-(arr.length - (index + 1))).join(' ')])
        .slice(0, arr.length - 1);
};