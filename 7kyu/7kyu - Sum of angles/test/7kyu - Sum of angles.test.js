const angle = require('../7kyu - Sum of angles');
const should = require('should');

describe('7kyu - Sum of angles', () => {
  it('Should return 180 for angle(3)', (done) => {
    should(angle(3)).equal(180);
    done();
  });
  it('Should return 360 for angle(4)', (done) => {
    should(angle(4)).equal(360);
    done();
  });
  it('Should return 540 for angle(5)', (done) => {
    should(angle(5)).equal(540);
    done();
  });
  it('Should return 720 for angle(6)', (done) => {
    should(angle(6)).equal(720);
    done();
  });
  it('Should return 900 for angle(7)', (done) => {
    should(angle(7)).equal(900);
    done();
  });
});