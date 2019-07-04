module.exports = function timeForMilkAndCookies(date){
  return date.getMonth() + 1 === 12 && date.getDate() === 24
    ? true
    : false;
};