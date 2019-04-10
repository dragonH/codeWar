module.exports = function invert(array) {
  return array.map(el => el !== 0 ? -el : 0);
}