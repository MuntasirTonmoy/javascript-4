//* declaring function wit multiple input parameter

//function adding two numbers
function addTwoNumbers(num1, num2) //we will take two input thats why we declare two input parameter
{
    console.log('the first number is ', num1, 'the second number is ', num2);
    var total = num1 + num2;
    return total; //funtion will return the value of total variable.
}

//function subtracting two numbers
function subTwoNumbers(num1, num2) {
    console.log('the first number is ', num1, 'the second number is ', num2);
    var total = num1 - num2;
    return total;
}

//function multiplying two numbers 
function multiplyTwoNumbers(num1, num2) {
    console.log('the first number is ', num1, 'the second number is ', num2);
    var total = num1 * num2;
    return total;
}

//function deviding two numbers 
function divideTwoNumbers(num1, num2) {
    console.log('the first number is ', num1, 'the second number is ', num2);
    var total = num1 / num2;
    return total;
}


var result = addTwoNumbers(2, 6); //calling the function
console.log('their sum is ', result);

console.log('their subtraction result is ', subTwoNumbers(50, 5)); // calling the function and giving the value inside it .we can also put value inside variable than write variable name inside () of function.
console.log('their multiplication result is ', multiplyTwoNumbers(4, 5));
console.log('their division result is ', divideTwoNumbers(100, 5));


