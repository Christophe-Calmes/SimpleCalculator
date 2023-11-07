console.log("Hello wilders");
const firstValue = 1;
const secondValue = 2;
const operator = "/";
//console.log(firstValue);
//console.log(secondValue);
//console.log(operator);
const calculator = (firstValue, secondValue, operator) => {
    let result = '';
    switch (operator) {
        case "+":
         result = firstValue + secondValue;
            break;
         
        case "-":
       result = firstValue - secondValue;
            break;
           
        case "*":
        result = firstValue * secondValue;
            break;
         
        case "/":
        result = firstValue / secondValue;
            break;
    
        default:
            result = "Error";
            break;
    }

    return result;
}
console.log(calculator(firstValue, secondValue, operator));