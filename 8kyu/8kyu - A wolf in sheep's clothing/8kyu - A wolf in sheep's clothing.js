module.exports = function warnTheSheep(queue) {
  const wolfPosition = queue.indexOf('wolf');
  return wolfPosition === queue.length - 1
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${Math.abs(wolfPosition - queue.length) - 1}! You are about to be eaten by a wolf!`;
 };