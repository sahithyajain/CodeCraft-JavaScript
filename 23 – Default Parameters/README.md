# 📘 Default Parameters in JavaScript

## 🌟 What are Default Parameters?

**Default parameters** give a function a value when no value is provided.

---

## 🤔 Why Do We Use Them?

- To avoid `undefined`
- To give a default value
- To make functions easier to use

---

# 📚 Concepts Covered

## 1. Basic Default Parameter

**Definition:** A parameter can have a default value.

    function greet(name = "Guest") {
        console.log(`Hello ${name}`);
    }

    greet();

**Output:**

    Hello Guest

---

## 2. Passing a Value

**Definition:** A given value replaces the default value.

    function greet(name = "Guest") {
        console.log(`Hello ${name}`);
    }

    greet("Riya");

**Output:**

    Hello Riya

---

## 3. Multiple Default Parameters

**Definition:** More than one parameter can have default values.

    function add(a = 10, b = 20) {
        console.log(a + b);
    }

    add();

**Output:**

    30

---

## 4. One Default Parameter

**Definition:** Only the parameter that needs a default value can have one.

    function greet(name, message = "Hello") {
        console.log(message + " " + name);
    }

    greet("Riya");

**Output:**

    Hello Riya

---

## 5. Default Parameter with Calculation

**Definition:** A default value can be a calculation.

    function add(a = 10, b = 5) {
        console.log(a + b);
    }

    add();

**Output:**

    15

---

## 6. Default Parameter with Function

**Definition:** A default value can come from a function.

    function getName() {
        return "Guest";
    }

    function greet(name = getName()) {
        console.log(`Hello ${name}`);
    }

    greet();

**Output:**

    Hello Guest

---

## 7. Default Parameter with Expression

**Definition:** An expression can be used as a default value.

    function multiply(a = 5, b = 2 + 3) {
        console.log(a * b);
    }

    multiply();

**Output:**

    25

---

## 8. Default Parameter with `undefined`

**Definition:** Passing `undefined` uses the default value.

    function greet(name = "Guest") {
        console.log(name);
    }

    greet(undefined);

**Output:**

    Guest

---

## 9. Passing `null`

**Definition:** Passing `null` does not use the default value.

    function greet(name = "Guest") {
        console.log(name);
    }

    greet(null);

**Output:**

    null

---

## 10. Default Parameter with Arrow Function

**Definition:** Arrow functions can also have default parameters.

    const greet = (name = "Guest") => {
        console.log(`Hello ${name}`);
    };

    greet();

**Output:**

    Hello Guest

---

## 11. Default Parameter with Multiple Values

**Definition:** Default parameters can be used with several values.

    function student(name = "Riya", age = 20) {
        console.log(name);
        console.log(age);
    }

    student();

**Output:**

    Riya
    20

---

## 12. Default Parameter with Object

**Definition:** An object can be used as a default value.

    function showStudent(student = { name: "Guest" }) {
        console.log(student.name);
    }

    showStudent();

**Output:**

    Guest

---

## 13. Default Parameter with Array

**Definition:** An array can be used as a default value.

    function showNumbers(numbers = [10, 20]) {
        console.log(numbers);
    }

    showNumbers();

**Output:**

    [10, 20]

---

## 14. Default Parameter with Destructuring

**Definition:** Default values can be used with destructuring.

    function showStudent({ name = "Guest" } = {}) {
        console.log(name);
    }

    showStudent();

**Output:**

    Guest

---

## 15. Default Parameter vs `undefined`

**Definition:** A default parameter is used when the argument is `undefined` or missing.

    function greet(name = "Guest") {
        console.log(name);
    }

    greet();
    greet(undefined);
    greet("Riya");

**Output:**

    Guest
    Guest
    Riya

---

# ⭐ Quick Revision

- **Default Parameter** → Gives a value when no value is given.
- **Given Value** → Replaces the default value.
- **`undefined`** → Uses the default value.
- **`null`** → Does not use the default value.
- **Arrow Function** → Can also use default parameters.

---

# 🎯 Key Takeaways

- Default parameters use `=`.
- They give a value when an argument is missing.
- We can have multiple default parameters.
- `undefined` uses the default value.
- `null` does not use the default value.
- Default parameters work with normal and arrow functions.

---

# 🎤 Interview Questions

1. What are default parameters?
2. Why do we use default parameters?
3. How do you create a default parameter?
4. What happens when no argument is passed?
5. What happens when `undefined` is passed?
6. What happens when `null` is passed?
7. Can we have multiple default parameters?
8. Can arrow functions use default parameters?
9. Can a function be used as a default value?
10. What is the difference between `undefined` and `null` with default parameters?
