function addBinary(a,b) {
  let sum = a+b;
  let result = '';
  while(sum!==0){
    result+=sum%2;
    sum=Math.floor(sum/2);
  }
  return result.split('').reverse().join('');
}