module.exports = function countSheep(num){
  let result = '';
  for (let i = 1; i <= num; i += 1) {
    result += `${i} sheep...`;
  }
  return result;
};