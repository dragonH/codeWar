module.exports = function inArray(array1, array2) {
  let ans = [];
    array1.forEach((model) => {
      array2.forEach((target) => {
        if (target.includes(model)) {
          if (ans.indexOf(model) < 0) {
            ans.push(model);
          }
        }
      })
    });
    return ans.sort();
  }