const letterCheck = require('../7kyu - noobCode 03 CHECK THESE LETTERS... see if letters in String 1 are present in String 2');
const should = require('should');

describe('7kyu - noobCode 03 CHECK THESE LETTERS... see if letters in String 1 are present in String 2', () => {
  it('Should return true for letterCheck(["trances", "nectar"])', (done) => {
    should(letterCheck(["trances", "nectar"])).equal(true);
    done();
  });
  it('Should return true for letterCheck(["THE EYES", "they see"])', (done) => {
    should(letterCheck(["THE EYES", "they see"])).equal(true);
    done();
  });
  it('Should return false for letterCheck(["assert", "staring"])', (done) => {
    should(letterCheck(["assert", "staring"])).equal(false);
    done();
  });
  it('Should return false for letterCheck(["arches", "later"])', (done) => {
    should(letterCheck(["arches", "later"])).equal(false);
    done();
  });
  it('Should return false for letterCheck(["dale", "caller"])', (done) => {
    should(letterCheck(["dale", "caller"])).equal(false);
    done();
  });        
});