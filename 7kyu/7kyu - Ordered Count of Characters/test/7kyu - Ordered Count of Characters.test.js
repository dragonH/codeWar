const orderedCount = require('../7kyu - Ordered Count of Characters');
const should = require('should');

describe('7kyu - Ordered Count of Characters', () => {
  it("Should return '[['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]' for orderedCount('abracadabra')", (done) => {
    should(orderedCount('abracadabra')).deepEqual([['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]);
    done();
  });
  it("Should return '[['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]' for orderedCount('Code Wars')", (done) => {
    should(orderedCount('Code Wars')).deepEqual([['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]);
    done();
  });
  it("Should return '[['2', 2], ['1', 1 ]]' for orderedCount('212')", (done) => {
    should(orderedCount('212')).deepEqual([['2', 2], ['1', 1 ]]);
    done();
  });    
});