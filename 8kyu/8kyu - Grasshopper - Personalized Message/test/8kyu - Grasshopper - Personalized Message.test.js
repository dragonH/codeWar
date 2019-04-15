const greet = require('../8kyu - Grasshopper - Personalized Message');
const should = require('should');

describe('8kyu - Grasshopper - Personalized Message', () => {
  it("Should return 'Hello boss' for greet('Daniel', 'Daniel')", (done) => {
    should(greet('Daniel', 'Daniel')).equal('Hello boss');
    done();
  });
  it("Should return 'Hello guest' for greet('Greg', 'Daniel')", (done) => {
    should(greet('Greg', 'Daniel')).equal('Hello guest');
    done();
  });  
});