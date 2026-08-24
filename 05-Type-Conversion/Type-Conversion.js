// 🔄 JavaScript Type Conversion


// 1. Explicit Conversion - String to Number

let age = "22";

age = Number(age);

console.log(age);
console.log(typeof age);

// Output:
// 22
// number

// Explanation:
// Number() manually converts the string "22" into a number.



// 2. Explicit Conversion - Number to String

let number = 100;

number = String(number);

console.log(number);
console.log(typeof number);

// Output:
// 100
// string

// Explanation:
// String() manually converts the number 100 into a string.



// 3. Explicit Conversion - Number to Boolean

let value = 1;

value = Boolean(value);

console.log(value);
console.log(typeof value);

// Output:
// true
// boolean

// Explanation:
// Boolean() converts a value into true or false.



// 4. Implicit Conversion - String + Number

let x = "22";

console.log(x + 5);

// Output:
// 225

// Explanation:
// JavaScript automatically converts 5 into "5" and joins the values.



// 5. Implicit Conversion - Number + String

let a = 10;
let b = "5";

console.log(a + b);

// Output:
// 105

// Explanation:
// JavaScript automatically converts 10 into "10" and joins the values.



// 6. Implicit Conversion - Number and Boolean

let result = 10 + true;

console.log(result);

// Output:
// 11

// Explanation:
// JavaScript automatically converts true into 1 during the calculation.
