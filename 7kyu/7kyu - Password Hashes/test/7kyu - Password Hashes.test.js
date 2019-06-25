const passHash = require('../7kyu - Password Hashes');
const should = require('should');

describe('7kyu - Password Hashes', () => {
  it('Should return "5f4dcc3b5aa765d61d8327deb882cf99" for passHash("password")', (done) => {
    should(passHash('password')).equal('5f4dcc3b5aa765d61d8327deb882cf99');
    done();
  });
  it('Should return "e99a18c428cb38d5f260853678922e03" for passHash("abc123")', (done) => {
    should(passHash('abc123')).equal('e99a18c428cb38d5f260853678922e03');
    done();
  });  
});