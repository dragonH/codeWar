const evaporator = require('../7kyu - Deodorant Evaporator');
const should = require('should');

describe('7kyu - Deodorant Evaporator', () => {
  it('Should return 22 for evaporator(10,10,10)', (done) => {
    should(evaporator(10,10,10)).equal(22);
    done();
  });
  it('Should return 22 for evaporator(10,10,10)', (done) => {
    should(evaporator(10,10,10)).equal(22);
    done();
  });
  it('Should return 59 for evaporator(100,5,5)', (done) => {
    should(evaporator(100,5,5)).equal(59);
    done();
  });
  it('Should return 37 for evaporator(50,12,1)', (done) => {
    should(evaporator(50,12,1)).equal(37);
    done();
  });
  it('Should return 31 for evaporator(47.5,8,8)', (done) => {
    should(evaporator(47.5,8,8)).equal(31);
    done();
  });        
});