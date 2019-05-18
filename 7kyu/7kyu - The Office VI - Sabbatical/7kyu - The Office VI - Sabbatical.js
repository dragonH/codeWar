module.exports = function sabb(x, val, happ){
  return x.replace(/[^sabbatical]/gi, '').split('').filter(el => el !== ' ').length + val + happ > 22
    ? 'Sabbatical! Boom!'
    : 'Back to your desk, boy.';
};