const makeValley = require('../7kyu - How Green Is My Valley');
const should = require('should');

describe('7kyu - How Green Is My Valley', () => {
  it('Should return "[17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]" for makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1])', (done) => {
    should(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1])).eql([17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]);
    done();
  });
  it('Should return "[20, 6, 2, 7]" for makeValley([20, 7, 6, 2])', (done) => {
    should(makeValley([20, 7, 6, 2])).eql([20, 6, 2, 7]);
    done();
  });
  it('Should return "[14, 8, 10]" for makeValley([14, 10, 8])', (done) => {
    should(makeValley([14, 10, 8])).eql([14, 8, 10]);
    done();
  });
  it('Should return "[20, 17, 12, 10, 4, 2, 1, 1, 2, 9, 12, 13, 18]" for makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1])', (done) => {
    should(makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1])).eql([20, 17, 12, 10, 4, 2, 1, 1, 2, 9, 12, 13, 18]);
    done();
  });
  it('Should return "[20, 14, 1, 10, 16]" for makeValley([20, 16, 14, 10, 1])', (done) => {
    should(makeValley([20, 16, 14, 10, 1])).eql([20, 14, 1, 10, 16]);
    done();
  });    
});