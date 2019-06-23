const friend = require('../7kyu - Friend or Foe');
const should = require('should');

describe('7kyu - Friend or Foe', () => {
  it('Should return ["Ryan", "Mark"] for friend(["Ryan", "Kieran", "Mark"])', (done) => {
    should(friend(["Ryan", "Kieran", "Mark"])).eql(["Ryan", "Mark"]);
    done();
  });
  it('Should return ["Ryan"] for friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])', (done) => {
    should(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])).eql(["Ryan"]);
    done();
  });
  it('Should return ["Jimm", "Cari", "aret"] for friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])', (done) => {
    should(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])).eql(["Jimm", "Cari", "aret"]);
    done();
  });
  it('Should return ["Love", "Your", "Face"] for friend(["Love", "Your", "Face", "1"])', (done) => {
    should(friend(["Love", "Your", "Face", "1"])).eql(["Love", "Your", "Face"]);
    done();
  });
  it('Should return ["Hell", "badd", "word"] for friend(["Hell", "Is", "a", "badd", "word"])', (done) => {
    should(friend(["Hell", "Is", "a", "badd", "word"])).eql(["Hell", "badd", "word"]);
    done();
  });        
});