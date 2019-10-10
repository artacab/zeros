module.exports = function zeros(expression) {
  let arr = expression.split('*');
  let zero = {
    num2 : 0, 
    num5 : 0
  };
  arr.forEach(element => {
    if(element.slice(-2)==='!!'){
      for (let i = parseInt(element); i > 3; i-=2) {
        zeroCounter(i, zero);
      }
    }
    else{
      for (let i = parseInt(element); i > 1; i--) {
        zeroCounter(i, zero);
      }
    }
  });
return zero.num2 > zero.num5 ? zero.num5 : zero.num2;
}
let zeroCounter = function(zeros, zero) {
  while(true){
    if(zeros % 2 == 0){
      zero.num2++;
      zeros/=2;
      continue;
    }
    if(zeros % 5 == 0){
      zero.num5++;
      zeros/=5;
      continue;
    }
    break;
  }
}
