const repeater = require('../7kyu - Thinkful  String Drills Repeater');
const should = require('should');

describe('7kyu - Thinkful  String Drills Repeater', () => {
  it("Should return 'aaaaa' for repeater('a', 5)", (done) => {
    should(repeater('a', 5)).equal('aaaaa');
    done();
  });
  it("Should return 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa' for repeater('Na', 16)", (done) => {
    should(repeater('Na', 16)).equal('NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa');
    done();
  });
  it("Should return 'Wub Wub Wub Wub Wub Wub ' for repeater('Wub ', 6)", (done) => {
    should(repeater('Wub ', 6)).equal('Wub Wub Wub Wub Wub Wub ');
    done();
  });
  it("Should return 'A stopped clock is right twice a day. A stopped clock is right twice a day. ' for repeater('A stopped clock is right twice a day. ', 2)", (done) => {
    should(repeater('A stopped clock is right twice a day. ', 2)).equal('A stopped clock is right twice a day. A stopped clock is right twice a day. ');
    done();
  });
  it("Should return 'nineninenineninenineninenineninenine' for repeater('nine', 9)", (done) => {
    should(repeater('nine', 9)).equal('nineninenineninenineninenineninenine');
    done();
  });       
});