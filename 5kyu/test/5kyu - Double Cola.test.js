const whoIsNext = require('../5kyu - Double Cola');
const should = require('should');
describe('5kyu - Double Cola', () => {
  let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
  it('Should return "Sheldon" for whoIsNext(names, 1)', (done) => {
    whoIsNext(names, 1).should.eql('Sheldon');
    done();
  });
  it('Should return "Penny" for whoIsNext(names, 1802)', (done) => {
    whoIsNext(names, 1802).should.eql('Penny');
    done();
  }); 
  it('Should return "Leonard" for whoIsNext(names, 28643950)', (done) => {
    whoIsNext(names, 28643950).should.eql('Leonard');
    done();
  });    
  it('Should return "Penny" for whoIsNext(names, 1000000000)', (done) => {
    whoIsNext(names, 1000000000).should.eql('Penny');
    done();
  });  
});