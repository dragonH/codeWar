const gps = require('../7kyu - Speed Control');
const should = require('should');

describe('7kyu - Speed Control', () => {
  it('Should return 41 for gps(s, x)', (done) => {
    const x = [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61];
    const s = 20;
    should(gps(s, x)).equal(41);
    done();
  });
  it('Should return 219 for gps(s, x)', (done) => {
    const x = [0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25];
    const s = 12;
    should(gps(s, x)).equal(219);
    done();
  });
  it('Should return 80 for gps(s, x)', (done) => {
    const x = [0.0, 0.18, 0.36, 0.54, 0.72, 1.05, 1.26, 1.47, 1.92, 2.16, 2.4, 2.64, 2.88, 3.12, 3.36, 3.6, 3.84];
    const s = 20;
    should(gps(s, x)).equal(80);
    done();
  });
  it('Should return 90 for gps(s, x)', (done) => {
    const x = [0.0, 0.01, 0.36, 0.6, 0.84, 1.05, 1.26, 1.47, 1.68, 1.89, 2.1, 2.31, 2.52, 2.73, 2.94, 3.15];
    const s = 14;
    should(gps(s, x)).equal(90);
    done();
  });
  it('Should return 72 for gps(s, x)', (done) => {
    const x = [0.0, 0.02, 0.36, 0.54, 0.72, 0.9, 1.08, 1.26, 1.44, 1.62, 1.8];
    const s = 17;
    should(gps(s, x)).equal(72);
    done();
  });       
});