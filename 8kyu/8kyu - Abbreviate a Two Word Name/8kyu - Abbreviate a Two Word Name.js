module.exports = function abbrevName(name){
  return name.split(' ')
             .map(letter => letter[0].toUpperCase())
             .join('.');
};