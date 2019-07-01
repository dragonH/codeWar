const passTheDoorMan = require('../7kyu - Club Doorman');
const should = require('should');

describe('7kyu - Club Doorman', () => {
  it('Should return 60 for passTheDoorMan("lettuce")', (done) => {
    should(passTheDoorMan("lettuce")).equal(60);
    done();
  });
  it('Should return 36 for passTheDoorMan("hill")', (done) => {
    should(passTheDoorMan("hill")).equal(36);
    done();
  });
  it('Should return 48 for passTheDoorMan("apple")', (done) => {
    should(passTheDoorMan("apple")).equal(48);
    done();
  });
  it('Should return 12 for passTheDoorMan("addiction")', (done) => {
    should(passTheDoorMan("addiction")).equal(12);
    done();
  });
  it('Should return 15 for passTheDoorMan("bee")', (done) => {
    should(passTheDoorMan("bee")).equal(15);
    done();
  });        
});