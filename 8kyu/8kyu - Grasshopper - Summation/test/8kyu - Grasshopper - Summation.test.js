const summation = require('../8kyu - Grasshopper - Summation');
const should = require('should');

describe('8kyu - Grasshopper - Summation', () => {
  it('Should 1 fro summation(1)', (done) => {
    should(summation(1)).equal(1);
    done();
  });
  it('Should 36 fro summation(8)', (done) => {
    should(summation(8)).equal(36);
    done();
  }); 
  it('Should 253 fro summation(22)', (done) => {
    should(summation(22)).equal(253);
    done();
  });
  it('Should 5050 fro summation(100)', (done) => {
    should(summation(100)).equal(5050);
    done();
  });
  it('Should 22791 fro summation(213)', (done) => {
    should(summation(213)).equal(22791);
    done();
  });      
});