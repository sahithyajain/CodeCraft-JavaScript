// 🔧 JavaScript Functions


// =====================================
// 1. Function Declaration
// =====================================


function greet() {
    console.log("Hello!");
}

greet();

// Output: Hello!

// Explanation: A function declaration is used to create a function.



// ❌ Error Program

function greetUser() {
    console.log("Hello!");
}

console.log(greetUser);

// Output:  [Function: greetUser]

// Explanation: This does not run the function because () is missing.


// Correct:  greetUser();



// =====================================
// 2. Function Call
// =====================================

function welcome() {
    console.log("Welcome to JavaScript!");
}

welcome();

// Output:   Welcome to JavaScript!

// Explanation:  A function call runs the function.



// ❌ Error Program

function hello() {
    console.log("Hello!");
}

// Nothing is printed.

// Explanation:  The function was created but was not called.


// Correct:   hello();



// =====================================
// 3. Parameters
// =====================================

function greetName(name) {
    console.log("Hello " + name);
}

greetName("Sahithya");

// Output:  Hello Sahithya

// Explanation:  A parameter is a value received by a function.


// ❌ Error Program

function greetPerson(name) {
    console.log("Hello " + name);
}

greetPerson();

// Output:  Hello undefined

// Explanation:  No argument was passed, so the parameter gets undefined.



// =====================================
// 4. Arguments
// =====================================

function add(a, b) {
    console.log(a + b);
}

add(10, 5);

// Output:  15

// Explanation:  Arguments are the values passed to a function.



// ❌ Error Program

function addNumbers(a, b) {
    console.log(a + b);
}

addNumbers(10);

// Output:  NaN

// Explanation:   The second argument is missing, so b becomes undefined.



// =====================================
// 5. Multiple Parameters
// =====================================

function multiply(a, b) {
    console.log(a * b);
}

multiply(5, 2);

// Output:  10

// Explanation:  A function can receive multiple parameters.



// ❌ Error Program

function multiplyNumbers(a, b) {
    console.log(a * b);
}

multiplyNumbers(5);

// Output: NaN

// Explanation: Multiplication with undefined gives NaN.



// =====================================
// 6. Return
// =====================================

function addValues(a, b) {
    return a + b;
}

let result = addValues(10, 5);

console.log(result);

// Output:  15

// Explanation:  return sends a value back from the function.



// ❌ Error Program

function subtract(a, b) {
    a - b;
}

let answer = subtract(10, 5);

console.log(answer);

// Output:  undefined

// Explanation:  The function calculates the value but does not return it.



// =====================================
// 7. Arrow Function
// =====================================

const multiplyValues = (a, b) => {
    return a * b;
};

console.log(multiplyValues(5, 2));

// Output:  10

// Explanation:  An arrow function is a shorter way to write a function.



// ❌ Error Program

const divide = (a, b) => {
    return a / b;
};

console.log(divide(10));

// Output: NaN

// Explanation:  The second argument is missing, so b is undefined.



// =====================================
// 8. Function Without Parameter
// =====================================

function welcomeUser() {
    console.log("Welcome!");
}

welcomeUser();

// Output:   Welcome!

// Explanation:  A function can work without receiving any parameters.



// ❌ Error Program

function sayHello() {
    console.log("Hello!");
}

sayHello(10);

// Output:  Hello!

// Explanation:  Extra arguments are ignored when the function has no parameters.



// =====================================
// 9. Function Returning a Value
// =====================================

function square(number) {
    return number * number;
}

let squareResult = square(5);

console.log(squareResult);

// Output:  25

// Explanation:  A function can calculate a value and return the result.



// ❌ Error Program

function squareNumber(number) {
    return number * number;
}

console.log(squareNumber());

// Output:  NaN

// Explanation:  No number was passed, so the parameter is undefined.



// =====================================
// ⭐ Practice
// =====================================

// Create a function called cube that takes a number and returns its cube.

// Example:
// Input: 3
// Output: 27
