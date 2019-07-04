module.exports = function dayAndTime(n) {
  const date = new Date(new Date('2019-06-30 00:00').setMinutes(n));
  const days = {
    0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday',
    4: 'Thursday', 5: 'Friday', 6: 'Saturday',
  };
  return `${days[date.getDay()]} ${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` :　date.getMinutes()}`;
};