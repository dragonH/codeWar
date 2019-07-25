module.exports = function maxNumber(n){
  return parseInt(String(n).split('').sort((a, b) => b - a).join(''));
};