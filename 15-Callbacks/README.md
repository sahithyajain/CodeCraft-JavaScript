# 📘 Callbacks in JavaScript

## 🌟 What is a Callback?

A callback is a **function passed to another function**.

The other function can call it when needed.

### Simple Definition

> A callback is a function passed to another function to be called when needed.

### Example

    function greet() {
        console.log("Hello");
    }

    function runTask(callback) {
        callback();
    }

    runTask(greet);

### Output

    Hello

### Explanation

`greet` is passed to `runTask()`.

`runTask()` receives it as `callback`.

When `callback()` is called, `greet()` runs.

---

## 🤔 Why Do We Use Callbacks?

Callbacks are used to:

- Run a function after another function
- Run something later
- Handle asynchronous tasks
- Work with arrays
- Handle success and errors

### Example

    function finishTask(callback) {
        console.log("Task finished");
        callback();
    }

    function sayDone() {
        console.log("Done!");
    }

    finishTask(sayDone);

### Output

    Task finished
    Done!

### Explanation

After the task finishes, the callback is called.

---

# 📚 Callback Concepts

## 1️⃣ Passing a Function as an Argument

A function can be passed to another function.

### Example

    function greet() {
        console.log("Hello");
    }

    function run(callback) {
        callback();
    }

    run(greet);

### Output

    Hello

### Explanation

`greet` is passed to `run()`.

The function is not called while passing it.

---

## 2️⃣ Callback Parameter

The function receiving the callback stores it in a parameter.

### Example

    function greet() {
        console.log("Hello");
    }

    function run(callback) {
        callback();
    }

    run(greet);

### Output

    Hello

### Explanation

`callback` is the parameter that receives `greet`.

So inside `run()`:

    callback()

runs the `greet()` function.

---

## 3️⃣ Calling a Callback

A callback runs when we call it using `()`.

### Example

    function greet() {
        console.log("Hello");
    }

    function run(callback) {
        callback();
    }

    run(greet);

### Output

    Hello

### Explanation

`callback` contains the `greet` function.

`callback()` runs that function.

---

## 4️⃣ Callback with Arguments

A callback can receive values.

### Example

    function showName(name) {
        console.log(name);
    }

    function getName(callback) {
        callback("Sahithya");
    }

    getName(showName);

### Output

    Sahithya

### Explanation

`getName()` gives `"Sahithya"` to the callback.

The callback receives it in `name`.

---

## 5️⃣ Callback with Multiple Arguments

A callback can receive more than one value.

### Example

    function showDetails(name, age) {
        console.log(name);
        console.log(age);
    }

    function getDetails(callback) {
        callback("Sahithya", 22);
    }

    getDetails(showDetails);

### Output

    Sahithya
    22

### Explanation

Two values are passed to the callback:

    "Sahithya" → name
    22         → age

---

## 6️⃣ Callback with Return Value

A callback can return a value.

### Example

    function add(a, b) {
        return a + b;
    }

    function calculate(callback) {
        return callback(10, 5);
    }

    let result = calculate(add);

    console.log(result);

### Output

    15

### Explanation

The callback adds `10` and `5`.

It returns `15`.

That result is stored in `result`.

---

## 7️⃣ Named Callback

A named callback is a function that has a name.

### Example

    function greet() {
        console.log("Hello");
    }

    function run(callback) {
        callback();
    }

    run(greet);

### Output

    Hello

### Explanation

`greet` has a name.

We can reuse this function whenever we need it.

---

## 8️⃣ Anonymous Callback

An anonymous callback is a function without a name.

### Example

    function run(callback) {
        callback();
    }

    run(function() {
        console.log("Hello");
    });

### Output

    Hello

### Explanation

The function does not have a name.

It is written directly where it is needed.

---

## 9️⃣ Arrow Function as a Callback

An arrow function can also be used as a callback.

### Example

    function run(callback) {
        callback();
    }

    run(() => {
        console.log("Hello");
    });

### Output

    Hello

### Explanation

The arrow function is passed as the callback.

---

## 🔟 Synchronous Callback

A synchronous callback runs immediately.

### Example

    function run(callback) {
        console.log("Start");
        callback();
        console.log("End");
    }

    run(function() {
        console.log("Callback");
    });

### Output

    Start
    Callback
    End

### Explanation

The callback runs before JavaScript moves to the next line.

---

## 1️⃣1️⃣ Asynchronous Callback

An asynchronous callback runs later.

### Example

    console.log("Start");

    setTimeout(function() {
        console.log("Callback");
    }, 1000);

    console.log("End");

### Output

    Start
    End
    Callback

### Explanation

The callback waits for 1 second.

JavaScript continues with the next line first.

---

## 1️⃣2️⃣ `setTimeout()` Callback

`setTimeout()` runs a callback after a delay.

### Example

    setTimeout(function() {
        console.log("Hello");
    }, 2000);

### Output

    Hello

### Explanation

The callback runs after about 2 seconds.

---

## 1️⃣3️⃣ `setInterval()` Callback

`setInterval()` repeatedly runs a callback.

### Example

    let count = 1;

    let timer = setInterval(function() {
        console.log(count);

        count++;

        if (count > 3) {
            clearInterval(timer);
        }
    }, 1000);

### Output

    1
    2
    3

### Explanation

The callback runs every second.

`clearInterval()` stops it after 3 times.

---

## 1️⃣4️⃣ Multiple Callbacks

A function can receive more than one callback.

### Example

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

### Output

    Passed

### Explanation

There are two callbacks:

    success
    failure

The function chooses which one to call.

---

## 1️⃣5️⃣ `forEach()` Callback

`forEach()` runs a callback for every item in an array.

### Example

    let names = ["Asha", "Riya", "Anu"];

    names.forEach(function(name) {
        console.log(name);
    });

### Output

    Asha
    Riya
    Anu

### Explanation

The callback runs once for each name.

---

## 1️⃣6️⃣ `map()` Callback

`map()` uses a callback to create a new array.

### Example

    let numbers = [1, 2, 3];

    let result = numbers.map(function(number) {
        return number * 2;
    });

    console.log(result);

### Output

    [2, 4, 6]

### Explanation

The callback doubles every number.

    1 → 2
    2 → 4
    3 → 6

A new array is created.

---

## 1️⃣7️⃣ `filter()` Callback

`filter()` uses a callback to select values.

### Example

    let ages = [15, 20, 25];

    let adults = ages.filter(function(age) {
        return age >= 18;
    });

    console.log(adults);

### Output

    [20, 25]

### Explanation

The callback checks each age.

    15 → false → Remove
    20 → true  → Keep
    25 → true  → Keep

---

## 1️⃣8️⃣ `reduce()` Callback

`reduce()` uses a callback to combine values into one result.

### Example

    let numbers = [10, 20, 30];

    let total = numbers.reduce(function(sum, number) {
        return sum + number;
    }, 0);

    console.log(total);

### Output

    60

### Explanation

The callback adds the numbers together.

    10 + 20 + 30 = 60

---

## 1️⃣9️⃣ Callback Hell

Callback Hell happens when callbacks are deeply nested.

### Example

    first(function() {
        second(function() {
            third(function() {
                console.log("Done");
            });
        });
    });

### Output

    Done

### Explanation

One callback is placed inside another callback.

Too much nesting makes the code difficult to read.

---

## 2️⃣0️⃣ Avoiding Callback Hell

We can keep functions separate instead of putting many callbacks inside each other.

### Example

    function firstDone() {
        secondDone();
    }

    function secondDone() {
        console.log("Done");
    }

    firstDone();

### Output

    Done

### Explanation

The functions are separated.

This makes the code easier to read.

For larger asynchronous programs, we can use:

    Promises
    async/await

---

## 2️⃣1️⃣ Error-First Callback

In an error-first callback, the error is usually the first argument.

### Example

    function getData(callback) {

        let error = null;
        let data = "Success";

        callback(error, data);
    }

    getData(function(error, data) {

        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }

    });

### Output

    Success

### Explanation

The callback receives:

    error → null
    data  → Success

We check the error first.

---

## 2️⃣2️⃣ Handling Callback Errors

We should check for an error before using the result.

### Example

    function getData(callback) {

        let error = "Something went wrong";

        callback(error, null);
    }

    getData(function(error, data) {

        if (error) {
            console.log(error);
            return;
        }

        console.log(data);
    });

### Output

    Something went wrong

### Explanation

First, we check `error`.

If there is an error, we handle it.

If there is no error, we use `data`.

---

## 2️⃣3️⃣ Callback vs Normal Function

A callback is not a special type of function.

It is simply a normal function that is passed to another function.

### Example

    function greet() {
        console.log("Hello");
    }

    function run(callback) {
        callback();
    }

    run(greet);

### Explanation

`greet` is a normal function.

When we pass it to `run()`, it is being used as a **callback**.

### Simple Difference

    Normal Function
    → Create and call it directly.

    Callback
    → Pass it to another function.

---

## 2️⃣4️⃣ Common Callback Mistake

The most common mistake is using `()` when passing a function.

### Wrong

    run(greet());

### Correct

    run(greet);

### Explanation

    greet
    → Pass the function.

    greet()
    → Call the function.

---

## 2️⃣5️⃣ Forgetting to Call the Callback

Receiving a callback does not automatically run it.

### Example

    function run(callback) {
        console.log("Task started");
    }

    run(function() {
        console.log("Task completed");
    });

### Output

    Task started

### Explanation

The callback was received, but it was never called.

We need:

    callback();

to run it.

### Correct Idea

    function run(callback) {
        console.log("Task started");
        callback();
    }

---

# ⭐ Quick Revision

- Callback → A function passed to another function.
- `functionName` → Pass the function.
- `functionName()` → Call the function.
- `callback` → Receives the function.
- `callback()` → Runs the callback.
- A callback can receive arguments.
- A callback can return a value.
- Named callback → Function with a name.
- Anonymous callback → Function without a name.
- Arrow function → Can also be used as a callback.
- Synchronous → Runs immediately.
- Asynchronous → Runs later.
- `setTimeout()` → Runs a callback after a delay.
- `setInterval()` → Runs a callback repeatedly.
- `forEach()` → Runs a callback for every item.
- `map()` → Creates a new array.
- `filter()` → Selects values.
- `reduce()` → Combines values.
- Callback Hell → Too many nested callbacks.
- Error-first callback → Check the error first.
- A callback is simply a normal function used in a different way.

---

# 🎯 Key Takeaways

- A callback is a **function passed to another function**.
- The receiving function decides when to call it.
- `functionName` means **pass the function**.
- `functionName()` means **run the function**.
- Callbacks can receive values and return results.
- Callbacks are commonly used with asynchronous JavaScript.
- Array methods such as `forEach()`, `map()`, `filter()`, and `reduce()` use callbacks.
- Too many nested callbacks can create Callback Hell.
- Error-first callbacks check the error before using the result.

---

# 🎤 Interview Questions

1. What is a callback function?
2. Why do we use callbacks?
3. How do we pass a function as an argument?
4. What is the difference between `functionName` and `functionName()`?
5. What is a callback parameter?
6. How do we call a callback?
7. Can a callback receive arguments?
8. Can a callback return a value?
9. What is a named callback?
10. What is an anonymous callback?
11. Can an arrow function be used as a callback?
12. What is a synchronous callback?
13. What is an asynchronous callback?
14. What is the difference between synchronous and asynchronous callbacks?
15. How does `setTimeout()` use a callback?
16. How does `setInterval()` use a callback?
17. Can a function have multiple callbacks?
18. How does `forEach()` use a callback?
19. How does `map()` use a callback?
20. How does `filter()` use a callback?
21. How does `reduce()` use a callback?
22. What is Callback Hell?
23. How can Callback Hell be avoided?
24. What is an error-first callback?
25. What happens if we forget to call the callback?
