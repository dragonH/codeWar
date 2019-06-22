const oddBall = require('../7kyu - Odds-Index');
const should = require('should');

describe('7kyu - Odds-Index', () => {
  it('Should return true for oddBall(["even",4,"even",7,"even",55,"even",6,"even",10,"odd",3,"even"])', (done) => {
    should(oddBall(["even",4,"even",7,"even",55,"even",6,"even",10,"odd",3,"even"])).equal(true);
    done();
  });
  it('Should return false for oddBall(["even",4,"even",7,"even",55,"even",6,"even",9,"odd",3,"even"])', (done) => {
    should(oddBall(["even",4,"even",7,"even",55,"even",6,"even",9,"odd",3,"even"])).equal(false);
    done();
  });
  it('Should return true for oddBall(["even",10,"odd",2,"even"])', (done) => {
    should(oddBall(["even",10,"odd",2,"even"])).equal(true);
    done();
  });    
});