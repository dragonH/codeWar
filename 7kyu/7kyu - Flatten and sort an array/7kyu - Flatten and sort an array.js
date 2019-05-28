module.exports = function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a > b ? 1 : -1);
};