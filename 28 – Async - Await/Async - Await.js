// 28 - Async / Await in JavaScript


// ==================================================
// 1. RANDOM SIMPLE PROGRAM
// ==================================================

async function greet() {
    return "Hello";
}

greet().then(result => console.log(result));

// Output:  Hello

// Explanation: An async function returns a Promise.


// ❌ Error Program

async function greetError() {
    return message;
}

greetError();

// Error: ReferenceError: message is not defined

// Error Explanation: message was not created.


// ✅ Solution

async function greetCorrect() {
    return "Hello";
}

greetCorrect().then(result => console.log(result));

// Output: Hello

// Solution Explanation:  The function returns a valid value.


// ==================================================
// 2. async FUNCTION
// ==================================================

async function showMessage() {
    return "Welcome";
}

showMessage().then(result => console.log(result));

// Output:   Welcome

// Explanation:  async makes the function return a Promise.


// ❌ Error Program

async function showMessageError() {
    return welcome;
}

showMessageError();

// Error:
// ReferenceError: welcome is not defined

// Error Explanation:
// welcome was not created.


// ✅ Solution

async function showMessageCorrect() {
    return "Welcome";
}

showMessageCorrect().then(result => console.log(result));

// Output:
// Welcome

// Solution Explanation:
// We return a valid value.


// ==================================================
// 3. await
// ==================================================

function getData() {
    return Promise.resolve("Data received");
}

async function showData() {
    const result = await getData();
    console.log(result);
}

showData();

// Output:
// Data received

// Explanation:
// await waits for the Promise result.


// ❌ Error Program

async function showDataError() {
    const result = await getData();
    console.log(data);
}

showDataError();

// Error:
// ReferenceError: data is not defined

// Error Explanation:
// The result is stored in result, not data.


// ✅ Solution

async function showDataCorrect() {
    const result = await getData();
    console.log(result);
}

showDataCorrect();

// Output:
// Data received

// Solution Explanation:
// We use the correct variable result.


// ==================================================
// 4. async AND await TOGETHER
// ==================================================

function getName() {
    return Promise.resolve("Riya");
}

async function showName() {
    const name = await getName();
    console.log(name);
}

showName();

// Output:
// Riya

// Explanation:
// await gets the result of the Promise.


// ❌ Error Program

async function showNameError() {
    const name = await getName();
    console.log(username);
}

showNameError();

// Error:
// ReferenceError: username is not defined

// Error Explanation:
// username does not exist.


// ✅ Solution

async function showNameCorrect() {
    const name = await getName();
    console.log(name);
}

showNameCorrect();

// Output:
// Riya

// Solution Explanation:
// We use the correct variable name.


// ==================================================
// 5. await WITH setTimeout()
// ==================================================

function wait() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Finished");
        }, 1000);
    });
}

async function start() {
    const result = await wait();
    console.log(result);
}

start();

// Output after 1 second:
// Finished

// Explanation:
// await waits until the Promise finishes.


// ❌ Error Program

async function startError() {
    const result = await wait();
    console.log(results);
}

startError();

// Error:
// ReferenceError: results is not defined

// Error Explanation:
// The variable is called result.


// ✅ Solution

async function startCorrect() {
    const result = await wait();
    console.log(result);
}

startCorrect();

// Output after 1 second:
// Finished

// Solution Explanation:
// We use the correct variable.


// ==================================================
// 6. MULTIPLE await
// ==================================================

function firstTask() {
    return Promise.resolve("First");
}

function secondTask() {
    return Promise.resolve("Second");
}

async function runTasks() {
    const first = await firstTask();
    const second = await secondTask();

    console.log(first);
    console.log(second);
}

runTasks();

// Output:
// First
// Second

// Explanation:
// We can use await more than once.


// ❌ Error Program

async function runTasksError() {
    const first = await firstTask();
    const second = await secondTask();

    console.log(firstResult);
    console.log(second);
}

runTasksError();

// Error:
// ReferenceError: firstResult is not defined

// Error Explanation:
// The variable is called first.


// ✅ Solution

async function runTasksCorrect() {
    const first = await firstTask();
    const second = await secondTask();

    console.log(first);
    console.log(second);
}

runTasksCorrect();

// Output:
// First
// Second

// Solution Explanation:
// We use the correct variable names.


// ==================================================
// 7. await WITH RETURN VALUE
// ==================================================

function getNumber() {
    return Promise.resolve(10);
}

async function calculate() {
    const number = await getNumber();
    return number * 2;
}

calculate().then(result => console.log(result));

// Output:
// 20

// Explanation:
// await gets 10 and then we multiply it by 2.


// ❌ Error Program

async function calculateError() {
    const number = await getNumber();
    return number * value;
}

calculateError();

// Error:
// ReferenceError: value is not defined

// Error Explanation:
// value was not defined.


// ✅ Solution

async function calculateCorrect() {
    const number = await getNumber();
    return number * 2;
}

calculateCorrect().then(result => console.log(result));

// Output:
// 20

// Solution Explanation:
// We use a valid value.


// ==================================================
// 8. try...catch WITH async/await
// ==================================================

function getData2() {
    return Promise.reject("Something went wrong");
}

async function showData2() {
    try {
        const result = await getData2();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

showData2();

// Output:
// Something went wrong

// Explanation:
// catch handles the rejected Promise.


// ❌ Error Program

async function showData2Error() {
    const result = await getData2();
    console.log(result);
}

showData2Error();

// Error:
// Unhandled Promise Rejection

// Error Explanation:
// The rejected Promise was not handled.


// ✅ Solution

async function showData2Correct() {
    try {
        const result = await getData2();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

showData2Correct();

// Output:
// Something went wrong

// Solution Explanation:
// try...catch handles the error.


// ==================================================
// 9. async FUNCTION WITH try...catch
// ==================================================

async function checkUser() {
    try {
        const result = await Promise.resolve("User found");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

checkUser();

// Output:
// User found

// Explanation:
// try contains code that may cause an error.


// ❌ Error Program

async function checkUserError() {
    try {
        console.log(username);
    } catch (error) {
        console.log(error);
    }
}

checkUserError();

// Output:
// ReferenceError: username is not defined

// Error Explanation:
// username does not exist, so catch handles the error.


// ✅ Solution

async function checkUserCorrect() {
    try {
        const username = "Riya";
        console.log(username);
    } catch (error) {
        console.log(error);
    }
}

checkUserCorrect();

// Output:
// Riya

// Solution Explanation:
// username is created before using it.


// ==================================================
// 10. async FUNCTION RETURNS A PROMISE
// ==================================================

async function getMessage() {
    return "Hello";
}

console.log(getMessage());

// Output:
// Promise { "Hello" }

// Explanation:
// Every async function returns a Promise.


// ❌ Error Program

async function getMessageError() {
    return "Hello";
}

console.log(getMessageError().toUpperCase());

// Error:
// TypeError

// Error Explanation:
// getMessageError() returns a Promise, not a string.


// ✅ Solution

async function getMessageCorrect() {
    return "Hello";
}

getMessageCorrect().then(result => {
    console.log(result.toUpperCase());
});

// Output:
// HELLO

// Solution Explanation:
// then() gets the value from the Promise.


// ==================================================
// 11. await WITH A NORMAL VALUE
// ==================================================

async function showValue() {
    const value = await "Hello";
    console.log(value);
}

showValue();

// Output:
// Hello

// Explanation:
// await can also work with a normal value.


// ❌ Error Program

async function showValueError() {
    const value = await "Hello";
    console.log(values);
}

showValueError();

// Error:
// ReferenceError: values is not defined

// Error Explanation:
// The variable is called value.


// ✅ Solution

async function showValueCorrect() {
    const value = await "Hello";
    console.log(value);
}

showValueCorrect();

// Output:
// Hello

// Solution Explanation:
// We use the correct variable.


// ==================================================
// 12. SEQUENTIAL async/await
// ==================================================

function firstTask2() {
    return Promise.resolve("First task");
}

function secondTask2() {
    return Promise.resolve("Second task");
}

async function runTasks2() {
    const first = await firstTask2();
    console.log(first);

    const second = await secondTask2();
    console.log(second);
}

runTasks2();

// Output:
// First task
// Second task

// Explanation:
// The tasks run one after another.


// ❌ Error Program

async function runTasks2Error() {
    const first = await firstTask2();
    console.log(task);

    const second = await secondTask2();
    console.log(second);
}

runTasks2Error();

// Error:
// ReferenceError: task is not defined

// Error Explanation:
// The variable is called first.


// ✅ Solution

async function runTasks2Correct() {
    const first = await firstTask2();
    console.log(first);

    const second = await secondTask2();
    console.log(second);
}

runTasks2Correct();

// Output:
// First task
// Second task

// Solution Explanation:
// We use the correct variable.


// ==================================================
// 13. async/await WITH Promise.all()
// ==================================================

function getApple() {
    return Promise.resolve("Apple");
}

function getMango() {
    return Promise.resolve("Mango");
}

async function getFruits() {
    const fruits = await Promise.all([
        getApple(),
        getMango()
    ]);

    console.log(fruits);
}

getFruits();

// Output:
// ["Apple", "Mango"]

// Explanation:
// Promise.all() waits for all Promises.


// ❌ Error Program

async function getFruitsError() {
    const fruits = await Promise.all([
        getApple(),
        getMango()
    ]);

    console.log(fruit);
}

getFruitsError();

// Error:
// ReferenceError: fruit is not defined

// Error Explanation:
// The variable is called fruits.


// ✅ Solution

async function getFruitsCorrect() {
    const fruits = await Promise.all([
        getApple(),
        getMango()
    ]);

    console.log(fruits);
}

getFruitsCorrect();

// Output:
// ["Apple", "Mango"]

// Solution Explanation:
// We use the correct variable.


// ==================================================
// 14. async/await WITH CONDITIONS
// ==================================================

function getMarks() {
    return Promise.resolve(80);
}

async function checkMarks() {
    const marks = await getMarks();

    if (marks >= 35) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

checkMarks();

// Output:
// Pass

// Explanation:
// await gets the marks before checking the condition.


// ❌ Error Program

async function checkMarksError() {
    const marks = await getMarks();

    if (mark >= 35) {
        console.log("Pass");
    }
}

checkMarksError();

// Error:
// ReferenceError: mark is not defined

// Error Explanation:
// The variable is called marks, not mark.


// ✅ Solution

async function checkMarksCorrect() {
    const marks = await getMarks();

    if (marks >= 35) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

checkMarksCorrect();

// Output:
// Pass

// Solution Explanation:
// We use the correct variable marks.


// ==================================================
// 15. async/await WITH ERROR HANDLING
// ==================================================

function login() {
    return Promise.resolve("Login successful");
}

async function startLogin() {
    try {
        const message = await login();
        console.log(message);
    } catch (error) {
        console.log("Login failed");
    }
}

startLogin();

// Output:
// Login successful

// Explanation:
// try handles success and catch handles errors.


// ❌ Error Program

function loginError() {
    return Promise.reject("Login failed");
}

async function startLoginError() {
    const message = await loginError();
    console.log(message);
}

startLoginError();

// Error:
// Unhandled Promise Rejection

// Error Explanation:
// The rejected Promise was not handled.


// ✅ Solution

function loginCorrect() {
    return Promise.reject("Login failed");
}

async function startLoginCorrect() {
    try {
        const message = await loginCorrect();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

startLoginCorrect();

// Output:
// Login failed

// Solution Explanation:
// try...catch safely handles the rejected Promise.
