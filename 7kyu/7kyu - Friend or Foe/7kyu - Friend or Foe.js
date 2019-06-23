module.exports = function friend(friends){
  return friends.filter(name => name.length === 4);
}