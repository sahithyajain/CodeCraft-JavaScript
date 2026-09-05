// 23 - Default Parameters in JavaScript


// ==================================================
// 1. RANDOM SIMPLE PROGRAM
// ==================================================

function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();

// Output: Hello Guest

// Explanation: If no value is given, the function uses "Guest".


// ❌ Error Program

function greetError(name) {
    console.log(`Hello ${name}`);
}

greetError();

// Output: Hello undefined

// Error Explanation: No value was given, so name becomes undefined.


// ✅ Solution

function greetCorrect(name = "Guest") {
    console.log(`Hello ${name}`);
}

greetCorrect();

// Output: Hello Guest

// Solution Explanation: "Guest" is used when no value is given.


// ==================================================
// 2. PASSING A VALUE
// ==================================================

function greet2(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet2("Sahithya");

// Output: Hello Sahithya

// Explanation: When we give a value, it replaces the default value.


// ❌ Error Program

function greet2Error(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet2Error;

// Output: Nothing

// Error Explanation:
// The function was not called.
// We need to use () to call it.


// ✅ Solution

function greet2Correct(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet2Correct("Sahithya");

// Output:m Hello Sahithya

// Solution Explanation: We called the function and passed "Riya".


// ==================================================
// 3. MULTIPLE DEFAULT PARAMETERS
// ==================================================

function add(a = 10, b = 20) {
    console.log(a + b);
}

add();

// Output: 30

// Explanation: a gets 10 and b gets 20 by default.


// ❌ Error Program

function addError(a = 10, b = 20) {
    console.log(a + c);
}

addError();

// Error:  ReferenceError: c is not defined

// Error Explanation:
// c was not created.
// The parameters are a and b.


// ✅ Solution

function addCorrect(a = 10, b = 20) {
    console.log(a + b);
}

addCorrect();

// Output: 30

// Solution Explanation: We use the correct parameters a and b.


// ==================================================
// 4. ONE DEFAULT PARAMETER
// ==================================================

function greet3(name, message = "Hello") {
    console.log(message + " " + name);
}

greet3("Sahithya");

// Output: Hello Sahithya

// Explanation:
// name gets "Riya".
// message uses the default value "Hello".


// ❌ Error Program

function greet3Error(name, message = "Hello") {
    console.log(message + " " + username);
}

greet3Error("Sahithya");

// Error: ReferenceError: username is not defined

// Error Explanation: The parameter is called name, not username.


// ✅ Solution

function greet3Correct(name, message = "Hello") {
    console.log(message + " " + name);
}

greet3Correct("Sahithya");

// Output: Hello Sahithya

// Solution Explanation: We use the correct parameter name.


// ==================================================
// 5. DEFAULT PARAMETER WITH CALCULATION
// ==================================================

function add2(a = 10, b = 5) {
    console.log(a + b);
}

add2();

// Output: 15

// Explanation:
// The default values are 10 and 5.
// They are added together.


// ❌ Error Program

function add2Error(a = 10, b = 5) {
    console.log(a + c);
}

add2Error();

// Error: ReferenceError: c is not defined

// Error Explanation: c is not defined.


// ✅ Solution

function add2Correct(a = 10, b = 5) {
    console.log(a + b);
}

add2Correct();

// Output: 15


// Solution Explanation: We use the correct default parameters.


// ==================================================
// 6. DEFAULT PARAMETER WITH FUNCTION
// ==================================================

function getName() {
    return "Guest";
}

function greet4(name = getName()) {
    console.log(`Hello ${name}`);
}

greet4();

// Output:  Hello Guest

// Explanation:
// getName() gives "Guest".
// That value is used as the default.


// ❌ Error Program

function getNameError() {
    return "Guest";
}

function greet4Error(name = getUserName()) {
    console.log(`Hello ${name}`);
}

greet4Error();

// Error: ReferenceError: getUserName is not defined

// Error Explanation: There is no function called getUserName().


// ✅ Solution

function getNameCorrect() {
    return "Guest";
}

function greet4Correct(name = getNameCorrect()) {
    console.log(`Hello ${name}`);
}

greet4Correct();

// Output: Hello Guest

// Solution Explanation:  We call the function that actually exists.


// ==================================================
// 7. DEFAULT PARAMETER WITH EXPRESSION
// ==================================================

function multiply(a = 5, b = 2 + 3) {
    console.log(a * b);
}

multiply();

// Output: 25

// Explanation:
// b gets 2 + 3, which is 5.
// Then 5 × 5 gives 25.


// ❌ Error Program

function multiplyError(a = 5, b = 2 + x) {
    console.log(a * b);
}

multiplyError();

// Error: ReferenceError: x is not defined

// Error Explanation: x does not exist in the program.


// ✅ Solution

function multiplyCorrect(a = 5, b = 2 + 3) {
    console.log(a * b);
}

multiplyCorrect();

// Output: 25


// Solution Explanation:  We used values that are defined.


// ==================================================
// 8. DEFAULT PARAMETER WITH undefined
// ==================================================

function greet5(name = "Guest") {
    console.log(name);
}

greet5(undefined);

// Output:Guest
 
// Explanation: Passing undefined makes JavaScript use the default value.


// ❌ Error Program

function greet5Error(name = "Guest") {
    console.log(name);
}

greet5Error(null);

// Output:  null

// Error Explanation:
// null is a value.
// It does not activate the default value.


// ✅ Solution

function greet5Correct(name = "Guest") {
    console.log(name);
}

greet5Correct(undefined);

// Output:  Guest

// Solution Explanation:  undefined makes the default value "Guest" work.


// ==================================================
// 9. PASSING null
// ==================================================

function greet6(name = "Guest") {
    console.log(name);
}

greet6(null);

// Output:  null

// Explanation:
// null is passed as the value.
// So the default value is not used.


// ❌ Error Program

function greet6Error(name = "Guest") {
    console.log(name);
}

greet6();

// Output:   Guest

// Error Explanation:
// This is not an error.
// When no value is passed, the default value is used.


// ✅ Solution

function greet6Correct(name = "Guest") {
    console.log(name);
}

greet6Correct(null);

// Output:  null

// Solution Explanation:  Passing null keeps null as the value.


// ==================================================
// 10. DEFAULT PARAMETER WITH ARROW FUNCTION
// ==================================================

const greet7 = (name = "Guest") => {
    console.log(`Hello ${name}`);
};

greet7();

// Output:  Hello Guest

// Explanation: Arrow functions can also use default parameters.


// ❌ Error Program

const greet7Error = (name = "Guest") => {
    console.log(`Hello ${username}`);
};

greet7Error();

// Error:  ReferenceError: username is not defined

// Error Explanation:
// The parameter is called name.
// username does not exist.


// ✅ Solution

const greet7Correct = (name = "Guest") => {
    console.log(`Hello ${name}`);
};

greet7Correct();

// Output:  Hello Guest

// Solution Explanation:  We use the correct parameter name.


// ==================================================
// 11. DEFAULT PARAMETERS WITH MULTIPLE VALUES
// ==================================================

function student(name = "Sahithya", age = 20) {
    console.log(name);
    console.log(age);
}

student();

// Output:
// Sahithya
// 20

// Explanation:
// Both parameters have default values.
// They are used because no values were given.


// ❌ Error Program

function studentError(name = "Riya", age = 20) {
    console.log(studentName);
    console.log(age);
}

studentError();

// Error:  ReferenceError: studentName is not defined

// Error Explanation:  The parameter is called name, not studentName.


// ✅ Solution

function studentCorrect(name = "Sahithya", age = 20) {
    console.log(name);
    console.log(age);
}

studentCorrect();

// Output:
// Sahithya
// 20

// Solution Explanation:  We use the correct parameter name.


// ==================================================
// 12. DEFAULT PARAMETER WITH OBJECT
// ==================================================

function showStudent(student = { name: "Guest" }) {
    console.log(student.name);
}

showStudent();

// Output: Guest

// Explanation: If no object is given, the default object is used.


// ❌ Error Program

function showStudentError(student = { name: "Guest" }) {
    console.log(student.age.name);
}

showStudentError();

// Error:  Cannot read properties of undefined

// Error Explanation:  age does not exist in the default object.


// ✅ Solution

function showStudentCorrect(student = { name: "Guest" }) {
    console.log(student.name);
}

showStudentCorrect();

// Output:  Guest

// Solution Explanation:  We access the property that exists: name.


// ==================================================
// 13. DEFAULT PARAMETER WITH ARRAY
// ==================================================

function showNumbers(numbers = [10, 20]) {
    console.log(numbers);
}

showNumbers();

// Output:  [10, 20]

// Explanation:  If no array is given, [10, 20] is used.


// ❌ Error Program

function showNumbersError(numbers = [10, 20]) {
    console.log(number);
}

showNumbersError();

// Error: ReferenceError: number is not defined

// Error Explanation:   The parameter is called numbers.


// ✅ Solution

function showNumbersCorrect(numbers = [10, 20]) {
    console.log(numbers);
}

showNumbersCorrect();

// Output: [10, 20]

// Solution Explanation: We use the correct parameter name.


// ==================================================
// 14. DEFAULT PARAMETER WITH DESTRUCTURING
// ==================================================

function showStudent2({ name = "Guest" } = {}) {
    console.log(name);
}

showStudent2();

// Output:  Guest

// Explanation:
// The default empty object is used.
// name then gets its default value "Guest".


// ❌ Error Program

function showStudent2Error({ name = "Guest" } = {}) {
    console.log(studentName);
}

showStudent2Error();

// Error: ReferenceError: studentName is not defined

// Error Explanation:  The destructured variable is called name.


// ✅ Solution

function showStudent2Correct({ name = "Guest" } = {}) {
    console.log(name);
}

showStudent2Correct();

// Output:  Guest

// Solution Explanation:  We use the correct variable name: name.


// ==================================================
// 15. DEFAULT PARAMETER WITH undefined
// ==================================================

function greet8(name = "Guest") {
    console.log(name);
}

greet8();
greet8(undefined);
greet8("Sahithya");

// Output:
// Guest
// Guest
// Sahithya

// Explanation:
// No value → Guest.
// undefined → Guest.
// "Riya" → Riya.


// ❌ Error Program

function greet8Error(name = "Guest") {
    console.log(name);
}

greet8Error(undefined, "Sahithya");

// Output:  Guest

// Error Explanation:
// The second value is ignored because the function
// only uses the first parameter.


// ✅ Solution

function greet8Correct(name = "Guest") {
    console.log(name);
}

greet8Correct("Sahithya");

// Output:  Sahithya

// Solution Explanation:
// We pass the value to the correct parameter.
// The given value replaces the default value.
