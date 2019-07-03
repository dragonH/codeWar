module.exports = function swap(st){
  return st.replace(/a|e|i|o|u/g, (match) => match.toUpperCase());
};