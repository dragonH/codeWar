const disariumNumber = require('../7kyu - Disarium Number (Special Numbers Series #3)');
const should = require('should');

describe('7kyu - Disarium Number (Special Numbers Series #3)', () => {
  it('Should return "Disarium !!" for disariumNumber(89)', (done) => {
    should(disariumNumber(89)).equal('Disarium !!');
    done();
  });
  it('Should return "Not !!" for disariumNumber(564)', (done) => {
    should(disariumNumber(564)).equal('Not !!');
    done();
  });
  it('Should return "Not !!" for disariumNumber(1024)', (done) => {
    should(disariumNumber(1024)).equal('Not !!');
    done();
  });
  it('Should return "Disarium !!" for disariumNumber(135)', (done) => {
    should(disariumNumber(135)).equal('Disarium !!');
    done();
  });
  it('Should return "Not !!" for disariumNumber(136586)', (done) => {
    should(disariumNumber(136586)).equal('Not !!');
    done();
  });        
});