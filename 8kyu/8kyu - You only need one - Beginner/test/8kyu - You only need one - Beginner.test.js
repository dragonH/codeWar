const check = require('../8kyu - You only need one - Beginner');
const should = require('should');

describe('8kyu - You only need one - Beginner', () => {
  it('Should return true for check([66, 101], 66)', (done) => {
    should(check([66, 101], 66)).equal(true);
    done();
  });
  it('Should return false for check([78, 117, 110, 99, 104, 117, 107, 115], 8)', (done) => {
    should(check([78, 117, 110, 99, 104, 117, 107, 115], 8)).equal(false);
    done();
  });
  it('Should return true for check([101, 45, 75, 105, 99, 107], 107)', (done) => {
    should(check([101, 45, 75, 105, 99, 107], 107)).equal(true);
    done();
  });
  it('Should return true for check([80, 117, 115, 104, 45, 85, 112, 115], 45)', (done) => {
    should(check([80, 117, 115, 104, 45, 85, 112, 115], 45)).equal(true);
    done();
  });
  it("Should return true for check(['t', 'e', 's', 't'], 'e')", (done) => {
    should(check(['t', 'e', 's', 't'], 'e')).equal(true);
    done();
  });        
});