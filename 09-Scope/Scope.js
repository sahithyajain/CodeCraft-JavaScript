// 🔐 JavaScript Scope


// =====================================
// 1. Global Scope
// =====================================


let name = "Sahithya";

function greet() {
    console.log(name);
}

greet();

// Output:  Sahithya

// How it works:
// name is created outside the function.
// Because it is a global variable, the function can use it.
// greet() runs the function and prints name.



// ❌ Error Program

function showCity() {
    let city = "Bangalore";
}

console.log(city);

// Output:   ReferenceError: city is not defined

// How it works:
// city is created inside the function.
// We try to use city outside the function.
// So JavaScript gives an error.



// ✅ Correct Version

function showCity() {
    let city = "Bangalore";
    console.log(city);
}

showCity();

// Output:  Bangalore

// How it works:
// city is used inside the function where it was created.
// showCity() runs the function and prints city.



// =====================================
// 2. Function Scope
// =====================================


function welcome() {
    let message = "Hello!";
    console.log(message);
}

welcome();

// Output:  Hello!

// How it works:
// message is created inside the function.
// The function can use message.
// welcome() runs the function and prints "Hello!".



// ❌ Error Program

function showAge() {
    let age = 22;
}

console.log(age);

// Output:   ReferenceError: age is not defined

// How it works:
// age is created inside showAge().
// We try to use age outside the function.
// So JavaScript gives an error.



// ✅ Correct Version

function showAge() {
    let age = 22;
    console.log(age);
}

showAge();

// Output:  22

// How it works:
// age is used inside the function where it exists.
// showAge() runs the function and prints 22.



// =====================================
// 3. Block Scope
// =====================================


if (true) {
    let number = 10;
    const value = 20;

    console.log(number);
    console.log(value);
}

// Output:
// 10
// 20

// How it works:
// number and value are created inside the if block.
// They can be used inside the { }.
// So JavaScript prints 10 and 20.



// ❌ Error Program

if (true) {
    let number = 10;
}

console.log(number);

// Output:  ReferenceError: number is not defined

// How it works:
// number is created inside the if block.
// The block ends at }.
// We try to use number outside the block.
// So JavaScript gives an error.



// ✅ Correct Version

if (true) {
    let number = 10;
    console.log(number);
}

// Output:  10

// How it works:
// number is used inside the block where it was created.



// =====================================
// 4. Local Scope
// =====================================


function student() {
    let marks = 90;

    console.log(marks);
}

student();

// Output:  90

// How it works:
// marks is created inside student().
// It is available only inside that function.
// student() runs and prints 90.



// ❌ Error Program

function studentMarks() {
    let marks = 90;
}

console.log(marks);

// Output:
// ReferenceError: marks is not defined

// How it works:
// marks belongs to studentMarks().
// We try to use marks outside the function.
// So JavaScript gives an error.



// ✅ Correct Version

function studentMarks() {
    let marks = 90;
    console.log(marks);
}

studentMarks();

// Output: 90

// How it works:
// marks is used inside the function where it was created.



// =====================================
// 5. var Scope
// =====================================


function example() {

    if (true) {
        var a = 10;
    }

    console.log(a);
}

example();

// Output:  10

// How it works:
// a is created using var inside the if block.
// var is function-scoped.
// So a can be used outside the if block,
// as long as we are still inside the function.



// ❌ Error Program

function example2() {
    var a = 10;
}

console.log(a);

// Output:  ReferenceError: a is not defined

// How it works:
// a belongs to example2().
// var cannot escape the function.
// We try to use a outside the function.
// So JavaScript gives an error.



// ✅ Correct Version

function example2() {
    var a = 10;
    console.log(a);
}

example2();

// Output:  10

// How it works:
// a is used inside the function where it was created.



// =====================================
// 6. let Scope
// =====================================


if (true) {

    let age = 22;

    console.log(age);
}

// Output:  22

// How it works:
// age is created using let inside the if block.
// let is block-scoped.
// So age can be used inside the block.



// ❌ Error Program

if (true) {
    let age = 22;
}

console.log(age);

// Output: ReferenceError: age is not defined

// How it works:
// age belongs to the if block.
// The block has ended.
// We try to use age outside the block.
// So JavaScript gives an error.



// ✅ Correct Version

if (true) {
    let age = 22;
    console.log(age);
}

// Output:  22

// How it works:
// age is used inside the block where it was created.



// =====================================
// 7. const Scope
// =====================================


if (true) {

    const country = "India";

    console.log(country);
}

// Output:  India

// How it works:
// country is created using const inside the block.
// const is block-scoped.
// So it can be used inside the block.



// ❌ Error Program

if (true) {
    const country = "India";
}

console.log(country);

// Output: ReferenceError: country is not defined

// How it works:
// country belongs to the if block.
// We try to use it outside the block.
// So JavaScript gives an error.



// ✅ Correct Version

if (true) {
    const country = "India";
    console.log(country);
}

// Output:  India

// How it works:
// country is used inside the block where it was created.



// =====================================
// 8. var vs let vs const
// =====================================



if (true) {

    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);

// Output:
// 10
// 20
// 30
// 10

// How it works:
// var can be used outside the block.
// let and const can only be used inside the block.
// Therefore, a can be used outside the block.



// ❌ Error Program

if (true) {

    let b = 20;
    const c = 30;
}

console.log(b);
console.log(c);

// Output:  ReferenceError: b is not defined

// How it works:
// b and c are block-scoped.
// They cannot be used outside the if block.



// ✅ Correct Version

if (true) {

    let b = 20;
    const c = 30;

    console.log(b);
    console.log(c);
}

// Output:
// 20
// 30

// How it works:  b and c are used inside the block where they were created.



// =====================================
// 9. Common Scope Error
// =====================================

// ❌ Error Program

function message() {
    let text = "Hello!";
}

console.log(text);

// Output:  ReferenceError: text is not defined

// How it works:
// text is created inside message().
// We try to use text outside the function.
// JavaScript cannot find text there.



// ✅ Correct Version

function message() {
    let text = "Hello!";
    console.log(text);
}

message();

// Output:  Hello!

// How it works:
// text is used inside the function where it was created.
// message() runs the function and prints "Hello!".
