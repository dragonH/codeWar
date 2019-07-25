require('../7kyu - Jaden Casing Strings');
const should = require('should');

describe('7kyu - Jaden Casing Strings', () => {
  it('Should return "Most Trees Are Blue" for "most trees are blue".toJadenCase()', (done) => {
    should("most trees are blue".toJadenCase()).equal('Most Trees Are Blue');
    done();
  });
  it('Should return "How Can Mirrors Be Real If Our Eyes Aren\'t Real" for "How can mirrors be real if our eyes aren\'t real".toJadenCase()', (done) => {
    should("How can mirrors be real if our eyes aren't real".toJadenCase()).equal('How Can Mirrors Be Real If Our Eyes Aren\'t Real');
    done();
  });
  it('Should return "All The Rules In This World Were Made By Someone No Smarter Than You. So Make Your Own." for "All the rules in this world were made by someone no smarter than you. So make your own.".toJadenCase()', (done) => {
    should("All the rules in this world were made by someone no smarter than you. So make your own.".toJadenCase()).equal('All The Rules In This World Were Made By Someone No Smarter Than You. So Make Your Own.');
    done();
  });
  it('Should return "School Is The Tool To Brainwash The Youth." for "School is the tool to brainwash the youth.".toJadenCase()', (done) => {
    should("School is the tool to brainwash the youth.".toJadenCase()).equal('School Is The Tool To Brainwash The Youth.');
    done();
  }); 
  it('Should return "If Newborn Babies Could Speak They Would Be The Most Intelligent Beings On Planet Earth." for "If newborn babies could speak they would be the most intelligent beings on planet Earth.".toJadenCase()', (done) => {
    should("If newborn babies could speak they would be the most intelligent beings on planet Earth.".toJadenCase()).equal('If Newborn Babies Could Speak They Would Be The Most Intelligent Beings On Planet Earth.');
    done();
  });        
});
