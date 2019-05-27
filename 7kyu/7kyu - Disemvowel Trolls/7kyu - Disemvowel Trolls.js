module.exports = function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
};