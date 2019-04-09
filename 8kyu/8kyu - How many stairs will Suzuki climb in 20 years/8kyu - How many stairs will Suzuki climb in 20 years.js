module.exports = function stairsIn20(s){
  return s.reduce((pre, cur) => {
    return pre + cur.reduce((pre2, cur2) => {
      return pre2 + cur2;
    }, 0);
  }, 0) * 20;
}