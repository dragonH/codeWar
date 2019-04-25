const unluckyDays = require('../7kyu - Unlucky Days');
const should = require('should');

describe('7kyu - Unlucky Days', () => {
  it('Should 1 for unluckyDays(1586)', (done) => {
    should(unluckyDays(1586)).equal(1);
    done();
  });
  it('Should 3 for unluckyDays(1001)', (done) => {
    should(unluckyDays(1001)).equal(3);
    done();
  });
  it('Should 2 for unluckyDays(2723)', (done) => {
    should(unluckyDays(2723)).equal(2);
    done();
  });
  it('Should 1 for unluckyDays(2132)', (done) => {
    should(unluckyDays(2132)).equal(1);
    done();
  });
  it('Should 3 for unluckyDays(2065)', (done) => {
    should(unluckyDays(2065)).equal(3);
    done();
  });        
});