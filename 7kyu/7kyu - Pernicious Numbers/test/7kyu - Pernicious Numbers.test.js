const pernicious = require('../7kyu - Pernicious Numbers');
const should = require('should');

describe('7kyu - Pernicious Numbers', () => {
  it('Should return [3, 5] for pernicious(5)', (done) => {
    should(pernicious(5)).eql([3, 5]);
    done();
  });
  it('Should return [3, 5, 6, 7, 9, 10, 11, 12] for pernicious(12)', (done) => {
    should(pernicious(12)).eql([3, 5, 6, 7, 9, 10, 11, 12]);
    done();
  });
  it('Should return "No pernicious numbers" for pernicious(0)', (done) => {
    should(pernicious(0)).eql('No pernicious numbers');
    done();
  });

  it('Should return [3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 17] for pernicious(17.546456)', (done) => {
    should(pernicious(17.546456)).eql([3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 17] );
    done();
  });        
});