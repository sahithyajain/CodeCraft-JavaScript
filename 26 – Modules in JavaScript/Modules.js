// 26 - Modules in JavaScript


// ==================================================
// 1. RANDOM SIMPLE PROGRAM
// ==================================================

// math.js
export const add = (a, b) => {
    return a + b;
};

// app.js
import { add } from "./math.js";

console.log(add(10, 20));

// Output: 30

// Explanation:
// export shares the function.
// import brings the function into another file.


// ❌ Error Program

// math.js
const addError = (a, b) => {
    return a + b;
};

// app.js
import { addError } from "./math.js";

console.log(addError(10, 20));

// Error:  SyntaxError: The requested module does not provide an export named 'addError'

// Error Explanation:  addError was not exported from math.js.


// ✅ Solution

// math.js
export const addCorrect = (a, b) => {
    return a + b;
};

// app.js
import { addCorrect } from "./math.js";

console.log(addCorrect(10, 20));

// Output: 30

// Solution Explanation:  The function is exported first and then imported.


// ==================================================
// 2. EXPORT
// ==================================================

// user.js
export const name = "Riya";

// app.js
import { name } from "./user.js";

console.log(name);

// Output:
// Riya

// Explanation:
// export makes name available to another file.


// ❌ Error Program

// user.js
const nameError = "Riya";

// app.js
import { nameError } from "./user.js";

// Error:  SyntaxError

// Error Explanation:  nameError was not exported.


// ✅ Solution

// user.js
export const nameCorrect = "Riya";

// app.js
import { nameCorrect } from "./user.js";

console.log(nameCorrect);

// Output:
// Riya

// Solution Explanation:
// We export nameCorrect before importing it.


// ==================================================
// 3. IMPORT
// ==================================================

// user.js
export const city = "Mysore";

// app.js
import { city } from "./user.js";

console.log(city);

// Output:  Mysore

// Explanation:   import brings exported code into another file.


// ❌ Error Program

// user.js
export const cityError = "Mysore";

// app.js
import { country } from "./user.js";

// Error:
// SyntaxError

// Error Explanation:
// country was not exported from user.js.


// ✅ Solution

// user.js
export const country = "India";

// app.js
import { country } from "./user.js";

console.log(country);

// Output:
// India

// Solution Explanation:
// country is exported and then imported.


// ==================================================
// 4. NAMED EXPORT
// ==================================================

// user.js
export const age = 20;

// app.js
import { age } from "./user.js";

console.log(age);

// Output:
// 20

// Explanation:
// age is exported using its name.


// ❌ Error Program

// user.js
export const ageError = 20;

// app.js
import { studentAge } from "./user.js";

// Error:
// SyntaxError

// Error Explanation:
// studentAge was not exported with that name.


// ✅ Solution

// user.js
export const studentAge = 20;

// app.js
import { studentAge } from "./user.js";

console.log(studentAge);

// Output:
// 20

// Solution Explanation:
// The imported name matches the exported name.


// ==================================================
// 5. NAMED IMPORT
// ==================================================

// user.js
export const marks = 90;

// app.js
import { marks } from "./user.js";

console.log(marks);

// Output:
// 90

// Explanation:
// Named import uses the exported name.


// ❌ Error Program

// user.js
export const marksError = 90;

// app.js
import { score } from "./user.js";

// Error:
// SyntaxError

// Error Explanation:
// score is not the exported name.


// ✅ Solution

// user.js
export const score = 90;

// app.js
import { score } from "./user.js";

console.log(score);

// Output:
// 90

// Solution Explanation:
// The correct exported name is imported.


// ==================================================
// 6. EXPORTING A FUNCTION
// ==================================================

// math.js
export function multiply(a, b) {
    return a * b;
}

// app.js
import { multiply } from "./math.js";

console.log(multiply(5, 4));

// Output:
// 20

// Explanation:
// A function can also be exported.


// ❌ Error Program

// math.js
function multiplyError(a, b) {
    return a * b;
}

// app.js
import { multiplyError } from "./math.js";

// Error:
// SyntaxError

// Error Explanation:
// The function was not exported.


// ✅ Solution

// math.js
export function multiplyCorrect(a, b) {
    return a * b;
}

// app.js
import { multiplyCorrect } from "./math.js";

console.log(multiplyCorrect(5, 4));

// Output:
// 20

// Solution Explanation:
// The function is exported and then imported.


// ==================================================
// 7. IMPORTING A FUNCTION
// ==================================================

// math.js
export function subtract(a, b) {
    return a - b;
}

// app.js
import { subtract } from "./math.js";

console.log(subtract(20, 5));

// Output:
// 15

// Explanation:
// The imported function can be called normally.


// ❌ Error Program

// math.js
export function subtractError(a, b) {
    return a - b;
}

// app.js
import { addition } from "./math.js";

// Error:
// SyntaxError

// Error Explanation:
// addition was not exported from math.js.


// ✅ Solution

// math.js
export function addition(a, b) {
    return a + b;
}

// app.js
import { addition } from "./math.js";

console.log(addition(10, 5));

// Output:
// 15

// Solution Explanation:
// We import the function that was actually exported.


// ==================================================
// 8. MULTIPLE NAMED EXPORTS
// ==================================================

// user.js
export const studentName = "Riya";
export const studentAge = 20;

// app.js
import { studentName, studentAge } from "./user.js";

console.log(studentName);
console.log(studentAge);

// Output:
// Riya
// 20

// Explanation:
// A file can export multiple values.


// ❌ Error Program

// user.js
export const studentNameError = "Riya";

// app.js
import { studentNameError, studentAgeError } from "./user.js";

// Error:
// SyntaxError

// Error Explanation:
// studentAgeError was not exported.


// ✅ Solution

// user.js
export const studentNameCorrect = "Riya";
export const studentAgeCorrect = 20;

// app.js
import { studentNameCorrect, studentAgeCorrect } from "./user.js";

console.log(studentNameCorrect);
console.log(studentAgeCorrect);

// Output:
// Riya
// 20

// Solution Explanation:
// Both values are exported and imported.


// ==================================================
// 9. MULTIPLE NAMED IMPORTS
// ==================================================

// user.js
export const name2 = "Riya";
export const age2 = 20;

// app.js
import { name2, age2 } from "./user.js";

console.log(name2);
console.log(age2);

// Output:
// Riya
// 20

// Explanation:
// Multiple named values can be imported together.


// ❌ Error Program

// user.js
export const name2Error = "Riya";

// app.js
import { name2Error, age2Error } from "./user.js";

// Error:
// SyntaxError

// Error Explanation:
// age2Error was not exported.


// ✅ Solution

// user.js
export const name2Correct = "Riya";
export const age2Correct = 20;

// app.js
import { name2Correct, age2Correct } from "./user.js";

console.log(name2Correct);
console.log(age2Correct);

// Output:
// Riya
// 20

// Solution Explanation:
// Both values are available because both were exported.


// ==================================================
// 10. DEFAULT EXPORT
// ==================================================

// greet.js
export default function greet() {
    console.log("Hello");
}

// app.js
import greet from "./greet.js";

greet();

// Output:
// Hello

// Explanation:
// export default is used for the main export of a file.


// ❌ Error Program

// greet.js
export default function greetError() {
    console.log("Hello");
}

// app.js
import { greetError } from "./greet.js";

// Error:
// SyntaxError

// Error Explanation:
// A default export should not be imported using {}.


// ✅ Solution

// greet.js
export default function greetCorrect() {
    console.log("Hello");
}

// app.js
import greetCorrect from "./greet.js";

greetCorrect();

// Output:
// Hello

// Solution Explanation:
// A default export is imported without {}.


// ==================================================
// 11. DEFAULT IMPORT
// ==================================================

// greet.js
export default function sayHello() {
    console.log("Hello");
}

// app.js
import sayHello from "./greet.js";

sayHello();

// Output:
// Hello

// Explanation:
// A default import can use any name.


// ❌ Error Program

// greet.js
export default function sayHelloError() {
    console.log("Hello");
}

// app.js
import { sayHelloError } from "./greet.js";

// Error:
// SyntaxError

// Error Explanation:
// Default imports do not use {}.


// ✅ Solution

// greet.js
export default function sayHelloCorrect() {
    console.log("Hello");
}

// app.js
import sayHelloCorrect from "./greet.js";

sayHelloCorrect();

// Output:
// Hello

// Solution Explanation:
// The default export is imported without {}.


// ==================================================
// 12. DEFAULT EXPORT + NAMED EXPORT
// ==================================================

// user.js
export default function greetUser() {
    console.log("Hello");
}

export const userName = "Riya";

// app.js
import greetUser, { userName } from "./user.js";

greetUser();
console.log(userName);

// Output:
// Hello
// Riya

// Explanation:
// A file can have one default export and named exports.


// ❌ Error Program

// user.js
export default function greetUserError() {
    console.log("Hello");
}

export const userNameError = "Riya";

// app.js
import { greetUserError, userNameError } from "./user.js";

// Error:
// SyntaxError

// Error Explanation:
// The default export should not be inside {}.


// ✅ Solution

// user.js
export default function greetUserCorrect() {
    console.log("Hello");
}

export const userNameCorrect = "Riya";

// app.js
import greetUserCorrect, { userNameCorrect } from "./user.js";

greetUserCorrect();
console.log(userNameCorrect);

// Output:
// Hello
// Riya

// Solution Explanation:
// Default and named imports are written differently.


// ==================================================
// 13. IMPORT WITH ALIAS
// ==================================================

// user.js
export const name3 = "Riya";

// app.js
import { name3 as studentName } from "./user.js";

console.log(studentName);

// Output:
// Riya

// Explanation:
// as gives the imported value a new name.


// ❌ Error Program

// user.js
export const name3Error = "Riya";

// app.js
import { studentNameError } from "./user.js";

// Error:
// SyntaxError

// Error Explanation:
// studentNameError was not exported with that name.


// ✅ Solution

// user.js
export const name3Correct = "Riya";

// app.js
import { name3Correct as studentNameCorrect } from "./user.js";

console.log(studentNameCorrect);

// Output:
// Riya

// Solution Explanation:
// as changes the name only inside app.js.


// ==================================================
// 14. EXPORT WITH ALIAS
// ==================================================

// user.js
const name4 = "Riya";

export { name4 as studentName };

// app.js
import { studentName } from "./user.js";

console.log(studentName);

// Output:
// Riya

// Explanation:
// as gives the exported value another name.


// ❌ Error Program

// user.js
const name4Error = "Riya";

export { name4Error as studentNameError };

// app.js
import { name4Error } from "./user.js";

// Error:
// SyntaxError

// Error Explanation:
// The exported name is studentNameError, not name4Error.


// ✅ Solution

// user.js
const name4Correct = "Riya";

export { name4Correct as studentNameCorrect };

// app.js
import { studentNameCorrect } from "./user.js";

console.log(studentNameCorrect);

// Output:
// Riya

// Solution Explanation:
// We import the alias used during export.


// ==================================================
// 15. MODULE FILE EXTENSION
// ==================================================

// index.html

// <script type="module" src="app.js"></script>

// app.js
import { message } from "./message.js";

console.log(message);

// message.js
export const message = "Hello";

// Output:  Hello

// Explanation:   type="module" tells the browser that app.js is a module.


// ❌ Error Program

// index.html

// <script src="app.js"></script>

// app.js
import { message } from "./message.js";

// Error:   SyntaxError: Cannot use import statement outside a module

// Error Explanation:   The script was not loaded as a module.


// ✅ Solution

// index.html

// <script type="module" src="app.js"></script>

// app.js
import { message } from "./message.js";

// message.js
export const message = "Hello";

// Output:  Hello

// Solution Explanation:  type="module" allows import and export to work.
