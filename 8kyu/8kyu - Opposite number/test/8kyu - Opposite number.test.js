const opposite = require('../8kyu - Opposite number');
const should = require('should');

describe('8kyu - Opposite number', () => {
  it('Should return -1 for opposite(1)', (done) => {
    should(opposite(-1)).equal(1);
    done();
  });
  it('Should return 0 for opposite(0)', (done) => {
    should(opposite(0)).equal(0);
    done();
  });
  it('Should return 4.25 for opposite(-4.25)', (done) => {
    should(opposite(-4.25)).equal(4.25);
    done();
  });
  it('Should return 3.3333333 for opposite(-3.3333333)', (done) => {
    should(opposite(3.3333333)).equal(-3.3333333);
    done();
  });
  it('Should return 12525220.3325 for opposite(-12525220.3325)', (done) => {
    should(opposite(-12525220.3325)).equal(12525220.3325);
    done();
  });  
});