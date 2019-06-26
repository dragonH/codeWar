const duplicates = require('../7kyu - Find Duplicates');
const should = require('should');

describe('7kyu - Find Duplicates', () => {
  it('Should return [ 1, 4, 3 ] for duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3])', (done) => {
    should(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3])).eql([ 1, 4, 3 ]);
    done();
  });
  it("Should return [3] for duplicates(['1', 2, 4, '4', 3, '3', 1, 5, 3, 3, 3, 3])", (done) => {
    should(duplicates(['1', 2, 4, '4', 3, '3', 1, 5, 3, 3, 3, 3])).eql([3]);
    done();
  });
  it("Should return [1,4] for duplicates([1,1,2,3,4,5,4])", (done) => {
    should(duplicates([1,1,2,3,4,5,4])).eql([1,4]);
    done();
  });
  it("Should return [] for duplicates([0, 1, 2, 3, 4, 5])", (done) => {
    should(duplicates([0, 1, 2, 3, 4, 5])).eql([]);
    done();
  });
  it("Should return [ 'zut', 4, 3 ] for duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut'])", (done) => {
    should(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut'])).eql([ 'zut', 4, 3 ]);
    done();
  });        
});