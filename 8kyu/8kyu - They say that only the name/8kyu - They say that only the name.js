module.exports = function isOpposite(s1,s2){
  return s1.split('')
    .map(letter => letter.charCodeAt() <= 96
      ? letter.toLowerCase()
      : letter.toUpperCase()
    ).join('') === s2 && s2 !== '';
}