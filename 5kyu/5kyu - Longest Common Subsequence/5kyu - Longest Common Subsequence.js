module.exports = function LCS(x, y) {
  const result = [];
  for (let i = 0; i < y.length; i += 1) {
    const position = x.indexOf(y[i]);
    if (position > -1) {
      result.push(y[i]);
      x = x.slice(position + 1);
    }
  }
  return result.join('');
};