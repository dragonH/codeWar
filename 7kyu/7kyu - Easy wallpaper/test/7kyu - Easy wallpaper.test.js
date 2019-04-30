const wallpaper = require('../7kyu - Easy wallpaper');
const should = require('should');

describe('7kyu - Easy wallpaper', () => {
  it('Should return "sixteen" for wallpaper(6.3, 4.5, 3.29)', (done) => {
    should(wallpaper(6.3, 4.5, 3.29)).equal('sixteen');
    done();
  });
  it('Should return "sixteen" for wallpaper(7.8, 2.9, 3.29)', (done) => {
    should(wallpaper(7.8, 2.9, 3.29)).equal('sixteen');
    done();
  });
  it('Should return "seventeen" for wallpaper(6.3, 5.8, 3.13)', (done) => {
    should(wallpaper(6.3, 5.8, 3.13)).equal('seventeen');
    done();
  });
  it('Should return "ten" for wallpaper(4.4, 3.0, 2.75)', (done) => {
    should(wallpaper(4.4, 3.0, 2.75)).equal('ten');
    done();
  });
  it('Should return "eleven" for wallpaper(4.1, 3.3, 3.32)', (done) => {
    should(wallpaper(4.1, 3.3, 3.32)).equal('eleven');
    done();
  });        
});