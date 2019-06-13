module.exports = function compose(s1, s2) {
  const s1Arr = s1.split('\n');
  const s2Arr = s2.split('\n');
  return s1Arr.map((el, index) => el.slice(0, index + 1)
                                    .concat(s2Arr[s2Arr.length - 1 - index].slice(0, s2Arr.length - index))).join('\n');
};