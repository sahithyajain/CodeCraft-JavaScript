// 20 - Destructuring in JavaScript


// ==================================================
// 1. RANDOM SIMPLE PROGRAM
// ==================================================

let numbers = [10, 20];

let [a, b] = numbers;

console.log(a);
console.log(b);

// Output:
// 10
// 20

// Explanation:
// Destructuring takes values from the array
// and stores them in variables.


// ==================================================
// 2. ARRAY DESTRUCTURING
// ==================================================

let fruits = ["Apple", "Mango"];

let [first, second] = fruits;

console.log(first);
console.log(second);

// Output:
// Apple
// Mango

// Explanation:
// first gets Apple.
// second gets Mango.


// ❌ Error Program

let fruitsError = ["Apple", "Mango"];

let [firstError, secondError] = fruit;

console.log(firstError);

// Error:
// ReferenceError: fruit is not defined

// Error Explanation:
// The array name is fruits, but we used fruit.


// ✅ Solution

let fruitsCorrect = ["Apple", "Mango"];

let [firstCorrect, secondCorrect] = fruitsCorrect;

console.log(firstCorrect);

// Output:
// Apple

// Solution Explanation:
// We used the correct array name.


// ==================================================
// 3. OBJECT DESTRUCTURING
// ==================================================

let student = {
    name: "Riya",
    age: 20
};

let { name, age } = student;

console.log(name);
console.log(age);

// Output:
// Riya
// 20

// Explanation:
// name gets Riya.
// age gets 20.


// ❌ Error Program

let studentError = {
    name: "Riya",
    age: 20
};

let { nameError, ageError } = studentError;

console.log(nameError);

// Output:
// undefined

// Error Explanation:
// There is no property called nameError.
// The object property is called name.


// ✅ Solution

let studentCorrect = {
    name: "Riya",
    age: 20
};

let { name: studentName, age: studentAge } = studentCorrect;

console.log(studentName);
console.log(studentAge);

// Output:
// Riya
// 20

// Solution Explanation:
// We used the correct object properties.


// ==================================================
// 4. DIFFERENT VARIABLE NAME
// ==================================================

let student2 = {
    name: "Riya"
};

let { name: studentName2 } = student2;

console.log(studentName2);

// Output:
// Riya

// Explanation:
// name is the object property.
// studentName2 is the new variable name.


// ❌ Error Program

let studentError2 = {
    name: "Riya"
};

let { name: studentNameError } = studentError2;

console.log(studentName);

// Error:
// ReferenceError: studentName is not defined

// Error Explanation:
// We created studentNameError,
// but tried to use studentName.


// ✅ Solution

let studentCorrect2 = {
    name: "Riya"
};

let { name: studentNameCorrect } = studentCorrect2;

console.log(studentNameCorrect);

// Output:
// Riya

// Solution Explanation:
// We used the variable name that we created.


// ==================================================
// 5. SKIPPING ARRAY VALUES
// ==================================================

let numbers2 = [10, 20, 30];

let [first2, , third2] = numbers2;

console.log(first2);
console.log(third2);

// Output:
// 10
// 30

// Explanation:
// The empty space skips 20.
// first2 gets 10 and third2 gets 30.


// ❌ Error Program

let numbersError2 = [10, 20, 30];

let [firstError2, thirdError2] = numbersError2;

console.log(thirdError2);

// Output:
// 20

// Error Explanation:
// Without an empty space, the second variable
// gets the second value.


// ✅ Solution

let numbersCorrect2 = [10, 20, 30];

let [firstCorrect2, , thirdCorrect2] = numbersCorrect2;

console.log(thirdCorrect2);

// Output:
// 30

// Solution Explanation:
// The empty space skips the second value.


// ==================================================
// 6. DEFAULT VALUES
// ==================================================

let numbers3 = [10];

let [first3, second3 = 20] = numbers3;

console.log(first3);
console.log(second3);

// Output:
// 10
// 20

// Explanation:
// The array has no second value.
// So, 20 is used as the default value.


// ❌ Error Program

let numbersError3 = [10];

let [firstError3, secondError3];

console.log(secondError3);

// Error:
// SyntaxError

// Error Explanation:
// Destructuring without a value is not written correctly.


// ✅ Solution

let numbersCorrect3 = [10];

let [firstCorrect3, secondCorrect3 = 20] = numbersCorrect3;

console.log(secondCorrect3);

// Output:
// 20

// Solution Explanation:
// We gave 20 as the default value.


// ==================================================
// 7. REST WITH ARRAY
// ==================================================

let numbers4 = [10, 20, 30, 40];

let [first4, ...rest] = numbers4;

console.log(first4);
console.log(rest);

// Output:
// 10
// [20, 30, 40]

// Explanation:
// first4 gets the first value.
// rest collects all remaining values.


// ❌ Error Program

let numbersError4 = [10, 20, 30];

let [firstError4, ..restError] = numbersError4;

console.log(restError);

// Error:
// SyntaxError

// Error Explanation:
// Rest uses three dots (...), not two dots.


// ✅ Solution

let numbersCorrect4 = [10, 20, 30];

let [firstCorrect4, ...restCorrect] = numbersCorrect4;

console.log(restCorrect);

// Output:
// [20, 30]

// Solution Explanation:
// We used three dots (...) to collect the remaining values.


// ==================================================
// 8. REST WITH OBJECT
// ==================================================

let student3 = {
    name: "Riya",
    age: 20,
    city: "Bangalore"
};

let { name: studentName3, ...details } = student3;

console.log(studentName3);
console.log(details);

// Output:
// Riya
// { age: 20, city: "Bangalore" }

// Explanation:
// studentName3 gets name.
// details gets the remaining properties.


// ❌ Error Program

let studentError3 = {
    name: "Riya",
    age: 20
};

let { name: studentNameError3, ..detailsError } = studentError3;

console.log(detailsError);

// Error:
// SyntaxError

// Error Explanation:
// Rest needs three dots (...).


// ✅ Solution

let studentCorrect3 = {
    name: "Riya",
    age: 20
};

let { name: studentNameCorrect3, ...detailsCorrect } = studentCorrect3;

console.log(detailsCorrect);

// Output:
// { age: 20 }

// Solution Explanation:
// Three dots collect the remaining properties.


// ==================================================
// 9. NESTED OBJECT DESTRUCTURING
// ==================================================

let student4 = {
    name: "Riya",
    address: {
        city: "Bangalore"
    }
};

let { address: { city } } = student4;

console.log(city);

// Output:
// Bangalore

// Explanation:
// city is inside the address object.
// Destructuring gets it directly.


// ❌ Error Program

let studentError4 = {
    name: "Riya",
    address: {
        city: "Bangalore"
    }
};

let { address: { country } } = studentError4;

console.log(country);

// Output:
// undefined

// Error Explanation:
// There is no country property inside address.


// ✅ Solution

let studentCorrect4 = {
    name: "Riya",
    address: {
        city: "Bangalore"
    }
};

let { address: { city: cityCorrect } } = studentCorrect4;

console.log(cityCorrect);

// Output:
// Bangalore

// Solution Explanation:
// We used the property that exists: city.


// ==================================================
// 10. NESTED ARRAY DESTRUCTURING
// ==================================================

let numbers5 = [10, [20, 30]];

let [first5, [second5, third5]] = numbers5;

console.log(first5);
console.log(second5);
console.log(third5);

// Output:
// 10
// 20
// 30

// Explanation:
// The second array contains 20 and 30.
// Destructuring gets all three values.


// ❌ Error Program

let numbersError5 = [10, [20, 30]];

let [firstError5, [secondError5, thirdError5]] = numbersError5;

console.log(fourthError);

// Error:
// ReferenceError: fourthError is not defined

// Error Explanation:
// We tried to use a variable that was never created.


// ✅ Solution

let numbersCorrect5 = [10, [20, 30]];

let [firstCorrect5, [secondCorrect5, thirdCorrect5]] = numbersCorrect5;

console.log(firstCorrect5);
console.log(secondCorrect5);
console.log(thirdCorrect5);

// Output:
// 10
// 20
// 30

// Solution Explanation:
// We use the variables created by destructuring.


// ==================================================
// 11. DESTRUCTURING IN FUNCTION PARAMETERS
// ==================================================

function showStudent({ name, age }) {
    console.log(name);
    console.log(age);
}

showStudent({
    name: "Riya",
    age: 20
});

// Output:
// Riya
// 20

// Explanation:
// The function directly takes name and age
// from the object.


/*
❌ Error Program
*/

function showStudentError({ name, age }) {
    console.log(name);
    console.log(age);
}

showStudentError();

// Error:
// Cannot destructure property 'name' of 'undefined'

// Error Explanation:
// No object was passed to the function.


// ✅ Solution

function showStudentCorrect({ name, age }) {
    console.log(name);
    console.log(age);
}

showStudentCorrect({
    name: "Riya",
    age: 20
});

// Output:
// Riya
// 20

// Solution Explanation:
// We passed the required object to the function.


// ==================================================
// 12. ARRAY DESTRUCTURING IN FUNCTION
// ==================================================

function add([a, b]) {
    console.log(a + b);
}

add([10, 5]);

// Output:
// 15

// Explanation:
// The function gets 10 and 5 from the array.
// Then it adds them.


// ❌ Error Program

function addError([a, b]) {
    console.log(a + b);
}

addError();

// Error:
// Cannot destructure property

// Error Explanation:
// No array was passed to the function.


// ✅ Solution

function addCorrect([a, b]) {
    console.log(a + b);
}

addCorrect([10, 5]);

// Output:
// 15

// Solution Explanation:
// We passed an array with the required values.


// ==================================================
// 13. SWAPPING VARIABLES
// ==================================================

let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x);
console.log(y);

// Output:
// 20
// 10

// Explanation:
// The values of x and y are exchanged.
// x becomes 20 and y becomes 10.


// ❌ Error Program

let xError = 10;
let yError = 20;

[xError, yError] = [xError, yError];

console.log(xError);
console.log(yError);

// Output:
// 10
// 20

// Error Explanation:
// The same values are assigned again.
// So nothing is swapped.


// ✅ Solution

let xCorrect = 10;
let yCorrect = 20;

[xCorrect, yCorrect] = [yCorrect, xCorrect];

console.log(xCorrect);
console.log(yCorrect);

// Output:
// 20
// 10

// Solution Explanation:
// We put y first and x second.
// This swaps their values.


// ==================================================
// 14. DESTRUCTURING WITH let
// ==================================================

let [a2, b2] = [10, 20];

a2 = 30;

console.log(a2);
console.log(b2);

// Output:
// 30
// 20

// Explanation:
// let allows us to change the value later.
// a2 is changed from 10 to 30.


// ❌ Error Program

const [aError2, bError2] = [10, 20];

aError2 = 30;

console.log(aError2);

// Error:
// Assignment to constant variable

// Error Explanation:
// const values cannot be changed after creation.


// ✅ Solution

let [aCorrect2, bCorrect2] = [10, 20];

aCorrect2 = 30;

console.log(aCorrect2);

// Output:
// 30

// Solution Explanation:
// We use let because the value needs to change.


// ==================================================
// 15. DESTRUCTURING FUNCTION RETURN
// ==================================================

function getNumbers() {
    return [10, 20];
}

let [a3, b3] = getNumbers();

console.log(a3);
console.log(b3);

// Output:
// 10
// 20

// Explanation:
// The function returns an array.
// Destructuring takes the values from that array.


// ❌ Error Program

function getNumbersError() {
    return [10, 20];
}

let [aError3, bError3] = getNumbersError;

console.log(aError3);

// Error:
// TypeError: getNumbersError is not iterable

// Error Explanation:
// We did not call the function.
// We need to use getNumbersError().


// ✅ Solution

function getNumbersCorrect() {
    return [10, 20];
}

let [aCorrect3, bCorrect3] = getNumbersCorrect();

console.log(aCorrect3);
console.log(bCorrect3);

// Output:
// 10
// 20

// Solution Explanation:
// We called the function using ().
// It returns the array, which is then destructured.
