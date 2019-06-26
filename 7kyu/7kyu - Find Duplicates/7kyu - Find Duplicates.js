module.exports = function duplicates(arr) {
  return [...new Set(arr.filter(el => arr.filter(el1 => el1 === el).length > 1))];
};