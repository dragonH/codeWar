const CHANGE = {
  penny: 0.01,
  nickel: 0.05,
  dime: 0.10,
  quarter: 0.25,
  dollar: 1.00,
};
module.exports = function changeCount( change ){
  return `$${change.split(' ').reduce((pre, cur) => pre + CHANGE[cur], 0).toFixed(2)}`;
};