# 📘 Async / Await in JavaScript

## 🌟 What is Async / Await?

**Async / Await is a simple way to work with tasks that take time.**

---

## 🤔 Why Do We Use It?

- To handle asynchronous tasks
- To make Promise code easier to read
- To wait for a Promise result
- To handle errors easily

---

# 📚 Concepts Covered

## 1. `async` Function

**Definition:** `async` makes a function return a Promise.

    async function greet() {
        return "Hello";
    }

    greet().then(result => console.log(result));

**Output:**

    Hello

---

## 2. `await`

**Definition:** `await` waits for a Promise to finish.

    function getData() {
        return Promise.resolve("Data received");
    }

    async function showData() {
        const result = await getData();
        console.log(result);
    }

    showData();

**Output:**

    Data received

---

## 3. `async` and `await` Together

**Definition:** `async` creates an asynchronous function and `await` waits for its result.

    function getName() {
        return Promise.resolve("Riya");
    }

    async function showName() {
        const name = await getName();
        console.log(name);
    }

    showName();

**Output:**

    Riya

---

## 4. `await` with `setTimeout()`

**Definition:** `await` can wait for a Promise that finishes after some time.

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

**Output after 1 second:**

    Finished

---

## 5. Multiple `await`

**Definition:** We can use `await` more than once in an async function.

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

**Output:**

    First
    Second

---

## 6. `await` with a Return Value

**Definition:** An async function can return a value after using `await`.

    function getNumber() {
        return Promise.resolve(10);
    }

    async function calculate() {
        const number = await getNumber();
        return number * 2;
    }

    calculate().then(result => console.log(result));

**Output:**

    20

---

## 7. `try...catch`

**Definition:** `try...catch` is used to handle errors in async functions.

    function getData() {
        return Promise.reject("Something went wrong");
    }

    async function showData() {
        try {
            const result = await getData();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    showData();

**Output:**

    Something went wrong

---

## 8. Error Handling with `async/await`

**Definition:** Errors from an awaited Promise can be handled using `catch`.

    async function checkUser() {
        try {
            const result = await Promise.resolve("User found");
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    checkUser();

**Output:**

    User found

---

## 9. Async Function Returns a Promise

**Definition:** Every async function returns a Promise.

    async function getMessage() {
        return "Hello";
    }

    console.log(getMessage());

**Output:**

    Promise { "Hello" }

---

## 10. `await` with a Normal Value

**Definition:** `await` can also be used with a normal value.

    async function showValue() {
        const value = await "Hello";
        console.log(value);
    }

    showValue();

**Output:**

    Hello

---

## 11. Sequential `async/await`

**Definition:** Multiple `await` statements can run tasks one after another.

    function firstTask() {
        return Promise.resolve("First task");
    }

    function secondTask() {
        return Promise.resolve("Second task");
    }

    async function runTasks() {
        const first = await firstTask();
        console.log(first);

        const second = await secondTask();
        console.log(second);
    }

    runTasks();

**Output:**

    First task
    Second task

---

## 12. `async/await` with `Promise.all()`

**Definition:** `await Promise.all()` waits for multiple Promises together.

    const p1 = Promise.resolve("Apple");
    const p2 = Promise.resolve("Mango");

    async function getFruits() {
        const fruits = await Promise.all([p1, p2]);
        console.log(fruits);
    }

    getFruits();

**Output:**

    ["Apple", "Mango"]

---

## 13. `async/await` with Conditions

**Definition:** We can use the result of `await` in conditions.

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

**Output:**

    Pass

---

## 14. Async Arrow Function

**Definition:** An arrow function can also be made async.

    const greet = async () => {
        return "Hello";
    };

    greet().then(result => console.log(result));

**Output:**

    Hello

---

## 15. `async/await` vs `.then()`

**Definition:** `async/await` provides a simpler way to write Promise-based code.

    function getName() {
        return Promise.resolve("Riya");
    }

    async function showName() {
        const name = await getName();
        console.log(name);
    }

    showName();

**Output:**

    Riya

---

# ⭐ Quick Revision

- **`async`** → Makes a function return a Promise
- **`await`** → Waits for a Promise
- **`try...catch`** → Handles errors
- **`Promise.all()`** → Waits for multiple Promises
- **Async Function** → Always returns a Promise
- **Async Arrow Function** → Arrow function with `async`

---

# 🎯 Key Takeaways

- `async/await` is used with asynchronous tasks.
- `async` makes a function return a Promise.
- `await` waits for the Promise result.
- `await` can be used inside an async function.
- Use `try...catch` to handle errors.
- `Promise.all()` can be used with `await`.
- `async/await` makes Promise code easier to read.

---

# 🎤 Interview Questions

1. What is `async/await`?
2. What does `async` do?
3. What does `await` do?
4. Where can we use `await`?
5. Does an async function return a Promise?
6. How do we handle errors with `async/await`?
7. What is `try...catch`?
8. Can we use multiple `await` statements?
9. Can an arrow function be async?
10. Can we use `Promise.all()` with `await`?
11. What is the difference between `.then()` and `await`?
12. Why is `async/await` easier to read?
