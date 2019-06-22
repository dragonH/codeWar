module.exports = function scramble(str, arr) {
  return arr.map((order, index) => { return {order, value: str[index]}})
            .sort((a, b) => a.order - b.order)
            .map(char => char.value)
            .join('');
};