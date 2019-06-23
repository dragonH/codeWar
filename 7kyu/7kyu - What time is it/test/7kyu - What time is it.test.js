const getMilitaryTime = require('../7kyu - What time is it');
const should = require('should');

describe('7kyu - What time is it', () => {
  it("Should return 00:00:01 for getMilitaryTime('12:00:01AM')", (done) => {
    should(getMilitaryTime('12:00:01AM')).equal('00:00:01');
    done();
  });
  it("Should return 01:02:03 for getMilitaryTime('01:02:03AM')", (done) => {
    should(getMilitaryTime('01:02:03AM')).equal('01:02:03');
    done();
  });
  it("Should return 02:04:05 for getMilitaryTime('02:04:05AM')", (done) => {
    should(getMilitaryTime('02:04:05AM')).equal('02:04:05');
    done();
  });
  it("Should return 03:06:07 for getMilitaryTime('03:06:07AM')", (done) => {
    should(getMilitaryTime('03:06:07AM')).equal('03:06:07');
    done();
  });
  it("Should return 04:08:09 for getMilitaryTime('04:08:09AM')", (done) => {
    should(getMilitaryTime('04:08:09AM')).equal('04:08:09');
    done();
  });        
});