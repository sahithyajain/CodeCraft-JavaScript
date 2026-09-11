// 35 – Local Storage
// File: local-storage.js


// ==================================================
// 1. WHAT IS LOCAL STORAGE?
// ==================================================

localStorage.setItem("name", "Sahithya");

console.log(localStorage.getItem("name"));

// Output:
// Sahithya

// Explanation:
// Local Storage stores data in the browser using key-value pairs.


// ❌ Error Program

localStorage.setItem("name", "Sahithya");
console.log(localStorage.getItem("Name"));

// Output:
// null

// Error Explanation:
// The key "Name" is different from "name".
// Local Storage keys are case-sensitive.


// ✅ Solution

localStorage.setItem("name", "Sahithya");
console.log(localStorage.getItem("name"));

// Output:
// Sahithya

// Solution Explanation:
// Use the same key when storing and retrieving the data.



// ==================================================
// 2. setItem()
// ==================================================

localStorage.setItem("city", "Bengaluru");

console.log("Data stored");

// Output:
// Data stored

// Explanation:
// setItem() stores a value using a key.


// ❌ Error Program

localStorage.setItem();

// Output:
// TypeError / incorrect usage

// Error Explanation:
// setItem() needs a key and a value.


// ✅ Solution

localStorage.setItem("city", "Bengaluru");

console.log(localStorage.getItem("city"));

// Output:
// Bengaluru

// Solution Explanation:
// Give both the key and the value to setItem().



// ==================================================
// 3. getItem()
// ==================================================

localStorage.setItem("name", "Sahithya");

let name = localStorage.getItem("name");

console.log(name);

// Output:
// Sahithya

// Explanation:
// getItem() retrieves the value stored with a particular key.


// ❌ Error Program

localStorage.setItem("name", "Sahithya");

let name2 = localStorage.getItem("Name");

console.log(name2.toUpperCase());

// Output:
// TypeError: Cannot read properties of null

// Error Explanation:
// "Name" does not exist, so getItem() returns null.
// Calling toUpperCase() on null causes an error.


// ✅ Solution

localStorage.setItem("name", "Sahithya");

let name3 = localStorage.getItem("name");

console.log(name3.toUpperCase());

// Output:
// SAHITHYA

// Solution Explanation:
// Use the correct key so that getItem() returns the stored value.



// ==================================================
// 4. removeItem()
// ==================================================

localStorage.setItem("name", "Sahithya");

localStorage.removeItem("name");

console.log(localStorage.getItem("name"));

// Output:
// null

// Explanation:
// removeItem() removes a specific item from Local Storage.


// ❌ Error Program

localStorage.setItem("name", "Sahithya");

localStorage.removeItem("Name");

console.log(localStorage.getItem("name"));

// Output:
// Sahithya

// Error Explanation:
// "Name" and "name" are different keys.
// Therefore, the "name" item is not removed.


// ✅ Solution

localStorage.setItem("name", "Sahithya");

localStorage.removeItem("name");

console.log(localStorage.getItem("name"));

// Output:
// null

// Solution Explanation:
// Use the exact key that was stored.



// ==================================================
// 5. clear()
// ==================================================

localStorage.setItem("name", "Sahithya");
localStorage.setItem("age", "24");

localStorage.clear();

console.log(localStorage.length);

// Output:
// 0

// Explanation:
// clear() removes all Local Storage data.


// ❌ Error Program

localStorage.setItem("name", "Sahithya");
localStorage.setItem("age", "24");

localStorage.removeItem("name");

console.log(localStorage.getItem("age"));

// Output:
// 24

// Error Explanation:
// removeItem() removes only one item.
// It does not clear all stored data.


// ✅ Solution

localStorage.setItem("name", "Sahithya");
localStorage.setItem("age", "24");

localStorage.clear();

console.log(localStorage.length);

// Output:
// 0

// Solution Explanation:
// Use clear() when you want to remove all Local Storage data.



// ==================================================
// 6. length
// ==================================================

localStorage.clear();

localStorage.setItem("name", "Sahithya");
localStorage.setItem("age", "24");

console.log(localStorage.length);

// Output:
// 2

// Explanation:
// length tells us how many key-value pairs are stored.


// ❌ Error Program

localStorage.clear();

localStorage.setItem("name", "Sahithya");

console.log(localStorage.length());

// Output:
// TypeError: localStorage.length is not a function

// Error Explanation:
// length is a property, not a function.
// We should not use parentheses.


// ✅ Solution

localStorage.clear();

localStorage.setItem("name", "Sahithya");

console.log(localStorage.length);

// Output:
// 1

// Solution Explanation:
// Use length without parentheses.



// ==================================================
// 7. key()
// ==================================================

localStorage.clear();

localStorage.setItem("name", "Sahithya");
localStorage.setItem("age", "24");

console.log(localStorage.key(0));

// Output:
// name

// Explanation:
// key() returns the key at a particular position.


// ❌ Error Program

localStorage.clear();

localStorage.setItem("name", "Sahithya");

console.log(localStorage.key());

// Output:
// null

// Error Explanation:
// key() needs an index number to identify a position.


// ✅ Solution

localStorage.clear();

localStorage.setItem("name", "Sahithya");

console.log(localStorage.key(0));

// Output:
// name

// Solution Explanation:
// Give an index such as 0 to get the key at that position.



// ==================================================
// 8. STORING STRINGS
// ==================================================

localStorage.clear();

localStorage.setItem("city", "Bengaluru");

console.log(localStorage.getItem("city"));

// Output:
// Bengaluru

// Explanation:
// Strings can be directly stored in Local Storage.


// ❌ Error Program

localStorage.clear();

localStorage.setItem("city", Bengaluru);

// Output:
// ReferenceError: Bengaluru is not defined

// Error Explanation:
// Bengaluru is written without quotes.
// JavaScript treats it as a variable.


// ✅ Solution

localStorage.clear();

localStorage.setItem("city", "Bengaluru");

console.log(localStorage.getItem("city"));

// Output:
// Bengaluru

// Solution Explanation:
// Write string values inside quotes.



// ==================================================
// 9. STORING NUMBERS
// ==================================================

localStorage.clear();

localStorage.setItem("age", 24);

let age = localStorage.getItem("age");

console.log(age);
console.log(typeof age);

// Output:
// 24
// string

// Explanation:
// Local Storage stores values as strings.
// Therefore, the number 24 is returned as "24".


// ❌ Error Program

localStorage.clear();

localStorage.setItem("age", 24);

let age2 = localStorage.getItem("age");

console.log(age2 + 1);

// Output:
// 241

// Error Explanation:
// The value returned from Local Storage is a string.
// "24" + 1 becomes "241".


// ✅ Solution

localStorage.clear();

localStorage.setItem("age", 24);

let age3 = Number(localStorage.getItem("age"));

console.log(age3 + 1);

// Output:
// 25

// Solution Explanation:
// Number() converts the stored string back into a number.



// ==================================================
// 10. STORING OBJECTS
// ==================================================

localStorage.clear();

let student = {
    name: "Sahithya",
    age: 24
};

localStorage.setItem("student", JSON.stringify(student));

console.log(localStorage.getItem("student"));

// Output:
// {"name":"Sahithya","age":24}

// Explanation:
// JSON.stringify() converts the object into a string
// so that it can be stored in Local Storage.


// ❌ Error Program

localStorage.clear();

let student2 = {
    name: "Sahithya",
    age: 24
};

localStorage.setItem("student", student2);

console.log(localStorage.getItem("student"));

// Output:
// [object Object]

// Error Explanation:
// Objects should be converted into JSON strings before storing them.


// ✅ Solution

localStorage.clear();

let student3 = {
    name: "Sahithya",
    age: 24
};

localStorage.setItem("student", JSON.stringify(student3));

console.log(localStorage.getItem("student"));

// Output:
// {"name":"Sahithya","age":24}

// Solution Explanation:
// JSON.stringify() converts the object into a storable string.



// ==================================================
// 11. READING OBJECTS
// ==================================================

localStorage.clear();

let student4 = {
    name: "Sahithya",
    age: 24
};

localStorage.setItem("student", JSON.stringify(student4));

let data = JSON.parse(localStorage.getItem("student"));

console.log(data.name);
console.log(data.age);

// Output:
// Sahithya
// 24

// Explanation:
// JSON.parse() converts the stored JSON string back into an object.


// ❌ Error Program

localStorage.clear();

localStorage.setItem("student", "Sahithya");

let data2 = JSON.parse(localStorage.getItem("student"));

console.log(data2.name);

// Output:
// SyntaxError: Unexpected token

// Error Explanation:
// "Sahithya" is not a valid JSON object.
// JSON.parse() expects valid JSON.


// ✅ Solution

localStorage.clear();

let student5 = {
    name: "Sahithya",
    age: 24
};

localStorage.setItem("student", JSON.stringify(student5));

let data3 = JSON.parse(localStorage.getItem("student"));

console.log(data3.name);

// Output:
// Sahithya

// Solution Explanation:
// First convert the object to JSON using stringify().
// Then convert it back using parse().



// ==================================================
// 12. CHECKING STORED DATA
// ==================================================

localStorage.clear();

localStorage.setItem("name", "Sahithya");

let storedName = localStorage.getItem("name");

if (storedName) {
    console.log("Name is available");
}

// Output:
// Name is available

// Explanation:
// The if condition checks whether the value exists.


// ❌ Error Program

localStorage.clear();

let storedName2 = localStorage.getItem("name");

console.log(storedName2.toUpperCase());

// Output:
// TypeError: Cannot read properties of null

// Error Explanation:
// The key does not exist, so getItem() returns null.
// Calling a string method on null causes an error.


// ✅ Solution

localStorage.clear();

let storedName3 = localStorage.getItem("name");

if (storedName3) {
    console.log(storedName3.toUpperCase());
} else {
    console.log("Name is not available");
}

// Output:
// Name is not available

// Solution Explanation:
// Check whether the value exists before using it.



// ==================================================
// 13. UPDATING STORED DATA
// ==================================================

localStorage.clear();

localStorage.setItem("name", "Sahithya");

localStorage.setItem("name", "Anu");

console.log(localStorage.getItem("name"));

// Output:
// Anu

// Explanation:
// Using setItem() with the same key updates the old value.


// ❌ Error Program

localStorage.clear();

localStorage.setItem("name", "Sahithya");

localStorage.setItem("Name", "Anu");

console.log(localStorage.getItem("name"));

// Output:
// Sahithya

// Error Explanation:
// "Name" is different from "name".
// A new key was created instead of updating the old one.


// ✅ Solution

localStorage.clear();

localStorage.setItem("name", "Sahithya");

localStorage.setItem("name", "Anu");

console.log(localStorage.getItem("name"));

// Output:
// Anu

// Solution Explanation:
// Use exactly the same key to update the stored value.



// ==================================================
// 14. DATA PERSISTS AFTER BROWSER RESTART
// ==================================================

localStorage.setItem("name", "Sahithya");

console.log(localStorage.getItem("name"));

// Output:
// Sahithya

// Explanation:
// Local Storage normally keeps the data even after
// closing and reopening the browser.


// ❌ Error Program

sessionStorage.setItem("name", "Sahithya");

// Output:
// Data is stored only for the current browser session.

// Error Explanation:
// sessionStorage is different from localStorage.
// Session Storage is temporary and is tied to the page session.


// ✅ Solution

localStorage.setItem("name", "Sahithya");

console.log(localStorage.getItem("name"));

// Output:
// Sahithya

// Solution Explanation:
// Use localStorage when the data should normally remain
// after closing and reopening the browser.



// ==================================================
// 15. ERROR HANDLING
// ==================================================

localStorage.clear();

localStorage.setItem("student", "invalid json");

let storedStudent = localStorage.getItem("student");

try {
    let studentData = JSON.parse(storedStudent);
    console.log(studentData);
} catch (error) {
    console.log("Invalid stored data");
}

// Output:
// Invalid stored data

// Explanation:
// try...catch handles errors when JSON.parse()
// receives invalid JSON.


// ❌ Error Program

localStorage.clear();

localStorage.setItem("student", "invalid json");

let storedStudent2 = localStorage.getItem("student");

let studentData2 = JSON.parse(storedStudent2);

console.log(studentData2);

// Output:
// SyntaxError: Unexpected token

// Error Explanation:
// JSON.parse() cannot convert invalid JSON.
// Without try...catch, the program stops with an error.


// ✅ Solution

localStorage.clear();

localStorage.setItem("student", "invalid json");

let storedStudent3 = localStorage.getItem("student");

try {
    let studentData3 = JSON.parse(storedStudent3);
    console.log(studentData3);
} catch (error) {
    console.log("Invalid stored data");
}

// Output:
// Invalid stored data

// Solution Explanation:
// try...catch safely handles the JSON error
// and prevents the program from stopping.
