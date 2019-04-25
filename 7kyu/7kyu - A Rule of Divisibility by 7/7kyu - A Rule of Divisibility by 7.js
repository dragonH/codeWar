module.exports = function seven(m) {
  let counter = 0;
  while(m > 99) {
    const temp = m.toString();
    const toMinus = Number(temp[temp.length - 1]) * 2;
    m = Math.floor(m / 10) - toMinus;
    counter ++;
  }
  return [m, counter];
};