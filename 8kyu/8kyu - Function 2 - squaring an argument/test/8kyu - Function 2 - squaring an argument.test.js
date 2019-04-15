const square = require('../8kyu - Function 2 - squaring an argument');
const should = require('should');

describe('8kyu - Function 2 - squaring an argument', () => {
  it('Should return 4 for square(2)', (done) => {
    should(square(2)).equal(4);
    done();
  });
  it('Should return 9 for square(3)', (done) => {
    should(square(3)).equal(9);
    done();
  });
  it('Should return 100 for square(10)', (done) => {
    should(square(10)).equal(100);
    done();
  });
  it('Should return 144 for square(12)', (done) => {
    should(square(12)).equal(144);
    done();
  });
  it('Should return 169 for square(13)', (done) => {
    should(square(13)).equal(169);
    done();
  });        
});