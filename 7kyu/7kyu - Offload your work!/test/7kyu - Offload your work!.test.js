const workNeeded = require('../7kyu - Offload your work!');
const should = require('should');

describe('7kyu - Offload your work!', () => {
  it('Should return "Easy Money!" for workNeeded(60, [[1,0]])', (done) => {
    should(workNeeded(60, [[1,0]])).equal('Easy Money!');
    done();
  });
  it('Should return "I need to work 1 hour(s) and 0 minute(s)" for workNeeded(60, [[0,0]])', (done) => {
    should(workNeeded(60, [[0,0]])).equal('I need to work 1 hour(s) and 0 minute(s)');
    done();
  });
  it('Should return "I need to work 0 hour(s) and 1 minute(s)" for workNeeded(141, [[1,55], [0,25]])', (done) => {
    should(workNeeded(141, [[1,55], [0,25]])).equal('I need to work 0 hour(s) and 1 minute(s)');
    done();
  });
  it('Should return "I need to work 29 hour(s) and 50 minute(s)" for workNeeded(2000, [[1,55], [0,25], [1, 10]])', (done) => {
    should(workNeeded(2000, [[1,55], [0,25], [1, 10]])).equal('I need to work 29 hour(s) and 50 minute(s)');
    done();
  });
  it('Should return "I need to work 32 hour(s) and 50 minute(s)" for workNeeded(2500, [[1,55], [0,25], [1, 10], [3, 14], [2, 6]])', (done) => {
    should(workNeeded(2500, [[1,55], [0,25], [1, 10], [3, 14], [2, 6]])).equal('I need to work 32 hour(s) and 50 minute(s)');
    done();
  });        
});