const iceBrickVolume = require('../8kyu - For Twins  2. Math operations');
const should = require('should');

describe('8kyu - For Twins  2. Math operations', () => {
  it('Should return 16 for iceBrickVolume(1, 10, 2)', (done) => {
    should(iceBrickVolume(1, 10, 2)).equal(16);
    done();
  });
  it('Should return 1150 for iceBrickVolume(5, 30, 7)', (done) => {
    should(iceBrickVolume(5, 30, 7)).equal(1150);
    done();
  });
  it('Should return 2 for iceBrickVolume(1, 3, 2)', (done) => {
    should(iceBrickVolume(1, 3, 2)).equal(2);
    done();
  });
  it('Should return 512 for iceBrickVolume(8, 100, 96)', (done) => {
    should(iceBrickVolume(8, 100, 96)).equal(512);
    done();
  });
  it('Should return 5408 for iceBrickVolume(13, 19, 3)', (done) => {
    should(iceBrickVolume(13, 19, 3)).equal(5408);
    done();
  });      
});