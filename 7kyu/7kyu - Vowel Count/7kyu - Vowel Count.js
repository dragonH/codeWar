module.exports = function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
};