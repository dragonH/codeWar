const args_count = require('../7kyu - How many arguments');
const should = require('should');

describe('7kyu - How many arguments', () => {
  it('Should return 2 for args_count(1, 2)', (done) => {
    should(args_count(1, 2)).equal(2);
    done();
  });
  it('Should return 0 for args_count()', (done) => {
    should(args_count()).equal(0);
    done();
  });
  it("Should return 3 for args_count('A', 'B', 'C')", (done) => {
    should(args_count('A', 'B', 'C')).equal(3);
    done();
  });
  it('Should return 1 for args_count(["foo", "bar"])', (done) => {
    should(args_count(["foo", "bar"])).equal(1);
    done();
  });      
});