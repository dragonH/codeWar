const correct = require('../8kyu - Correct the mistakes of the character recognition software');
const should = require('should');

describe('8kyu - Correct the mistakes of the character recognition software', () => {
  it('Should return "IF-RUDYARD KIPLING" for correct("1F-RUDYARD K1PL1NG")', (done) => {
    should(correct("1F-RUDYARD K1PL1NG")).equal('IF-RUDYARD KIPLING');
    done();
  });
  it('Should return "ROBERT MERLE - THE DAY OF THE DOLPHIN" for correct("R0BERT MERLE - THE DAY 0F THE D0LPH1N")', (done) => {
    should(correct("R0BERT MERLE - THE DAY 0F THE D0LPH1N")).equal('ROBERT MERLE - THE DAY OF THE DOLPHIN');
    done();
  });
  it('Should return "RICHARD P. FEYNMAN - STATISTICAL MECHANICS" for correct("R1CHARD P. FEYNMAN - 5TAT15T1CAL MECHAN1C5")', (done) => {
    should(correct("R1CHARD P. FEYNMAN - 5TAT15T1CAL MECHAN1C5")).equal('RICHARD P. FEYNMAN - STATISTICAL MECHANICS');
    done();
  });
  it('Should return "ERNEST HEMINGWAY - FOR WHOM THE BELL TOLLS" for correct("ERNE5T HEM1NGWAY - F0R WH0M THE BELL T0LL5")', (done) => {
    should(correct("ERNE5T HEM1NGWAY - F0R WH0M THE BELL T0LL5")).equal('ERNEST HEMINGWAY - FOR WHOM THE BELL TOLLS');
    done();
  });
  it('Should return "ERNEST HEMINGWAY - THE OLD MAN AND THE SEA" for correct("ERNE5T HEM1NGWAY - THE 0LD MAN AND THE 5EA")', (done) => {
    should(correct("ERNE5T HEM1NGWAY - THE 0LD MAN AND THE 5EA")).equal('ERNEST HEMINGWAY - THE OLD MAN AND THE SEA');
    done();
  });        
});