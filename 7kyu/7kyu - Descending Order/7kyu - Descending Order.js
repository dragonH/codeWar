module.exports = function descendingOrder(n){
  return parseInt(String(n).split('').sort((a, b) => a > b ? -1 : 1).join(''));
};