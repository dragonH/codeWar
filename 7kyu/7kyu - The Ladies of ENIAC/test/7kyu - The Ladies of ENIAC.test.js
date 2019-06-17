const radLadies = require('../7kyu - The Ladies of ENIAC');
const should = require('should');

describe('7kyu - The Ladies of ENIAC', () => {
  it('Should return "KAY MCNULTY!" for radLadies("k?%35a&&/y@@@£5599 m93753&$$$c$n///79u??@@%l?975$t?%5y%&$3$1!")', (done) => {
    should(radLadies("k?%35a&&/y@@@£5599 m93753&$$$c$n///79u??@@%l?975$t?%5y%&$3$1!")).equal('KAY MCNULTY!');
    done();
  });
  it('Should return "MARLYN WESCOFF!" for radLadies("9?9?9?m335%$£@a791%&$r$$$l£@53$&y&n%$5@ $£5577w&7e931%s$£c$o%%%f351f??%!%%")', (done) => {
    should(radLadies("9?9?9?m335%$£@a791%&$r$$$l£@53$&y&n%$5@ $£5577w&7e931%s$£c$o%%%f351f??%!%%")).equal('MARLYN WESCOFF!');
    done();
  });
  it('Should return "FRAN BILAS!" for radLadies("%&$557f953//1/$£@%r%935$$£a@£3111$@???%n???5 $%157b%///$i%55&31£@l?%&$$a%@£$s5757!$$%%%%53")', (done) => {
    should(radLadies("%&$557f953//1/$£@%r%935$$£a@£3111$@???%n???5 $%157b%///$i%55&31£@l?%&$$a%@£$s5757!$$%%%%53")).equal('FRAN BILAS!');
    done();
  });
  it('Should return "RUTH LICHTERMAN!" for radLadies("///$%&£$553791£r357%??@$%u?$%@7993111£@$%t£$h3% 3$£l$311i3%@?&c3£h%&t&&?%11e%$?@11957r79%£&£m$$a55n1!111%%")', (done) => {
    should(radLadies("///$%&£$553791£r357%??@$%u?$%@7993111£@$%t£$h3% 3$£l$311i3%@?&c3£h%&t&&?%11e%$?@11957r79%£&£m$$a55n1!111%%")).equal('RUTH LICHTERMAN!');
    done();
  });
  it('Should return "ADELE GOLDSTINE!" for radLadies("??£@%&a5d15??e599713%l%%e%75913 1£$%&@g@£%o&$@13l5d11s$%&t15i9n&5%%@%e@£$!£%$£")', (done) => {
    should(radLadies("??£@%&a5d15??e599713%l%%e%75913 1£$%&@g@£%o&$@13l5d11s$%&t15i9n&5%%@%e@£$!£%$£")).equal('ADELE GOLDSTINE!');
    done();
  });    
});