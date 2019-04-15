module.exports = function howMuchILoveYou(nbPetals) {
  let datas = {
    1: 'I love you',
    2: 'a little',
    3: 'a lot',
    4: 'passionately',
    5: 'madly',
    6: 'not at all',
  };
  return datas[nbPetals % 6] || datas[6];
};