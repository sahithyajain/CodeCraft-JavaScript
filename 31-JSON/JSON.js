// 31 - JSON in JavaScript


// ==================================================
// 1. JSON BASICS
// ==================================================

const user = {
    name: "Riya",
    age: 20
};

console.log(user.name);

// Output:
// Riya

// Explanation:
// JSON stores data using keys and values.


// ❌ Error Program

const userError = {
    name: "Riya",
    age: 20
};

console.log(userError.email.toUpperCase());

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// The email property does not exist.


// ✅ Solution

const userCorrect = {
    name: "Riya",
    age: 20,
    email: "riya@example.com"
};

console.log(userCorrect.email);

// Output:
// riya@example.com

// Solution Explanation:
// We add the email property before using it.


// ==================================================
// 2. JSON.parse()
// ==================================================

const data = '{"name":"Riya","age":20}';

const user2 = JSON.parse(data);

console.log(user2.name);

// Output:
// Riya

// Explanation:
// JSON.parse() converts JSON text into a JavaScript object.


// ❌ Error Program

const dataError = '{"name":"Riya","age":20';

const user2Error = JSON.parse(dataError);

console.log(user2Error);

// Error:
// SyntaxError

// Error Explanation:
// The JSON is incomplete because the closing } is missing.


// ✅ Solution

const dataCorrect = '{"name":"Riya","age":20}';

const user2Correct = JSON.parse(dataCorrect);

console.log(user2Correct.name);

// Output:
// Riya

// Solution Explanation:
// The JSON is correctly written before using JSON.parse().


// ==================================================
// 3. JSON.stringify()
// ==================================================

const user3 = {
    name: "Riya",
    age: 20
};

const data3 = JSON.stringify(user3);

console.log(data3);

// Output:
// {"name":"Riya","age":20}

// Explanation:
// JSON.stringify() converts a JavaScript object into JSON text.


// ❌ Error Program

const user3Error = {
    name: "Riya",
    age: 20
};

console.log(user3Error.toJSON());

// Error:
// TypeError: user3Error.toJSON is not a function

// Error Explanation:
// toJSON() is not the method used to convert an object into JSON.


// ✅ Solution

const user3Correct = {
    name: "Riya",
    age: 20
};

const data3Correct = JSON.stringify(user3Correct);

console.log(data3Correct);

// Output:
// {"name":"Riya","age":20}

// Solution Explanation:
// Use JSON.stringify() to convert the object into JSON text.


// ==================================================
// 4. JSON DATA TYPES
// ==================================================

const student = {
    name: "Riya",
    age: 20,
    isStudent: true,
    marks: null
};

console.log(student.isStudent);

// Output:
// true

// Explanation:
// JSON can store strings, numbers, booleans, and null.


// ❌ Error Program

const studentError = {
    name: "Riya",
    age: 20
};

console.log(studentError.isStudent.toString());

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// The isStudent property does not exist.


// ✅ Solution

const studentCorrect2 = {
    name: "Riya",
    age: 20,
    isStudent: true
};

console.log(studentCorrect2.isStudent.toString());

// Output:
// true

// Solution Explanation:
// The isStudent property is added before using it.


// ==================================================
// 5. JSON ARRAY
// ==================================================

const fruits = ["Apple", "Mango", "Orange"];

const fruitData = JSON.stringify(fruits);

console.log(fruitData);

// Output:
// ["Apple","Mango","Orange"]

// Explanation:
// JSON can also store arrays of values.


// ❌ Error Program

const fruitDataError = '["Apple","Mango",]';

const fruitsError = JSON.parse(fruitDataError);

console.log(fruitsError);

// Error:
// SyntaxError

// Error Explanation:
// JSON does not allow an extra comma at the end of an array.


// ✅ Solution

const fruitDataCorrect = '["Apple","Mango","Orange"]';

const fruitsCorrect = JSON.parse(fruitDataCorrect);

console.log(fruitsCorrect);

// Output:
// ["Apple", "Mango", "Orange"]

// Solution Explanation:
// The JSON array is written correctly.


// ==================================================
// 6. JSON OBJECT
// ==================================================

const personData = '{"name":"Riya","age":20}';

const person = JSON.parse(personData);

console.log(person.age);

// Output:
// 20

// Explanation:
// JSON objects store data using key-value pairs.


// ❌ Error Program

const personDataError = "{name:'Riya'}";

const personError = JSON.parse(personDataError);

console.log(personError);

// Error:
// SyntaxError

// Error Explanation:
// JSON keys and string values must use double quotes.


// ✅ Solution

const personDataCorrect = '{"name":"Riya"}';

const personCorrect = JSON.parse(personDataCorrect);

console.log(personCorrect.name);

// Output:
// Riya

// Solution Explanation:
// The key and string value use double quotes.


// ==================================================
// 7. JSON.parse() WITH ARRAY
// ==================================================

const numbersData = '[10,20,30]';

const numbers = JSON.parse(numbersData);

console.log(numbers[0]);

// Output:
// 10

// Explanation:
// JSON.parse() can also convert JSON arrays into JavaScript arrays.


// ❌ Error Program

const numbersDataError = '[10,20,30';

const numbersError = JSON.parse(numbersDataError);

console.log(numbersError);

// Error:
// SyntaxError

// Error Explanation:
// The closing ] is missing.


// ✅ Solution

const numbersDataCorrect = '[10,20,30]';

const numbersCorrect = JSON.parse(numbersDataCorrect);

console.log(numbersCorrect[0]);

// Output:
// 10

// Solution Explanation:
// The JSON array is correctly closed.


// ==================================================
// 8. JSON.stringify() WITH ARRAY
// ==================================================

const colors = ["Red", "Blue", "Green"];

const colorData = JSON.stringify(colors);

console.log(colorData);

// Output:
// ["Red","Blue","Green"]

// Explanation:
// JSON.stringify() converts a JavaScript array into JSON text.


// ❌ Error Program

const colorsError = ["Red", "Blue"];

console.log(colorsError.toJSON());

// Error:
// TypeError: colorsError.toJSON is not a function

// Error Explanation:
// toJSON() is not the correct method.


// ✅ Solution

const colorsCorrect = ["Red", "Blue"];

console.log(JSON.stringify(colorsCorrect));

// Output:
// ["Red","Blue"]

// Solution Explanation:
// JSON.stringify() converts the array into JSON text.


// ==================================================
// 9. ACCESSING PARSED DATA
// ==================================================

const studentData = '{"name":"Riya","age":20}';

const student2 = JSON.parse(studentData);

console.log(student2.name);
console.log(student2.age);

// Output:
// Riya
// 20

// Explanation:
// After parsing, we can access object properties normally.


// ❌ Error Program

const studentDataError = '{"name":"Riya","age":20}';

const studentError2 = JSON.parse(studentDataError);

console.log(studentError2.email.toUpperCase());

// Error:
// TypeError

// Error Explanation:
// The email property does not exist.


// ✅ Solution

const studentDataCorrect = '{"name":"Riya","email":"riya@example.com"}';

const studentCorrect3 = JSON.parse(studentDataCorrect);

console.log(studentCorrect3.email);

// Output:
// riya@example.com

// Solution Explanation:
// We access a property that exists in the object.


// ==================================================
// 10. CONVERTING OBJECT TO JSON
// ==================================================

const product = {
    name: "Laptop",
    price: 50000
};

const productData = JSON.stringify(product);

console.log(productData);

// Output:
// {"name":"Laptop","price":50000}

// Explanation:
// JSON.stringify() converts the object into JSON text.


// ❌ Error Program

const productError = {
    name: "Laptop",
    price: 50000
};

console.log(productError.toJSONString());

// Error:
// TypeError: productError.toJSONString is not a function

// Error Explanation:
// toJSONString() is not a JavaScript method.


// ✅ Solution

const productCorrect = {
    name: "Laptop",
    price: 50000
};

console.log(JSON.stringify(productCorrect));

// Output:
// {"name":"Laptop","price":50000}

// Solution Explanation:
// Use JSON.stringify() to convert the object into JSON text.


// ==================================================
// 11. CONVERTING JSON TO OBJECT
// ==================================================

const carData = '{"brand":"Toyota","year":2025}';

const car = JSON.parse(carData);

console.log(car.brand);

// Output:
// Toyota

// Explanation:
// JSON.parse() converts JSON text into an object.


// ❌ Error Program

const carDataError = '{"brand":"Toyota","year":2025';

const carError = JSON.parse(carDataError);

console.log(carError);

// Error:
// SyntaxError

// Error Explanation:
// The JSON object is missing the closing }.


// ✅ Solution

const carDataCorrect = '{"brand":"Toyota","year":2025}';

const carCorrect = JSON.parse(carDataCorrect);

console.log(carCorrect.brand);

// Output:
// Toyota

// Solution Explanation:
// The JSON object is correctly written.


// ==================================================
// 12. JSON WITH NESTED OBJECT
// ==================================================

const schoolData = '{"student":{"name":"Riya","age":20}}';

const school = JSON.parse(schoolData);

console.log(school.student.name);

// Output:
// Riya

// Explanation:
// JSON can contain objects inside other objects.


// ❌ Error Program

const schoolDataError = '{"student":{"name":"Riya","age":20}';

const schoolError = JSON.parse(schoolDataError);

console.log(schoolError);

// Error:
// SyntaxError

// Error Explanation:
// The outer JSON object is missing the closing }.


// ✅ Solution

const schoolDataCorrect = '{"student":{"name":"Riya","age":20}}';

const schoolCorrect = JSON.parse(schoolDataCorrect);

console.log(schoolCorrect.student.name);

// Output:
// Riya

// Solution Explanation:
// Both JSON objects are correctly closed.


// ==================================================
// 13. JSON WITH ARRAY OF OBJECTS
// ==================================================

const studentsData = '[{"name":"Riya"},{"name":"Anu"}]';

const students = JSON.parse(studentsData);

console.log(students[0].name);

// Output:
// Riya

// Explanation:
// JSON can contain an array of objects.


// ❌ Error Program

const studentsDataError = '[{"name":"Riya"},{"name":"Anu"}';

const studentsError = JSON.parse(studentsDataError);

console.log(studentsError);

// Error:
// SyntaxError

// Error Explanation:
// The JSON array is missing the closing ].


// ✅ Solution

const studentsDataCorrect = '[{"name":"Riya"},{"name":"Anu"}]';

const studentsCorrect = JSON.parse(studentsDataCorrect);

console.log(studentsCorrect[0].name);

// Output:
// Riya

// Solution Explanation:
// The array is correctly closed.


// ==================================================
// 14. JSON.parse() ERROR HANDLING
// ==================================================

try {
    const data4 = '{"name":"Riya"}';
    const user4 = JSON.parse(data4);

    console.log(user4.name);
} catch (error) {
    console.log("Invalid JSON");
}

// Output:
// Riya

// Explanation:
// try...catch can handle invalid JSON errors.


// ❌ Error Program

try {
    const data4Error = '{"name":"Riya"';
    const user4Error = JSON.parse(data4Error);

    console.log(user4Error.name);
} catch (error) {
    console.log("Invalid JSON");
}

// Output:
// Invalid JSON

// Error Explanation:
// The JSON is invalid, so JSON.parse() creates an error.


// ✅ Solution

try {
    const data4Correct = '{"name":"Riya"}';
    const user4Correct = JSON.parse(data4Correct);

    console.log(user4Correct.name);
} catch (error) {
    console.log("Invalid JSON");
}

// Output:
// Riya

// Solution Explanation:
// The JSON is written correctly, so it can be parsed.


// ==================================================
// 15. JSON.parse() AND JSON.stringify() TOGETHER
// ==================================================

const originalUser = {
    name: "Riya",
    age: 20
};

const json = JSON.stringify(originalUser);
const newUser = JSON.parse(json);

console.log(newUser.name);

// Output:
// Riya

// Explanation:
// stringify() converts the object to JSON,
// and parse() converts it back to an object.


// ❌ Error Program

const originalUserError = {
    name: "Riya"
};

const jsonError = JSON.stringify(originalUserError);
const newUserError = JSON.parse(jsonError);

console.log(newUserError.toUpperCase());

// Error: TypeError

// Error Explanation:
// newUserError is an object, not a string.
// toUpperCase() works with strings.


// ✅ Solution

const originalUserCorrect = {
    name: "Riya"
};

const jsonCorrect = JSON.stringify(originalUserCorrect);
const newUserCorrect = JSON.parse(jsonCorrect);

console.log(newUserCorrect.name);

// Output:
// Riya

// Solution Explanation:
// After parsing, we access the object's property correctly.
