const Kata = require('../8kyu - Volume of a Cuboid');
const should = require('should');

describe('8kyu - Volume of a Cuboid', () => {
  it('Should return 60 for Kata.getVolumeOfCuboid(2, 5, 6)', (done) => {
    should(Kata.getVolumeOfCuboid(2, 5, 6)).equal(60);
    done();
  });
  it('Should return 94.5 for Kata.getVolumeOfCuboid(6.3, 3, 5)', (done) => {
    should(Kata.getVolumeOfCuboid(6.3, 3, 5)).equal(94.5);
    done();
  });  
});