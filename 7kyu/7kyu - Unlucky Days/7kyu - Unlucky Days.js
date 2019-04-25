module.exports = function unluckyDays(year){
  let counter = 0;
  for(let i = 1; i <= 12; i += 1) {
    new Date(`${year}-${i}-13`).getDay() === 5
      ? counter ++
      : '';
  }
  return counter;
};