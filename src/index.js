module.exports = function check(str, bracketsConfig) {
  let stack = [];
 
  for (let i=0; i<str.length; i++){
    if (str.length %2 != 0) {
      return false;
    };
  
   for ( let j = 1; j < bracketsConfig.length; j++){
         let currentSymbol = str[i];
  
     if (bracketsConfig[j][0].includes(currentSymbol)) {
      stack.push(currentSymbol);
       }
       else {
        if (stack.length === 0){
          return false;
        }
       
       
         let pair = bracketsConfig[j][1];
        let topBrackets = stack[stack.length-1];
        if (pair[currentSymbol] === topBrackets) {
          stack.pop();
        }

         else {
          return false;
        }
        

       }
  }
 
  return stack.length === 0;
}

}