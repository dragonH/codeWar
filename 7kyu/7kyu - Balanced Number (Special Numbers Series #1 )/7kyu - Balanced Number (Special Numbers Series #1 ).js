module.exports = function balancedNum(number) {
  return String(number).length <= 2
    ? 'Balanced'
    : String(number).length % 2 > 0
      ? String(number).slice(0, String(number).length / 2).split('').reduce((pre, cur) => pre + Number(cur), 0)
      === String(number).slice((String(number).length / 2) + 1).split('').reduce((pre, cur) => pre + Number(cur), 0)
        ? 'Balanced'
        : 'Not Balanced'
      : String(number).slice(0, (String(number).length / 2) - 1).split('').reduce((pre, cur) => pre + Number(cur), 0)
       === String(number).slice((String(number).length / 2) + 1).split('').reduce((pre, cur) => pre + Number(cur), 0)
       ? 'Balanced'
       : 'Not Balanced';
}