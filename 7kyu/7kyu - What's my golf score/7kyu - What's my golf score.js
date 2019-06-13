module.exports = function golfScoreCalculator(parList, scoreList){
  return [...scoreList].reduce((pre, cur, index) => pre + (cur - parList[index]), 0);
};