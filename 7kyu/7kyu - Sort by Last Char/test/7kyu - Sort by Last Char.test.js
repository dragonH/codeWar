const last = require('../7kyu - Sort by Last Char');
const should = require('should');

describe('7kyu - Sort by Last Char', () => {
  it("Should return ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'] for last('man i need a taxi up to ubud')", (done) => {
    should(last('man i need a taxi up to ubud')).eql(['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
    done();
  });
  it("Should return ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'] for last('what time are we climbing up the volcano')", (done) => {
    should(last('what time are we climbing up the volcano')).eql(['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
    done();
  });
  it("Should return ['take', 'me', 'semynak', 'to'] for last('take me to semynak')", (done) => {
    should(last('take me to semynak')).eql(['take', 'me', 'semynak', 'to']);
    done();
  });
  it("Should return ['massage', 'massage', 'massage', 'yes', 'yes'] for last('massage yes massage yes massage')", (done) => {
    should(last('massage yes massage yes massage')).eql(['massage', 'massage', 'massage', 'yes', 'yes']);
    done();
  });
  it("Should return ['a', 'and', 'take', 'dance', 'please', 'bintang'] for last('take bintang and a dance please')", (done) => {
    should(last('take bintang and a dance please')).eql(['a', 'and', 'take', 'dance', 'please', 'bintang']);
    done();
  });        
});