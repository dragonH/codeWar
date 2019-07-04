const dayAndTime = require('../7kyu - After Midnight');
const should = require('should');

describe('7kyu - After Midnight', () => {
  it('Should return "Sunday 00:00" for dayAndTime(0)', (done) => {
    should(dayAndTime(0)).equal('Sunday 00:00');
    done();
  });
  it('Should return "Saturday 23:57" for dayAndTime(-3)', (done) => {
    should(dayAndTime(-3)).equal('Saturday 23:57');
    done();
  });
  it('Should return "Sunday 00:45" for dayAndTime(45)', (done) => {
    should(dayAndTime(45)).equal('Sunday 00:45');
    done();
  });
  it('Should return "Sunday 12:39" for dayAndTime(759)', (done) => {
    should(dayAndTime(759)).equal('Sunday 12:39');
    done();
  });
  it('Should return "Sunday 20:36" for dayAndTime(1236)', (done) => {
    should(dayAndTime(1236)).equal('Sunday 20:36');
    done();
  });        
});