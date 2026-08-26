// 🚀 JavaScript Hoisting


// =====================================
// 1. var Hoisting
// =====================================


var age = 22;

console.log(age);

// Output:  22

// How it works:
// age is created using var.
// We give age the value 22.
// Then console.log(age) prints 22.



// ❌ Error Program

console.log(score);

var score = 90;

// Output:  undefined

// How it works:
// JavaScript notices the var score declaration before running the code.
// It prepares the variable, but the value 90 is given later.
// So when console.log(score) runs, score is undefined.



// ✅ Correct Version

var score = 90;

console.log(score);

// Output:  90

// How it works:
// score gets the value 90 before we use it.
// So JavaScript prints 90.



// =====================================
// 2. let Hoisting
// =====================================


let name = "Sahithya";

console.log(name);

// Output:  Sahithya

// How it works:
// name is created using let.
// We give name the value "Sahithya".
// Then console.log(name) prints the value.



// ❌ Error Program

console.log(city);

let city = "Bangalore";

// Output:  ReferenceError: Cannot access 'city' before initialization

// How it works:
// JavaScript knows that city is declared using let.
// But we try to use city before reaching its declaration.
// So JavaScript gives a ReferenceError.



// ✅ Correct Version

let city = "Bangalore";

console.log(city);

// Output:  Bangalore

// How it works:
// city is declared and given a value before we use it.
// So JavaScript can print the value.



// =====================================
// 3. const Hoisting
// =====================================


const country = "India";

console.log(country);

// Output:  India

// How it works:
// country is created using const.
// We give country the value "India".
// Then console.log(country) prints India.



// ❌ Error Program

console.log(countryName);

const countryName = "India";

// Output:  ReferenceError: Cannot access 'countryName' before initialization

// How it works:
// JavaScript knows that countryName is declared using const.
// But we try to use it before reaching its declaration.
// So JavaScript gives a ReferenceError.



// ✅ Correct Version

const countryName = "India";

console.log(countryName);

// Output:  India

// How it works:
// countryName is declared and given a value before we use it.
// So the program works correctly.



// =====================================
// 4. Function Hoisting
// =====================================


greet();

function greet() {
    console.log("Hello!");
}

// Output:  Hello!

// How it works:
// greet() is called before the function is written.
// JavaScript knows about the function before running the code.
// So greet() works correctly.



// ❌ Error Program

sayHello();

let sayHello = function () {
    console.log("Hello!");
};

// Output:  ReferenceError: Cannot access 'sayHello' before initialization

// How it works:
// sayHello is created using let.
// We try to use it before reaching its declaration.
// So JavaScript gives a ReferenceError.



// ✅ Correct Version

let sayHello = function () {
    console.log("Hello!");
};

sayHello();

// Output:  Hello!

// How it works:
// First, the function is assigned to sayHello.
// Then sayHello() is called.
// So JavaScript can run the function.



// =====================================
// 5. Function Expression with var
// =====================================


var welcome = function () {
    console.log("Welcome!");
};

welcome();

// Output:  Welcome!

// How it works:
// The function is stored inside welcome.
// Then welcome() is called.
// So the function prints "Welcome!".



// ❌ Error Program

hello();

var hello = function () {
    console.log("Hello!");
};

// Output:  TypeError: hello is not a function

// How it works:
// JavaScript prepares var hello before running the code.
// But the function is assigned later.
// When hello() runs, hello is still undefined.
// So JavaScript cannot call it as a function.



// ✅ Correct Version

var hello = function () {
    console.log("Hello!");
};

hello();

// Output:  Hello!

// How it works:
// The function is assigned to hello first.
// Then hello() is called.
// So it works correctly.



// =====================================
// 6. Temporal Dead Zone (TDZ)
// =====================================


let marks = 90;

console.log(marks);

// Output:  90

// How it works:
// marks is declared and given the value 90.
// Then console.log(marks) prints 90.



// ❌ Error Program

console.log(marksValue);

let marksValue = 90;

// Output:  ReferenceError: Cannot access 'marksValue' before initialization

// How it works:
// We try to use marksValue before reaching its let declaration.
// This period is called the Temporal Dead Zone.
// So JavaScript gives a ReferenceError.



// ✅ Correct Version

let marksValue = 90;

console.log(marksValue);

// Output:  90

// How it works:
// marksValue is declared and given a value before we use it.
// So the error does not occur.
