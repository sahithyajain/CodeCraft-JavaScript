// 21 - Spread Operator in JavaScript


// ==================================================
// 1. RANDOM SIMPLE PROGRAM
// ==================================================

let numbers = [10, 20, 30];

console.log(...numbers);

// Output:  10 20 30

// Explanation:  The spread operator (...) spreads all array values.


// ==================================================
// 2. COPY AN ARRAY
// ==================================================

let numbers2 = [10, 20, 30];

let copy = [...numbers2];

console.log(copy);

// Output:  [10, 20, 30]

// Explanation:  ...numbers2 copies all values into a new array.


// ❌ Error Program

let numbers2Error = [10, 20, 30];

let copyError = [numbers2Error];

console.log(copyError);

// Output:  [[10, 20, 30]]

// Error Explanation:   Without ..., the whole array becomes one item inside another array.


// ✅ Solution

let numbers2Correct = [10, 20, 30];

let copyCorrect = [...numbers2Correct];

console.log(copyCorrect);

// Output:  [10, 20, 30]

// Solution Explanation:  ... spreads the values, so we get a normal copy.


// ==================================================
// 3. JOIN TWO ARRAYS
// ==================================================

let a = [10, 20];
let b = [30, 40];

let result = [...a, ...b];

console.log(result);

// Output:  [10, 20, 30, 40]

// Explanation:  ... spreads the values of both arrays into one array.


// ❌ Error Program

let aError = [10, 20];
let bError = [30, 40];

let resultError = [aError, bError];

console.log(resultError);

// Output: [[10, 20], [30, 40]]

// Error Explanation:
// Without spread, the two arrays become two items
// inside a new array.


// ✅ Solution

let aCorrect = [10, 20];
let bCorrect = [30, 40];

let resultCorrect = [...aCorrect, ...bCorrect];

console.log(resultCorrect);

// Output: [10, 20, 30, 40]

// Solution Explanation:  Spread puts all values into the new array.


// ==================================================
// 4. ADD VALUES TO AN ARRAY
// ==================================================

let numbers3 = [20, 30];

let result3 = [10, ...numbers3, 40];

console.log(result3);

// Output: [10, 20, 30, 40]

// Explanation:
// Spread copies the old values.
// We can add new values before and after them.


// ❌ Error Program

let numbers3Error = [20, 30];

let result3Error = [10, numbers3Error, 40];

console.log(result3Error);

// Output:  [10, [20, 30], 40]

// Error Explanation:  Without spread, the array becomes one item.


// ✅ Solution

let numbers3Correct = [20, 30];

let result3Correct = [10, ...numbers3Correct, 40];

console.log(result3Correct);

// Output:  [10, 20, 30, 40]

// Solution Explanation:  Spread adds the individual values instead of the whole array.


// ==================================================
// 5. SPREAD WITH STRINGS
// ==================================================

let word = "Hello";

console.log([...word]);

// Output:  ["H", "e", "l", "l", "o"]

// Explanation:   Spread separates the string into individual characters.


// ❌ Error Program

let wordError = "Hello";

console.log([wordError]);

// Output:  ["Hello"]

// Error Explanation:  Without spread, the whole string is one item.


// ✅ Solution

let wordCorrect = "Hello";

console.log([...wordCorrect]);

// Output:  ["H", "e", "l", "l", "o"]

// Solution Explanation:   Spread separates each character.


// ==================================================
// 6. SPREAD WITH OBJECT
// ==================================================

let student = {
    name: "Sahithya",
    age: 24
};

let copyStudent = { ...student };

console.log(copyStudent);

// Output:
// { name: "Sahithya", age: 24 }

// Explanation:  Spread copies the properties of the object.


// ❌ Error Program

let studentError = {
    name: "Sahithya",
    age: 24
};

let copyStudentError = { studentError };

console.log(copyStudentError);

// Output: { studentError: { name: "Sahithya", age: 24 } }

// Error Explanation:
// Without spread, the object becomes a property
// called studentError.


// ✅ Solution

let studentCorrect = {
    name: "Sahithya",
    age: 24
};

let copyStudentCorrect = { ...studentCorrect };

console.log(copyStudentCorrect);

// Output: { name: "Sahithya", age: 24 }

// Solution Explanation:  Spread copies the object's properties directly.


// ==================================================
// 7. JOIN TWO OBJECTS
// ==================================================

let student2 = {
    name: "Sahithya"
};

let details = {
    age: 24
};

let result4 = {
    ...student2,
    ...details
};

console.log(result4);

// Output:  { name: "Sahithya", age: 24 }

// Explanation:  Spread combines the properties of both objects.


// ❌ Error Program

let student2Error = {
    name: "Sahithya"
};

let detailsError = {
    age: 24
};

let result4Error = {
    student2Error,
    detailsError
};

console.log(result4Error);

// Output: { student2Error: { name: "Sahithya" }, detailsError: { age: 24 } }

// Error Explanation:  Without spread, the objects become separate properties.


// ✅ Solution

let student2Correct = {
    name: "Sahithya"
};

let detailsCorrect = {
    age: 24
};

let result4Correct = {
    ...student2Correct,
    ...detailsCorrect
};

console.log(result4Correct);

// Output: { name: "Sahithya", age: 24 }

// Solution Explanation:  Spread puts all properties into one object.


// ==================================================
// 8. ADD PROPERTIES TO AN OBJECT
// ==================================================

let student3 = {
    name: "Sahithya
};

let result5 = {
    ...student3,
    age: 24
};

console.log(result5);

// Output: { name: "Sahithya", age: 24 }

// Explanation:
// Spread copies the old property.
// age is added as a new property.


// ❌ Error Program

let student3Error = {
    name: "Sahithya"
};

let result5Error = {
    student3Error,
    age: 24
};

console.log(result5Error);

// Output: { student3Error: { name: "Sahithya" }, age: 24 }

// Error Explanation:  Without spread, student3 becomes a nested property.


// ✅ Solution

let student3Correct = {
    name: "Sahithya"
};

let result5Correct = {
    ...student3Correct,
    age: 24
};

console.log(result5Correct);

// Output: { name: "Sahithya", age: 24 }

// Solution Explanation: Spread copies the existing properties correctly.


// ==================================================
// 9. UPDATE AN OBJECT PROPERTY
// ==================================================

let student4 = {
    name: "Sahithya",
    age: 24
};

let updated = {
    ...student4,
    age: 21
};

console.log(updated);

// Output: { name: "Sahithya", age: 21 }

// Explanation:
// Spread copies the object.
// The new age value replaces the old age.


// ❌ Error Program

let student4Error = {
    name: "Sahithya",
    age: 24
};

let updatedError = {
    age: 21,
    ...student4
};

console.log(updatedError);

// Output:  { age: 24, name: "Sahithya" }

// Error Explanation:
// The old object comes after age.
// So its age value replaces 21.


// ✅ Solution

let student4Correct = {
    name: "Sahithya",
    age: 24
};

let updatedCorrect = {
    ...student4Correct,
    age: 21
};

console.log(updatedCorrect);

// Output: { name: "Sahithya", age: 21 }

// Solution Explanation:
// Put the new property after spread.
// The new value replaces the old value.


// ==================================================
// 10. SPREAD IN FUNCTION ARGUMENTS
// ==================================================

function add(x, y, z) {
    return x + y + z;
}

let numbers5 = [10, 20, 30];

console.log(add(...numbers5));

// Output: 60

// Explanation:
// Spread sends the array values as separate arguments.
// x = 10, y = 20, z = 30.


// ❌ Error Program

function addError(x, y, z) {
    return x + y + z;
}

let numbers5Error = [10, 20, 30];

console.log(addError(numbers5Error));

// Output:  10,20,30undefinedundefined

// Error Explanation:
// The whole array is passed as one argument.
// The function expects three arguments.


// ✅ Solution

function addCorrect(x, y, z) {
    return x + y + z;
}

let numbers5Correct = [10, 20, 30];

console.log(addCorrect(...numbers5Correct));

// Output:  60

// Solution Explanation:  Spread passes each array value separately.


// ==================================================
// 11. FIND LARGEST NUMBER
// ==================================================

let numbers6 = [10, 50, 20];

console.log(Math.max(...numbers6));

// Output:  50

// Explanation:
// Spread passes 10, 50, and 20 to Math.max().
// Math.max() returns the largest value.


// ❌ Error Program

let numbers6Error = [10, 50, 20];

console.log(Math.max(numbers6Error));

// Output: NaN

// Error Explanation:
// Math.max() expects separate numbers,
// but the whole array was passed as one value.


// ✅ Solution

let numbers6Correct = [10, 50, 20];

console.log(Math.max(...numbers6Correct));

// Output: 50

// Solution Explanation:  Spread passes the numbers separately.


// ==================================================
// 12. COPY AND CHANGE AN ARRAY
// ==================================================

let numbers7 = [10, 20];

let copy2 = [...numbers7];

copy2.push(30);

console.log(copy2);

// Output:   [10, 20, 30]

// Explanation:
// First, spread creates a copy.
// Then 30 is added to the copy.


// ❌ Error Program

let numbers7Error = [10, 20];

let copy2Error = numbers7Error;

copy2Error.push(30);

console.log(numbers7Error);

// Output: [10, 20, 30]

// Error Explanation:
// Both variables point to the same array.
// So changing one also changes the other.


// ✅ Solution

let numbers7Correct = [10, 20];

let copy2Correct = [...numbers7Correct];

copy2Correct.push(30);

console.log(numbers7Correct);
console.log(copy2Correct);

// Output:
// [10, 20]
// [10, 20, 30]

// Solution Explanation:
// Spread creates a separate array.
// Changing the copy does not change the original.


// ==================================================
// 13. SPREAD WITH Set
// ==================================================

let numbers8 = new Set([10, 20, 30]);

let result6 = [...numbers8];

console.log(result6);

// Output:  [10, 20, 30]

// Explanation:  Spread converts the Set values into an array.


// ❌ Error Program

let numbers8Error = new Set([10, 20, 30]);

let result6Error = [numbers8Error];

console.log(result6Error);

// Output:  [Set(3) {10, 20, 30}]

// Error Explanation:  Without spread, the whole Set becomes one array item.


// ✅ Solution

let numbers8Correct = new Set([10, 20, 30]);

let result6Correct = [...numbers8Correct];

console.log(result6Correct);

// Output:  [10, 20, 30]

// Solution Explanation:  Spread takes each Set value and puts it into the array.


// ==================================================
// 14. SPREAD WITH FUNCTION
// ==================================================

function show(a, b) {
    console.log(a);
    console.log(b);
}

let numbers9 = [10, 20];

show(...numbers9);

// Output:
// 10
// 20

// Explanation: Spread passes the two array values as two arguments.


// ❌ Error Program

function showError(a, b) {
    console.log(a);
    console.log(b);
}

let numbers9Error = [10, 20];

showError(numbers9Error);

// Output:
// [10, 20]
// undefined

// Error Explanation:
// The whole array is passed as the first argument.
// Nothing is passed for the second argument.


// ✅ Solution

function showCorrect(a, b) {
    console.log(a);
    console.log(b);
}

let numbers9Correct = [10, 20];

showCorrect(...numbers9Correct);

// Output:
// 10
// 20

// Solution Explanation:  Spread passes each value separately.


// ==================================================
// 15. SPREAD VS REST
// ==================================================

// Spread

let numbers10 = [10, 20, 30];

let copy3 = [...numbers10];

console.log(copy3);

// Output:  [10, 20, 30]

// Explanation:  Spread (...) spreads the values.


// Rest

function showValues(...values) {
    console.log(values);
}

showValues(10, 20, 30);

// Output: [10, 20, 30]

// Explanation:  Rest (...) collects values into an array.


// ❌ Error Program

function showError2(...values) {
    console.log(...values);
}

showError2(10, 20, 30);

// Output:  10 20 30

// Error Explanation:
// This is not actually an error.
// Spread is being used to spread the values,
// while Rest was used to collect them.


// ✅ Solution

function showCorrect2(...values) {
    console.log(values);
}

showCorrect2(10, 20, 30);

// Output:   [10, 20, 30]

// Solution Explanation:
// Rest collects the values into one array.
// Spread spreads values out.
