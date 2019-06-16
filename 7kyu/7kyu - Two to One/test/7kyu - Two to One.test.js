const longest = require('../7kyu - Two to One');
const should = require('should');

describe('7kyu - Two to One', () => {
  it('Should return "aehrsty" for longest("aretheyhere", "yestheyarehere")', (done) => {
    should(longest("aretheyhere", "yestheyarehere")).equal('aehrsty');
    done();
  });
  it('Should return "abcdefghilnoprstu" for longest("loopingisfunbutdangerous", "lessdangerousthancoding")', (done) => {
    should(longest("loopingisfunbutdangerous", "lessdangerousthancoding")).equal('abcdefghilnoprstu');
    done();
  });
  it('Should return "acefghilmnoprstuy" for longest("inmanylanguages", "theresapairoffunctions")', (done) => {
    should(longest("inmanylanguages", "theresapairoffunctions")).equal('acefghilmnoprstuy');
    done();
  });
  it('Should return "adefghklmnorstu" for longest("lordsofthefallen", "gamekult")', (done) => {
    should(longest("lordsofthefallen", "gamekult")).equal('adefghklmnorstu');
    done();
  });
  it('Should return "acdeorsw" for longest("codewars", "codewars")', (done) => {
    should(longest("codewars", "codewars")).equal('acdeorsw');
    done();
  });       
});