const bloodMoon = require('../7kyu - Blood Moon');
const should = require('should');

describe('7kyu - Blood Moon', () => {
  it('Should return 0 for bloodMoon(0)', (done) => {
    should(bloodMoon(0)).equal(0);
    done();
  });
  it('Should return 0.25 for bloodMoon(1)', (done) => {
    should(bloodMoon(1)).equal(0.25);
    done();
  });
  it('Should return 1 for bloodMoon(2)', (done) => {
    should(bloodMoon(2)).equal(1);
    done();
  });
  it('Should return 2.25 for bloodMoon(3)', (done) => {
    should(bloodMoon(3)).equal(2.25);
    done();
  });     
});