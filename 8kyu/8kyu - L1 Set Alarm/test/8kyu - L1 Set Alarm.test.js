const setAlarm = require('../8kyu - L1 Set Alarm');
const should = require('should');

describe('8kyu - L1 Set Alarm', () => {
  it('Should return false for setAlarm(true, true)', (done) => {
    should(setAlarm(true, true)).equal(false);
    done();
  });
  it('Should return false for setAlarm(false,true)', (done) => {
    should(setAlarm(false,true)).equal(false);
    done();
  });
  it('Should return true for setAlarm(true, false)', (done) => {
    should(setAlarm(true, false)).equal(true);
    done();
  });
  it('Should return false for setAlarm(false,false)', (done) => {
    should(setAlarm(false, false)).equal(false);
    done();
  });      
});