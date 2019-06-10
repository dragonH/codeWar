const nbDig = require('../7kyu - Count the Digit');
const should = require('should');

describe('7kyu - Count the Digit', () => {
  it('Should return 4700 for nbDig(5750, 0)', (done) => {
    should(nbDig(5750, 0)).equal(4700);
    done();
  });
  it('Should return 9481 for nbDig(11011, 2)', (done) => {
    should(nbDig(11011, 2)).equal(9481);
    done();
  });  
  it('Should return 7733 for nbDig(12224, 8)', (done) => {
    should(nbDig(12224, 8)).equal(7733);
    done();
  }); 
  it('Should return 11905 for nbDig(11549, 1)', (done) => {
    should(nbDig(11549, 1)).equal(11905);
    done();
  });
  it('Should return 8014 for nbDig(14550, 7)', (done) => {
    should(nbDig(14550, 7)).equal(8014);
    done();
  });      
});