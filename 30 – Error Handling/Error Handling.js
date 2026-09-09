// 30 - Error Handling in JavaScript


// ==================================================
// 1. WHAT IS AN ERROR?
// ==================================================

console.log(name);

/*
Output:
ReferenceError: name is not defined

Explanation:
The variable name does not exist.
*/


// ❌ Error
console.log(age);

/*
Error:
ReferenceError: age is not defined

Explanation:
The variable age has not been declared.
*/


// ✅ Solution
let age = 20;
console.log(age);

/*
Output:
20

Explanation:
Declare the variable before using it.
*/


// ==================================================
// 2. try
// ==================================================

try {
    console.log(name);
}

/*
Output:
ReferenceError

Explanation:
try contains code that may cause an error.
*/


// ❌ Error
try {
    console.log(name);
}

/*
Error:
ReferenceError: name is not defined

Explanation:
The code inside try contains an error.
*/


// ✅ Solution
try {
    let name = "Riya";
    console.log(name);
} catch (error) {
    console.log("Something went wrong");
}

/*
Output:
Riya

Explanation:
The variable is declared before using it.
*/


// ==================================================
// 3. catch
// ==================================================

try {
    console.log(name);
} catch (error) {
    console.log("Something went wrong");
}

/*
Output:
Something went wrong

Explanation:
catch handles the error from try.
*/


// ❌ Error
try {
    console.log(name);
}

/*
Error:
ReferenceError: name is not defined

Explanation:
There is no catch block to handle the error.
*/


// ✅ Solution
try {
    console.log(name);
} catch (error) {
    console.log("Error handled");
}

/*
Output:
Error handled

Explanation:
catch handles the error safely.
*/


// ==================================================
// 4. try...catch
// ==================================================

try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("Error occurred");
}

/*
Output:
Infinity

Explanation:
10 / 0 does not create a JavaScript error.
*/


// ❌ Error
try {
    console.log(number);
} catch (error) {
    console.log("Error occurred");
}

/*
Output:
Error occurred

Explanation:
number has not been declared.
*/


// ✅ Solution
try {
    let number = 10;
    console.log(number);
} catch (error) {
    console.log("Error occurred");
}

/*
Output:
10

Explanation:
The variable is declared before use.
*/


// ==================================================
// 5. ERROR OBJECT
// ==================================================

try {
    console.log(name);
} catch (error) {
    console.log(error);
}

/*
Output:
ReferenceError: name is not defined

Explanation:
The error object contains information about the error.
*/


// ❌ Error
try {
    console.log(name);
} catch (error) {
    console.log(error.name());
}

/*
Error:
TypeError: error.name is not a function

Explanation:
name is a property, not a function.
*/


// ✅ Solution
try {
    console.log(name);
} catch (error) {
    console.log(error.name);
}

/*
Output:
ReferenceError

Explanation:
Use error.name to get the error type.
*/


// ==================================================
// 6. error.message
// ==================================================

try {
    console.log(name);
} catch (error) {
    console.log(error.message);
}

/*
Output:
name is not defined

Explanation:
error.message gives the error message.
*/


// ❌ Error
try {
    console.log(name);
} catch (error) {
    console.log(error.message());
}

/*
Error:
TypeError: error.message is not a function

Explanation:
message is a property, so we do not use ().
*/


// ✅ Solution
try {
    console.log(name);
} catch (error) {
    console.log(error.message);
}

/*
Output:
name is not defined

Explanation:
Use error.message without parentheses.
*/


// ==================================================
// 7. finally
// ==================================================

try {
    console.log("Try");
} catch (error) {
    console.log("Catch");
} finally {
    console.log("Finally");
}

/*
Output:
Try
Finally

Explanation:
finally runs after try, whether an error happens or not.
*/


// ❌ Error
try {
    console.log(name);
} catch (error) {
    console.log("Catch");
} finally {
    console.log("Finally");
}

/*
Output:
Catch
Finally

Explanation:
Even when an error occurs, finally still runs.
*/


// ✅ Solution
try {
    console.log("Program running");
} catch (error) {
    console.log("Catch");
} finally {
    console.log("Program finished");
}

/*
Output:
Program running
Program finished

Explanation:
finally runs after the try block.
*/


// ==================================================
// 8. throw
// ==================================================

throw new Error("Something went wrong");

/*
Output:
Error: Something went wrong

Explanation:
throw is used to create our own error.
*/


// ❌ Error
throw "Something went wrong";

/*
Problem:
A string is thrown instead of an Error object.

Explanation:
It is better to throw an Error object.
*/


// ✅ Solution
throw new Error("Something went wrong");

/*
Output:
Error: Something went wrong

Explanation:
Use new Error() to create an Error object.
*/


// ==================================================
// 9. THROWING AN ERROR INSIDE try
// ==================================================

try {
    throw new Error("Invalid age");
} catch (error) {
    console.log(error.message);
}

/*
Output:
Invalid age

Explanation:
throw creates an error and catch handles it.
*/


// ❌ Error
try {
    throw new Error("Invalid age");

    console.log("Valid age");
} catch (error) {
    console.log(error.message);
}

/*
Output:
Invalid age

Explanation:
Code after throw inside the try block is not executed.
*/


// ✅ Solution
try {
    console.log("Checking age");
    throw new Error("Invalid age");
} catch (error) {
    console.log(error.message);
}

/*
Output:
Checking age
Invalid age

Explanation:
The error is created only after the first statement runs.
*/


// ==================================================
// 10. ReferenceError
// ==================================================

try {
    console.log(age);
} catch (error) {
    console.log(error.name);
}

/*
Output:
ReferenceError

Explanation:
ReferenceError occurs when a variable does not exist.
*/


// ❌ Error
console.log(age);

/*
Error:
ReferenceError: age is not defined

Explanation:
age has not been declared.
*/


// ✅ Solution
let studentAge = 18;
console.log(studentAge);

/*
Output:
18

Explanation:
Declare the variable before using it.
*/


// ==================================================
// 11. TypeError
// ==================================================

try {
    let number = 10;
    number.toUpperCase();
} catch (error) {
    console.log(error.name);
}

/*
Output:
TypeError

Explanation:
toUpperCase() is a string method, but number is a number.
*/


// ❌ Error
let number = 10;
number.toUpperCase();

/*
Error:
TypeError

Explanation:
A number cannot use the string method toUpperCase().
*/


// ✅ Solution
let text = "hello";
console.log(text.toUpperCase());

/*
Output:
HELLO

Explanation:
toUpperCase() works with strings.
*/


// ==================================================
// 12. SyntaxError
// ==================================================

try {
    eval("let = 10;");
} catch (error) {
    console.log(error.name);
}

/*
Output:
SyntaxError

Explanation:
SyntaxError occurs when JavaScript code has incorrect syntax.
*/


// ❌ Error
eval("let = 10;");

/*
Error:
SyntaxError

Explanation:
The JavaScript syntax is incorrect.
*/


// ✅ Solution
let value = 10;
console.log(value);

/*
Output:
10

Explanation:
The variable declaration uses correct syntax.
*/


// ==================================================
// 13. ERROR HANDLING IN FUNCTIONS
// ==================================================

function divide() {
    try {
        console.log(number);
    } catch (error) {
        console.log("Error handled");
    }
}

divide();

/*
Output:
Error handled

Explanation:
Errors inside a function can be handled using try...catch.
*/


// ❌ Error
function showNumber() {
    console.log(number);
}

showNumber();

/*
Error:
ReferenceError: number is not defined

Explanation:
The function uses an undeclared variable.
*/


// ✅ Solution
function showNumberSolution() {
    try {
        let number = 10;
        console.log(number);
    } catch (error) {
        console.log("Error handled");
    }
}

showNumberSolution();

/*
Output:
10

Explanation:
The variable is declared before using it.
*/


// ==================================================
// 14. ERROR HANDLING WITH async/await
// ==================================================

async function getData() {
    try {
        const response = await fetch("wrong-url");
        console.log(response);
    } catch (error) {
        console.log("Failed to get data");
    }
}

getData();

/*
Output:
Failed to get data

Explanation:
try...catch handles errors from asynchronous code.
*/


// ❌ Error
async function getDataError() {
    const response = await fetch("wrong-url");
    console.log(response);
}

getDataError();

/*
Error:
TypeError: Failed to fetch

Explanation:
There is no try...catch to handle the error.
*/


// ✅ Solution
async function getDataSolution() {
    try {
        const response = await fetch("https://example.com");
        console.log(response.ok);
    } catch (error) {
        console.log("Failed to get data");
    }
}

getDataSolution();

/*
Output:
true

Explanation:
try...catch safely handles a Fetch error.
*/


// ==================================================
// 15. ERROR HANDLING WITH PROMISES
// ==================================================

Promise.reject("Something went wrong")
    .catch(error => console.log(error));

/*
Output:
Something went wrong

Explanation:
catch() handles a rejected Promise.
*/


// ❌ Error
Promise.reject("Something went wrong");

/*
Error:
Unhandled Promise Rejection

Explanation:
The rejected Promise has no catch() to handle the error.
*/


// ✅ Solution
Promise.reject("Something went wrong")
    .catch(error => console.log("Error handled:", error));

/*
Output:
Error handled: Something went wrong

Explanation:
Use catch() to handle a rejected Promise.
*/
