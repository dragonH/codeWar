const makeNegative = require('../8kyu - Return Negative');
const should = require('should');

describe('8kyu - Return Negative', () => {
  it('Should -42 for makeNegative(42)', (done) => {
    should(makeNegative(42)).equal(-42);
    done();
  });
  it('Should -38 for makeNegative(38)', (done) => {
    should(makeNegative(38)).equal(-38);
    done();
  });
  it('Should -1 for makeNegative(-1)', (done) => {
    should(makeNegative(-1)).equal(-1);
    done();
  });
  it('Should 0 for makeNegative(0)', (done) => {
    should(makeNegative(0)).equal(0);
    done();
  });
  it('Should -1 for makeNegative(-1)', (done) => {
    should(makeNegative(-1)).equal(-1);
    done();
  });      
});