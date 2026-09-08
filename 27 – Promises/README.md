# 📘 Promises in JavaScript

## 🌟 What are Promises?

**A Promise is used for a task that takes some time to finish.**

Example: Getting data from a server.

---

## 🤔 Why Do We Use Promises?

- To handle tasks that take time
- To handle success
- To handle errors
- To write cleaner asynchronous code

---

# 📚 Concepts Covered

## 1. Creating a Promise

**Definition:** A Promise is created using `new Promise()`.

    const promise = new Promise((resolve, reject) => {
        resolve("Success");
    });

    console.log(promise);

**Output:**

    Promise { "Success" }

---

## 2. `resolve()`

**Definition:** `resolve()` means the task was successful.

    const promise = new Promise((resolve, reject) => {
        resolve("Task completed");
    });

    promise.then(result => console.log(result));

**Output:**

    Task completed

---

## 3. `reject()`

**Definition:** `reject()` means the task failed.

    const promise = new Promise((resolve, reject) => {
        reject("Task failed");
    });

    promise.catch(error => console.log(error));

**Output:**

    Task failed

---

## 4. `.then()`

**Definition:** `.then()` is used to get the successful result.

    Promise.resolve("Hello")
        .then(result => console.log(result));

**Output:**

    Hello

---

## 5. `.catch()`

**Definition:** `.catch()` is used to handle an error.

    Promise.reject("Something went wrong")
        .catch(error => console.log(error));

**Output:**

    Something went wrong

---

## 6. `.finally()`

**Definition:** `.finally()` runs after the Promise finishes.

    Promise.resolve("Done")
        .finally(() => console.log("Finished"));

**Output:**

    Finished

---

## 7. Promise States

**Definition:** A Promise has three states: pending, fulfilled, and rejected.

    Pending → Waiting
    Fulfilled → Success
    Rejected → Failed

---

## 8. Pending Promise

**Definition:** A pending Promise is still waiting to finish.

    const promise = new Promise(() => {});

    console.log(promise);

**Output:**

    Promise { <pending> }

---

## 9. Fulfilled Promise

**Definition:** A fulfilled Promise finished successfully.

    const promise = Promise.resolve("Success");

    promise.then(result => console.log(result));

**Output:**

    Success

---

## 10. Rejected Promise

**Definition:** A rejected Promise failed.

    const promise = Promise.reject("Failed");

    promise.catch(error => console.log(error));

**Output:**

    Failed

---

## 11. Promise with `setTimeout()`

**Definition:** A Promise can wait for some time before giving a result.

    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve("Completed");
        }, 1000);
    });

    promise.then(result => console.log(result));

**Output after 1 second:**

    Completed

---

## 12. Promise Chaining

**Definition:** Promise chaining uses multiple `.then()` one after another.

    Promise.resolve(10)
        .then(number => number * 2)
        .then(result => console.log(result));

**Output:**

    20

---

## 13. Returning a Value

**Definition:** A `.then()` can return a value for the next `.then()`.

    Promise.resolve(10)
        .then(number => number + 5)
        .then(result => console.log(result));

**Output:**

    15

---

## 14. `Promise.all()`

**Definition:** `Promise.all()` waits for all Promises to finish.

    const p1 = Promise.resolve("Apple");
    const p2 = Promise.resolve("Mango");

    Promise.all([p1, p2])
        .then(result => console.log(result));

**Output:**

    ["Apple", "Mango"]

---

## 15. `Promise.race()`

**Definition:** `Promise.race()` gives the result of the Promise that finishes first.

    const p1 = new Promise(resolve => {
        setTimeout(() => resolve("First"), 1000);
    });

    const p2 = new Promise(resolve => {
        setTimeout(() => resolve("Second"), 500);
    });

    Promise.race([p1, p2])
        .then(result => console.log(result));

**Output:**

    Second

---

# ⭐ Quick Revision

- **Promise** → Handles a task that takes time
- **`resolve()`** → Success
- **`reject()`** → Failure
- **`.then()`** → Gets success result
- **`.catch()`** → Handles error
- **`.finally()`** → Runs at the end
- **Pending** → Waiting
- **Fulfilled** → Success
- **Rejected** → Failed
- **`Promise.all()`** → Waits for all
- **`Promise.race()`** → First result

---

# 🎯 Key Takeaways

- Promises handle tasks that take time.
- A Promise can be pending, fulfilled, or rejected.
- Use `.then()` for success.
- Use `.catch()` for errors.
- Use `.finally()` at the end.
- `Promise.all()` waits for all Promises.
- `Promise.race()` takes the first result.

---

# 🎤 Interview Questions

1. What is a Promise?
2. Why do we use Promises?
3. What are the three states of a Promise?
4. What does `resolve()` do?
5. What does `reject()` do?
6. What is `.then()`?
7. What is `.catch()`?
8. What is `.finally()`?
9. What is Promise chaining?
10. What is `Promise.all()`?
11. What is `Promise.race()`?
12. What is the difference between fulfilled and rejected?
