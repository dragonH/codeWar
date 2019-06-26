const battleOutcome = require('../7kyu - Risk (Game) Battle Outcome');
const should = require('should');

describe('7kyu - Risk (Game) Battle Outcome', () => {
  it('Should return [1,0] for battleOutcome([1],[4])', (done) => {
    should(battleOutcome([1],[4])).eql([1,0]);
    done();
  });
  it('Should return [1,0] for battleOutcome([5],[5])', (done) => {
    should(battleOutcome([5],[5])).eql([1,0]);
    done();
  });
  it('Should return [0,1] for battleOutcome([6],[3])', (done) => {
    should(battleOutcome([6],[3])).eql([0,1]);
    done();
  });
  it('Should return [0,1] for battleOutcome([1,6,2],[5])', (done) => {
    should(battleOutcome([1,6,2],[5])).eql([0,1]);
    done();
  });
  it('Should return [0,1] for battleOutcome([5,2,5],[1])', (done) => {
    should(battleOutcome([5,2,5],[1])).eql([0,1]);
    done();
  });        
});