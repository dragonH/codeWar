const balancedNum = require('../7kyu - Balanced Number (Special Numbers Series #1 )');
const should = require('should');

describe('7kyu - Balanced Number (Special Numbers Series #1 )', () => {
  it('Should return "Balanced" for balancedNum(7)', (done) => {
    should(balancedNum(7)).equal('Balanced');
    done();
  });
  it('Should return "Balanced" for balancedNum(959)', (done) => {
    should(balancedNum(959)).equal('Balanced');
    done();
  });  
  it('Should return "Balanced" for balancedNum(13)', (done) => {
    should(balancedNum(13)).equal('Balanced');
    done();
  }); 
  it('Should return "Not Balanced" for balancedNum(432)', (done) => {
    should(balancedNum(432)).equal('Not Balanced');
    done();
  });  
  it('Should return "Balanced" for balancedNum(424)', (done) => {
    should(balancedNum(424)).equal('Balanced');
    done();
  });     
});