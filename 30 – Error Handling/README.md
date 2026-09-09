# 📘 Error Handling in JavaScript

## 🌟 What is Error Handling?

**Error handling is used to find and handle errors in a JavaScript program.**

---

## 🤔 Why Do We Use It?

- To prevent the program from stopping suddenly
- To handle unexpected errors
- To show useful error messages
- To make programs safer and easier to debug

---

# 📚 Concepts Covered

## 1. What is an Error?

**Definition:** An error is a problem that stops JavaScript from working correctly.

    console.log(name);

**Output:**

    ReferenceError: name is not defined

**Explanation:**  
The variable `name` does not exist.

---

## 2. `try`

**Definition:** `try` contains the code that may cause an error.

    try {
        console.log(name);
    }

**Output:**

    Error occurs

**Explanation:**  
JavaScript tries to run the code inside `try`.

---

## 3. `catch`

**Definition:** `catch` handles an error that occurs inside `try`.

    try {
        console.log(name);
    } catch (error) {
        console.log("Something went wrong");
    }

**Output:**

    Something went wrong

**Explanation:**  
The error is caught and a message is displayed.

---

## 4. `try...catch`

**Definition:** `try...catch` is used together to handle errors.

    try {
        let result = 10 / 0;
        console.log(result);
    } catch (error) {
        console.log("Error occurred");
    }

**Output:**

    Infinity

**Explanation:**  
There is no JavaScript error here, so `catch` does not run.

---

## 5. The `error` Object

**Definition:** The `error` object contains information about an error.

    try {
        console.log(name);
    } catch (error) {
        console.log(error);
    }

**Output:**

    ReferenceError: name is not defined

**Explanation:**  
`error` stores information about the problem.

---

## 6. `error.message`

**Definition:** `error.message` gives the message of the error.

    try {
        console.log(name);
    } catch (error) {
        console.log(error.message);
    }

**Output:**

    name is not defined

**Explanation:**  
It gives only the error message.

---

## 7. `finally`

**Definition:** `finally` runs whether an error happens or not.

    try {
        console.log("Try");
    } catch (error) {
        console.log("Catch");
    } finally {
        console.log("Finally");
    }

**Output:**

    Try
    Finally

**Explanation:**  
`finally` always runs after `try` and `catch`.

---

## 8. `throw`

**Definition:** `throw` is used to create our own error.

    throw new Error("Something went wrong");

**Output:**

    Error: Something went wrong

**Explanation:**  
We can create an error when a condition is not correct.

---

## 9. Throwing an Error Inside `try`

**Definition:** An error created with `throw` can be handled using `catch`.

    try {
        throw new Error("Invalid age");
    } catch (error) {
        console.log(error.message);
    }

**Output:**

    Invalid age

**Explanation:**  
`throw` creates the error and `catch` handles it.

---

## 10. `ReferenceError`

**Definition:** `ReferenceError` occurs when we use a variable that does not exist.

    console.log(age);

**Output:**

    ReferenceError: age is not defined

**Explanation:**  
The variable `age` has not been declared.

---

## 11. `TypeError`

**Definition:** `TypeError` occurs when a value is used in an incorrect way.

    let number = 10;
    number.toUpperCase();

**Output:**

    TypeError

**Explanation:**  
`toUpperCase()` is a string method, but `number` is a number.

---

## 12. `SyntaxError`

**Definition:** `SyntaxError` occurs when JavaScript code is written incorrectly.

    let = 10;

**Output:**

    SyntaxError

**Explanation:**  
The code does not follow the correct JavaScript syntax.

---

## 13. Handling Errors in Functions

**Definition:** Errors inside a function can be handled using `try...catch`.

    function divide() {
        try {
            console.log(number);
        } catch (error) {
            console.log("Error handled");
        }
    }

    divide();

**Output:**

    Error handled

**Explanation:**  
The error inside the function is handled by `catch`.

---

## 14. Error Handling with `async/await`

**Definition:** `try...catch` can handle errors in asynchronous code.

    async function getData() {
        try {
            const response = await fetch("wrong-url");
            console.log(response);
        } catch (error) {
            console.log("Failed to get data");
        }
    }

    getData();

**Output:**

    Failed to get data

**Explanation:**  
`catch` handles the error from the asynchronous operation.

---

## 15. Error Handling with Promises

**Definition:** `.catch()` is used to handle errors in Promises.

    Promise.reject("Something went wrong")
        .catch(error => console.log(error));

**Output:**

    Something went wrong

**Explanation:**  
`.catch()` handles a rejected Promise.

---

# ⭐ Quick Revision

- **Error** → A problem in the program
- **`try`** → Code that may cause an error
- **`catch`** → Handles the error
- **`finally`** → Always runs
- **`throw`** → Creates an error
- **`error.message`** → Shows the error message
- **ReferenceError** → Variable does not exist
- **TypeError** → Wrong type of operation
- **SyntaxError** → Incorrect JavaScript syntax
- **Promise `.catch()`** → Handles Promise errors
- **`async/await` + `try...catch`** → Handles async errors

---

# 🎯 Key Takeaways

- Errors can happen while a program is running.
- `try...catch` is commonly used to handle errors.
- `finally` runs whether an error occurs or not.
- `throw` allows us to create our own errors.
- JavaScript has different types of errors.
- Promises use `.catch()` for error handling.
- `async/await` commonly uses `try...catch`.

---

# 🎤 Interview Questions

1. What is error handling?
2. What is the use of `try`?
3. What is the use of `catch`?
4. What does `finally` do?
5. What is `throw`?
6. What is an Error object?
7. What is `error.message`?
8. What is a ReferenceError?
9. What is a TypeError?
10. What is a SyntaxError?
11. How do you handle errors in Promises?
12. How do you handle errors with `async/await`?
