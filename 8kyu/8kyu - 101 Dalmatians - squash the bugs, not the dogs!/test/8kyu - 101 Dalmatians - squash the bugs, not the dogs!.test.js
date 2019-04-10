const howManyDalmatians = require('../8kyu - 101 Dalmatians - squash the bugs, not the dogs!');
const should = require('should');
describe('8kyu - 101 Dalmatians - squash the bugs, not the dogs!', () => {
  it('Should return "More than a handful!" for howManyDalmatians(26)', (done) => {
    should(howManyDalmatians(26)).equal('More than a handful!');
    done();
  });
  it('Should return "Hardly any" for howManyDalmatians(8)', (done) => {
    should(howManyDalmatians(8)).equal('Hardly any');
    done();
  });
  it('Should return "More than a handful!" for howManyDalmatians(14)', (done) => {
    should(howManyDalmatians(14)).equal('More than a handful!');
    done();
  });
  it('Should return "Woah that\'s a lot of dogs!" for howManyDalmatians(80)', (done) => {
    should(howManyDalmatians(80)).equal('Woah that\'s a lot of dogs!');
    done();
  });
  it('Should return "101 DALMATIANS!!!" for howManyDalmatians(101)', (done) => {
    should(howManyDalmatians(101)).equal('101 DALMATIANS!!!');
    done();
  });      
});