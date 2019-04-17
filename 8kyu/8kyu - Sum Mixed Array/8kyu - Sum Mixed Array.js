module.exports = function sumMix(x){
  return x.reduce((pre, cur) => pre + Number(cur), 0);
};