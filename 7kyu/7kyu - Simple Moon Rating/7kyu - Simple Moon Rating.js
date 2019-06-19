module.exports = function moonRating(rating) {
  const o = Math.round(rating) / 2;
  const c = Math.floor(Math.round(rating) % 2);
  const x = Math.round(5 - o - c);
  return 'o'.repeat(o)
    .concat('c'.repeat(c))
    .concat('x'.repeat(x));
};