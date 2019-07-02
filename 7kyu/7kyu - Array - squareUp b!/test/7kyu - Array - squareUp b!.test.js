const squareUp = require('../7kyu - Array - squareUp b!');
const should  =  require('should');

describe('7kyu - Array - squareUp b!', () => {
  it('Should return [0, 0, 1, 0, 2, 1, 3, 2, 1] for squareUp(3)', (done) => {
    should(squareUp(3)).eql([0, 0, 1, 0, 2, 1, 3, 2, 1]);
    done();
  });
  it('Should return [0, 1, 2, 1] for squareUp(2)', (done) => {
    should(squareUp(2)).eql([0, 1, 2, 1]);
    done();
  });
  it('Should return [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1] for squareUp(4)', (done) => {
    should(squareUp(4)).eql([0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]);
    done();
  });    
});