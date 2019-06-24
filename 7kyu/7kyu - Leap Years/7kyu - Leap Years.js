module.exports = function isLeapYear(year) {
  return year % 4
    ? false
    : year % 400
      ? year % 100
        ? true
        : false
      : true;
};