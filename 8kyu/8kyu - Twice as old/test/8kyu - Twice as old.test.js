const twiceAsOld = require('../8kyu - Twice as old');
const should = require('should');

describe('8kyu - Twice as old', () => {
  it('Should return 22 for twiceAsOld(36,7)', (done) => {
    should(twiceAsOld(36,7)).equal(22);
    done();
  });
  it('Should return 5 for twiceAsOld(55,30)', (done) => {
    should(twiceAsOld(55,30)).equal(5);
    done();
  });
  it('Should return 0 for twiceAsOld(42,21)', (done) => {
    should(twiceAsOld(42,21)).equal(0);
    done();
  });
  it('Should return 20 for twiceAsOld(22,1)', (done) => {
    should(twiceAsOld(22,1)).equal(20);
    done();
  });
  it('Should return 29 for twiceAsOld(29,0)', (done) => {
    should(twiceAsOld(29,0)).equal(29);
    done();
  });        
});