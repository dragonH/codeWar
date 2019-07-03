const swap = require('../7kyu - Changing letters');
const should = require('should');

describe('7kyu - Changing letters', () => {
  it('Should return "HEllOWOrld!" for swap("HelloWorld!")', (done) => {
    should(swap("HelloWorld!")).equal('HEllOWOrld!');
    done();
  });
  it('Should return "SUndAy" for swap("Sunday")', (done) => {
    should(swap("Sunday")).equal('SUndAy');
    done();
  });
  it('Should return "COdEwArs" for swap("Codewars")', (done) => {
    should(swap("Codewars")).equal('COdEwArs');
    done();
  });
  it('Should return "MOndAy" for swap("Monday")', (done) => {
    should(swap("Monday")).equal('MOndAy');
    done();
  });
  it('Should return "FrIdAy" for swap("Friday")', (done) => {
    should(swap("Friday")).equal('FrIdAy');
    done();
  });        
});