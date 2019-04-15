module.exports = reverseSeq = n => {
  const arr = [];
  for (let i = n; i > 0; i -= 1) {
    arr.push(i);
  }
  return arr;
};