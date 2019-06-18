const partlist = require('../7kyu - Parts of a list');
const should = require('should');

describe('7kyu - Parts of a list', () => {
  it('Should return [["I", "wish I hadn\'t come"], ["I wish", "I hadn\'t come"], ["I wish I", "hadn\'t come"], ["I wish I hadn\'t", "come"]] for partlist(["I", "wish", "I", "hadn\'t", "come"])', (done) => {
    should(partlist(["I", "wish", "I", "hadn't", "come"])).eql([["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]);
    done();
  });
  it('Should return [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]] for partlist(["cdIw", "tzIy", "xDu", "rThG"])', (done) => {
    should(partlist(["cdIw", "tzIy", "xDu", "rThG"])).eql([["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]);
    done();
  });
  it('Should return [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]] for partlist(["vJQ", "anj", "mQDq", "sOZ"])', (done) => {
    should(partlist(["vJQ", "anj", "mQDq", "sOZ"])).eql([["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]);
    done();
  });
  it('Should return [["mkC", "WoiP pCHh mkv"], ["mkC WoiP", "pCHh mkv"], ["mkC WoiP pCHh", "mkv"]] for partlist(["mkC", "WoiP", "pCHh", "mkv"])', (done) => {
    should(partlist(["mkC", "WoiP", "pCHh", "mkv"])).eql([["mkC", "WoiP pCHh mkv"], ["mkC WoiP", "pCHh mkv"], ["mkC WoiP pCHh", "mkv"]]);
    done();
  });
  it('Should return [["vHW", "bPq pme jJr HGHV"], ["vHW bPq", "pme jJr HGHV"], ["vHW bPq pme", "jJr HGHV"], ["vHW bPq pme jJr", "HGHV"]] for partlist(["vHW", "bPq", "pme", "jJr", "HGHV"])', (done) => {
    should(partlist(["vHW", "bPq", "pme", "jJr", "HGHV"])).eql([["vHW", "bPq pme jJr HGHV"], ["vHW bPq", "pme jJr HGHV"], ["vHW bPq pme", "jJr HGHV"], ["vHW bPq pme jJr", "HGHV"]]);
    done();
  });        
});