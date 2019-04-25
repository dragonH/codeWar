module.exports = function isPowerOfTwo(n){
  while(n >= 2) {
    n /= 2;
  }
  return n === 1 ? true
                 : false;
};