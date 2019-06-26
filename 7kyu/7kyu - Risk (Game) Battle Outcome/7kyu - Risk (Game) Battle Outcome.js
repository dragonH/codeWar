module.exports = function battleOutcome( attacker , defender ) {
  let attackerScore = 0;
  let defenderScore = 0;
  attacker.sort((a, b) => b - a);
  defender.sort((a, b) => b - a);
  if (attacker.length === 1) {
    return attacker [0] > defender[0]
      ? [0, 1]
      : [1, 0];
  }
  defender.forEach((defend, index) => {
    if (defend < attacker[index]) {
      attackerScore += 1;  
    } else {
      defenderScore += 1;
    }
  });
  return [defenderScore, attackerScore];
};