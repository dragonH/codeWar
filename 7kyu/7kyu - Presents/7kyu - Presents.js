module.exports = function presents(a){
  return a.map((el, index) => a.indexOf(index + 1) + 1);
};