module.exports = function outed(meet, boss){
  const arr = Object.keys(meet);
  const sum = arr.reduce((pre, cur) => pre + meet[cur], 0) + meet[boss];
  return sum / 11 > 5
    ? 'Nice Work Champ!'
    : 'Get Out Now!';
};