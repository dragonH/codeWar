const areYouPlayingBanjo = require('../8kyu - Are You Playing Banjo');
const should = require('should');

describe('8kyu - Are You Playing Banjo', () => {
  it('Should return "Adam does not play banjo" for areYouPlayingBanjo("Adam")', (done) => {
    should(areYouPlayingBanjo("Adam")).equal('Adam does not play banjo');
    done();
  });
  it('Should return "Paul does not play banjo" for areYouPlayingBanjo("Paul")', (done) => {
    should(areYouPlayingBanjo("Paul")).equal('Paul does not play banjo');
    done();
  });
  it('Should return "Ringo plays banjo" for areYouPlayingBanjo("Ringo")', (done) => {
    should(areYouPlayingBanjo("Ringo")).equal('Ringo plays banjo');
    done();
  });
  it('Should return "bravo does not play banjo" for areYouPlayingBanjo("bravo")', (done) => {
    should(areYouPlayingBanjo("bravo")).equal('bravo does not play banjo');
    done();
  });
  it('Should return "rolf plays banjo" for areYouPlayingBanjo("rolf")', (done) => {
    should(areYouPlayingBanjo("rolf")).equal('rolf plays banjo');
    done();
  });        
});