module.exports = function divisibleByThree(str){
  return str.split('').reduce((pre, cur) => pre + Number(cur), 0) % 3
    ? false
    : true;
};