const Array = require('../7kyu - The sortReloaded() method');
const should = require('should');

describe('7kyu - The sortReloaded() method', () => {
  const arr=[3,1,5,3,6,1,2]
  it("Should return [1,1,2,3,3,5,6] for arr.sortReloaded('asc')", (done) => {
    should(arr.sortReloaded('asc')).eql([1,1,2,3,3,5,6]);
    done();
  });
  it("Should return false for [2,3].sortReloaded('foo')", (done) => {
    should([2,3].sortReloaded('foo')).eql(false);
    done();
  }); 
  it("Should return [2,4,7] for [4,7,2].sortReloaded()", (done) => {
    should([4,7,2].sortReloaded()).eql([2,4,7]);
    done();
  });
  it("Should return [3,1,5,3,6,1,2] for arr", (done) => {
    should(arr).eql([3,1,5,3,6,1,2]);
    done();
  });     
});