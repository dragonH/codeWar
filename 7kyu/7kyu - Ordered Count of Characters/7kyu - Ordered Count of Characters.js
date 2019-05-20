module.exports = orderedCount = function (text) {
  return [...new Set(text)].map((el, index) => [el, text.split(el).length - 1]);
};