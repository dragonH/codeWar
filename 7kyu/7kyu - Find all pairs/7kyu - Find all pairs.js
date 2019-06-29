module.exports = function duplicates(array){
  let result = 0;
  [...new Set(array)].forEach(el => {
    const length = array.filter(el1 => el1 === el).length
    if (length >= 2) {
      result += Math.floor(length / 2);
    }
  });
  return result;
};