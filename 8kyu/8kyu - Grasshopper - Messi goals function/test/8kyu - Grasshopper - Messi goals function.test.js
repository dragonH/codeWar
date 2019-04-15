const goals = require('../8kyu - Grasshopper - Messi goals function');
const should = require('should');

describe('8kyu - Grasshopper - Messi goals function', (done) => {
  it('Should return 0 for goals(0,0,0)', (done) => {
    should(goals(0,0,0)).equal(0);
    done();
  });
  it('Should return 58 for goals(43, 10, 5)', (done) => {
    should(goals(43, 10, 5)).equal(58);
    done();
  });  
});