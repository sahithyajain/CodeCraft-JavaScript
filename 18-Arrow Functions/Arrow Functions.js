// 18 - Arrow Functions in JavaScript
 

// ==================================================
// 1. RANDOM SIMPLE PROGRAM
// ==================================================

console.log("Learning Arrow Functions!");

// Output: Learning Arrow Functions!

// Explanation: This program prints a simple message.


/*
==================================================
2. BASIC ARROW FUNCTION
==================================================
*/

const greet = () => {
    console.log("Hello");
};

greet();

// Output: Hello

// Explanation:
// greet is an arrow function.
// It prints "Hello" when we call greet().


// ❌ Error Program

// greet();

// Error:
// greet is not a function

// Error Explanation:
// If greet is changed or removed before calling it,
// JavaScript cannot call it as a function.


// ✅ Solution

const sayHello = () => {
    console.log("Hello");
};

sayHello();

// Output:
// Hello

// Solution Explanation:
// sayHello is an arrow function.
// We call it using sayHello().


// ==================================================
// 3. ARROW FUNCTION WITH ONE PARAMETER
// ==================================================

const greetName = name => {
    console.log("Hello " + name);
};

greetName("Riya");

// Output:
// Hello Riya

// Explanation:
// name is the parameter.
// "Riya" is given to the function.
// The function prints Hello Riya.


// ❌ Error Program

const greetUser = name => {
    console.log("Hello " + username);
};

greetUser("Riya");

// Error:
// username is not defined

// Error Explanation:
// The parameter is name.
// But we used username, which is not defined.


// ✅ Solution

const greetUserCorrect = name => {
    console.log("Hello " + name);
};

greetUserCorrect("Riya");

// Output:
// Hello Riya

// Solution Explanation:
// We use the correct parameter name: name.


// ==================================================
// 4. ARROW FUNCTION WITH MULTIPLE PARAMETERS
// ==================================================

const add = (a, b) => {
    console.log(a + b);
};

add(10, 5);

// Output:
// 15

// Explanation:
// a gets 10 and b gets 5.
// The function adds both values.


// ❌ Error Program

const addNumbers = (a, b) => {
    console.log(a + c);
};

addNumbers(10, 5);

// Error:
// c is not defined

// Error Explanation:
// The function has a and b.
// c is not defined.


// ✅ Solution

const addCorrect = (a, b) => {
    console.log(a + b);
};

addCorrect(10, 5);

// Output:
// 15

// Solution Explanation:
// We use the correct parameters a and b.


// ==================================================
// 5. ARROW FUNCTION WITH NO PARAMETER
// ==================================================

const message = () => {
    console.log("Welcome");
};

message();

// Output:
// Welcome

// Explanation:
// This function does not need any parameter.
// So we use empty brackets ().


// ❌ Error Program

const messageError = () => {
    console.log(messageText);
};

messageError();

// Error:
// messageText is not defined

// Error Explanation:
// messageText was not defined anywhere.


// ✅ Solution

const messageCorrect = () => {
    console.log("Welcome");
};

messageCorrect();

// Output:
// Welcome

// Solution Explanation:
// We use the correct value "Welcome".


// ==================================================
// 6. ARROW FUNCTION WITH RETURN
// ==================================================

const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(4, 5));

// Output:
// 20

// Explanation:
// The function multiplies a and b.
// return sends the answer back.
// The answer is 20.


// ❌ Error Program

const multiplyError = (a, b) => {
    return a * c;
};

console.log(multiplyError(4, 5));

// Error:
// c is not defined

// Error Explanation:
// c is not defined in the function.


// ✅ Solution

const multiplyCorrect = (a, b) => {
    return a * b;
};

console.log(multiplyCorrect(4, 5));

// Output:
// 20

// Solution Explanation:
// We use the correct parameters a and b.


// ==================================================
// 7. IMPLICIT RETURN
// ==================================================

const square = n => n * n;

console.log(square(5));

// Output:
// 25

// Explanation:
// The answer is returned automatically.
// We do not write return.


// ❌ Error Program

const squareError = n => {
    n * n;
};

console.log(squareError(5));

// Output:
// undefined

// Error Explanation:
// When {} are used, the value is not returned
// unless we write return.


// ✅ Solution

const squareCorrect = n => n * n;

console.log(squareCorrect(5));

// Output:
// 25

// Solution Explanation:
// There is one expression.
// Its value is returned automatically.


// ==================================================
// 8. ARROW FUNCTION WITH ONE EXPRESSION
// ==================================================

const double = n => n * 2;

console.log(double(6));

// Output:
// 12

// Explanation:
// The function has one expression.
// The answer is automatically returned.


// ❌ Error Program

const doubleError = n => {
    n * 2;
};

console.log(doubleError(6));

// Output:
// undefined

// Error Explanation:
// Curly brackets are used without return.
// So the function returns undefined.


// ✅ Solution

const doubleCorrect = n => n * 2;

console.log(doubleCorrect(6));

// Output:
// 12

// Solution Explanation:
// We use a single expression without curly brackets.
// Its value is returned automatically.


// ==================================================
// 9. ARROW FUNCTION WITH MULTIPLE STATEMENTS
// ==================================================

const calculate = (a, b) => {
    let sum = a + b;
    console.log(sum);
};

calculate(10, 5);

// Output:
// 15

// Explanation:
// First, a + b is stored in sum.
// Then sum is printed.


// ❌ Error Program

const calculateError = (a, b) => {
    let sum = a + b;
    console.log(total);
};

calculateError(10, 5);

// Error:
// total is not defined

// Error Explanation:
// We created sum.
// But we tried to print total.
// total does not exist.


// ✅ Solution

const calculateCorrect = (a, b) => {
    let sum = a + b;
    console.log(sum);
};

calculateCorrect(10, 5);

// Output:
// 15

// Solution Explanation:
// We print the variable that we created: sum.


// ==================================================
// 10. ARROW FUNCTION AS A CALLBACK
// ==================================================

function run(callback) {
    callback();
}

run(() => {
    console.log("Hello");
});

// Output:
// Hello

// Explanation:
// The arrow function is passed to run().
// run() calls the arrow function.
// So "Hello" is printed.


// ❌ Error Program

function runError(callback) {
    callback();
}

runError("Hello");

// Error:
// callback is not a function

// Error Explanation:
// "Hello" is a string, not a function.
// So it cannot be called as callback().


// ✅ Solution

function runCorrect(callback) {
    callback();
}

runCorrect(() => {
    console.log("Hello");
});

// Output:
// Hello

// Solution Explanation:
// We pass an arrow function as the callback.
// runCorrect() then calls it.


// ==================================================
// 11. ARROW FUNCTION WITH forEach()
// ==================================================

let names = ["Asha", "Riya", "Anu"];

names.forEach(name => {
    console.log(name);
});

// Output:
// Asha
// Riya
// Anu

// Explanation:
// forEach() runs the arrow function for every item.
// Each name is printed.


// ❌ Error Program

let students = ["Asha", "Riya"];

students.forEach(student => {
    console.log(name);
});

// Error:
// name is not defined

// Error Explanation:
// The parameter is student.
// But we used name, which is not defined here.


// ✅ Solution

let studentsCorrect = ["Asha", "Riya"];

studentsCorrect.forEach(student => {
    console.log(student);
});

// Output:
// Asha
// Riya

// Solution Explanation:
// We use the correct parameter: student.


// ==================================================
// 12. ARROW FUNCTION WITH map()
// ==================================================

let numbers = [1, 2, 3];

let result = numbers.map(n => n * 2);

console.log(result);

// Output:
// [2, 4, 6]

// Explanation:
// map() takes each number.
// The arrow function multiplies it by 2.
// A new array is created.


// ❌ Error Program

let numbersError = [1, 2, 3];

let resultError = numbersError.map(n => n * x);

console.log(resultError);

// Error:
// x is not defined

// Error Explanation:
// x does not exist in the program.
// So JavaScript gives an error.


// ✅ Solution

let numbersCorrect = [1, 2, 3];

let resultCorrect = numbersCorrect.map(n => n * 2);

console.log(resultCorrect);

// Output:
// [2, 4, 6]

// Solution Explanation:
// We use 2, which is a valid value.
// map() creates the new array.


// ==================================================
// 13. ARROW FUNCTION WITH OBJECTS
// ==================================================

let student = {
    name: "Riya"
};

const showName = () => {
    console.log(student.name);
};

showName();

// Output:
// Riya

// Explanation:
// The arrow function gets the name from the object.
// student.name gives "Riya".


// ❌ Error Program

let studentError = {
    name: "Riya"
};

const showStudent = () => {
    console.log(studentError.age.name);
};

showStudent();

// Error:
// Cannot read properties of undefined

// Error Explanation:
// studentError.age does not exist.
// So JavaScript cannot read name from it.


// ✅ Solution

let studentCorrect = {
    name: "Riya"
};

const showStudentCorrect = () => {
    console.log(studentCorrect.name);
};

showStudentCorrect();

// Output:
// Riya

// Solution Explanation:
// We access the property that exists: name.


// ==================================================
// 14. NORMAL FUNCTION VS ARROW FUNCTION
// ==================================================

// Normal Function

function addNormal(a, b) {
    return a + b;
}

console.log(addNormal(10, 5));

// Output:
// 15


// Arrow Function

const addArrow = (a, b) => a + b;

console.log(addArrow(10, 5));

// Output:
// 15

// Explanation:
// Both functions do the same job.
// The arrow function is shorter.


// ❌ Error Program

const addError = (a, b) => {
    a + b;
};

console.log(addError(10, 5));

// Output:
// undefined

// Error Explanation:
// The function uses {} but does not use return.
// So the answer is not returned.


// ✅ Solution

const addArrowCorrect = (a, b) => a + b;

console.log(addArrowCorrect(10, 5));

// Output:
// 15

// Solution Explanation:
// There is one expression.
// Its value is returned automatically.


// ==================================================
// 15. ARROW FUNCTION AND this
// ==================================================

let person = {
    name: "Sahithya",

    showName() {
        const show = () => {
            console.log(this.name);
        };

        show();
    }
};

person.showName();

// Output:
// Riya

// Explanation:
// The arrow function does not have its own this.
// It uses this from showName().
// Here, this refers to person.


// ❌ Error Program

let personError = {
    name: "Sahithya",

    showName: () => {
        console.log(this.name);
    }
};

personError.showName();

// Output:
// undefined

// Error Explanation:
// The arrow function does not have its own this.
// Here, this does not refer to personError.
// So this.name is undefined.


// ✅ Solution

let personCorrect = {
    name: "Sahithya",

    showName() {
        const show = () => {
            console.log(this.name);
        };

        show();
    }
};

personCorrect.showName();

// Output: Sahithya

// Solution Explanation:
// showName() is a normal method.
// The arrow function gets this from showName().
// So this.name gives "Sahithya".
