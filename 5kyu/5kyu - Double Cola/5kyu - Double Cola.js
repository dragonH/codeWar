module.exports =  function whoIsNext(names, r){
  let baseNum = names.length;
  let sum = 0;
  let pointer = 0;
  while (((baseNum * Math.pow(2, pointer + 1)) - baseNum) < r) {
    sum = ((baseNum * Math.pow(2, pointer + 1)) - baseNum);
    pointer ++;
  }
  let position = Math.floor((r - (sum+1)) / Math.pow(2, pointer));
  return names[position]
}
