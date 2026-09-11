// 36 – Session Storage
// File: session-storage.js


// ==================================================
// 1. WHAT IS SESSION STORAGE?
// ==================================================

sessionStorage.setItem("name", "Sahithya");

console.log(sessionStorage.getItem("name"));

// Output:
// Sahithya

// Explanation:
// Session Storage stores data in the browser using key-value pairs.


// ❌ Error Program

sessionStorage.setItem("name", "Sahithya");
console.log(sessionStorage.getItem("Name"));

// Output:
// null

// Error Explanation:
// "Name" and "name" are different keys.
// Session Storage keys are case-sensitive.


// ✅ Solution

sessionStorage.setItem("name", "Sahithya");
console.log(sessionStorage.getItem("name"));

// Output:
// Sahithya

// Solution Explanation:
// Use the same key when storing and retrieving data.



// ==================================================
// 2. setItem()
// ==================================================

sessionStorage.setItem("city", "Bengaluru");

console.log("Data stored");

// Output:
// Data stored

// Explanation:
// setItem() stores a value using a key.


// ❌ Error Program

sessionStorage.setItem();

// Output:
// TypeError

// Error Explanation:
// setItem() needs a key and a value.


// ✅ Solution

sessionStorage.setItem("city", "Bengaluru");

console.log(sessionStorage.getItem("city"));

// Output:
// Bengaluru

// Solution Explanation:
// Give both the key and the value to setItem().



// ==================================================
// 3. getItem()
// ==================================================

sessionStorage.setItem("name", "Sahithya");

let name = sessionStorage.getItem("name");

console.log(name);

// Output:
// Sahithya

// Explanation:
// getItem() retrieves the value stored with a particular key.


// ❌ Error Program

sessionStorage.setItem("name", "Sahithya");

let name2 = sessionStorage.getItem("Name");

console.log(name2.toUpperCase());

// Output:
// TypeError: Cannot read properties of null

// Error Explanation:
// The key "Name" does not exist, so getItem() returns null.
// Calling toUpperCase() on null causes an error.


// ✅ Solution

sessionStorage.setItem("name", "Sahithya");

let name3 = sessionStorage.getItem("name");

console.log(name3.toUpperCase());

// Output:
// SAHITHYA

// Solution Explanation:
// Use the correct key so getItem() returns the stored value.



// ==================================================
// 4. removeItem()
// ==================================================

sessionStorage.setItem("name", "Sahithya");

sessionStorage.removeItem("name");

console.log(sessionStorage.getItem("name"));

// Output:
// null

// Explanation:
// removeItem() removes a specific item from Session Storage.


// ❌ Error Program

sessionStorage.setItem("name", "Sahithya");

sessionStorage.removeItem("Name");

console.log(sessionStorage.getItem("name"));

// Output:
// Sahithya

// Error Explanation:
// "Name" and "name" are different keys.
// Therefore, the "name" item is not removed.


// ✅ Solution

sessionStorage.setItem("name", "Sahithya");

sessionStorage.removeItem("name");

console.log(sessionStorage.getItem("name"));

// Output:
// null

// Solution Explanation:
// Use the exact key that was stored.



// ==================================================
// 5. clear()
// ==================================================

sessionStorage.setItem("name", "Sahithya");
sessionStorage.setItem("age", "24");

sessionStorage.clear();

console.log(sessionStorage.length);

// Output:
// 0

// Explanation:
// clear() removes all Session Storage data.


// ❌ Error Program

sessionStorage.setItem("name", "Sahithya");
sessionStorage.setItem("age", "24");

sessionStorage.removeItem("name");

console.log(sessionStorage.getItem("age"));

// Output:
// 24

// Error Explanation:
// removeItem() removes only one item.
// It does not clear all stored data.


// ✅ Solution

sessionStorage.setItem("name", "Sahithya");
sessionStorage.setItem("age", "24");

sessionStorage.clear();

console.log(sessionStorage.length);

// Output:
// 0

// Solution Explanation:
// Use clear() when you want to remove all Session Storage data.



// ==================================================
// 6. length
// ==================================================

sessionStorage.clear();

sessionStorage.setItem("name", "Sahithya");
sessionStorage.setItem("age", "24");

console.log(sessionStorage.length);

// Output:
// 2

// Explanation:
// length tells us how many key-value pairs are stored.


// ❌ Error Program

sessionStorage.clear();

sessionStorage.setItem("name", "Sahithya");

console.log(sessionStorage.length());

// Output:
// TypeError: sessionStorage.length is not a function

// Error Explanation:
// length is a property, not a function.
// We should not use parentheses.


// ✅ Solution

sessionStorage.clear();

sessionStorage.setItem("name", "Sahithya");

console.log(sessionStorage.length);

// Output:
// 1

// Solution Explanation:
// Use length without parentheses.



// ==================================================
// 7. key()
// ==================================================

sessionStorage.clear();

sessionStorage.setItem("name", "Sahithya");
sessionStorage.setItem("age", "24");

console.log(sessionStorage.key(0));

// Output:
// name

// Explanation:
// key() returns the key at a particular position.


// ❌ Error Program

sessionStorage.clear();

sessionStorage.setItem("name", "Sahithya");

console.log(sessionStorage.key());

// Output:
// null

// Error Explanation:
// key() needs an index number to identify a position.


// ✅ Solution

sessionStorage.clear();

sessionStorage.setItem("name", "Sahithya");

console.log(sessionStorage.key(0));

// Output:
// name

// Solution Explanation:
// Give an index such as 0 to get the key at that position.



// ==================================================
// 8. STORING STRINGS
// ==================================================

sessionStorage.clear();

sessionStorage.setItem("city", "Bengaluru");

console.log(sessionStorage.getItem("city"));

// Output:
// Bengaluru

// Explanation:
// Strings can be directly stored in Session Storage.


// ❌ Error Program

sessionStorage.clear();

sessionStorage.setItem("city", Bengaluru);

// Output:
// ReferenceError: Bengaluru is not defined

// Error Explanation:
// Bengaluru is written without quotes.
// JavaScript treats it as a variable.


// ✅ Solution

sessionStorage.clear();

sessionStorage.setItem("city", "Bengaluru");

console.log(sessionStorage.getItem("city"));

// Output:
// Bengaluru

// Solution Explanation:
// Write string values inside quotes.



// ==================================================
// 9. STORING NUMBERS
// ==================================================

sessionStorage.clear();

sessionStorage.setItem("age", 24);

let age = sessionStorage.getItem("age");

console.log(age);
console.log(typeof age);

// Output:
// 24
// string

// Explanation:
// Session Storage stores values as strings.
// Therefore, the number 24 is returned as "24".


// ❌ Error Program

sessionStorage.clear();

sessionStorage.setItem("age", 24);

let age2 = sessionStorage.getItem("age");

console.log(age2 + 1);

// Output:
// 241

// Error Explanation:
// The value returned from Session Storage is a string.
// "24" + 1 becomes "241".


// ✅ Solution

sessionStorage.clear();

sessionStorage.setItem("age", 24);

let age3 = Number(sessionStorage.getItem("age"));

console.log(age3 + 1);

// Output:
// 25

// Solution Explanation:
// Number() converts the stored string back into a number.



// ==================================================
// 10. STORING OBJECTS
// ==================================================

sessionStorage.clear();

let student = {
    name: "Sahithya",
    age: 24
};

sessionStorage.setItem("student", JSON.stringify(student));

console.log(sessionStorage.getItem("student"));

// Output:
// {"name":"Sahithya","age":24}

// Explanation:
// JSON.stringify() converts the object into a string
// so that it can be stored in Session Storage.


// ❌ Error Program

sessionStorage.clear();

let student2 = {
    name: "Sahithya",
    age: 24
};

sessionStorage.setItem("student", student2);

console.log(sessionStorage.getItem("student"));

// Output:
// [object Object]

// Error Explanation:
// Objects should be converted into JSON strings before storing them.


// ✅ Solution

sessionStorage.clear();

let student3 = {
    name: "Sahithya",
    age: 24
};

sessionStorage.setItem("student", JSON.stringify(student3));

console.log(sessionStorage.getItem("student"));

// Output:
// {"name":"Sahithya","age":24}

// Solution Explanation:
// JSON.stringify() converts the object into a storable string.



// ==================================================
// 11. READING OBJECTS
// ==================================================

sessionStorage.clear();

let student4 = {
    name: "Sahithya",
    age: 24
};

sessionStorage.setItem("student", JSON.stringify(student4));

let data = JSON.parse(sessionStorage.getItem("student"));

console.log(data.name);
console.log(data.age);

// Output:
// Sahithya
// 24

// Explanation:
// JSON.parse() converts the stored JSON string back into an object.


// ❌ Error Program

sessionStorage.clear();

sessionStorage.setItem("student", "invalid json");

let data2 = JSON.parse(sessionStorage.getItem("student"));

console.log(data2.name);

// Output:
// SyntaxError

// Error Explanation:
// "invalid json" is not valid JSON.
// JSON.parse() expects valid JSON.


// ✅ Solution

sessionStorage.clear();

let student5 = {
    name: "Sahithya",
    age: 24
};

sessionStorage.setItem("student", JSON.stringify(student5));

let data3 = JSON.parse(sessionStorage.getItem("student"));

console.log(data3.name);

// Output:
// Sahithya

// Solution Explanation:
// First convert the object to JSON using stringify().
// Then convert it back using parse().



// ==================================================
// 12. CHECKING STORED DATA
// ==================================================

sessionStorage.clear();

sessionStorage.setItem("name", "Sahithya");

let storedName = sessionStorage.getItem("name");

if (storedName) {
    console.log("Name is available");
}

// Output:
// Name is available

// Explanation:
// The if condition checks whether the value exists.


// ❌ Error Program

sessionStorage.clear();

let storedName2 = sessionStorage.getItem("name");

console.log(storedName2.toUpperCase());

// Output:
// TypeError: Cannot read properties of null

// Error Explanation:
// The key does not exist, so getItem() returns null.
// Calling a string method on null causes an error.


// ✅ Solution

sessionStorage.clear();

let storedName3 = sessionStorage.getItem("name");

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

sessionStorage.clear();

sessionStorage.setItem("name", "Sahithya");

sessionStorage.setItem("name", "Anu");

console.log(sessionStorage.getItem("name"));

// Output:
// Anu

// Explanation:
// Using setItem() with the same key updates the old value.


// ❌ Error Program

sessionStorage.clear();

sessionStorage.setItem("name", "Sahithya");

sessionStorage.setItem("Name", "Anu");

console.log(sessionStorage.getItem("name"));

// Output:
// Sahithya

// Error Explanation:
// "Name" is different from "name".
// A new key was created instead of updating the old one.


// ✅ Solution

sessionStorage.clear();

sessionStorage.setItem("name", "Sahithya");

sessionStorage.setItem("name", "Anu");

console.log(sessionStorage.getItem("name"));

// Output:
// Anu

// Solution Explanation:
// Use exactly the same key to update the stored value.



// ==================================================
// 14. SESSION-BASED DATA
// ==================================================

sessionStorage.setItem("name", "Sahithya");

console.log(sessionStorage.getItem("name"));

// Output:
// Sahithya

// Explanation:
// Session Storage keeps data available during the current
// browser tab session.


// ❌ Error Program

localStorage.setItem("name", "Sahithya");

console.log(sessionStorage.getItem("name"));

// Output:
// null

// Error Explanation:
// Local Storage and Session Storage are separate.
// Data stored in localStorage cannot be retrieved using sessionStorage.


// ✅ Solution

sessionStorage.setItem("name", "Sahithya");

console.log(sessionStorage.getItem("name"));

// Output:
// Sahithya

// Solution Explanation:
// Store and retrieve the data from the same storage type.



// ==================================================
// 15. SESSION STORAGE vs LOCAL STORAGE
// ==================================================

localStorage.clear();
sessionStorage.clear();

localStorage.setItem("name", "Sahithya");
sessionStorage.setItem("name", "Sahithya");

console.log(localStorage.getItem("name"));
console.log(sessionStorage.getItem("name"));

// Output:
// Sahithya
// Sahithya

// Explanation:
// Both can store data, but their storage lifetime is different.
//
// Local Storage → Normally remains after closing the browser.
// Session Storage → Normally lasts for the current tab session.


// ❌ Error Program

localStorage.setItem("name", "Sahithya");

console.log(sessionStorage.getItem("name").toUpperCase());

// Output:
// TypeError: Cannot read properties of null

// Error Explanation:
// The data was stored in localStorage but we tried to get it
// from sessionStorage.


// ✅ Solution

sessionStorage.setItem("name", "Sahithya");

console.log(sessionStorage.getItem("name").toUpperCase());

// Output:
// SAHITHYA

// Solution Explanation:
// Use the same storage type for storing and retrieving data.
