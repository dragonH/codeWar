module.exports = function fizzBuzzCuckooClock(time) {
  const times = time.split(':');
  if (times[1] === '00') {
    return Number(times[0]) > 1 && Number(times[0]) < 13
      ? 'Cuckoo '.repeat(Number(times[0])).trim()
      : 'Cuckoo '.repeat(Math.abs(Number(times[0]) - 12)).trim();
  }
  if (times[1] === '30') {
    return 'Cuckoo';
  }
  if (Number(times[1]) % 3 === 0 && Number(times[1]) % 5 === 0) {
    return 'Fizz Buzz';
  }
  if (Number(times[1]) % 3 === 0) {
    return 'Fizz';
  }
  if (Number(times[1]) % 5 === 0) {
    return 'Buzz';
  }
  return 'tick';
};