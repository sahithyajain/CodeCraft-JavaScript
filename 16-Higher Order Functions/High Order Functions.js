// 📘 JavaScript Higher Order Functions


// =====================================
// 🎲 RANDOM PROGRAM
// =====================================

function sayHello() {
    console.log("Hello");
}

function runFunction(callback) {
    callback();
}

runFunction(sayHello);

// Output: Hello

// Explanation:
// runFunction() receives another function.
// The received function is stored in callback.
// Then callback() is used to run that function.
//
// A function that receives another function
// is called a Higher Order Function.



// =====================================
// 1. FUNCTION AS AN ARGUMENT
// =====================================

// Simple Program

function greet() {
    console.log("Good Morning");
}

function run(callback) {
    callback();
}

run(greet);

// Output:
// Good Morning

// Explanation:
// greet is passed to run().
// run() receives greet as callback.
// callback() runs the greet function.
//
// So run() is a Higher Order Function.



// ❌ Error Program

function welcome() {
    console.log("Welcome");
}

function start(callback) {
    callback();
}

// Wrong:
// start(welcome());

// Explanation:
// welcome() calls the function immediately.
// But we want to pass the function to start().
//
// We should pass welcome without ().



// ✅ Solution Program

start(welcome);

// Output:
// Welcome

// Explanation:
// welcome is passed to start().
// start() receives it as callback.
// callback() then runs the function.



// =====================================
// 2. FUNCTION RETURNING ANOTHER FUNCTION
// =====================================

// Simple Program

function createMessage() {

    return function() {
        console.log("Hello");
    };
}

let message = createMessage();

message();

// Output:
// Hello

// Explanation:
// createMessage() returns another function.
// The returned function is stored in message.
// message() runs the returned function.
//
// A function that returns another function
// is a Higher Order Function.



// ❌ Error Program

function createGreeting() {

    function greet() {
        console.log("Hello");
    }

    // Wrong:
    // return greet();
}

// Explanation:
// greet() calls the function and returns its result.
// We want to return the function itself.
//
// So we should use:
// return greet;



// ✅ Solution Program

function createGreetingCorrect() {

    function greet() {
        console.log("Hello");
    }

    return greet;
}

let greetUser = createGreetingCorrect();

greetUser();

// Output:
// Hello

// Explanation:
// greet is returned without ().
// So the function itself is returned.
// We can call it later using greetUser().



// =====================================
// 3. HIGHER ORDER FUNCTION WITH ARGUMENTS
// =====================================

// Simple Program

function showNumbers(a, b) {
    console.log(a);
    console.log(b);
}

function sendNumbers(callback) {
    callback(10, 20);
}

sendNumbers(showNumbers);

// Output:
// 10
// 20

// Explanation:
// sendNumbers() receives a function.
// It gives 10 and 20 to that function.
// The callback receives these values.



// ❌ Error Program

function displayNumbers(a, b) {
    console.log(a);
    console.log(b);
}

function sendWrong(callback) {
    callback();
}

sendWrong(displayNumbers);

// Output:
// undefined
// undefined

// Explanation:
// displayNumbers() needs two values.
// But sendWrong() does not give any values.
// So both parameters become undefined.



// ✅ Solution Program

function sendCorrect(callback) {
    callback(10, 20);
}

sendCorrect(displayNumbers);

// Output:
// 10
// 20

// Explanation:
// Now 10 and 20 are passed to the callback.
// So the callback receives the required values.



// =====================================
// 4. HIGHER ORDER FUNCTION WITH RETURN VALUE
// =====================================

// Simple Program

function add(a, b) {
    return a + b;
}

function calculate(callback) {
    return callback(10, 5);
}

let result = calculate(add);

console.log(result);

// Output:
// 15

// Explanation:
// add() returns 15.
// calculate() receives that returned value.
// The value is stored in result.



// ❌ Error Program

function multiply(a, b) {
    a * b;
}

function calculateWrong(callback) {
    return callback(10, 5);
}

let wrongResult = calculateWrong(multiply);

console.log(wrongResult);

// Output:
// undefined

// Explanation:
// multiply() calculates the answer,
// but it does not return the answer.
//
// So the result becomes undefined.



// ✅ Solution Program

function multiplyCorrect(a, b) {
    return a * b;
}

function calculateCorrect(callback) {
    return callback(10, 5);
}

let correctResult = calculateCorrect(multiplyCorrect);

console.log(correctResult);

// Output:
// 50

// Explanation:
// multiplyCorrect() returns the answer.
// calculateCorrect() receives that value.



// =====================================
// 5. ARROW FUNCTION AS AN ARGUMENT
// =====================================

// Simple Program

function runArrow(callback) {
    callback();
}

runArrow(() => {
    console.log("Hello from Arrow Function");
});

// Output:
// Hello from Arrow Function

// Explanation:
// The arrow function is passed to runArrow().
// runArrow() receives it as callback.
// callback() runs the arrow function.



// ❌ Error Program

function executeArrow(callback) {
    callback();
}

// Wrong:
// executeArrow(() => console.log("Hello")());

// Explanation:
// The arrow function is being called
// while we are trying to pass it.
//
// We only need to pass the function.



// ✅ Solution Program

executeArrow(() => {
    console.log("Hello");
});

// Output:
// Hello

// Explanation:
// The arrow function is passed directly.
// executeArrow() calls it using callback().



// =====================================
// 6. NAMED FUNCTION AS AN ARGUMENT
// =====================================

// Simple Program

function greetUser() {
    console.log("Hello User");
}

function execute(callback) {
    callback();
}

execute(greetUser);

// Output:
// Hello User

// Explanation:
// greetUser is a named function.
// It is passed to execute().
// execute() uses it as a callback.



// ❌ Error Program

function sayHi() {
    console.log("Hi");
}

// Wrong:
// execute(sayHi());

// Explanation:
// sayHi() calls the function immediately.
// We need to pass the function itself.



// ✅ Solution Program

execute(sayHi);

// Output:
// Hi

// Explanation:
// sayHi is passed without ().
// execute() receives it as callback.



// =====================================
// 7. ANONYMOUS FUNCTION AS AN ARGUMENT
// =====================================

// Simple Program

function runMessage(callback) {
    callback();
}

runMessage(function() {
    console.log("Hello");
});

// Output:
// Hello

// Explanation:
// The function has no name.
// It is written directly inside runMessage().
// This is an anonymous function.



// ❌ Error Program

function executeMessage(callback) {
    callback();
}

// Wrong:
// executeMessage();

// Explanation:
// No function was passed.
// So there is no callback to run.



// ✅ Solution Program

executeMessage(function() {
    console.log("Message received");
});

// Output:
// Message received

// Explanation:
// A function is passed to executeMessage().
// executeMessage() then calls the callback.



// =====================================
// 8. forEach() AS A HIGHER ORDER FUNCTION
// =====================================

// Simple Program

let names = ["Asha", "Riya", "Anu"];

names.forEach(function(name) {
    console.log(name);
});

// Output:
// Asha
// Riya
// Anu

// Explanation:
// forEach() receives a function.
// It runs that function for every item.
// So forEach() is a Higher Order Function.



// ❌ Error Program

let students = ["Asha", "Riya", "Anu"];

students.forEach(function(student) {
    // console.log(name);
});

// Explanation:
// The current value is stored in student.
// But name is not the parameter here.
// Using name would cause an error.



// ✅ Solution Program

students.forEach(function(student) {
    console.log(student);
});

// Output:
// Asha
// Riya
// Anu

// Explanation:
// student contains the current array item.
// We use student to print the value.



// =====================================
// 9. map() AS A HIGHER ORDER FUNCTION
// =====================================

// Simple Program

let numbers = [1, 2, 3];

let doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled);

// Output:
// [2, 4, 6]

// Explanation:
// map() receives a function.
// The function runs for every number.
// The returned values create a new array.



// ❌ Error Program

let values = [1, 2, 3];

let wrongDoubled = values.map(function(value) {
    value * 2;
});

console.log(wrongDoubled);

// Output:
// [undefined, undefined, undefined]

// Explanation:
// map() needs the callback to return a value.
// Here the multiplication is not returned.



// ✅ Solution Program

let correctDoubled = values.map(function(value) {
    return value * 2;
});

console.log(correctDoubled);

// Output:
// [2, 4, 6]

// Explanation:
// The callback returns the new value.
// map() uses those values to create a new array.



// =====================================
// 10. filter() AS A HIGHER ORDER FUNCTION
// =====================================

// Simple Program

let ages = [15, 20, 25];

let adults = ages.filter(function(age) {
    return age >= 18;
});

console.log(adults);

// Output:
// [20, 25]

// Explanation:
// filter() receives a function.
// The function checks every age.
//
// true → Keep
// false → Remove



// ❌ Error Program

let marks = [30, 60, 80];

let passed = marks.filter(function(mark) {
    mark >= 40;
});

console.log(passed);

// Output:
// []

// Explanation:
// The condition is checked,
// but it is not returned.
//
// filter() needs true or false
// from the callback.



// ✅ Solution Program

let passedMarks = marks.filter(function(mark) {
    return mark >= 40;
});

console.log(passedMarks);

// Output:
// [60, 80]

// Explanation:
// The callback returns the condition.
//
// true → Keep the mark.
// false → Remove the mark.



// =====================================
// 11. reduce() AS A HIGHER ORDER FUNCTION
// =====================================

// Simple Program

let prices = [10, 20, 30];

let total = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);

console.log(total);

// Output:
// 60

// Explanation:
// reduce() receives a function.
// The function combines the values.
// Here it adds all the prices.



// ❌ Error Program

let amounts = [10, 20, 30];

let wrongTotal = amounts.reduce(function(sum, amount) {
    sum + amount;
}, 0);

console.log(wrongTotal);

// Output:
// undefined

// Explanation:
// The new value is not returned.
// reduce() needs the callback
// to return the updated value.



// ✅ Solution Program

let correctTotal = amounts.reduce(function(sum, amount) {
    return sum + amount;
}, 0);

console.log(correctTotal);

// Output:
// 60

// Explanation:
// The callback returns the updated sum.
// reduce() uses it for the next calculation.



// =====================================
// 12. HIGHER ORDER FUNCTION vs CALLBACK
// =====================================

// Simple Program

function greetPerson() {
    console.log("Hello");
}

function runPerson(callback) {
    callback();
}

runPerson(greetPerson);

// Output:
// Hello

// Explanation:
// runPerson() receives a function.
// So runPerson() is the Higher Order Function.
//
// greetPerson is the function being passed.
// So greetPerson is the Callback.



// ❌ Error Program

function sayHelloPerson() {
    console.log("Hello");
}

function startPerson(callback) {
    callback();
}

// Wrong:
// startPerson(sayHelloPerson());

// Explanation:
// sayHelloPerson() calls the function immediately.
// We need to pass the function itself.



// ✅ Solution Program

startPerson(sayHelloPerson);

// Output:
// Hello

// Explanation:
// sayHelloPerson is passed to startPerson().
//
// startPerson → Higher Order Function
// sayHelloPerson → Callback



// =====================================
// 13. RETURNING A FUNCTION
// =====================================

// Simple Program

function outer() {

    return function() {
        console.log("Hello");
    };
}

let messageFunction = outer();

messageFunction();

// Output:
// Hello

// Explanation:
// outer() returns a function.
// That function is stored in messageFunction.
// messageFunction() runs it.



// ❌ Error Program

function createFunction() {

    function hello() {
        console.log("Hello");
    }

    // Wrong:
    // return hello();
}

// Explanation:
// hello() runs the function immediately.
// We want to return the function itself.



// ✅ Solution Program

function createFunctionCorrect() {

    function hello() {
        console.log("Hello");
    }

    return hello;
}

let helloFunction = createFunctionCorrect();

helloFunction();

// Output:
// Hello

// Explanation:
// hello is returned without ().
// So the function can be called later.



// =====================================
// 14. FUNCTION FACTORY
// =====================================

// Simple Program

function createGreeting(name) {

    return function() {
        console.log("Hello " + name);
    };
}

let greet = createGreeting("Sahithya");

greet();

// Output:
// Hello Sahithya

// Explanation:
// createGreeting() creates a new function.
// The name is given when the function is created.
// The returned function can be used later.



// ❌ Error Program

function createMessage(name) {

    return function() {
        console.log("Hello");
    };
}

let message1 = createMessage();

message1();

// Output:
// Hello

// Explanation:
// The function was created,
// but the name was not used.
//
// If we want to create a greeting
// for a particular person,
// we should use the name.



// ✅ Solution Program

function createMessageCorrect(name) {

    return function() {
        console.log("Hello " + name);
    };
}

let message2 = createMessageCorrect("Sahithya");

message2();

// Output:
// Hello Sahithya

// Explanation:
// The name is passed when creating the function.
// The returned function uses that name.



// =====================================
// 15. REUSING A HIGHER ORDER FUNCTION
// =====================================

// Simple Program

function calculateResult(callback) {
    return callback(10, 5);
}

function addNumbers(a, b) {
    return a + b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

console.log(calculateResult(addNumbers));
console.log(calculateResult(multiplyNumbers));

// Output:
// 15
// 50

// Explanation:
// The same calculateResult() function
// works with different functions.
//
// First it works with addNumbers().
// Then it works with multiplyNumbers().
//
// This is called code reusability.



// ❌ Error Program

function calculateWrong(callback) {
    return callback(10, 5);
}

function addWrong(a, b) {
    return a + b;
}

// Wrong:
// console.log(calculateWrong());

// Explanation:
// calculateWrong() needs a function.
// But no callback was passed.
//
// So there is no function to call.



// ✅ Solution Program

console.log(calculateWrong(addWrong));

// Output:
// 15

// Explanation:
// addWrong is passed to calculateWrong().
// calculateWrong() receives it as callback.
// Then callback(10, 5) runs the function.



// =====================================
// ⭐ QUICK REVISION
// =====================================

// Higher Order Function
// → A function that receives or returns another function.
//
// Function as Argument
// → A function can be passed to another function.
//
// Function as Return Value
// → A function can return another function.
//
// Callback
// → The function passed to another function.
//
// Arrow Function
// → Can also be passed as an argument.
//
// forEach()
// → Runs a function for every array item.
//
// map()
// → Creates a new array.
//
// filter()
// → Selects values.
//
// reduce()
// → Combines values.
//
// Function Factory
// → A function that creates and returns another function.
//
// Reusability
// → One Higher Order Function can work with different functions.
