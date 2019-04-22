const seatsInTheater = require('../8kyu - Simple Fun #1 Seats in Theater');
const should = require('should');

describe('8kyu - Simple Fun #1 Seats in Theater', () => {
  it('Should return 96 for seatsInTheater(16,11,5,3)', (done) => {
    should(seatsInTheater(16,11,5,3)).equal(96);
    done();
  });
  it('Should return 0 for seatsInTheater(1,1,1,1)', (done) => {
    should(seatsInTheater(1,1,1,1)).equal(0);
    done();
  });
  it('Should return 18 for seatsInTheater(13,6,8,3)', (done) => {
    should(seatsInTheater(13,6,8,3)).equal(18);
    done();
  });
  it('Should return 99 for seatsInTheater(60,100,60,1)', (done) => {
    should(seatsInTheater(60,100,60,1)).equal(99);
    done();
  });
  it('Should return 0 for seatsInTheater(1000,1000,1000,1000)', (done) => {
    should(seatsInTheater(1000,1000,1000,1000)).equal(0);
    done();
  });       
});