module.exports = function printerError(s) {
  return `${s.split('').filter(letter => letter.charCodeAt() > 109).length}/${s.length}` 
};