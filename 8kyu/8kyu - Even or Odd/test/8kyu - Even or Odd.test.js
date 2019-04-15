const even_or_odd = require('../8kyu - Even or Odd');
const should = require('should');

describe('8kyu - Even or Odd', () => {
  it('Should return "Even" for even_or_odd(2)', (done) => {
    should(even_or_odd(2)).equal('Even');
    done();
  });
  it('Should return "Odd" for even_or_odd(1)', (done) => {
    should(even_or_odd(1)).equal('Odd');
    done();
  });
  it('Should return "Even" for even_or_odd(-4)', (done) => {
    should(even_or_odd(-4)).equal('Even');
    done();
  });
  it('Should return "Odd" for even_or_odd(-3)', (done) => {
    should(even_or_odd(-3)).equal('Odd');
    done();
  });
  it('Should return "Even" for even_or_odd(0)', (done) => {
    should(even_or_odd(0)).equal('Even');
    done();
  });       
});