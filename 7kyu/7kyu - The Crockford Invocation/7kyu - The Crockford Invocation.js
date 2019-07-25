module.exports.add = (a, b) => {
  return (b) => a + b;
}

module.exports.subtract = (a, b) => {
  return (b) => a - b;
}

module.exports.multiply = (a, b) => {
  return (b) => a * b;
}

module.exports.apply = (fn) => {
  return fn;
}