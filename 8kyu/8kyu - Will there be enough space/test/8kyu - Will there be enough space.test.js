const enough = require('../8kyu - Will there be enough space');
const should = require('should');

describe('8kyu - Will there be enough space', () => {
  it('Should return 0 for enough(10, 5, 5)', (done) => {
    should(enough(10, 5, 5)).equal(0);
    done();
  });
  it('Should return 10 for enough(100, 60, 50)', (done) => {
    should(enough(100, 60, 50)).equal(10);
    done();
  });  
});