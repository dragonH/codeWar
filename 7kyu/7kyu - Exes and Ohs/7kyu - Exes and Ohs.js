module.exports = function XO(str) {
  const strFormat = str.toLowerCase().replace(/[^o,x]/g,'').split('');
  return strFormat.length - strFormat.filter(letter => letter === 'x').length * 2 === 0;
};