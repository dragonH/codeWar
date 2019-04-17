module.exports = function remove(s,n){
  for(let i = 0; i < n; i += 1) {
    s = s.replace('!','');
  }
  return s;
};