module.exports = function gps(s, x) {
  if (x.filter(el => el > 0).length === 0) {
    return 0;
  }
  const result = [];
  for (let i = 0; i < x.length; i += 1) {
    if (i + 1 <= x.length - 1) {
      result.push(Number(Math.floor(3600 * (x[i + 1] - x[i]) / s)));
    }
  }
  return Math.max(...result);
};