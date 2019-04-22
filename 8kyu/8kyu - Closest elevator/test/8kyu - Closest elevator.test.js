const elevator = require('../8kyu - Closest elevator');
const should = require('should');

describe('8kyu - Closest elevator', () => {
  it('Should return "left" for elevator(0, 1, 0)', (done) => {
    should(elevator(0, 1, 0)).equal('left');
    done();
  });
  it('Should return "right" for elevator(0, 1, 1)', (done) => {
    should(elevator(0, 1, 1)).equal('right');
    done();
  });
  it('Should return "right" for elevator(0, 1, 2)', (done) => {
    should(elevator(0, 1, 2)).equal('right');
    done();
  });
  it('Should return "right" for elevator(0, 0, 0)', (done) => {
    should(elevator(0, 0, 0)).equal('right');
    done();
  });
  it('Should return "right" for elevator(0, 2, 1)', (done) => {
    should(elevator(0, 2, 1)).equal('right');
    done();
  });        
});