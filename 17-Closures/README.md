# 📕 Closures in JavaScript

## 🌟 What is a Closure?

A **closure** is a function that remembers variables from its outer function.

---

## 🤔 Why Do We Use Closures?

Closures help us to:

- Remember values
- Keep data private
- Create counters
- Maintain values between function calls
- Create reusable functions

---

# 📚 Concepts Covered

## 1. Basic Closure

**Definition:** An inner function can use a variable from its outer function.

### Example

    function outer() {
        let name = "Sahithya";

        function inner() {
            console.log(name);
        }

        inner();
    }

    outer();

### Output

    Sahithya

### Explanation

`name` belongs to `outer()`.

The `inner()` function can use `name` because it is inside `outer()`.

---

## 2. Closure After Outer Function Finishes

**Definition:** A closure can remember a variable even after the outer function has finished.

### Example

    function outer() {
        let name = "Sahithya";

        return function() {
            console.log(name);
        };
    }

    let greet = outer();

    greet();

### Output

    Sahithya

### Explanation

`outer()` finishes after returning the function.

But the returned function still remembers `name`.

---

## 3. Inner Function Accessing Outer Variable

**Definition:** An inner function can access variables from its outer function.

### Example

    function outer() {
        let message = "Hello";

        function inner() {
            console.log(message);
        }

        return inner;
    }

    let result = outer();

    result();

### Output

    Hello

### Explanation

`message` belongs to the outer function.

The inner function can use it because it can access the outer variable.

---

## 4. Closure with Parameters

**Definition:** A closure can remember a value passed to the outer function.

### Example

    function greet(name) {
        return function() {
            console.log("Hello " + name);
        };
    }

    let message = greet("Sahithya");

    message();

### Output

    Hello Sahithya

### Explanation

We give `"Sahithya"` to `greet()`.

The inner function remembers that value and uses it later.

---

## 5. Closure Remembering a Value

**Definition:** A closure can remember a value between function calls.

### Example

    function counter() {
        let count = 0;

        return function() {
            count++;
            console.log(count);
        };
    }

    let increase = counter();

    increase();
    increase();
    increase();

### Output

    1
    2
    3

### Explanation

`count` starts at `0`.

The inner function increases it each time.

The closure remembers the previous value.

---

## 6. Closure for Private Data

**Definition:** A closure can keep a variable from being directly accessed outside.

### Example

    function account() {
        let balance = 1000;

        return function() {
            console.log(balance);
        };
    }

    let showBalance = account();

    showBalance();

### Output

    1000

### Explanation

`balance` is inside `account()`.

We cannot directly access it from outside.

The returned function can access it.

---

## 7. Changing Private Data

**Definition:** A closure can read and change a private variable.

### Example

    function account() {
        let balance = 1000;

        return function(amount) {
            balance = balance + amount;
            console.log(balance);
        };
    }

    let deposit = account();

    deposit(500);
    deposit(200);

### Output

    1500
    1700

### Explanation

The closure remembers `balance`.

First, `500` is added to `1000`.

Then `200` is added to `1500`.

---

## 8. Multiple Closures

**Definition:** Each call to the outer function can create a separate closure.

### Example

    function counter() {
        let count = 0;

        return function() {
            count++;
            return count;
        };
    }

    let counter1 = counter();
    let counter2 = counter();

    console.log(counter1());
    console.log(counter1());

    console.log(counter2());

### Output

    1
    2
    1

### Explanation

`counter1` has its own `count`.

`counter2` has a different `count`.

They do not share the same value.

---

## 9. Closure with Multiple Variables

**Definition:** A closure can remember more than one variable.

### Example

    function student(name, age) {
        return function() {
            console.log(name);
            console.log(age);
        };
    }

    let showStudent = student("Sahithya", 22);

    showStudent();

### Output

    Sahithya
    22

### Explanation

The outer function has `name` and `age`.

The inner function remembers both values.

---

## 10. Closure with `setTimeout()`

**Definition:** A closure can remember a variable even when a callback runs later.

### Example

    function message() {
        let text = "Hello";

        setTimeout(function() {
            console.log(text);
        }, 1000);
    }

    message();

### Output

    Hello

### Explanation

The callback runs after 1 second.

Even though `message()` has finished, the callback still remembers `text`.

---

## 11. Closure in a Loop

**Definition:** A closure can remember the value from each loop iteration.

### Example

    for (let i = 1; i <= 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }

### Output

    1
    2
    3

### Explanation

Each loop iteration has its own value of `i`.

Each callback remembers its own value.

---

## 12. Closure and Lexical Scope

**Definition:** Lexical scope means a function can access variables from where it was created.

### Example

    function outer() {
        let message = "Hello";

        function inner() {
            console.log(message);
        }

        return inner;
    }

    let result = outer();

    result();

### Output

    Hello

### Explanation

The inner function was created inside the outer function.

So it can access the `message` variable.

---

## 13. Closure vs Normal Function

**Definition:** A closure is a function that remembers variables from its outer scope.

### Example

    function outer() {
        let name = "Sahithya";

        return function() {
            console.log(name);
        };
    }

    let greet = outer();

    greet();

### Output

    Sahithya

### Explanation

The returned function remembers `name`.

That is what makes it a closure.

### Difference

**Normal Function**

→ Uses the variables available to it.

**Closure**

→ Remembers variables from its outer function.

---

## 14. Function Factory Using Closure

**Definition:** A function factory creates functions that remember different values.

### Example

    function createGreeting(name) {
        return function() {
            console.log("Hello " + name);
        };
    }

    let greetSahithya = createGreeting("Sahithya");
    let greetAnu = createGreeting("Anu");

    greetSahithya();
    greetAnu();

### Output

    Hello Sahithya
    Hello Anu

### Explanation

Each returned function remembers its own `name`.

One remembers `"Sahithya"` and the other remembers `"Anu"`.

---

## 15. Closure Maintaining State

**Definition:** A closure can remember and maintain a value between function calls.

### Example

    function score() {
        let points = 0;

        return function() {
            points++;
            return points;
        };
    }

    let addPoint = score();

    console.log(addPoint());
    console.log(addPoint());
    console.log(addPoint());

### Output

    1
    2
    3

### Explanation

The outer function runs once.

The returned function remembers `points`.

Every time we call `addPoint()`, it uses the previous value.

---

# ⭐ Quick Revision

**Closure**

→ A function that remembers variables from its outer function.

**Outer Function**

→ Creates the variable.

**Inner Function**

→ Can use the outer variable.

**Remembering Values**

→ A closure can keep values between calls.

**Private Data**

→ Closures can keep variables from direct outside access.

**Counter**

→ A common use of closures.

**Multiple Closures**

→ Each closure can have its own separate value.

**Parameters**

→ A closure can remember outer function parameters.

**Lexical Scope**

→ A function can access variables from where it was created.

**Function Factory**

→ Creates functions that remember values.

**State**

→ A closure can maintain data between function calls.

---

# 🎯 Key Takeaways

- A closure is a function that remembers its outer variables.
- An inner function can access variables from its outer function.
- A closure can remember values between function calls.
- Closures can help keep data private.
- Counters are a common use of closures.
- Different closures can have different values.
- Closures are connected to lexical scope.
- Closures can be used with callbacks and asynchronous code.

---

# 🎤 Interview Questions

1. What is a closure?
2. Why do we use closures?
3. What is an outer function?
4. What is an inner function?
5. How does a closure remember a variable?
6. What happens when the outer function finishes?
7. Can a closure remember a value between function calls?
8. How can closures create private data?
9. How are closures useful for counters?
10. Can a closure remember function parameters?
11. What is lexical scope?
12. What is the difference between a closure and a normal function?
13. Can two closures have separate values?
14. How are closures used with `setTimeout()`?
15. What is a function factory?
16. How can a closure maintain state?
17. Why are closures important in JavaScript?
