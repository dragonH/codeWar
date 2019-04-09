module.exports = function points(games) {
  let sum = 0;
  games.forEach((game) => {
    const result = game.split(':');
    if (result[0] > result[1]) {
      sum += 3;
    }
    if (result[0] === result[1]){
      sum += 1;
    }
  });
  return sum;
}