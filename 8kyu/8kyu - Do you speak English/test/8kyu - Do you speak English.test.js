const spEng = require('../8kyu - Do you speak English');
const should = require('should');

describe('8kyu - Do you speak English', () => {
  it('Should reutrn true for spEng("english")', (done) => {
    should(spEng("english")).equal(true);
    done();
  });
  it('Should reutrn false for spEng("egnlish")', (done) => {
    should(spEng("egnlish")).equal(false);
    done();
  });
  it('Should reutrn false for spEng("1234egn lis;h")', (done) => {
    should(spEng("1234egn lis;h")).equal(false);
    done();
  });
  it('Should reutrn true for spEng("1234english ;k")', (done) => {
    should(spEng("1234english ;k")).equal(true);
    done();
  });
  it('Should reutrn true for spEng("English")', (done) => {
    should(spEng("English")).equal(true);
    done();
  });      
});