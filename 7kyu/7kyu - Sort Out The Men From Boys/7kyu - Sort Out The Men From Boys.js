module.exports = function menFromBoys(arr){
  return [...new Set(arr)].filter(el => el % 2 === 0).sort((a, b) => a - b)
            .concat([...new Set(arr)].filter(el => el % 2 != 0).sort((a, b) => b - a))
};