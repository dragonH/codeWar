module.exports = function largestPower(n){
  console.log(n)
  let counter = 0;
  while(1) {
    if (Math.pow(3, counter) >= n) {
      break;
    } else {
      counter ++;
    }
  }
  return counter - 1;
};