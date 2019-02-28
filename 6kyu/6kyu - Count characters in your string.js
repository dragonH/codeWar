module.exports = function count (string) {  
  // The function code should be here
  let arr = string.split('');
  let checkArr = [];
  let ans = {};
  arr.forEach((char) => {
    if (checkArr.indexOf(char) < 0) {
      let count = arr.filter((el) => {return el === char}).length;
      ans[char] = count;
      checkArr.push(char);
    }
  });
   return ans;
}
