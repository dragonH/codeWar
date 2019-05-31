const newAvg = require('../7kyu - Looking for a benefactor');
const should = require('should');

describe('7kyu - Looking for a benefactor', () => {
  it('Should return 628 for newAvg([14, 30, 5, 7, 9, 11, 16], 90)', (done) => {
    should(newAvg([14, 30, 5, 7, 9, 11, 16], 90)).equal(628);
    done();
  });
  it('Should return 645 for newAvg([14, 30, 5, 7, 9, 11, 15], 92)', (done) => {
    should(newAvg([14, 30, 5, 7, 9, 11, 15], 92)).equal(645);
    done();
  });
  it('Should return 58430 for newAvg([1400.25, 30000.76, 5.56, 7, 9, 11, 15.48, 120.98], 10000)', (done) => {
    should(newAvg([1400.25, 30000.76, 5.56, 7, 9, 11, 15.48, 120.98], 10000)).equal(58430);
    done();
  });
  it('Should return 20630 for newAvg([1400.25, 30000.76, 5.56, 7, 9, 11, 15.48, 120.98], 5800)', (done) => {
    should(newAvg([1400.25, 30000.76, 5.56, 7, 9, 11, 15.48, 120.98], 5800)).equal(20630);
    done();
  });
  it('Should return 90 for newAvg([], 90)', (done) => {
    should(newAvg([], 90)).equal(90);
    done();
  });        
});