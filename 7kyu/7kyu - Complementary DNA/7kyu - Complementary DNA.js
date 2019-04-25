module.exports = function DNAStrand(dna){
  const charList = {A: 'T', C: 'G', G: 'C', T: 'A'};
  return dna.split('').map(char => charList[char]).join('');
};