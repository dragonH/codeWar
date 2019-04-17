module.exports = function howManydays(month){
  // i do not want to use switch
  const days = new Date();
  days.setMonth(month, 0);
  return days.getDate();
};