# 📘 Rest Operator in JavaScript

## 🌟 What is the Rest Operator?

The **Rest Operator (`...`)** collects multiple values into one array.

---
 
## 🤔 Why Do We Use It?

- To collect many values
- To handle extra arguments
- To write flexible functions
- To collect remaining values

---

# 📚 Concepts Covered

## 1. Basic Rest Operator

**Definition:** `...` collects multiple values into an array.

    function show(...numbers) {
        console.log(numbers);
    }

    show(10, 20, 30);

**Output:**

    [10, 20, 30]

---

## 2. Rest with Two Values

**Definition:** Rest can collect two or more values.

    function show(...values) {
        console.log(values);
    }

    show(10, 20);

**Output:**

    [10, 20]

---

## 3. Rest with Many Values

**Definition:** Rest can collect any number of values.

    function show(...numbers) {
        console.log(numbers);
    }

    show(10, 20, 30, 40, 50);

**Output:**

    [10, 20, 30, 40, 50]

---

## 4. Normal Parameter with Rest

**Definition:** Normal parameters can come before the rest parameter.

    function show(first, ...others) {
        console.log(first);
        console.log(others);
    }

    show(10, 20, 30);

**Output:**

    10
    [20, 30]

---

## 5. Rest with Addition

**Definition:** Rest can collect numbers that we want to add.

    function add(...numbers) {
        let total = 0;

        for (let number of numbers) {
            total += number;
        }

        return total;
    }

    console.log(add(10, 20, 30));

**Output:**

    60

---

## 6. Rest with `reduce()`

**Definition:** Rest values can be used with `reduce()` to calculate a result.

    function add(...numbers) {
        return numbers.reduce((total, number) => total + number, 0);
    }

    console.log(add(10, 20, 30));

**Output:**

    60

---

## 7. Rest with Strings

**Definition:** Rest can collect string values into an array.

    function show(...names) {
        console.log(names);
    }

    show("Asha", "Riya", "Anu");

**Output:**

    ["Asha", "Riya", "Anu"]

---

## 8. Rest with Mixed Values

**Definition:** Rest can collect different types of values.

    function show(...values) {
        console.log(values);
    }

    show(10, "Hello", true);

**Output:**

    [10, "Hello", true]

---

## 9. Rest with Arrow Function

**Definition:** Arrow functions can also use the rest operator.

    const add = (...numbers) => {
        return numbers[0] + numbers[1];
    };

    console.log(add(10, 20));

**Output:**

    30

---

## 10. Rest in Array Destructuring

**Definition:** Rest can collect the remaining array values.

    let numbers = [10, 20, 30, 40];

    let [first, ...rest] = numbers;

    console.log(first);
    console.log(rest);

**Output:**

    10
    [20, 30, 40]

---

## 11. Rest in Object Destructuring

**Definition:** Rest can collect the remaining object properties.

    let student = {
        name: "Riya",
        age: 20,
        city: "Bangalore"
    };

    let { name, ...details } = student;

    console.log(name);
    console.log(details);

**Output:**

    Riya
    { age: 20, city: "Bangalore" }

---

## 12. Rest with First and Last Values

**Definition:** Rest can collect the values between selected values.

    let numbers = [10, 20, 30, 40];

    let [first, ...rest] = numbers;

    console.log(first);
    console.log(rest);

**Output:**

    10
    [20, 30, 40]

---

## 13. Rest Parameter Must Be Last

**Definition:** The rest parameter must always be the last parameter.

    function show(first, ...others) {
        console.log(first);
        console.log(others);
    }

    show(10, 20, 30);

**Output:**

    10
    [20, 30]

---

## 14. Rest vs Spread

**Definition:** Rest collects values, while Spread spreads values.

    // Rest
    function show(...values) {
        console.log(values);
    }

    show(10, 20, 30);

    // Spread
    let numbers = [10, 20, 30];

    console.log(...numbers);

**Output:**

    [10, 20, 30]
    10 20 30

---

## 15. Rest for Flexible Functions

**Definition:** Rest allows a function to accept any number of values.

    function show(...numbers) {
        console.log(numbers);
    }

    show(10);
    show(10, 20);
    show(10, 20, 30);

**Output:**

    [10]
    [10, 20]
    [10, 20, 30]

---

# ⭐ Quick Revision

- **Rest `...`** → Collects values.
- **Rest Parameter** → Collects function arguments.
- **Array Rest** → Collects remaining array values.
- **Object Rest** → Collects remaining properties.
- **Flexible Function** → Can accept many values.
- **Rest vs Spread** → Rest collects, Spread spreads.
- **Last Parameter** → Rest must be last.

---

# 🎯 Key Takeaways

- Rest uses `...`.
- It collects values into an array.
- It is commonly used in functions.
- It can collect remaining array or object values.
- A rest parameter must be last.
- Rest and Spread use the same `...` symbol but work differently.

---

# 🎤 Interview Questions

1. What is the Rest Operator?
2. What does `...` do in Rest?
3. Why do we use Rest?
4. Can Rest collect many values?
5. Can Rest be used in arrow functions?
6. Can Rest be used with arrays?
7. Can Rest be used with objects?
8. Where should the Rest parameter be placed?
9. What is the difference between Rest and Spread?
10. Why is Rest useful for flexible functions?
