module.exports = function letterCheck(arr) {
  return arr[1].replace(new RegExp(`[${arr[0]}]`, 'gi'), '').length
    ? false
    : true;
};