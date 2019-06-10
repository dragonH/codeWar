module.exports = function nbDig(n, d) {
  const reg = new RegExp(`[^${d}]`, 'gi');
  const last = String(Math.pow(n, 2)).replace(reg, '');
  return new Array(n).fill(n).map((el, index) => String(Math.pow(index, 2)).replace(reg, ''))
                     .join('')
                     .concat(last)
                     .length;
};