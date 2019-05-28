const flattenAndSort = require('../7kyu - Flatten and sort an array');
const should = require('should');

describe('7kyu - Flatten and sort an array', () => {
  it('Should return [] for flattenAndSort([[]])', (done) => {
    should(flattenAndSort([[]])).eql([]);
    done();
  });
  it('Should return [1] for flattenAndSort([], [1])', (done) => {
    should(flattenAndSort([[], [1]])).eql([1]);
    done();
  });
  it('Should return [1, 2] for flattenAndSort([[9, 7, 5, 3, 1], [8, 6, 4, 2, 0], [], [1]])', (done) => {
    should(flattenAndSort([[], [], [], [2], [], [1]])).eql([1, 2]);
    done();
  });
  it('Should return [0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9] for flattenAndSort([[], [], [], [2], [], [1]])', (done) => {
    should(flattenAndSort([[9, 7, 5, 3, 1], [8, 6, 4, 2, 0], [], [1]])).eql([0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    done();
  });
  it('Should return [0, 18, 27, 35, 46, 54, 63, 72, 81, 90] for flattenAndSort([[90, 81, 72], [63, 54, 35], [], [46], [27, 18, 0]])', (done) => {
    should(flattenAndSort([[90, 81, 72], [63, 54, 35], [], [46], [27, 18, 0]])).eql([0, 18, 27, 35, 46, 54, 63, 72, 81, 90]);
    done();
  });        
});