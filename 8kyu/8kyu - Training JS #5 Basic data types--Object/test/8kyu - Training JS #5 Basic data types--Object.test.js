const animal = require('../8kyu - Training JS #5 Basic data types--Object');
const should = require('should');

describe('8kyu - Training JS #5 Basic data types--Object', () => {
  it('Should return "This white dog has 4 legs." for animal({name:"dog",legs:4,color:"white"})', (done) => {
    should(animal({name:"dog",legs:4,color:"white"})).equal('This white dog has 4 legs.');
    done();
  });
  it('Should return "This red cock has 2 legs." for animal({name:"cock",legs:2,color:"red"})', (done) => {
    should(animal({name:"cock",legs:2,color:"red"})).equal('This red cock has 2 legs.');
    done();
  });
  it('Should return "This gray rabbit has 4 legs." for animal({name:"rabbit",legs:4,color:"gray"})', (done) => {
    should(animal({name:"rabbit",legs:4,color:"gray"})).equal('This gray rabbit has 4 legs.');
    done();
  });    
});