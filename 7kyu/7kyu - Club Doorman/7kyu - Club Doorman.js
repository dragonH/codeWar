module.exports = function passTheDoorMan (word){
  return (word.match(/(.)\1/)[0].charCodeAt() - 96) * 3;
};