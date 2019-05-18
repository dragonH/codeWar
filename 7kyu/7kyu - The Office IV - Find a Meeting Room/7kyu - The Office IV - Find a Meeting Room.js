module.exports = function meeting(x){
  return x.includes('O')
    ? x.findIndex(el => el === 'O')
    : 'None available!';
};