module.exports =  ultimateReverse = s => {
  const reverseArr = [...s.join('')].reverse();
  return s.map((el) => { return reverseArr.splice(0, el.length).join('')});
};