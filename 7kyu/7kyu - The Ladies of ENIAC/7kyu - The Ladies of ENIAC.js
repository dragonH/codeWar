module.exports = function radLadies(name){
  return name.replace(/[%$&/£?@1-9]/gi, '').toUpperCase();
};