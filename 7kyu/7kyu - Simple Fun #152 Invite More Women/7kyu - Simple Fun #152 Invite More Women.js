module.exports = function inviteMoreWomen(L) {
  return L.length - (L.filter(el => el === -1).length * 2) > 0
};