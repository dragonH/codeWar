const matchArrays = require('../7kyu - Array comparator');
const should = require('should');

describe('7kyu - Array comparator', () => {
  it("Should return 1 for matchArrays(['Erlang','JavaScript'], ['Go', 'C++','Erlang'])", (done) => {
    should(matchArrays(['Erlang','JavaScript'], ['Go', 'C++','Erlang'])).equal(1);
    done();
  });
  it("Should return 0 for matchArrays(['Erlang','JavaScript'], ['Go', 'C++','Python'])", (done) => {
    should(matchArrays(['Erlang','JavaScript'], ['Go', 'C++','Python'])).equal(0);
    done();
  }); 
  it("Should return 3 for matchArrays([true,3,9,11,15], [true,3,11])", (done) => {
    should(matchArrays([true,3,9,11,15], [true,3,11])).equal(3);
    done();
  });    
});