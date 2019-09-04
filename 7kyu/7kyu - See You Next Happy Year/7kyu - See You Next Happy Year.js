module.exports = function nextHappyYear(year){
  let ans = 0;
  let i = 1;
  while(ans === 0) {
    year += i;
    if ([...new Set(`${year}`)].length === 4) {
      ans = year;
    }
  }
  return ans;
};