module.exports = function evaporator(content, evap_per_day, threshold){
  let counter = 1;
  let result = content;
  while (result > content * (threshold / 100)) {
    result = content * Math.pow((100 - evap_per_day)/100, counter);
    counter++;
  }
  return counter - 1;
};