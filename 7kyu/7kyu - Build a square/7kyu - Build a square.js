module.exports = function generateShape(int){
  return '+'.repeat(int).concat('\n').repeat(int).slice(0, -1);
};