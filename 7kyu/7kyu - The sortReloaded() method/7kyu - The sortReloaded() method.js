module.exports = Array.prototype.sortReloaded = function (sort) {
  return sort === 'desc'
    ? [...this].sort((a, b) => b - a)
    : sort === 'asc' || sort === undefined
      ? [...this].sort((a, b) => a - b)
      : false;
};