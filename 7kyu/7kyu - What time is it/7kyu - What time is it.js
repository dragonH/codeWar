module.exports = getMilitaryTime = function(input) {
  console.log(input)
  return input.slice(-2) === 'PM'
    ? input.slice(0,2) === '12'
      ? input.slice(0, -2)
      : String(Number(input.slice(0,2)) + 12).concat(input.slice(2, -2))
    : input.slice(0,2) === '12'
      ? '00'.concat(input.slice(2, -2))
      : input.slice(0, -2);
};