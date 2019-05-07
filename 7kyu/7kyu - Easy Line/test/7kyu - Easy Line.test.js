const easyLine = require('../7kyu - Easy Line');
const should = require('should');

describe('7kyu - Easy Line', () => {
  it('Should return 8 for easyLine(7)', (done) => {
    should(easyLine(7)).equal(8);
    done();
  });
  it('Should return 16 for easyLine(13)', (done) => {
    should(easyLine(13)).equal(16);
    done();
  });
  it('Should return 22 for easyLine(17)', (done) => {
    should(easyLine(17)).equal(22);
    done();
  });
  it('Should return 28 for easyLine(22)', (done) => {
    should(easyLine(22)).equal(28);
    done();
  });
  it('Should return 31 for easyLine(24)', (done) => {
    should(easyLine(24)).equal(31);
    done();
  });     
});