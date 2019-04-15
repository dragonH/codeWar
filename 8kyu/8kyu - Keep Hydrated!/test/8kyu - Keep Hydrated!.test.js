const litres = require('../8kyu - Keep Hydrated!');
const should = require('should');

describe('8kyu - Keep Hydrated!', () => {
  it('Should return 1 for litres(2)', (done) => {
    should(litres(2)).equal(1);
    done();
  });
  it('Should return 0 for litres(1.4)', (done) => {
    should(litres(1.4)).equal(0);
    done();
  });
  it('Should return 6 for litres(12.3)', (done) => {
    should(litres(12.3)).equal(6);
    done();
  });
  it('Should return 0 for litres(0.82)', (done) => {
    should(litres(0.82)).equal(0);
    done();
  });
  it('Should return 893 for litres(1787)', (done) => {
    should(litres(1787)).equal(893);
    done();
  });        
});