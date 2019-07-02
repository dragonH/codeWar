const changeCount = require('../7kyu - Loose Change!');
const should = require('should');

describe('7kyu - Loose Change!', () => {
  it("Should return '$1.11' for changeCount('dime penny dollar')", (done) => {
    should(changeCount('dime penny dollar')).equal('$1.11');
    done();
  });
  it("Should return '$0.16' for changeCount('dime penny nickel')", (done) => {
    should(changeCount('dime penny nickel')).equal('$0.16');
    done();
  });
  it("Should return '$0.50' for changeCount('quarter quarter')", (done) => {
    should(changeCount('quarter quarter')).equal('$0.50');
    done();
  });
  it("Should return '$2.01' for changeCount('dollar penny dollar')", (done) => {
    should(changeCount('dollar penny dollar')).equal('$2.01');
    done();
  });
  it("Should return '$10.01' for changeCount('dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny')", (done) => {
    should(changeCount('dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny')).equal('$10.01');
    done();
  });        
});