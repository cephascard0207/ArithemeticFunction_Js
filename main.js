//ArithemeticFunction_Js
//Created by Cephas Cardozo

function add(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

//calculation-main
function calculate(num1, num2, operation){
  result = operation(num1, num2);
  return result;
}
