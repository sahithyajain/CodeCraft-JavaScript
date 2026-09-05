// 24 - Optional Chaining in JavaScript


// ==================================================
// 1. RANDOM SIMPLE PROGRAM
// ==================================================

const student = {
    name: "Sahithya"
};

console.log(student?.name);

// Output: Sahithya

// Explanation: ?. safely accesses the name property.


// ❌ Error Program

const studentError = undefined;

console.log(studentError.name);

// Error: TypeError

// Error Explanation: We are trying to access name from undefined.


// ✅ Solution

const studentCorrect = undefined;

console.log(studentCorrect?.name);

// Output: undefined

// Solution Explanation: ?. safely checks the value before accessing name.


// ==================================================
// 2. MISSING PROPERTY
// ==================================================

const student2 = {
    name: "Sahithya"
};

console.log(student2?.age);

// Output: undefined

// Explanation: age does not exist, so undefined is returned.


// ❌ Error Program

const student2Error = {
    name: "Sahithya"
};

console.log(student2Error.age.name);

// Error: TypeError

// Error Explanation: age is undefined, so we cannot access name from it.


// ✅ Solution

const student2Correct = {
    name: "Sahithya"
};

console.log(student2Correct?.age);

// Output: undefined

// Solution Explanation:  ?. safely handles the missing property.


// ==================================================
// 3. WITHOUT OPTIONAL CHAINING
// ==================================================

const student3 = undefined;

console.log(student3.name);

// Error: TypeError

// Explanation:  Normal property access causes an error when the value is undefined.


// ❌ Error Program

const user3 = null;

console.log(user3.name);

// Error:  TypeError

// Error Explanation:  null has no properties to access.


// ✅ Solution

const user3Correct = null;

console.log(user3Correct?.name);

// Output:  undefined

// Solution Explanation: ?. safely handles null.


// ==================================================
// 4. WITH OPTIONAL CHAINING
// ==================================================

const student4 = undefined;

console.log(student4?.name);

// Output:  undefined

// Explanation: Optional chaining prevents the error.


// ❌ Error Program

const student4Error = null;

console.log(student4Error.name);

// Error:  TypeError

// Error Explanation: Normal access cannot read a property from null.


// ✅ Solution

const student4Correct = null;

console.log(student4Correct?.name);

// Output: undefined

// Solution Explanation:  ?. safely checks for null before accessing name.


// ==================================================
// 5. NESTED OBJECTS
// ==================================================

const student5 = {
    address: {
        city: "Bangalore"
    }
};

console.log(student5?.address?.city);

// Output:  Bangalore

// Explanation:  ?. safely accesses nested properties.


// ❌ Error Program

const student5Error = {
    address: undefined
};

console.log(student5Error.address.city);

// Error: TypeError

// Error Explanation: address is undefined, so city cannot be accessed.


// ✅ Solution

const student5Correct = {
    address: undefined
};

console.log(student5Correct?.address?.city);

// Output: undefined

// Solution Explanation: ?. safely handles the missing address.


// ==================================================
// 6. MISSING NESTED PROPERTY
// ==================================================

const student6 = {
    address: {}
};

console.log(student6?.address?.city);

// Output: undefined

// Explanation: city does not exist, so undefined is returned.


// ❌ Error Program

const student6Error = {
    address: {}
};

console.log(student6Error.address.city.name);

// Error: TypeError

// Error Explanation: city is undefined, so name cannot be accessed.


// ✅ Solution

const student6Correct = {
    address: {}
};

console.log(student6Correct?.address?.city?.name);

// Output: undefined

// Solution Explanation: Each level is safely checked.


// ==================================================
// 7. OPTIONAL CHAINING WITH ARRAYS
// ==================================================

const fruits = ["Apple", "Mango"];

console.log(fruits?.[0]);

// Output: Apple

// Explanation: ?. can safely access an array element.


// ❌ Error Program

const fruitsError = undefined;

console.log(fruitsError[0]);

// Error: TypeError

// Error Explanation:  We cannot access an element from undefined.


// ✅ Solution

const fruitsCorrect = undefined;

console.log(fruitsCorrect?.[0]);

// Output: undefined

// Solution Explanation:  ?. safely checks the array before accessing the element.


// ==================================================
// 8. MISSING ARRAY ELEMENT
// ==================================================

const fruits2 = ["Apple", "Mango"];

console.log(fruits2?.[5]);

// Output:  undefined

// Explanation:  There is no element at index 5.


// ❌ Error Program

const fruits2Error = undefined;

console.log(fruits2Error[5]);

// Error: TypeError

// Error Explanation: The array itself is undefined.


// ✅ Solution

const fruits2Correct = undefined;

console.log(fruits2Correct?.[5]);

// Output: undefined

// Solution Explanation: ?. safely handles the missing array.


// ==================================================
// 9. OPTIONAL CHAINING WITH FUNCTIONS
// ==================================================

const student7 = {
    greet() {
        return "Hello";
    }
};

console.log(student7.greet?.());

// Output: Hello

// Explanation: ?.() safely calls the function if it exists.


// ❌ Error Program

const student7Error = {};

console.log(student7Error.greet());

// Error: TypeError

// Error Explanation: greet does not exist, so it cannot be called.


// ✅ Solution

const student7Correct = {};

console.log(student7Correct.greet?.());

// Output: undefined

// Solution Explanation: ?.() checks whether greet exists before calling it.


// ==================================================
// 10. MISSING FUNCTION
// ==================================================

const student8 = {};

console.log(student8.greet?.());

// Output: undefined

// Explanation: greet does not exist, so ?.() returns undefined.


// ❌ Error Program

const student8Error = {};

console.log(student8Error.greet());

// Error: TypeError

// Error Explanation: We tried to call a function that does not exist.


// ✅ Solution

const student8Correct = {};

console.log(student8Correct.greet?.());

// Output: undefined

// Solution Explanation: ?.() safely handles the missing function.


// ==================================================
// 11. OPTIONAL CHAINING WITH null
// ==================================================

const student9 = null;

console.log(student9?.name);

// Output: undefined

// Explanation: ?. safely handles null.


// ❌ Error Program

const student9Error = null;

console.log(student9Error.name);

// Error: TypeError

// Error Explanation: Normal access causes an error with null.


// ✅ Solution

const student9Correct = null;

console.log(student9Correct?.name);

// Output:  undefined

// Solution Explanation:  ?. prevents the error.


// ==================================================
// 12. OPTIONAL CHAINING WITH undefined
// ==================================================

let student10;

console.log(student10?.name);

// Output:  undefined

// Explanation:
// student10 is undefined.
// ?. safely handles it.


// ❌ Error Program

let student10Error;

console.log(student10Error.name);

// Error:  TypeError

// Error Explanation:  Normal property access causes an error.


// ✅ Solution

let student10Correct;

console.log(student10Correct?.name);

// Output:  Undefined

// Solution Explanation:  ?. safely checks the value.


// ==================================================
// 13. MULTIPLE OPTIONAL CHAINS
// ==================================================

const student11 = {
    details: {
        address: {
            city: "Mysore"
        }
    }
};

console.log(student11?.details?.address?.city);

// Output:  Mysore

// Explanation:  ?. checks each level before moving to the next one.


// ❌ Error Program

const student11Error = {
    details: undefined
};

console.log(student11Error.details.address.city);

// Error: TypeError

// Error Explanation: details is undefined.


// ✅ Solution

const student11Correct = {
    details: undefined
};

console.log(student11Correct?.details?.address?.city);

// Output:  undefined

// Solution Explanation:  Every nested level is safely checked.


// ==================================================
// 14. OPTIONAL CHAINING WITH METHOD
// ==================================================

const user = {
    getName() {
        return "Sahithya";
    }
};

console.log(user.getName?.());

// Output: Sahithya

// Explanation:  ?.() safely calls getName().


// ❌ Error Program

const userError = {};

console.log(userError.getName());

// Error:  TypeError

// Error Explanation: getName does not exist.


// ✅ Solution

const userCorrect2 = {};

console.log(userCorrect2.getName?.());

// Output:  undefined

// Solution Explanation:  ?.() safely handles the missing method.


// ==================================================
// 15. OPTIONAL CHAINING VS NORMAL ACCESS
// ==================================================

const user2 = undefined;

console.log(user2?.name);

// Output:  undefined

// Explanation: Optional chaining safely handles a missing value.


// ❌ Error Program

const user2Error = undefined;

console.log(user2Error.name);

// Error: TypeError

// Error Explanation: Normal . access causes an error when the value is undefined.


// ✅ Solution

const user2Correct = undefined;

console.log(user2Correct?.name);

// Output: undefined

// Solution Explanation: ?. checks the value before accessing the property.
