// 19 - Template Literals in JavaScript


// ==================================================
// 1. RANDOM SIMPLE PROGRAM
// ==================================================

console.log(`Learning Template Literals!`);

// Output:  Learning Template Literals!

// Explanation:  This is a simple string written using backticks.


// ==================================================
// 2. BASIC TEMPLATE LITERAL
// ==================================================

let message = `Hello World`;

console.log(message);

// Output:  Hello World

// Explanation:  A template literal is a string written using backticks.


// ❌ Error Program

let messageError = "Hello World;

console.log(messageError);

// Error: SyntaxError: Invalid or unexpected token

// Error Explanation: The string is missing the closing quote.


// ✅ Solution

let messageCorrect = `Hello World`;

console.log(messageCorrect);

// Output:  Hello World

// Solution Explanation:  We used matching backticks at the beginning and end.


// ==================================================
// 3. VARIABLE INSIDE TEMPLATE LITERAL
// ==================================================

let name = "Sahithya";

console.log(`Hello ${name}`);

// Output:  Hello Sahithya

// Explanation:  ${name} adds the value of name inside the string.


// ❌ Error Program

let nameError = "Sahithya";

console.log(`Hello ${usernameError}`);

// Error:   ReferenceError: usernameError is not defined

// Error Explanation:   usernameError was not created.


// ✅ Solution

let nameCorrect = "Sahithya";

console.log(`Hello ${nameCorrect}`);

// Output: Hello Sahithya

// Solution Explanation:  We used the variable that was created.


// ==================================================
// 4. MULTIPLE VARIABLES
// ==================================================

let firstName = "Sahithya";
let age = 24;

console.log(`Name: ${firstName}, Age: ${age}`);

// Output:  Name: Sahithya, Age: 24

// Explanation:  We can use more than one variable with ${}.


// ❌ Error Program

let firstNameError = "Sahithya";
let ageError = 24;

console.log(`Name: ${firstNameError}, Age: ${years}`);

// Error:   ReferenceError: years is not defined

// Error Explanation:
// years was not created.
// The variable is called age.


// ✅ Solution

let firstNameCorrect = "Sahithya";
let ageCorrect = 24;

console.log(`Name: ${firstNameCorrect}, Age: ${ageCorrect}`);

// Output:  Name: Sahithya, Age: 24

// Solution Explanation:  We used the correct variable names.


// ==================================================
// 5. EXPRESSION INSIDE TEMPLATE LITERAL
// ==================================================

let a = 10;
let b = 5;

console.log(`Total: ${a + b}`);

// Output:  Total: 15

// Explanation: We can perform calculations inside ${}.


// ❌ Error Program

let aError = 10;
let bError = 5;

console.log(`Total: ${aError + c}`);

// Error:  ReferenceError: c is not defined

// Error Explanation:  c does not exist in the program.


// ✅ Solution

let aCorrect = 10;
let bCorrect = 5;

console.log(`Total: ${aCorrect + bCorrect}`);

// Output:  Total: 15

// Solution Explanation:   We used the variables that were created.


// ==================================================
// 6. FUNCTION INSIDE TEMPLATE LITERAL
// ==================================================

function greet() {
    return "Hello";
}

console.log(`${greet()} Sahithya`);

// Output:  Hello Sahithya

// Explanation:
// We can call a function inside ${}.
// The returned value is added to the string.


// ❌ Error Program

function greetError() {
    return "Hello";
}

console.log(`${welcome()} Sahithya`);

// Error:  ReferenceError: welcome is not defined

// Error Explanation:   There is no function called welcome.


// ✅ Solution

function greetCorrect() {
    return "Hello";
}

console.log(`${greetCorrect()} Sahithya`);

// Output: Hello Sahithya

// Solution Explanation: We called the function that was created.


// ==================================================
// 7. OBJECT VALUE INSIDE TEMPLATE LITERAL
// ==================================================

let student = {
    name: "Sahithya"
};

console.log(`Name: ${student.name}`);

// Output:  Name: Sahithya

// Explanation:  We can use an object property inside ${}.


// ❌ Error Program

let studentError = {
    name: "Sahithya"
};

console.log(`Name: ${studentError.age.name}`);

// Error:  TypeError: Cannot read properties of undefined

// Error Explanation:
// age does not exist in the object.
// So JavaScript cannot read name from age.


// ✅ Solution

let studentCorrect = {
    name: "Sahithya"
};

console.log(`Name: ${studentCorrect.name}`);

// Output:   Name: Sahithya

// Solution Explanation:  We used the property that exists: name.


// ==================================================
// 8. ARRAY VALUE INSIDE TEMPLATE LITERAL
// ==================================================

let fruits = ["Apple", "Mango"];

console.log(`Fruit: ${fruits[0]}`);

// Output:  Fruit: Apple

// Explanation:   fruits[0] gets the first value from the array.


// ❌ Error Program

let fruitsError = ["Apple", "Mango"];

console.log(`Fruit: ${fruitsError[5].name}`);

// Error:   TypeError: Cannot read properties of undefined

// Error Explanation:  There is no item at index 5.


// ✅ Solution

let fruitsCorrect = ["Apple", "Mango"];

console.log(`Fruit: ${fruitsCorrect[0]}`);

// Output:  Fruit: Apple

// Solution Explanation:  Index 0 contains "Apple".


// ==================================================
// 9. MULTIPLE LINES
// ==================================================

let multiLine = `Hello
Welcome
Good Morning`;

console.log(multiLine);

// Output:
// Hello
// Welcome
// Good Morning

// Explanation:
// Template literals can easily contain multiple lines.


// ❌ Error Program

let multiLineError = "Hello
Welcome
Good Morning";

console.log(multiLineError);

// Error: SyntaxError: Invalid or unexpected token

// Error Explanation:  Normal quotes cannot directly contain multiple lines.


// ✅ Solution

let multiLineCorrect = `Hello
Welcome
Good Morning`;

console.log(multiLineCorrect);

// Output:
// Hello
// Welcome
// Good Morning

// Solution Explanation:
// Backticks allow the string to continue on multiple lines.


// ==================================================
// 10. JOINING TEXT AND VARIABLES
// ==================================================

let firstName2 = "Riya";
let age2 = 20;

console.log(`My name is ${firstName2} and I am ${age2}`);

// Output:   My name is Riya and I am 20

// Explanation:   Template literals join text and variables easily.


// ❌ Error Program

let firstNameError2 = "Sahithya";
let ageError2 = 24;

console.log(`My name is ${firstNameError2} and I am ${yearsError}`);

// Error:  ReferenceError: yearsError is not defined

// Error Explanation:  yearsError was not created.


// ✅ Solution

let firstNameCorrect2 = "Sahithya";
let ageCorrect2 = 24;

console.log(`My name is ${firstNameCorrect2} and I am ${ageCorrect2}`);

// Output:  My name is Sahithya and I am Sahithya

// Solution Explanation:  We used the correct variable names.


// ==================================================
// 11. CONDITIONAL EXPRESSION
// ==================================================

let age3 = 20;

console.log(`${age3 >= 18 ? "Adult" : "Minor"}`);

// Output:  Adult

// Explanation:
// The condition checks if age is 18 or more.
// If true, it prints Adult.


// ❌ Error Program

let ageError3 = 20;

console.log(`${ageError3 >= limit ? "Adult" : "Minor"}`);

// Error:  ReferenceError: limit is not defined

// Error Explanation:  limit was not created.


// ✅ Solution

let ageCorrect3 = 20;

console.log(`${ageCorrect3 >= 18 ? "Adult" : "Minor"}`);

// Output:  Adult

// Solution Explanation:   We used 18 directly as the condition limit.


// ==================================================
// 12. TEMPLATE LITERAL IN A FUNCTION
// ==================================================

function greetName(name) {
    return `Hello ${name}`;
}

console.log(greetName("Sahithya"));

// Output: Hello Sahithya

// Explanation:
// The function returns a template literal.
// The name is added using ${}.


// ❌ Error Program

function greetNameError(name) {
    return `Hello ${username}`;
}

console.log(greetNameError("Sahithya"));

// Error:  ReferenceError: username is not defined

// Error Explanation:  The parameter is called name, not username.


// ✅ Solution

function greetNameCorrect(name) {
    return `Hello ${name}`;
}

console.log(greetNameCorrect("Sahithya"));

// Output: Hello Sahithya

// Solution Explanation:  We used the correct parameter: name.


// ==================================================
// 13. TEMPLATE LITERAL WITH map()
// ==================================================

let names = ["Vishu", "Sahithya"];

let result = names.map(name => `Hello ${name}`);

console.log(result);

// Output:  ["Hello Vishu", "Hello Sahithya"]

// Explanation:
// map() goes through each name.
// The template literal creates a new message for each name.


// ❌ Error Program

let namesError = ["Vishu", "Sahithya"];

let resultError = namesError.map(name => `Hello ${username}`);

console.log(resultError);

// Error: ReferenceError: username is not defined

// Error Explanation:
// The parameter is called name.
// username does not exist.


// ✅ Solution

let namesCorrect = ["Vishu", "Sahithya"];

let resultCorrect = namesCorrect.map(name => `Hello ${name}`);

console.log(resultCorrect);

// Output:  ["Hello Vishu", "Hello Sahithya"]

// Solution Explanation:  We used the correct parameter name.


// ==================================================
// 14. TEMPLATE LITERAL WITH if
// ==================================================

let marks = 80;

let result2 = `${marks >= 35 ? "Pass" : "Fail"}`;

console.log(result2);

// Output: Pass

// Explanation: If marks are 35 or more, the result is Pass. Otherwise, it is Fail.


// ❌ Error Program

let marksError = 80;

let resultError2 = `${marksError >= passMark ? "Pass" : "Fail"}`;

console.log(resultError2);

// Error:   ReferenceError: passMark is not defined

// Error Explanation:   passMark was not created.


// ✅ Solution

let marksCorrect = 80;

let resultCorrect2 = `${marksCorrect >= 35 ? "Pass" : "Fail"}`;

console.log(resultCorrect2);

// Output:  Pass

// Solution Explanation:  We used 35 as the passing mark.


// ==================================================
// 15. TEMPLATE LITERAL VS +
// ==================================================

let name2 = "Sahithya";

// Using +
console.log("Hello " + name2);

// Using Template Literal
console.log(`Hello ${name2}`);

// Output:
// Hello Sahithya
// Hello Sahithya

// Explanation:
// Both methods give the same result.
// Template literals make joining text and variables easier.


// ❌ Error Program

let nameError2 = "Sahithya";

console.log(`Hello ${userName}`);

// Error:   ReferenceError: userName is not defined

// Error Explanation:
// userName was not created.
// The variable is called nameError2.


// ✅ Solution

let nameCorrect2 = "Sahithya";

console.log(`Hello ${nameCorrect2}`);

// Output:  Hello Sahithya

// Solution Explanation: We used the correct variable inside ${}.
