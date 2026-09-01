
// 🔄 JavaScript Callback Functions


// =====================================
// 1. RANDOM CALLBACK PROGRAM
// =====================================

function greet(name) {
    console.log("Hello " + name);
}

function welcome(callback) {
    callback("Sahithya");
}

welcome(greet);

// Output: Hello Sahithya

// Explanation:
// The welcome() function wants to use another
// function to display the name.
//
// So we pass the greet function to welcome().
//
// The callback receives "Sahithya"
// and then prints the name.
//
// Here:
// greet → callback
// callback("Sahithya") → calls greet()



// =====================================
// 2. WHAT IS A CALLBACK?
// =====================================

function sayHello() {
    console.log("Hello");
}

function runFunction(callback) {
    callback();
}

runFunction(sayHello);

// Output:
// Hello

// Explanation:
// sayHello is a function.
//
// We pass this function to runFunction().
//
// runFunction() receives it as callback
// and calls it.
//
// A function passed to another function
// is called a callback.



// =====================================
// 2. ❌ ERROR PROGRAM
// =====================================

function helloUser() {
    console.log("Hello User");
}

function execute(callback) {
    callback();
}

// Wrong:
// execute(helloUser());

// ❌ Error:
// helloUser() calls the function immediately.
//
// We want to pass the function,
// not call it while passing it.
//
// So helloUser() is not correct here.



// =====================================
// 2. ✅ SOLUTION PROGRAM
// =====================================

execute(helloUser);

// Output:
// Hello User

// Explanation:
// helloUser means we are passing the function.
//
// execute() receives it as callback.
//
// Then callback() runs the function.



// =====================================
// 3. PASSING A FUNCTION AS AN ARGUMENT
// =====================================

function showMessage() {
    console.log("Welcome");
}

function start(callback) {
    callback();
}

start(showMessage);

// Output:
// Welcome

// Explanation:
// JavaScript allows us to pass a function
// as an argument to another function.
//
// showMessage is passed to start().
//
// start() can then call it.



// =====================================
// 3. ❌ ERROR PROGRAM
// =====================================

function display() {
    console.log("Display");
}

function run(callback) {
    callback();
}

// Wrong:
// run(display());

// ❌ Error:
// display() calls the function before
// run() receives it.
//
// We need to pass display itself.



// =====================================
// 3. ✅ SOLUTION PROGRAM
// =====================================

run(display);

// Output:
// Display

// Explanation:
// display is passed as a function.
//
// run() receives display as callback
// and calls it using callback().



// =====================================
// 4. CALLBACK PARAMETER
// =====================================

function greetStudent() {
    console.log("Hello Student");
}

function callFunction(callback) {
    callback();
}

callFunction(greetStudent);

// Output:
// Hello Student

// Explanation:
// callback is a parameter.
//
// It receives the greetStudent function.
//
// When we write callback(),
// the greetStudent function runs.



// =====================================
// 4. ❌ ERROR PROGRAM
// =====================================

function welcomeStudent() {
    console.log("Welcome Student");
}

function startWelcome(callback) {
    console.log("Starting...");
}

// The callback is received,
// but it is never called.

startWelcome(welcomeStudent);

// Output:
// Starting...

// Explanation:
// The function received the callback,
// but we did not write callback().
//
// So the callback does not run.



// =====================================
// 4. ✅ SOLUTION PROGRAM
// =====================================

function startCorrect(callback) {
    console.log("Starting...");
    callback();
}

startCorrect(welcomeStudent);

// Output:
// Starting...
// Welcome Student

// Explanation:
// callback() calls the function
// that was passed to startCorrect().



// =====================================
// 5. CALLING A CALLBACK
// =====================================

function sayHi() {
    console.log("Hi");
}

function execute(callback) {
    callback();
}

execute(sayHi);

// Output:
// Hi

// Explanation:
// The callback is called using:
//
// callback()
//
// This makes the passed function run.



// =====================================
// 5. ❌ ERROR PROGRAM
// =====================================

function sayBye() {
    console.log("Bye");
}

function executeBye(callback) {
    console.log("Function received");
}

executeBye(sayBye);

// Output:
// Function received

// Explanation:
// The callback was received,
// but callback() was not written.
//
// So sayBye() does not run.



// =====================================
// 5. ✅ SOLUTION PROGRAM
// =====================================

function executeByeCorrect(callback) {
    console.log("Function received");
    callback();
}

executeByeCorrect(sayBye);

// Output:
// Function received
// Bye

// Explanation:
// callback() tells JavaScript
// to run the function that was passed.



// =====================================
// 6. CALLBACK WITH ARGUMENTS
// =====================================

function showName(name) {
    console.log(name);
}

function getName(callback) {
    callback("Sahithya");
}

getName(showName);

// Output:
// Sahithya

// Explanation:
// The callback needs a name.
//
// So getName() gives "Sahithya"
// to the callback.
//
// The callback receives it in name.



// =====================================
// 6. ❌ ERROR PROGRAM
// =====================================

function printName(name) {
    console.log(name);
}

function getStudentName(callback) {
    callback();
}

getStudentName(printName);

// Output:
// undefined

// Explanation:
// printName() needs a value for name.
//
// But no value was given to the callback.
//
// So name becomes undefined.



// =====================================
// 6. ✅ SOLUTION PROGRAM
// =====================================

function getCorrectName(callback) {
    callback("Sahithya");
}

getCorrectName(printName);

// Output:
// Sahithya

// Explanation:
// Now a value is given to the callback.
//
// "Sahithya" goes into the name parameter.



// =====================================
// 7. CALLBACK WITH MULTIPLE ARGUMENTS
// =====================================

function showDetails(name, age) {
    console.log(name);
    console.log(age);
}

function getDetails(callback) {
    callback("Sahithya", 22);
}

getDetails(showDetails);

// Output:
// Sahithya
// 22

// Explanation:
// The callback receives two values.
//
// "Sahithya" → name
// 22 → age



// =====================================
// 7. ❌ ERROR PROGRAM
// =====================================

function printDetails(name, age) {
    console.log(name);
    console.log(age);
}

function getWrongDetails(callback) {
    callback("Sahithya");
}

getWrongDetails(printDetails);

// Output:
// Sahithya
// undefined

// Explanation:
// The callback needs two values.
//
// But only the name was given.
//
// So age becomes undefined.



// =====================================
// 7. ✅ SOLUTION PROGRAM
// =====================================

function getCorrectDetails(callback) {
    callback("Sahithya", 22);
}

getCorrectDetails(printDetails);

// Output:
// Sahithya
// 22

// Explanation:
// Both required values are passed
// to the callback.



// =====================================
// 8. CALLBACK WITH RETURN VALUE
// =====================================

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
// The callback performs the addition.
//
// It returns 15.
//
// calculate() receives that returned value.



// =====================================
// 8. ❌ ERROR PROGRAM
// =====================================

function multiply(a, b) {
    a * b;
}

function calculateWrong(callback) {
    return callback(5, 2);
}

let wrongResult = calculateWrong(multiply);

console.log(wrongResult);

// Output:
// undefined

// Explanation:
// The multiplication is done,
// but the result is not returned.
//
// So the callback returns undefined.



// =====================================
// 8. ✅ SOLUTION PROGRAM
// =====================================

function multiplyCorrect(a, b) {
    return a * b;
}

function calculateCorrect(callback) {
    return callback(5, 2);
}

let correctResult = calculateCorrect(multiplyCorrect);

console.log(correctResult);

// Output:
// 10

// Explanation:
// The callback returns the result.
//
// calculateCorrect() receives that result.



// =====================================
// 9. NAMED CALLBACK
// =====================================

function welcomeMessage() {
    console.log("Welcome");
}

function runMessage(callback) {
    callback();
}

runMessage(welcomeMessage);

// Output:
// Welcome

// Explanation:
// welcomeMessage has a name.
//
// It is passed to another function
// and used as a callback.



// =====================================
// 9. ❌ ERROR PROGRAM
// =====================================

function message() {
    console.log("Hello");
}

function runMessageWrong(callback) {
    callback();
}

// Wrong:
// runMessageWrong(message());

// Explanation:
// message() calls the function immediately.
//
// We need to pass message itself.



// =====================================
// 9. ✅ SOLUTION PROGRAM
// =====================================

runMessageWrong(message);

// Output:
// Hello

// Explanation:
// message is passed as a callback.



// =====================================
// 10. ANONYMOUS CALLBACK
// =====================================

function run(callback) {
    callback();
}

run(function() {
    console.log("Hello");
});

// Output:
// Hello

// Explanation:
// The callback function does not have a name.
//
// It is written directly inside run().
//
// This is called an anonymous callback.



// =====================================
// 10. ❌ ERROR PROGRAM
// =====================================

function executeMessage(callback) {
    callback();
}

// Wrong idea:
// executeMessage();

// Explanation:
// No callback was passed.
//
// So there is no function for callback()
// to run.



// =====================================
// 10. ✅ SOLUTION PROGRAM
// =====================================

executeMessage(function() {
    console.log("Message received");
});

// Output:
// Message received

// Explanation:
// A function is passed as the callback.



// =====================================
// 11. ARROW FUNCTION AS A CALLBACK
// =====================================

function runArrow(callback) {
    callback();
}

runArrow(() => {
    console.log("Hello");
});

// Output:
// Hello

// Explanation:
// An arrow function is passed
// as the callback.



// =====================================
// 11. ❌ ERROR PROGRAM
// =====================================

function executeArrow(callback) {
    callback();
}

// Wrong:
// executeArrow(() => console.log("Hello")());

// Explanation:
// The brackets are used incorrectly.
//
// The arrow function should be passed
// without calling it.



// =====================================
// 11. ✅ SOLUTION PROGRAM
// =====================================

executeArrow(() => {
    console.log("Hello");
});

// Output:
// Hello

// Explanation:
// The arrow function is passed directly
// to executeArrow().



// =====================================
// 12. SYNCHRONOUS CALLBACK
// =====================================

function processTask(callback) {
    console.log("Start");

    callback();

    console.log("End");
}

processTask(function() {
    console.log("Callback");
});

// Output:
// Start
// Callback
// End

// Explanation:
// The callback runs immediately.
//
// JavaScript waits for the callback
// before moving to "End".



// =====================================
// 12. ❌ ERROR PROGRAM
// =====================================

console.log("Start");

function syncTask(callback) {
    console.log("Task");
    callback();
}

syncTask(function() {
    console.log("Callback");
});

console.log("End");

// Output:
// Start
// Task
// Callback
// End

// Explanation:
// There is no code error here.
//
// The important point is that
// the callback runs immediately.



// =====================================
// 12. ✅ SOLUTION / CORRECT PROGRAM
// =====================================

function runSync(callback) {
    console.log("Start");
    callback();
    console.log("End");
}

runSync(function() {
    console.log("Callback");
});

// Output:
// Start
// Callback
// End

// Explanation:
// This is how a synchronous callback works.
// It runs before the next statement.



// =====================================
// 13. ASYNCHRONOUS CALLBACK
// =====================================

console.log("Start");

setTimeout(function() {
    console.log("Callback");
}, 1000);

console.log("End");

// Output:
// Start
// End
// Callback

// Explanation:
// The callback is given to setTimeout().
//
// It runs after 1 second.
//
// JavaScript continues with "End"
// before the callback runs.



// =====================================
// 13. ❌ ERROR PROGRAM
// =====================================

console.log("Start");

setTimeout(function() {
    console.log("Callback");
}, 0);

console.log("End");

// Output:
// Start
// End
// Callback

// Explanation:
// Even with 0 milliseconds,
// the callback does not run immediately.
//
// It runs after the current code finishes.



// =====================================
// 13. ✅ SOLUTION / CORRECT PROGRAM
// =====================================

console.log("Start");

setTimeout(function() {
    console.log("Callback");
}, 1000);

console.log("End");

// Output:
// Start
// End
// Callback

// Explanation:
// This is the correct understanding
// of an asynchronous callback.



// =====================================
// 14. setTimeout() CALLBACK
// =====================================

setTimeout(function() {
    console.log("Hello");
}, 2000);

// Output after about 2 seconds:
// Hello

// Explanation:
// setTimeout() takes a callback.
//
// The callback runs after the given delay.



// =====================================
// 14. ❌ ERROR PROGRAM
// =====================================

function showHello() {
    console.log("Hello");
}

// Wrong:
// setTimeout(showHello(), 2000);

// Explanation:
// showHello() calls the function immediately.
//
// We need to give setTimeout()
// the function itself.



// =====================================
// 14. ✅ SOLUTION PROGRAM
// =====================================

setTimeout(showHello, 2000);

// Output after about 2 seconds:
// Hello

// Explanation:
// showHello is passed to setTimeout().
//
// setTimeout() calls it later.



// =====================================
// 15. setInterval() CALLBACK
// =====================================

let count = 1;

let timer = setInterval(function() {

    console.log(count);

    count++;

    if (count > 3) {
        clearInterval(timer);
    }

}, 1000);

// Output:
// 1
// 2
// 3

// Explanation:
// setInterval() repeatedly calls
// the callback every second.
//
// clearInterval() stops it.



// =====================================
// 15. ❌ ERROR PROGRAM
// =====================================

let number = 1;

// Wrong idea:
// setInterval(function() {
//     console.log(number);
// }, 1000);

// Explanation:
// The callback will keep running
// forever if we do not stop it.



// =====================================
// 15. ✅ SOLUTION PROGRAM
// =====================================

let value = 1;

let interval = setInterval(function() {

    console.log(value);

    value++;

    if (value > 3) {
        clearInterval(interval);
    }

}, 1000);

// Output:
// 1
// 2
// 3

// Explanation:
// clearInterval() stops the repeated callback.



// =====================================
// 16. MULTIPLE CALLBACKS
// =====================================

function checkResult(success, failure) {

    let passed = true;

    if (passed) {
        success();
    } else {
        failure();
    }
}

checkResult(
    function() {
        console.log("Passed");
    },

    function() {
        console.log("Failed");
    }
);

// Output:
// Passed

// Explanation:
// The function receives two callbacks.
//
// success() runs when the result is successful.
//
// failure() runs when the result is not successful.



// =====================================
// 16. ❌ ERROR PROGRAM
// =====================================

function checkMarks(success, failure) {

    let marks = 30;

    if (marks >= 40) {
        success();
    }

    // failure() is missing
}

checkMarks(
    function() {
        console.log("Passed");
    },

    function() {
        console.log("Failed");
    }
);

// Output:
// Nothing

// Explanation:
// The student has 30 marks,
// so the condition is false.
//
// But failure() was never called.
//
// So nothing is printed.



// =====================================
// 16. ✅ SOLUTION PROGRAM
// =====================================

function checkCorrectMarks(success, failure) {

    let marks = 30;

    if (marks >= 40) {
        success();
    } else {
        failure();
    }
}

checkCorrectMarks(
    function() {
        console.log("Passed");
    },

    function() {
        console.log("Failed");
    }
);

// Output:
// Failed

// Explanation:
// The condition is false,
// so failure() is called.



// =====================================
// 17. forEach() CALLBACK
// =====================================

let names = ["Asha", "Riya", "Anu"];

names.forEach(function(name) {
    console.log(name);
});

// Output:
// Asha
// Riya
// Anu

// Explanation:
// forEach() runs the callback
// once for every item in the array.



// =====================================
// 17. ❌ ERROR PROGRAM
// =====================================

let students = ["Asha", "Riya", "Anu"];

students.forEach(function(student) {
    // console.log(name);
});

// Explanation:
// The callback receives the value
// in the student parameter.
//
// If we use a different variable name
// that does not exist, it will cause an error.



// =====================================
// 17. ✅ SOLUTION PROGRAM
// =====================================

students.forEach(function(student) {
    console.log(student);
});

// Output:
// Asha
// Riya
// Anu

// Explanation:
// student contains the current item
// from the array.



// =====================================
// 18. map() CALLBACK
// =====================================

let numbers = [1, 2, 3];

let doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled);

// Output:
// [2, 4, 6]

// Explanation:
// map() runs the callback for every item.
//
// The callback returns a new value.
//
// Those values are stored in a new array.



// =====================================
// 18. ❌ ERROR PROGRAM
// =====================================

let values = [1, 2, 3];

let wrongDoubled = values.map(function(value) {
    value * 2;
});

console.log(wrongDoubled);

// Output:
// [undefined, undefined, undefined]

// Explanation:
// map() needs the callback
// to return the new value.
//
// Here, the value is calculated
// but not returned.



// =====================================
// 18. ✅ SOLUTION PROGRAM
// =====================================

let correctDoubled = values.map(function(value) {
    return value * 2;
});

console.log(correctDoubled);

// Output:
// [2, 4, 6]

// Explanation:
// The callback returns the new value,
// so map() creates the correct array.



// =====================================
// 19. filter() CALLBACK
// =====================================

let ages = [15, 20, 25];

let adults = ages.filter(function(age) {
    return age >= 18;
});

console.log(adults);

// Output:
// [20, 25]

// Explanation:
// filter() checks every value.
//
// true → Keep
// false → Remove



// =====================================
// 19. ❌ ERROR PROGRAM
// =====================================

let marks = [30, 60, 80];

let passed = marks.filter(function(mark) {
    mark >= 40;
});

console.log(passed);

// Output:
// []

// Explanation:
// The condition is written,
// but it is not returned.
//
// filter() needs true or false
// from the callback.



// =====================================
// 19. ✅ SOLUTION PROGRAM
// =====================================

let passedMarks = marks.filter(function(mark) {
    return mark >= 40;
});

console.log(passedMarks);

// Output:
// [60, 80]

// Explanation:
// The callback returns the condition.
//
// true → keep the mark
// false → remove the mark



// =====================================
// 20. reduce() CALLBACK
// =====================================

let prices = [10, 20, 30];

let total = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);

console.log(total);

// Output:
// 60

// Explanation:
// reduce() combines all the values.
//
// 10 + 20 + 30 = 60



// =====================================
// 20. ❌ ERROR PROGRAM
// =====================================

let amounts = [10, 20, 30];

let wrongTotal = amounts.reduce(function(sum, amount) {
    sum + amount;
}, 0);

console.log(wrongTotal);

// Output:
// undefined

// Explanation:
// The callback does not return
// the new sum.
//
// reduce() needs the returned value
// for the next calculation.



// =====================================
// 20. ✅ SOLUTION PROGRAM
// =====================================

let correctTotal = amounts.reduce(function(sum, amount) {
    return sum + amount;
}, 0);

console.log(correctTotal);

// Output:
// 60

// Explanation:
// The callback returns the updated sum
// every time.



// =====================================
// 21. CALLBACK HELL
// =====================================

function first(callback) {
    callback();
}

function second(callback) {
    callback();
}

function third(callback) {
    callback();
}

first(function() {

    second(function() {

        third(function() {

            console.log("Done");

        });

    });

});

// Output:
// Done

// Explanation:
// One callback is placed inside
// another callback.
//
// Too much nesting makes the code
// difficult to read.



// =====================================
// 21. ❌ ERROR PROGRAM
// =====================================

function taskOne(callback) {
    callback();
}

function taskTwo(callback) {
    callback();
}

taskOne(function() {

    taskTwo(function() {

        console.log("Task completed");

    });

});

// Explanation:
// This program works,
// but adding many more nested callbacks
// will make the code difficult to understand.
//
// This problem is called Callback Hell.



// =====================================
// 21. ✅ SOLUTION PROGRAM
// =====================================

function firstTask() {
    console.log("First task");
}

function secondTask() {
    console.log("Second task");
}

function thirdTask() {
    console.log("Third task");
}

firstTask();
secondTask();
thirdTask();

// Output:
// First task
// Second task
// Third task

// Explanation:
// Keeping functions separate
// makes the code easier to read.
//
// For complex asynchronous code,
// Promises and async/await can also help.



// =====================================
// 22. AVOIDING CALLBACK HELL
// =====================================

function task1() {
    console.log("Task 1");
}

function task2() {
    console.log("Task 2");
}

function task3() {
    console.log("Task 3");
}

task1();
task2();
task3();

// Output:
// Task 1
// Task 2
// Task 3

// Explanation:
// The functions are kept separate.
//
// This is easier to read than
// deeply nested callbacks.



// =====================================
// 22. ❌ ERROR PROGRAM
// =====================================

function one(callback) {
    callback();
}

function two(callback) {
    callback();
}

one(function() {
    two(function() {
        console.log("Too much nesting");
    });
});

// Explanation:
// As more tasks are added,
// more callbacks become nested.
//
// This makes the code harder to maintain.



// =====================================
// 22. ✅ SOLUTION PROGRAM
// =====================================

function oneDone() {
    console.log("One");
}

function twoDone() {
    console.log("Two");
}

oneDone();
twoDone();

// Output:
// One
// Two

// Explanation:
// Separate functions are easier to understand.
//
// For larger asynchronous programs,
// Promises and async/await are commonly used.



// =====================================
// 23. ERROR-FIRST CALLBACK
// =====================================

function getData(callback) {

    let error = null;
    let data = "Data received";

    callback(error, data);
}

getData(function(error, data) {

    if (error) {
        console.log(error);
        return;
    }

    console.log(data);

});

// Output:
// Data received

// Explanation:
// The callback receives two values:
//
// error → null
// data → "Data received"
//
// We check the error first.



// =====================================
// 23. ❌ ERROR PROGRAM
// =====================================

function getWrongData(callback) {

    let error = "Something went wrong";
    let data = "Data received";

    callback(error, data);
}

getWrongData(function(error, data) {

    console.log(data);

});

// Output:
// Data received

// Explanation:
// There is an error,
// but we ignored it.
//
// We should check the error first.



// =====================================
// 23. ✅ SOLUTION PROGRAM
// =====================================

getWrongData(function(error, data) {

    if (error) {
        console.log(error);
        return;
    }

    console.log(data);

});

// Output:
// Something went wrong

// Explanation:
// First we check error.
//
// If an error exists,
// we handle it and stop.
//
// If there is no error,
// we use the data.



// =====================================
// 24. CALLBACK vs NORMAL FUNCTION
// =====================================

function greet() {
    console.log("Hello");
}

function run(callback) {
    callback();
}

run(greet);

// Output:
// Hello

// Explanation:
// greet is a normal function.
//
// When we pass it to another function,
// we are using it as a callback.
//
// So a callback is not a special type
// of function.



// =====================================
// 24. ❌ ERROR PROGRAM
// =====================================

function hello() {
    console.log("Hello");
}

function executeFunction(callback) {
    callback();
}

// Wrong:
// executeFunction(hello());

// Explanation:
// hello() calls the function immediately.
//
// We need to pass hello itself.



// =====================================
// 24. ✅ SOLUTION PROGRAM
// =====================================

executeFunction(hello);

// Output:
// Hello

// Explanation:
// hello is passed as a callback.
//
// executeFunction() calls it later.



// =====================================
// 25. COMMON CALLBACK MISTAKE
// =====================================

function welcome() {
    console.log("Welcome");
}

function start(callback) {
    callback();
}

// Wrong:
// start(welcome());

// Correct:
start(welcome);

// Output:
// Welcome

// Explanation:
// welcome means pass the function.
//
// welcome() means call the function.
//
// When passing a callback,
// we usually pass the function without ().



// =====================================
// 25. ❌ ERROR PROGRAM — FORGETTING CALLBACK
// =====================================

function begin(callback) {

    console.log("Started");

    // callback() is missing
}

begin(function() {
    console.log("Finished");
});

// Output:
// Started

// Explanation:
// The callback was received,
// but it was never called.
//
// So "Finished" is not printed.



// =====================================
// 25. ✅ SOLUTION PROGRAM
// =====================================

function beginCorrect(callback) {

    console.log("Started");

    callback();
}

beginCorrect(function() {
    console.log("Finished");
});

// Output:
// Started
// Finished

// Explanation:
// callback() runs the function
// that was passed to beginCorrect().



// =====================================
// ⭐ FINAL QUICK REVISION
// =====================================

// Callback
// → A function passed to another function.
//
// Passing a Function
// → Give the function without ().
//
// Calling a Function
// → Use () to run the function.
//
// Callback Parameter
// → Receives the function.
//
// callback()
// → Runs the callback.
//
// Callback Arguments
// → Values can be passed to the callback.
//
// Return Value
// → A callback can return a result.
//
// Named Callback
// → A callback with a name.
//
// Anonymous Callback
// → A callback without a name.
//
// Arrow Callback
// → An arrow function can be used as a callback.
//
// Synchronous Callback
// → Runs immediately.
//
// Asynchronous Callback
// → Runs later.
//
// setTimeout()
// → Runs a callback after a delay.
//
// setInterval()
// → Runs a callback repeatedly.
//
// forEach()
// → Runs a callback for every array item.
//
// map()
// → Creates a new array using returned values.
//
// filter()
// → Keeps values when the callback returns true.
//
// reduce()
// → Combines values into one result.
//
// Callback Hell
// → Too many nested callbacks.
//
// Error-First Callback
// → Check the error before using the data.
