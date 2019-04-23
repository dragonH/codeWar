const gooseFilter = require('../8kyu - Filter out the geese');
const should = require('should');

describe('8kyu - Filter out the geese', () => {
  it('Should return  ["Mallard", "Barbary", "Hook Bill"] for gooseFilter("African")', (done) => {
    const birds = ["Mallard", "Barbary", "Hook Bill"];
    should(gooseFilter(birds)).eqls(["Mallard", "Barbary", "Hook Bill"]);
    done();
  });
});