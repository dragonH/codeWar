module.exports = function hexWordSum( string ){
  return string.length === 0
    ? 0
    : string.toLowerCase()
            .split(' ')
            .filter(el => el.replace(/[abcdefos]/gi, '').length === 0)
            .reduce((pre, cur) => pre + parseInt(cur.replace(/s|o/gi, (match) => match === 's' ? '5' : '0'), 16), 0);
};