module.exports = sequenceSum = (begin, end, step) => {
  return begin > end
    ? 0
    : new Array(Math.floor(((end - begin) / step) + 1))
              .fill(0)
              .map((el, index) => begin +  (index * step))
              .reduce((pre, cur) => pre + cur, 0);
};