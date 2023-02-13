module.exports = function check(str, bracketsConfig) {
  let stack = [];
 
  for (let i=0; i<str.length; i++){
    if (str.length %2 != 0) {
      return false;
    };
    for (let j = 0; j < i.length; j++){
      let currentSymbol = str[i][0];
    }
    if (bracketsConfig.includes(currentSymbol)){
      stack.push(currentSymbol);
       }
       else {
        if (stack.length === 0){
          return false;
        }
       
  
        let topBrackets = stack[stack.length-1];
        if (bracketsConfig[currentSymbol] === topBrackets) {
          stack.pop();
        }
        else {
          return false;
        }
       }
  }
  return stack.length === 0;
}

