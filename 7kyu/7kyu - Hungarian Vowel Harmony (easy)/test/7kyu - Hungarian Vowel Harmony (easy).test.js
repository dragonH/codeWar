const dative = require('../7kyu - Hungarian Vowel Harmony (easy)');
const should = require('should');

describe('7kyu - Hungarian Vowel Harmony (easy)', () => {
  it('Should return "ablaknak" for dative("ablak")', (done) => {
    should(dative("ablak")).equal('ablaknak');
    done();
  });
  it('Should return "tükörnek" for dative("tükör")', (done) => {
    should(dative("tükör")).equal('tükörnek');
    done();
  });
  it('Should return "keretnek" for dative("keret")', (done) => {
    should(dative("keret")).equal('keretnek');
    done();
  });
  it('Should return "otthonnak" for dative("otthon")', (done) => {
    should(dative("otthon")).equal('otthonnak');
    done();
  });
  it('Should return "virágnak" for dative("virág")', (done) => {
    should(dative("virág")).equal('virágnak');
    done();
  });       
});