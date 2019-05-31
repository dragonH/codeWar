module.exports = function newAvg(arr, newavg) {
  if (arr.length === 0) {
    return newavg;
  }
  const result = Math.round(Math.ceil(newavg * (arr.length + 1)) - arr.reduce((pre, cur) => pre + cur));
  return result > 0
    ? result
    : new ValueError()
};