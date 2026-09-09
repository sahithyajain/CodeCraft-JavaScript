// 27 - Promises in JavaScript


// ==================================================
// 1. RANDOM SIMPLE PROGRAM
// ==================================================

const promise = new Promise((resolve, reject) => {
    resolve("Success");
});

console.log(promise);

// Output:
// Promise { "Success" }

// Explanation:
// A Promise is created and resolved successfully.


// ❌ Error Program

const promiseError = new Promise((resolve, reject) => {
    resolve(message);
});

console.log(promiseError);

// Error:
// ReferenceError: message is not defined

// Error Explanation:
// message was not created before using it.


// ✅ Solution

const promiseCorrect = new Promise((resolve, reject) => {
    resolve("Success");
});

console.log(promiseCorrect);

// Output:
// Promise { "Success" }

// Solution Explanation:
// We give resolve() a valid value.


// ==================================================
// 2. resolve()
// ==================================================

const promise2 = new Promise((resolve, reject) => {
    resolve("Task completed");
});

promise2.then(result => console.log(result));

// Output:
// Task completed

// Explanation:
// resolve() means the task was successful.


// ❌ Error Program

const promise2Error = new Promise((resolve, reject) => {
    resolve();
});

promise2Error.then(result => console.log(result.toUpperCase()));

// Error:
// TypeError

// Error Explanation:
// resolve() was given no value, so result is undefined.


// ✅ Solution

const promise2Correct = new Promise((resolve, reject) => {
    resolve("Task completed");
});

promise2Correct.then(result => console.log(result.toUpperCase()));

// Output:
// TASK COMPLETED

// Solution Explanation:
// A string value is given to resolve().


// ==================================================
// 3. reject()
// ==================================================

const promise3 = new Promise((resolve, reject) => {
    reject("Task failed");
});

promise3.catch(error => console.log(error));

// Output:
// Task failed

// Explanation:
// reject() means the task failed.


// ❌ Error Program

const promise3Error = new Promise((resolve, reject) => {
    reject("Task failed");
});

promise3Error.then(result => console.log(result));

// Error:
// Unhandled Promise Rejection

// Error Explanation:
// The rejected Promise was not handled with catch().


// ✅ Solution

const promise3Correct = new Promise((resolve, reject) => {
    reject("Task failed");
});

promise3Correct.catch(error => console.log(error));

// Output:
// Task failed

// Solution Explanation:
// catch() handles the rejected Promise.


// ==================================================
// 4. .then()
// ==================================================

Promise.resolve("Hello")
    .then(result => console.log(result));

// Output:
// Hello

// Explanation:
// then() gets the successful result.


// ❌ Error Program

Promise.resolve("Hello")
    .then(result => console.log(message));

// Error:
// ReferenceError: message is not defined

// Error Explanation:
// message does not exist.


// ✅ Solution

Promise.resolve("Hello")
    .then(result => console.log(result));

// Output:
// Hello

// Solution Explanation:
// We use the result received from the Promise.


// ==================================================
// 5. .catch()
// ==================================================

Promise.reject("Something went wrong")
    .catch(error => console.log(error));

// Output:
// Something went wrong

// Explanation:
// catch() handles the error.


// ❌ Error Program

Promise.reject("Something went wrong")
    .then(result => console.log(result));

// Error:
// Unhandled Promise Rejection

// Error Explanation:
// The rejected Promise has no catch().


// ✅ Solution

Promise.reject("Something went wrong")
    .catch(error => console.log(error));

// Output:
// Something went wrong

// Solution Explanation:
// catch() handles the rejected Promise.


// ==================================================
// 6. .finally()
// ==================================================

Promise.resolve("Done")
    .then(result => console.log(result))
    .finally(() => console.log("Finished"));

// Output:
// Done
// Finished

// Explanation:
// finally() runs after the Promise finishes.


// ❌ Error Program

Promise.resolve("Done")
    .then(result => console.log(result))
    .finally(() => console.log(message));

// Error:
// ReferenceError: message is not defined

// Error Explanation:
// message does not exist inside finally().


// ✅ Solution

Promise.resolve("Done")
    .then(result => console.log(result))
    .finally(() => console.log("Finished"));

// Output:
// Done
// Finished

// Solution Explanation:
// finally() contains valid code.


// ==================================================
// 7. PROMISE STATES
// ==================================================

const promise4 = new Promise((resolve, reject) => {
    resolve("Done");
});

promise4.then(result => console.log(result));

// Output:
// Done

// Explanation:
// A Promise can have three states:
// Pending → Waiting
// Fulfilled → Success
// Rejected → Failed


// ❌ Error Program

const promise4Error = new Promise((resolve, reject) => {
    reject("Failed");
});

promise4Error.then(result => console.log(result));

// Error:
// Unhandled Promise Rejection

// Error Explanation:
// The Promise was rejected but the error was not handled.


// ✅ Solution

const promise4Correct = new Promise((resolve, reject) => {
    reject("Failed");
});

promise4Correct.catch(error => console.log(error));

// Output:
// Failed

// Solution Explanation:
// catch() handles the rejected state.


// ==================================================
// 8. PENDING PROMISE
// ==================================================

const promise5 = new Promise(() => {});

console.log(promise5);

// Output:
// Promise { <pending> }

// Explanation:
// The Promise is still waiting to finish.


// ❌ Error Program

const promise5Error = new Promise((resolve, reject) => {
    resolve();
});

console.log(promise5Error.toUpperCase());

// Error:
// TypeError

// Error Explanation:
// A Promise is not a string, so toUpperCase() cannot be used on it.


// ✅ Solution

const promise5Correct = new Promise((resolve, reject) => {
    resolve("Done");
});

promise5Correct.then(result => console.log(result));

// Output:
// Done

// Solution Explanation:
// then() gets the value from the Promise.


// ==================================================
// 9. FULFILLED PROMISE
// ==================================================

const promise6 = Promise.resolve("Success");

promise6.then(result => console.log(result));

// Output:
// Success

// Explanation:
// The Promise completed successfully.


// ❌ Error Program

const promise6Error = Promise.resolve("Success");

promise6Error.then(result => console.log(message));

// Error:
// ReferenceError: message is not defined

// Error Explanation:
// message is not the Promise result.


// ✅ Solution

const promise6Correct = Promise.resolve("Success");

promise6Correct.then(result => console.log(result));

// Output:
// Success

// Solution Explanation:
// We use the correct result.


// ==================================================
// 10. REJECTED PROMISE
// ==================================================

const promise7 = Promise.reject("Failed");

promise7.catch(error => console.log(error));

// Output:
// Failed

// Explanation:
// The Promise failed and catch() handles it.


// ❌ Error Program

const promise7Error = Promise.reject("Failed");

promise7Error.then(result => console.log(result));

// Error:
// Unhandled Promise Rejection

// Error Explanation:
// A rejected Promise needs error handling.


// ✅ Solution

const promise7Correct = Promise.reject("Failed");

promise7Correct.catch(error => console.log(error));

// Output:
// Failed

// Solution Explanation:
// catch() handles the rejection.


// ==================================================
// 11. PROMISE WITH setTimeout()
// ==================================================

const promise8 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Task completed");
    }, 1000);
});

promise8.then(result => console.log(result));

// Output after 1 second:
// Task completed

// Explanation:
// The Promise waits for 1 second before resolving.


// ❌ Error Program

const promise8Error = new Promise(resolve => {
    setTimeout(() => {
        resolve("Task completed");
    }, 1000);
});

promise8Error.then(result => console.log(message));

// Error:
// ReferenceError: message is not defined

// Error Explanation:
// message does not exist.


// ✅ Solution

const promise8Correct = new Promise(resolve => {
    setTimeout(() => {
        resolve("Task completed");
    }, 1000);
});

promise8Correct.then(result => console.log(result));

// Output after 1 second:
// Task completed

// Solution Explanation:
// We use the result received from the Promise.


// ==================================================
// 12. PROMISE CHAINING
// ==================================================

Promise.resolve(10)
    .then(number => number * 2)
    .then(result => console.log(result));

// Output:
// 20

// Explanation:
// The result of one then() goes to the next then().


// ❌ Error Program

Promise.resolve(10)
    .then(number => number * 2)
    .then(result => console.log(value));

// Error:
// ReferenceError: value is not defined

// Error Explanation:
// The variable is called result, not value.


// ✅ Solution

Promise.resolve(10)
    .then(number => number * 2)
    .then(result => console.log(result));

// Output:
// 20

// Solution Explanation:
// We use the correct variable result.


// ==================================================
// 13. RETURNING A VALUE
// ==================================================

Promise.resolve(10)
    .then(number => number + 5)
    .then(result => console.log(result));

// Output:
// 15

// Explanation:
// The first then() returns 15.
// The next then() receives 15.


// ❌ Error Program

Promise.resolve(10)
    .then(number => number + 5)
    .then(result => console.log(value));

// Error:
// ReferenceError: value is not defined

// Error Explanation:
// value does not exist.


// ✅ Solution

Promise.resolve(10)
    .then(number => number + 5)
    .then(result => console.log(result));

// Output:
// 15

// Solution Explanation:
// The returned value is received by result.


// ==================================================
// 14. Promise.all()
// ==================================================

const p1 = Promise.resolve("Apple");
const p2 = Promise.resolve("Mango");

Promise.all([p1, p2])
    .then(result => console.log(result));

// Output:
// ["Apple", "Mango"]

// Explanation:
// Promise.all() waits for all Promises to finish.


// ❌ Error Program

const p1Error = Promise.resolve("Apple");
const p2Error = Promise.reject("Failed");

Promise.all([p1Error, p2Error])
    .then(result => console.log(result));

// Error:
// Unhandled Promise Rejection

// Error Explanation:
// One Promise was rejected and the error was not handled.


// ✅ Solution

const p1Correct = Promise.resolve("Apple");
const p2Correct = Promise.reject("Failed");

Promise.all([p1Correct, p2Correct])
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Output:
// Failed

// Solution Explanation:
// catch() handles the rejection.


// ==================================================
// 15. Promise.race()
// ==================================================

const p3 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 1000);
});

const p4 = new Promise(resolve => {
    setTimeout(() => resolve("Second"), 500);
});

Promise.race([p3, p4])
    .then(result => console.log(result));

// Output after about 500 ms:
// Second

// Explanation:
// Promise.race() gives the result of the Promise that finishes first.


// ❌ Error Program

const p3Error = new Promise(resolve => {
    setTimeout(() => resolve("First"), 1000);
});

const p4Error = new Promise((resolve, reject) => {
    setTimeout(() => reject("Failed"), 500);
});

Promise.race([p3Error, p4Error])
    .then(result => console.log(result));

// Error:  Unhandled Promise Rejection

// Error Explanation:
// The first Promise to finish was rejected,
// but the error was not handled.


// ✅ Solution

const p3Correct = new Promise(resolve => {
    setTimeout(() => resolve("First"), 1000);
});

const p4Correct = new Promise((resolve, reject) => {
    setTimeout(() => reject("Failed"), 500);
});

Promise.race([p3Correct, p4Correct])
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Output after about 500 ms:  Failed

// Solution Explanation:  catch() handles the result when the first Promise rejects.
