const movie = require('../7kyu - Going to the cinema');
const should = require('should');

describe('7kyu - Going to the cinema', () => {
  it('Should return 43 for movie(500, 15, 0.9)', (done) => {
    should(movie(500, 15, 0.9)).equal(43);
    done();
  });
  it('Should return 24 for movie(100, 10, 0.95)', (done) => {
    should(movie(100, 10, 0.95)).equal(24);
    done();
  });
  it('Should return 2 for movie(0, 10, 0.95)', (done) => {
    should(movie(0, 10, 0.95)).equal(2);
    done();
  });
  it('Should return 21 for movie(250, 20, 0.9)', (done) => {
    should(movie(250, 20, 0.9)).equal(21);
    done();
  });
  it('Should return 34 for movie(500, 20, 0.9)', (done) => {
    should(movie(500, 20, 0.9)).equal(34);
    done();
  });        
});