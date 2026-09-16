// OBJECTS IN JAVASCRIPT
// =====================


// 1. CREATING AN OBJECT
// An object stores related information together.

let student = {
    name: "Sahithya",
    age: 24,
    course: "MCA"
};

console.log(student);

// Output:
// { name: 'Sahithya', age: 24, course: 'MCA' }

// Explanation:
// student is an object that stores related information.


// ❌ Error Program

let student2 = {
    name: "Sahithya",
    age: 24
};

console.log(student2.name.first);

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// name contains a string, not another object.


// ✅ Solution

console.log(student2.name);

// Output:
// Sahithya

// Solution Explanation:
// We access the name property correctly.


// --------------------------------------------------


// 2. OBJECT PROPERTIES
// Properties are the information stored inside an object.

let person = {
    name: "Sahithya",
    age: 24
};

console.log(person.name);
console.log(person.age);

// Output:
// Sahithya
// 24

// Explanation:
// name and age are properties of person.


// ❌ Error Program

console.log(person.fullName.toUpperCase());

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// fullName does not exist in the object.


// ✅ Solution

console.log(person.name.toUpperCase());

// Output:
// SAHITHYA

// Solution Explanation:
// name is an existing property.


// --------------------------------------------------


// 3. ACCESSING PROPERTIES
// We can access a property using dot notation.

let user = {
    name: "Sahithya",
    age: 24
};

console.log(user.name);

// Output:
// Sahithya

// Explanation:
// user.name gets the value of the name property.


// ❌ Error Program

console.log(user.name.first);

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// name is a string and does not have a first property.


// ✅ Solution

console.log(user.name);

// Output:
// Sahithya

// Solution Explanation:
// We access the property directly.


// --------------------------------------------------


// 4. CHANGING PROPERTIES
// We can change an existing property.

let student3 = {
    name: "Sahithya",
    age: 24
};

student3.age = 25;

console.log(student3.age);

// Output:
// 25

// Explanation:
// The value of age was changed from 24 to 25.


// ❌ Error Program

student3.age.toUpperCase();

// Error:
// TypeError: student3.age.toUpperCase is not a function

// Error Explanation:
// age contains a number, so toUpperCase() cannot be used.


// ✅ Solution

console.log(student3.age);

// Output:
// 25

// Solution Explanation:
// We use the number directly.


// --------------------------------------------------


// 5. ADDING PROPERTIES
// We can add a new property to an object.

let student4 = {
    name: "Sahithya",
    age: 24
};

student4.city = "Bangalore";

console.log(student4.city);

// Output:
// Bangalore

// Explanation:
// city was added to the object.


// ❌ Error Program

console.log(student4.address.city);

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// address does not exist in student4.


// ✅ Solution

student4.address = {
    city: "Bangalore"
};

console.log(student4.address.city);

// Output:
// Bangalore

// Solution Explanation:
// We create the address object before accessing city.


// --------------------------------------------------


// 6. DELETING PROPERTIES
// We can delete a property using delete.

let student5 = {
    name: "Sahithya",
    age: 24,
    city: "Bangalore"
};

delete student5.city;

console.log(student5);

// Output:
// { name: 'Sahithya', age: 24 }

// Explanation:
// The city property was removed.


// ❌ Error Program

delete student5.address.city;

// Error:
// TypeError: Cannot convert undefined or null to object

// Error Explanation:
// address does not exist in the object.


// ✅ Solution

delete student5.city;

console.log(student5);

// Output:
// { name: 'Sahithya', age: 24 }

// Solution Explanation:
// We delete an existing property.


// --------------------------------------------------


// 7. OBJECT METHODS
// A function inside an object is called a method.

let student6 = {
    name: "Sahithya",

    greet: function () {
        console.log("Hello!");
    }
};

student6.greet();

// Output:
// Hello!

// Explanation:
// greet() is a method inside student6.


// ❌ Error Program

student6.welcome();

// Error:
// TypeError: student6.welcome is not a function

// Error Explanation:
// welcome() does not exist in the object.


// ✅ Solution

student6.greet();

// Output:
// Hello!

// Solution Explanation:
// We call the method that exists.


// --------------------------------------------------


// 8. NESTED OBJECTS
// An object can contain another object.

let student7 = {
    name: "Sahithya",

    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
};

console.log(student7.address.city);

// Output:
// Bangalore

// Explanation:
// address is an object inside student7.


// ❌ Error Program

console.log(student7.contact.phone);

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// contact does not exist in student7.


// ✅ Solution

student7.contact = {
    phone: "9876543210"
};

console.log(student7.contact.phone);

// Output:
// 9876543210

// Solution Explanation:
// We create contact before accessing phone.


// --------------------------------------------------


// 9. OBJECT WITH ARRAY
// An object can contain an array.

let student8 = {
    name: "Sahithya",
    subjects: ["JavaScript", "Java", "Python"]
};

console.log(student8.subjects[0]);

// Output:
// JavaScript

// Explanation:
// subjects is an array inside the object.


// ❌ Error Program

console.log(student8.subjects[5].toUpperCase());

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// There is no item at index 5.


// ✅ Solution

console.log(student8.subjects[0]);

// Output:
// JavaScript

// Solution Explanation:
// Index 0 contains JavaScript.


// --------------------------------------------------


// 10. Object.keys()
// Object.keys() gives all property names.

let student9 = {
    name: "Sahithya",
    age: 24
};

console.log(Object.keys(student9));

// Output:
// [ 'name', 'age' ]

// Explanation:
// Object.keys() returns the keys of the object.


// ❌ Error Program

console.log(Object.keys(student9).name);

// Output:
// undefined

// Error Explanation:
// Object.keys() returns an array, not an object with a name property.


// ✅ Solution

console.log(Object.keys(student9)[0]);

// Output:
// name

// Solution Explanation:
// We use array indexing to access a key.


// --------------------------------------------------


// 11. Object.values()
// Object.values() gives all property values.

let student10 = {
    name: "Sahithya",
    age: 24
};

console.log(Object.values(student10));

// Output:
// [ 'Sahithya', 24 ]

// Explanation:
// Object.values() returns all values.


// ❌ Error Program

console.log(Object.values(student10).toUpperCase());

// Error:
// TypeError: Object.values(...).toUpperCase is not a function

// Error Explanation:
// Object.values() returns an array.


// ✅ Solution

console.log(Object.values(student10)[0]);

// Output:
// Sahithya

// Solution Explanation:
// We access the first value from the returned array.


// --------------------------------------------------


// 12. Object.entries()
// Object.entries() gives keys and values together.

let student11 = {
    name: "Sahithya",
    age: 24
};

console.log(Object.entries(student11));

// Output:
// [ [ 'name', 'Sahithya' ], [ 'age', 24 ] ]

// Explanation:
// Each property and value are returned as a pair.


// ❌ Error Program

console.log(Object.entries(student11).name);

// Output:
// undefined

// Error Explanation:
// Object.entries() returns an array.


// ✅ Solution

console.log(Object.entries(student11)[0]);

// Output:
// [ 'name', 'Sahithya' ]

// Solution Explanation:
// We use index 0 to access the first pair.


// --------------------------------------------------


// 13. CHECKING A PROPERTY
// The in operator checks whether a property exists.

let student12 = {
    name: "Sahithya",
    age: 24
};

console.log("name" in student12);

// Output:
// true

// Explanation:
// name exists in the object.


// ❌ Error Program

console.log("name" in null);

// Error:
// TypeError: Cannot use 'in' operator to search for 'name' in null

// Error Explanation:
// The in operator cannot be used with null.


// ✅ Solution

console.log("name" in student12);

// Output:
// true

// Solution Explanation:
// We check the property in an object.


// --------------------------------------------------


// 14. MULTIPLE OBJECTS
// We can create multiple objects.

let student13 = {
    name: "Sahithya",
    age: 24
};

let student14 = {
    name: "Anu",
    age: 23
};

console.log(student13.name);
console.log(student14.name);

// Output:
// Sahithya
// Anu

// Explanation:
// student13 and student14 are separate objects.


// ❌ Error Program

console.log(student15.name);

// Error:
// ReferenceError: student15 is not defined

// Error Explanation:
// student15 was never created.


// ✅ Solution

let student15 = {
    name: "Rahul",
    age: 22
};

console.log(student15.name);

// Output:
// Rahul

// Solution Explanation:
// We create the object before using it.


// --------------------------------------------------


// 15. OBJECT DESTRUCTURING
// Destructuring takes values from an object into variables.

let student16 = {
    name: "Sahithya",
    age: 24
};

let { name, age } = student16;

console.log(name);
console.log(age);

// Output:
// Sahithya
// 24

// Explanation:
// name and age are taken from the student16 object.


// ❌ Error Program

let { city } = student16;

console.log(city.toUpperCase());

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// city does not exist in student16.


// ✅ Solution

let { name: studentName, age: studentAge } = student16;

console.log(studentName);
console.log(studentAge);

// Output:
// Sahithya
// 24

// Solution Explanation:
// We destructure properties that exist in the object.


// ==================================================
// QUICK REVISION
// ==================================================
//
// Object          → Stores related information
// Property        → Information inside an object
// Method          → Function inside an object
// .               → Accesses a property
// delete          → Removes a property
// Object.keys()   → Gets property names
// Object.values() → Gets property values
// Object.entries()→ Gets keys and values
// in              → Checks if a property exists
// Nested Object   → Object inside another object
// Destructuring   → Takes values from an object
//
// ==================================================
