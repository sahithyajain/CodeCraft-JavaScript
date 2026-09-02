# 📘 Arrow Functions in JavaScript

## 🌟 What is an Arrow Function?

An **arrow function** is a short way to write a function.

---

## 🤔 Why Do We Use Arrow Functions?

We use arrow functions to:

- Write less code
- Make code easier to read
- Write callbacks easily

---

# 📚 Concepts Covered

## 1. Basic Arrow Function

**Definition:** A short way to write a function.

    const greet = () => {
        console.log("Hello");
    };

    greet();

**Output:**
    
    Hello

---

## 2. Arrow Function with One Parameter

**Definition:** We can give one value to an arrow function.

    const greet = name => {
        console.log("Hello " + name);
    };

    greet("Riya");

**Output:**

    Hello Riya

---

## 3. Arrow Function with Multiple Parameters

**Definition:** We can give more than one value to an arrow function.

    const add = (a, b) => {
        console.log(a + b);
    };

    add(10, 5);

**Output:**

    15

---

## 4. Arrow Function with No Parameter

**Definition:** An arrow function can work without any value.

    const message = () => {
        console.log("Welcome");
    };

    message();

**Output:**

    Welcome

---

## 5. Arrow Function with `return`

**Definition:** An arrow function can return a value.

    const add = (a, b) => {
        return a + b;
    };

    console.log(add(10, 5));

**Output:**

    15

---

## 6. Implicit Return

**Definition:** We can return a value without writing `return`.

    const add = (a, b) => a + b;

    console.log(add(10, 5));

**Output:**

    15

---

## 7. Arrow Function with One Expression

**Definition:** A single expression can be written without `{}`.

    const square = n => n * n;

    console.log(square(5));

**Output:**

    25

---

## 8. Arrow Function with Multiple Statements

**Definition:** Use `{}` when the function has more than one statement.

    const add = (a, b) => {
        let result = a + b;
        console.log(result);
    };

    add(10, 5);

**Output:**

    15

---

## 9. Arrow Function as a Callback

**Definition:** An arrow function can be passed to another function.

    function run(callback) {
        callback();
    }

    run(() => {
        console.log("Hello");
    });

**Output:**

    Hello

---

## 10. Arrow Function with `forEach()`

**Definition:** `forEach()` can use an arrow function for each item.

    let names = ["Asha", "Riya", "Anu"];

    names.forEach(name => {
        console.log(name);
    });

**Output:**

    Asha
    Riya
    Anu

---

## 11. Arrow Function with `map()`

**Definition:** `map()` uses an arrow function to create a new array.

    let numbers = [1, 2, 3];

    let result = numbers.map(n => n * 2);

    console.log(result);

**Output:**

    [2, 4, 6]

---

## 12. Arrow Function with `filter()`

**Definition:** `filter()` uses an arrow function to select items.

    let numbers = [10, 15, 20, 25];

    let result = numbers.filter(n => n > 15);

    console.log(result);

**Output:**

    [20, 25]

---

## 13. Arrow Function with Objects

**Definition:** An arrow function can use values from an object.

    let student = {
        name: "Riya"
    };

    const showName = () => {
        console.log(student.name);
    };

    showName();

**Output:**

    Riya

---

## 14. Normal Function vs Arrow Function

**Definition:** An arrow function is a shorter way to write a normal function.

    // Normal Function
    function add(a, b) {
        return a + b;
    }

    // Arrow Function
    const add = (a, b) => a + b;

Both give the same result.

---

## 15. Arrow Function and `this`

**Definition:** An arrow function gets `this` from the outside function.

    let student = {
        name: "Riya",

        showName() {
            const show = () => {
                console.log(this.name);
            };

            show();
        }
    };

    student.showName();

**Output:**

    Riya

---

# ⭐ Quick Revision

- **Arrow Function** → Short way to write a function.
- **Parameter** → Value given to a function.
- **Return** → Sends a value back.
- **Implicit Return** → Return without writing `return`.
- **Callback** → Function passed to another function.
- **`forEach()`** → Runs for each item.
- **`map()`** → Creates a new array.
- **`filter()`** → Selects items.
- **`this`** → Arrow function gets `this` from outside.

---

# 🎯 Key Takeaways

- Arrow functions use `=>`.
- They make functions shorter.
- They can have parameters.
- They can return values.
- They are commonly used with `forEach()`, `map()`, and `filter()`.
- They can be used as callbacks.
- They do not have their own `this`.

---

# 🎤 Interview Questions

1. What is an arrow function?
2. Why do we use arrow functions?
3. How do you write an arrow function?
4. What is a parameter?
5. What is an implicit return?
6. Can an arrow function have no parameters?
7. Can an arrow function have multiple parameters?
8. Can an arrow function be used as a callback?
9. How is an arrow function used with `map()`?
10. How is an arrow function used with `filter()`?
11. What is the difference between a normal function and an arrow function?
12. Does an arrow function have its own `this`?
