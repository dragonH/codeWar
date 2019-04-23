const sum_pairs = require('../5kyu - Sum of Pairs');
const should = require('should');

describe('5kyu - Sum of Pairs', () => {
  it('Should [1, 7] return for sum_pairs(l1, 8)', (done) => {
    const l1 = [1, 4, 8, 7, 3, 15];
    should(sum_pairs(l1, 8)).eqls([1, 7]);
    done();
  });
  it('Should [0, -6] return for sum_pairs(l2, -6)', (done) => {
    const l2 = [1, -2, 3, 0, -6, 1];
    should(sum_pairs(l2, -6)).eqls([0, -6]);
    done();
  });
  it('Should undefined return for sum_pairs(l3, -7)', (done) => {
    const l3 = [20, -13, 40];
    should(sum_pairs(l3, -7)).eqls(undefined);
    done();
  });
  it('Should [1, 1] return for sum_pairs(l4, 2)', (done) => {
    const l4 = [1, 2, 3, 4, 1, 0];
    should(sum_pairs(l4, 2)).eqls([1, 1]);
    done();
  });
  it('Should [3, 7] return for sum_pairs(l5, 10)', (done) => {
    const l5 = [10, 5, 2, 3, 7, 5];
    should(sum_pairs(l5, 10)).eqls([3, 7]);
    done();
  });      
});