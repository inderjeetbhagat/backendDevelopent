/*Problem 3: Callback Functions
Create a function named performOperation that takes two numbers and a callback
function as parameters. The callback function should determine the operation to be performed
(addition, subtraction, multiplication, or division) on the two numbers. Call the
performOperation function with different numbers and callback functions for each
mathematical operation.
*/

function performOperation(a, b, operation) {
let op = operation(a,b);
console.log(op);

} 

function addition(a,b) {
    return a + b;
}
function subtraction(a,b) {
    return a - b;
}
function multiplication(a,b) {
    return a * b;
}

performOperation(10, 15, addition);
performOperation(10, 15, multiplication);