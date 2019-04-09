module.exports = function findOutlier(integers){
  const odd = integers.filter(integer => integer % 2 !== 0);
  const even = integers.filter(integer => integer % 2 === 0);
  return odd.length === 1 ? odd[0] : even[0];
}