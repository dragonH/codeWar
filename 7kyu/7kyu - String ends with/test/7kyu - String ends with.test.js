const solution = require('../7kyu - String ends with');
const should = require('should');

describe('7kyu - String ends with', () => {
  it('Should return true for solution("samurai", "ai")', (done) => {
    should(solution("samurai", "ai")).equal(true);
    done();
  });
  it('Should return false for solution("sumo", "omo")', (done) => {
    should(solution("sumo", "omo")).equal(false);
    done();
  });
  it('Should return true for solution("ninja", "ja")', (done) => {
    should(solution("ninja", "ja")).equal(true);
    done();
  });
  it('Should return true for solution("sensei", "i")', (done) => {
    should(solution("sensei", "i")).equal(true);
    done();
  });
  it('Should return false for solution("samurai", "ra")', (done) => {
    should(solution("samurai", "ra")).equal(false);
    done();
  });        
});