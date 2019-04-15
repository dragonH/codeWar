const rentalCarCost = require('../8kyu - Transportation on vacation');
const should = require('should');

describe('8kyu - Transportation on vacation', () => {
  it('Should return 40 for rentalCarCost(1)', (done) => {
    should(rentalCarCost(1)).equal(40);
    done();
  });
  it('Should return 80 for rentalCarCost(2)', (done) => {
    should(rentalCarCost(2)).equal(80);
    done();
  });
  it('Should return 100 for rentalCarCost(3)', (done) => {
    should(rentalCarCost(3)).equal(100);
    done();
  });
  it('Should return 140 for rentalCarCost(4)', (done) => {
    should(rentalCarCost(4)).equal(140);
    done();
  });
  it('Should return 180 for rentalCarCost(5)', (done) => {
    should(rentalCarCost(5)).equal(180);
    done();
  });        
});