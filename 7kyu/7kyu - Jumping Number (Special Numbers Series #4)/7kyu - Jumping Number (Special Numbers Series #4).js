module.exports = function jumpingNumber(n){
  if (`${n}`.length <= 1) {
    return 'Jumping!!';
  }
  const result = [];
  `${n}`.split('').slice(1).reduce((pre, cur) => {
    result.push(Math.abs(Number(pre) - Number(cur)) === 1);
    return cur;
  }, `${n}`[0]);
  return result.includes(false)
    ? 'Not!!'
    : 'Jumping!!';
};