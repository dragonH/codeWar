var moveZeros = function (arr) {
  let count = 0;
  arr.forEach((el, index) => {
    if(el===0){
      delete arr[index]
      count++;
    }
  })
  let newArr = arr.filter((el) => {
    return typeof(el)!=='undefined'
  })
  for(let i = 0; i<count;i++){
    newArr.push(0);
  }
  return newArr
}