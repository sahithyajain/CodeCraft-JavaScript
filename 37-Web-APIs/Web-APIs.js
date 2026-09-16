// 37 – Web APIs
// File: web-apis.js


// ==================================================
// 1. WHAT ARE WEB APIs?
// ==================================================

console.log(window.innerWidth);

// Output:
// Browser window width

// Explanation:
// Web APIs are features provided by the browser.
// They allow JavaScript to interact with the browser.


// ❌ Error Program

console.log(windo.innerWidth);

// Output:
// ReferenceError: windo is not defined

// Error Explanation:
// The correct browser object is "window".
// "windo" is not defined.


// ✅ Solution

console.log(window.innerWidth);

// Output:
// Browser window width

// Solution Explanation:
// Use the correct "window" object.



// ==================================================
// 2. setTimeout()
// ==================================================

setTimeout(() => {
    console.log("Hello Sahithya");
}, 2000);

// Output after 2 seconds:
// Hello Sahithya

// Explanation:
// setTimeout() runs a function after a specified delay.
// 2000 milliseconds means 2 seconds.


// ❌ Error Program

setTimeout(() => {
    console.log("Hello");
}, "two");

// Output:
// The delay value is invalid for the intended use.

// Error Explanation:
// The delay should be given as a number of milliseconds.


// ✅ Solution

setTimeout(() => {
    console.log("Hello");
}, 2000);

// Output after 2 seconds:
// Hello

// Solution Explanation:
// Use a number such as 2000 for the delay.



// ==================================================
// 3. setInterval()
// ==================================================

let count = 1;

let interval = setInterval(() => {
    console.log(count);
    count++;

    if (count > 3) {
        clearInterval(interval);
    }
}, 1000);

// Output:
// 1
// 2
// 3

// Explanation:
// setInterval() runs a function repeatedly after a fixed time.
// Here it runs every 1 second.


// ❌ Error Program

let count2 = 1;

setInterval(() => {
    console.log(count2);
    count2++;
}, 1000);

// Output:
// 1
// 2
// 3
// 4
// ...

// Error Explanation:
// The interval keeps running because it was never stopped.
// This can continue unnecessarily.


// ✅ Solution

let count3 = 1;

let interval2 = setInterval(() => {
    console.log(count3);
    count3++;

    if (count3 > 3) {
        clearInterval(interval2);
    }
}, 1000);

// Output:
// 1
// 2
// 3

// Solution Explanation:
// clearInterval() stops the interval when it is no longer needed.



// ==================================================
// 4. clearTimeout()
// ==================================================

let timer = setTimeout(() => {
    console.log("Hello");
}, 3000);

clearTimeout(timer);

// Output:
// No output

// Explanation:
// clearTimeout() cancels a scheduled setTimeout().


// ❌ Error Program

let timer2 = setTimeout(() => {
    console.log("Hello");
}, 3000);

clearTimeout();

// Output:
// No cancellation

// Error Explanation:
// clearTimeout() needs the timer ID returned by setTimeout().


// ✅ Solution

let timer3 = setTimeout(() => {
    console.log("Hello");
}, 3000);

clearTimeout(timer3);

// Output:
// No output

// Solution Explanation:
// Pass the timer ID to clearTimeout() to cancel the timeout.



// ==================================================
// 5. clearInterval()
// ==================================================

let count4 = 1;

let timer4 = setInterval(() => {
    console.log(count4);
    count4++;
}, 1000);

setTimeout(() => {
    clearInterval(timer4);
}, 3500);

// Output:
// 1
// 2
// 3

// Explanation:
// clearInterval() stops a running interval.


// ❌ Error Program

let count5 = 1;

let timer5 = setInterval(() => {
    console.log(count5);
    count5++;
}, 1000);

clearInterval();

// Output:
// Interval continues

// Error Explanation:
// clearInterval() needs the interval ID.


// ✅ Solution

let count6 = 1;

let timer6 = setInterval(() => {
    console.log(count6);
    count6++;

    if (count6 > 3) {
        clearInterval(timer6);
    }
}, 1000);

// Output:
// 1
// 2
// 3

// Solution Explanation:
// Pass the correct interval ID to clearInterval().



// ==================================================
// 6. window
// ==================================================

console.log(window.innerWidth);

// Output:
// Browser window width

// Explanation:
// window represents the browser window.
// It provides many browser-related properties and methods.


// ❌ Error Program

console.log(window.width);

// Output:
// undefined

// Error Explanation:
// The window object does not have a "width" property.
// The correct property is innerWidth.


// ✅ Solution

console.log(window.innerWidth);

// Output:
// Browser window width

// Solution Explanation:
// Use innerWidth to get the browser window width.



// ==================================================
// 7. window.innerHeight
// ==================================================

console.log(window.innerHeight);

// Output:
// Browser window height

// Explanation:
// innerHeight gives the height of the visible browser area.


// ❌ Error Program

console.log(window.innerHeight());

// Output:
// TypeError: window.innerHeight is not a function

// Error Explanation:
// innerHeight is a property, not a function.
// Therefore, parentheses should not be used.


// ✅ Solution

console.log(window.innerHeight);

// Output:
// Browser window height

// Solution Explanation:
// Use innerHeight without parentheses.



// ==================================================
// 8. navigator
// ==================================================

console.log(navigator.language);

// Output:
// Browser's preferred language

// Explanation:
// navigator provides information about the browser
// and the user's environment.


// ❌ Error Program

console.log(navigatr.language);

// Output:
// ReferenceError: navigatr is not defined

// Error Explanation:
// The correct object name is navigator.


// ✅ Solution

console.log(navigator.language);

// Output:
// Browser's preferred language

// Solution Explanation:
// Use the correct navigator object.



// ==================================================
// 9. location
// ==================================================

console.log(location.href);

// Output:
// Current webpage URL

// Explanation:
// location provides information about the current webpage URL.


// ❌ Error Program

console.log(locaton.href);

// Output:
// ReferenceError: locaton is not defined

// Error Explanation:
// The correct browser object is location.


// ✅ Solution

console.log(location.href);

// Output:
// Current webpage URL

// Solution Explanation:
// Use location.href to get the current webpage URL.



// ==================================================
// 10. location.reload()
// ==================================================

console.log("Page will reload");

location.reload();

// Output:
// Page reloads

// Explanation:
// location.reload() reloads the current webpage.


// ❌ Error Program

location.reload;

// Output:
// No page reload

// Error Explanation:
// reload is a method.
// It must be called using parentheses.


// ✅ Solution

location.reload();

// Output:
// Current webpage reloads

// Solution Explanation:
// Use parentheses to call the reload() method.



// ==================================================
// 11. Date
// ==================================================

let today = new Date();

console.log(today);

// Output:
// Current date and time

// Explanation:
// new Date() creates a Date object containing
// the current date and time.


// ❌ Error Program

let today2 = Date();

console.log(today2.getFullYear());

// Output:
// TypeError: today2.getFullYear is not a function

// Error Explanation:
// Date() without new returns a string.
// A string does not have getFullYear().


// ✅ Solution

let today3 = new Date();

console.log(today3.getFullYear());

// Output:
// Current year

// Solution Explanation:
// Use new Date() to create a Date object.



// ==================================================
// 12. GETTING DATE INFORMATION
// ==================================================

let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());

// Output:
// Current year
// Current month
// Current day

// Explanation:
// getFullYear() gets the year.
// getMonth() gets the month from 0 to 11.
// getDate() gets the day of the month.


// ❌ Error Program

let date2 = new Date();

console.log(date2.getFullyear());

// Output:
// TypeError: date2.getFullyear is not a function

// Error Explanation:
// JavaScript method names are case-sensitive.
// The correct method is getFullYear().


// ✅ Solution

let date3 = new Date();

console.log(date3.getFullYear());

// Output:
// Current year

// Solution Explanation:
// Use the correct method name getFullYear().



// ==================================================
// 13. window.alert()
// ==================================================

window.alert("Hello Sahithya!");

// Output:
// A popup showing:
// Hello Sahithya!

// Explanation:
// alert() displays a message box in the browser.


// ❌ Error Program

window.alertt("Hello");

// Output:
// TypeError: window.alertt is not a function

// Error Explanation:
// The correct method is alert().


// ✅ Solution

window.alert("Hello Sahithya!");

// Output:
// A popup showing:
// Hello Sahithya!

// Solution Explanation:
// Use the correct alert() method.



// ==================================================
// 14. window.confirm()
// ==================================================

let result = window.confirm("Do you want to continue?");

console.log(result);

// Output:
// true  → User clicked OK
// false → User clicked Cancel

// Explanation:
// confirm() asks the user for confirmation.
// It returns true or false.


// ❌ Error Program

let result2 = window.confirmm("Continue?");

console.log(result2);

// Output:
// TypeError: window.confirmm is not a function

// Error Explanation:
// The correct method name is confirm().


// ✅ Solution

let result3 = window.confirm("Do you want to continue?");

console.log(result3);

// Output:
// true or false

// Solution Explanation:
// Use the correct confirm() method.



// ==================================================
// 15. window.prompt()
// ==================================================

let userName = window.prompt("Enter your name:");

console.log(userName);

// Output:
// The name entered by the user

// Example:
// Sahithya

// Explanation:
// prompt() displays a box where the user can enter a value.
// The entered value is returned as a string.


// ❌ Error Program

let userName2 = window.promptt("Enter your name:");

console.log(userName2);

// Output:
// TypeError: window.promptt is not a function

// Error Explanation:
// The correct method is prompt().


// ✅ Solution

let userName3 = window.prompt("Enter your name:");

console.log(userName3);

// Output:
// The name entered by the user

// Solution Explanation:
// Use the correct prompt() method to get input from the user.
