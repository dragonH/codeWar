module.exports = function boredom(staff){
  const obj = {
    accounts: 1, finance: 2, canteen: 10, regulation: 3, trading: 6,
    change: 6, IS: 8, retail: 5, cleaning: 4, 'pissing about': 25,
  };
  const sum = Object.keys(staff).reduce((pre, cur) => pre + obj[staff[cur]], 0);
  return  sum <= 80
    ? 'kill me now'
    : sum < 100 && sum > 80 ? 'i can handle this' : 'party time!!';
};