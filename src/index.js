module.exports = function check(str, bracketsConfig) {
  let stack = [];
 
 
  for (let i=0; i<str.length; i++){
    let currentSymbol = str[i];
    let find = false;
      for (let j=0; j < bracketsConfig.length; j ++ ){
        const openbrackets = bracketsConfig[j][0];
           //const dictionary = {[bracketsConfig[j][1]]: bracketsConfig[j][0]};
           
       

            if (openbrackets.includes(currentSymbol)) {
                find = true;
                if (openbrackets == bracketsConfig[j][1]) {
                    if (stack[stack.length - 1] == openbrackets) {
                        stack.pop();
                        break;
                    }
                }
                stack.push(bracketsConfig[j][1]);
                break;
            }
        }
        if (!find) {
            if (stack.length == 0 || currentSymbol != stack[stack.length - 1]) {
                return false;
            }
            stack.pop();
        }
    }
          
  
            
  return stack.length === 0;
}