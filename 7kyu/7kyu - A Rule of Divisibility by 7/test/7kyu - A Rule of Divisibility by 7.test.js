const seven = require('../7kyu - A Rule of Divisibility by 7');
const should = require('should');

describe('7kyu - A Rule of Divisibility by 7', () => {
  it('Should return "[28, 7]" for seven(477557101)', (done) => {
    should(seven(477557101)).eqls([28, 7]);
    done();
  });
  it('Should return "[47, 7]" for seven(477557102)', (done) => {
    should(seven(477557102)).eqls([47, 7]);
    done();
  });
  it('Should return "[21, 7]" for seven(234002979)', (done) => {
    should(seven(234002979)).eqls([21, 7]);
    done();
  });
  it('Should return "[0, 5]" for seven(1369851)', (done) => {
    should(seven(1369851)).eqls([0, 5]);
    done();
  });
  it('Should return "[0, 0]" for seven(0)', (done) => {
    should(seven(0)).eqls([0, 0]);
    done();
  });        
});