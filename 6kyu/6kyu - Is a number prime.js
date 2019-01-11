function isPrime(num) {
  //TODO
  if(num<=1){
   return false;
  }else{
    let count=0;
    for(let i = 2; i<=num;i++){
      if(num%i===0){
        count++
      }
      if(count>=2){
      break;
      }
    }  
    return count>=2?false:true;
  }
}
