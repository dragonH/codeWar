const guessBlue = require('../8kyu - Thinkful - Number Drills Blue and red marbles');
const should = require('should');

describe('8kyu - Thinkful - Number Drills Blue and red marbles', () => {
  it('Should return 0.6 for guessBlue(5, 5, 2, 3)', (done) => {
    should(guessBlue(5, 5, 2, 3)).equal(0.6);
    done();
  });
  it('Should return 0.2 for guessBlue(5, 7, 4, 3)', (done) => {
    should(guessBlue(5, 7, 4, 3)).equal(0.2);
    done();
  });
  it('Should return 0.4 for guessBlue(12, 18, 4, 6)', (done) => {
    should(guessBlue(12, 18, 4, 6)).equal(0.4);
    done();
  });    
});