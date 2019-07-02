module.exports = function splitNumbers(n){
  let count = 0;
  let a = 0;
  let b = 0;
  n.toString(2).split('').reverse().forEach((el, index) => {
    if (el === '1' && count % 2) {
      b += Math.pow(2, index);
      count += 1;
    } else if (el === '1' && count % 2 === 0){
      a += Math.pow(2, index);
      count += 1;
    }
  });
  return [a, b];
}