const sumR = require('../7kyu - Get list sum recursively');
const should = require('should');

describe('7kyu - Get list sum recursively', () => {
  it('Should return 0 for sumR([])', (done) => {
    should(sumR([])).equal(0);
    done();
  });
  it('Should return 1 for sumR([1])', (done) => {
    should(sumR([1])).equal(1);
    done();
  });
  it('Should return 3 for sumR([1,1,1])', (done) => {
    should(sumR([1,1,1])).equal(3);
    done();
  });
  it('Should return 15 for sumR([5,5,5])', (done) => {
    should(sumR([5,5,5])).equal(15);
    done();
  });
  it('Should return 50 for sumR([10,10,10,10,10])', (done) => {
    should(sumR([10,10,10,10,10])).equal(50);
    done();
  });        
});