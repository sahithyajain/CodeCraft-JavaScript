// 25 - Nullish Coalescing in JavaScript


// ==================================================
// 1. RANDOM SIMPLE PROGRAM
// ==================================================

let name = null;

console.log(name ?? "Guest");

// Output: Guest

// Explanation:
// If name is null, ?? uses "Guest" as the default value.


// ❌ Error Program

let nameError;

console.log(nameError.toUpperCase());

// Error:  TypeError

// Error Explanation:
// nameError is undefined, so we cannot use toUpperCase().


// ✅ Solution

let nameCorrect;

console.log((nameCorrect ?? "Guest").toUpperCase());

// Output: GUEST

// Solution Explanation: ?? gives "Guest" when the value is undefined.


// ==================================================
// 2. WITH undefined
// ==================================================

let name2;

console.log(name2 ?? "Guest");

// Output:  Guest

// Explanation: name2 is undefined, so "Guest" is used.


// ❌ Error Program

let name2Error;

console.log(name2Error.length);

// Error: TypeError

// Error Explanation: undefined does not have a length property.


// ✅ Solution

let name2Correct;

console.log((name2Correct ?? "Guest").length);

// Output: 5

// Solution Explanation:  "Guest" is used instead of undefined.


// ==================================================
// 3. WITH A NORMAL VALUE
// ==================================================

let name3 = "Sahithya";

console.log(name3 ?? "Guest");

// Output: Sahithya

// Explanation:  Sahithya is not null or undefined, so it is kept.


// ❌ Error Program

let name3Error = undefined;

console.log(name3Error.toUpperCase());

// Error: TypeError

// Error Explanation: undefined cannot be used with toUpperCase().


// ✅ Solution

let name3Correct = "Sahithya";

console.log((name3Correct ?? "Guest").toUpperCase());

// Output: Sahithya

// Solution Explanation: Since Riya exists, ?? keeps it.


// ==================================================
// 4. WITH null
// ==================================================

let age = null;

console.log(age ?? 18);

// Output: 18

// Explanation: age is null, so 18 is used.


// ❌ Error Program

let ageError = null;

console.log(ageError.toString());

// Error: TypeError

// Error Explanation:  null cannot directly use toString().


// ✅ Solution

let ageCorrect = null;

console.log((ageCorrect ?? 18).toString());

// Output: 18

// Solution Explanation: ?? replaces null with 18.


// ==================================================
// 5. WITH undefined
// ==================================================

let age2;

console.log(age2 ?? 18);

// Output: 18

// Explanation:  age2 is undefined, so 18 is used.


// ❌ Error Program

let age2Error;

console.log(age2Error + 5);

// Output: NaN

// Error Explanation: undefined used in a calculation gives NaN.


// ✅ Solution

let age2Correct;

console.log((age2Correct ?? 18) + 5);

// Output: 23

// Solution Explanation: ?? gives age2 a default value of 18.


// ==================================================
// 6. WITH ZERO
// ==================================================

let score = 0;

console.log(score ?? 50);

// Output: 0

// Explanation: 0 is not null or undefined, so ?? keeps 0.


// ❌ Error Program

let scoreError = 0;

console.log(scoreError || 50);

// Output: 50

// Error Explanation: || treats 0 as false and uses 50.


// ✅ Solution

let scoreCorrect = 0;

console.log(scoreCorrect ?? 50);

// Output: 0

// Solution Explanation: ?? correctly keeps 0.


// ==================================================
// 7. WITH EMPTY STRING
// ==================================================

let name4 = "";

console.log(name4 ?? "Guest");

// Output:
//

// Explanation:
// An empty string is not null or undefined.
// So ?? keeps the empty string.


// ❌ Error Program

let name4Error = "";

console.log(name4Error || "Guest");

// Output: Guest

// Error Explanation:  || treats an empty string as false.


// ✅ Solution

let name4Correct = "";

console.log(name4Correct ?? "Guest");

// Output:
//

// Solution Explanation: ?? keeps the empty string.


// ==================================================
// 8. WITH false
// ==================================================

let isStudent = false;

console.log(isStudent ?? true);

// Output: false

// Explanation: false is not null or undefined, so it is kept.


// ❌ Error Program

let isStudentError = false;

console.log(isStudentError || true);

// Output: true

// Error Explanation: || treats false as false and uses true.


// ✅ Solution

let isStudentCorrect = false;

console.log(isStudentCorrect ?? true);

// Output: false

// Solution Explanation: ?? keeps false.


// ==================================================
// 9. MULTIPLE VALUES
// ==================================================

let firstName = null;
let userName = undefined;

console.log(firstName ?? userName ?? "Guest");

// Output:  Guest

// Explanation: Both values are missing, so "Guest" is used.


// ❌ Error Program

let firstNameError = null;
let userNameError = undefined;

console.log(firstNameError.toUpperCase());

// Error: TypeError

// Error Explanation: firstNameError is null.


// ✅ Solution

let firstNameCorrect = null;
let userNameCorrect = "Sahithya";

console.log(firstNameCorrect ?? userNameCorrect ?? "Guest");

// Output: Sahithya

// Solution Explanation: ?? uses the first value that is not null or undefined.


// ==================================================
// 10. WITH OBJECTS
// ==================================================

let student = null;

student = student ?? { name: "Guest" };

console.log(student.name);

// Output:  Guest

// Explanation:  Since student is null, the default object is used.


// ❌ Error Program

let studentError = null;

console.log(studentError.name);

// Error: TypeError

// Error Explanation: We tried to access a property from null.


// ✅ Solution

let studentCorrect2 = null;

studentCorrect2 = studentCorrect2 ?? { name: "Guest" };

console.log(studentCorrect2.name);

// Output: Guest

// Solution Explanation: ?? provides a default object.


// ==================================================
// 11. WITH ARRAYS
// ==================================================

let numbers = null;

numbers = numbers ?? [10, 20, 30];

console.log(numbers);

// Output: [10, 20, 30]

// Explanation: The default array is used because numbers is null.


// ❌ Error Program

let numbersError = null;

console.log(numbersError.length);

// Error: TypeError

// Error Explanation: null does not have a length property.


// ✅ Solution

let numbersCorrect = null;

numbersCorrect = numbersCorrect ?? [10, 20, 30];

console.log(numbersCorrect.length);

// Output: 3

// Solution Explanation:  ?? gives us a default array.


// ==================================================
// 12. WITH FUNCTION RETURN VALUE
// ==================================================

function getName() {
    return null;
}

console.log(getName() ?? "Guest");

// Output: Guest

// Explanation: The function returns null, so "Guest" is used.


// ❌ Error Program

function getNameError() {
    return undefined;
}

console.log(getNameError().toUpperCase());

// Error: TypeError

// Error Explanation: The function returns undefined.


// ✅ Solution

function getNameCorrect() {
    return undefined;
}

console.log((getNameCorrect() ?? "Guest").toUpperCase());

// Output: GUEST

// Solution Explanation:  ?? provides "Guest" when the function returns undefined.


// ==================================================
// 13. NULLISH COALESCING WITH OPTIONAL CHAINING
// ==================================================

const student2 = {};

console.log(student2?.name ?? "Guest");

// Output: Guest

// Explanation:  ?. safely checks name.
// ?? gives "Guest" because name is undefined.


// ❌ Error Program

const student2Error = {};

console.log(student2Error.name.toUpperCase());

// Error: TypeError

// Error Explanation: name is undefined.


// ✅ Solution

const student2Correct = {};

console.log((student2Correct?.name ?? "Guest").toUpperCase());

// Output: GUEST

// Solution Explanation: ?. safely accesses name and ?? provides a default value.


// ==================================================
// 14. ?? vs ||
// ==================================================

let marks = 0;

console.log(marks ?? 50);
console.log(marks || 50);

// Output:
// 0
// 50

// Explanation:   ?? keeps 0.
// || replaces 0 because it treats 0 as false.


// ❌ Error Program

let marksError = 0;

let result = marksError || 50;

console.log(result);

// Output: 50

// Error Explanation: || changes the valid value 0 to 50.


// ✅ Solution

let marksCorrect = 0;

let resultCorrect = marksCorrect ?? 50;

console.log(resultCorrect);

// Output: 0

// Solution Explanation:  ?? keeps 0 because 0 is not null or undefined.


// ==================================================
// 15. CHOOSING A DEFAULT VALUE
// ==================================================

let marks2 = 0;

let result2 = marks2 ?? 35;

console.log(result2);

// Output: 0

// Explanation: 0 is a valid value, so ?? keeps it.


// ❌ Error Program

let marks2Error = null;

let result2Error = marks2Error;

console.log(result2Error);

// Output:  null

// Error Explanation: No default value was provided.


// ✅ Solution

let marks2Correct = null;

let result2Correct = marks2Correct ?? 35;

console.log(result2Correct);

// Output: 35

// Solution Explanation:  ?? gives 35 because the original value is null.
