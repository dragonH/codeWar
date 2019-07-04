module.exports = function asteriscIt(n){
  return typeof n === 'object'
    ? n.join('').replace(/([02468])(?=[02468])/g, '$1*')
    : String(n).replace(/([02468])(?=[02468])/g, '$1*');
};