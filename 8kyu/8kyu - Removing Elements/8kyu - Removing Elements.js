module.exports = function removeEveryOther(arr){
  let result = [];
  while(arr.length) {
    result = result.concat(arr.slice(0,1));
    arr = arr.slice(2);
  }
  return result;
};