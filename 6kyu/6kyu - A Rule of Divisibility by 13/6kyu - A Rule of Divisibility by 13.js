module.exports = function thirt(n) {
  let pointer = [1,10,9,12,3,4];
  while(String(n).length > 2) {
    let arr = String(n).split('').reverse();
    n = arr
      .map((num, index) => {
        let needle = 0;
        if (index < 6) {
          needle = index;
        } else {
          needle = index % 6;
        }
        return num * pointer[needle];
        })
        .reduce((pre, now, index) => pre + now);
  }
  return Number(n);
}
