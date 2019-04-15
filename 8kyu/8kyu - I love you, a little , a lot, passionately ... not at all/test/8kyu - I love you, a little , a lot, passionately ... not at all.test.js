const howMuchILoveYou = require('../8kyu - I love you, a little , a lot, passionately ... not at all');
const should = require('should');

describe('8kyu - I love you, a little , a lot, passionately ... not at all', () => {
  it('Should return "I love you" for howMuchILoveYou(7)', (done) => {
    should(howMuchILoveYou(7)).equal('I love you');
    done();
  });
  it('Should return "a lot" for howMuchILoveYou(3)', (done) => {
    should(howMuchILoveYou(3)).equal('a lot');
    done();
  });
  it('Should return "not at all" for howMuchILoveYou(6)', (done) => {
    should(howMuchILoveYou(6)).equal('not at all');
    done();
  });
  it('Should return "a little" for howMuchILoveYou(2)', (done) => {
    should(howMuchILoveYou(2)).equal('a little');
    done();
  });
  it('Should return "madly" for howMuchILoveYou(5)', (done) => {
    should(howMuchILoveYou(5)).equal('madly');
    done();
  });        
});