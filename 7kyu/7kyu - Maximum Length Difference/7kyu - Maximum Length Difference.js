module.exports = function mxdiflg(a1, a2) {
  const result1 = Math.abs(Math.min(...a1.map(str => str.length)) - Math.max(...a2.map(str => str.length)));
  const result2 = Math.abs(Math.max(...a1.map(str => str.length)) - Math.min(...a2.map(str => str.length)));
  return a1.length && a2.length
   ? result1 > result2
     ? result1
     : result2
   : -1;
};