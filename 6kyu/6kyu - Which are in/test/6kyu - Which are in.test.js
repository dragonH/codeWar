const InArray = require('../6kyu - Which are in');
const should = require('should');

const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
describe('5kyu - Which are in', () => {
    it('should return ["arp", "live", "strong"] for InArray(a1, a2)', (done) => {
      a1 = ["arp", "live", "strong"];
      InArray(a1, a2).should.eql(["arp", "live", "strong"]);
      done();
    });
    it('should return ["live", "strong"] for InArray(a1, a2)', (done) => {
      a1 = ["xyz", "live", "strong"];
      InArray(a1, a2).should.eql(["live", "strong"]);
      done();
    });
    it('should return ["arp", "live", "strong"] for InArray(a1, a2)', (done) => {
      a1 = ["live", "strong", "arp"];
      InArray(a1, a2).should.eql(["arp", "live", "strong"]);
      done();
    });
    it('should return ["arp", "live", "strong"] for InArray(a1, a2)', (done) => {
      a1 = ["live", "strong", "lyal", "lysh", "arp"]
      InArray(a1, a2).should.eql(["arp", "live", "strong"]);
      done();
    });
    it('should return [] for InArray(a1, a2)', (done) => {
      a1 = []
      InArray(a1, a2).should.eql([]);
      done();
    });            
});