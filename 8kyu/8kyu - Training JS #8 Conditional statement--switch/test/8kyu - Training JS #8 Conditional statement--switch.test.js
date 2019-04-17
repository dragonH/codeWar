const howManydays = require('../8kyu - Training JS #8 Conditional statement--switch');
const should = require('should');

describe('8kyu - Training JS #8 Conditional statement--switch', () => {
  it('Should return 31 for howManydays(1)', (done) => {
    should(howManydays(1)).equal(31);
    done();
  });
  it('Should return 28 for howManydays(2)', (done) => {
    should(howManydays(2)).equal(28);
    done();
  });
  it('Should return 31 for howManydays(3)', (done) => {
    should(howManydays(3)).equal(31);
    done();
  });
  it('Should return 30 for howManydays(4)', (done) => {
    should(howManydays(4)).equal(30);
    done();
  });
  it('Should return 31 for howManydays(8)', (done) => {
    should(howManydays(8)).equal(31);
    done();
  });    
});