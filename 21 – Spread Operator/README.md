# 📘 Spread Operator in JavaScript

## 🌟 What is the Spread Operator?

The **Spread Operator (`...`)** is used to spread or copy values.

---

## 🤔 Why Do We Use It?

- To copy arrays
- To join arrays
- To copy objects
- To add new values easily

---

# 📚 Concepts Covered

## 1. Spread with Array

**Definition:** `...` spreads all values of an array.

    let numbers = [10, 20, 30];

    console.log(...numbers);

**Output:**

    10 20 30

---

## 2. Copy an Array

**Definition:** Spread can create a copy of an array.

    let numbers = [10, 20, 30];

    let copy = [...numbers];

    console.log(copy);

**Output:**

    [10, 20, 30]

---

## 3. Join Two Arrays

**Definition:** Spread can combine two arrays.

    let a = [10, 20];
    let b = [30, 40];

    let result = [...a, ...b];

    console.log(result);

**Output:**

    [10, 20, 30, 40]

---

## 4. Add Values to an Array

**Definition:** Spread lets us add values while copying an array.

    let numbers = [20, 30];

    let result = [10, ...numbers, 40];

    console.log(result);

**Output:**

    [10, 20, 30, 40]

---

## 5. Spread with Strings

**Definition:** Spread can separate a string into characters.

    let word = "Hello";

    console.log([...word]);

**Output:**

    ["H", "e", "l", "l", "o"]

---

## 6. Spread with Object

**Definition:** Spread can copy object properties.

    let student = {
        name: "Riya",
        age: 20
    };

    let copy = { ...student };

    console.log(copy);

**Output:**

    { name: "Riya", age: 20 }

---

## 7. Join Two Objects

**Definition:** Spread can combine two objects.

    let student = {
        name: "Riya"
    };

    let details = {
        age: 20
    };

    let result = {
        ...student,
        ...details
    };

    console.log(result);

**Output:**

    { name: "Riya", age: 20 }

---

## 8. Add Properties to an Object

**Definition:** Spread lets us add new properties to an object.

    let student = {
        name: "Riya"
    };

    let result = {
        ...student,
        age: 20
    };

    console.log(result);

**Output:**

    { name: "Riya", age: 20 }

---

## 9. Update an Object Property

**Definition:** We can change a property while copying an object.

    let student = {
        name: "Riya",
        age: 20
    };

    let updated = {
        ...student,
        age: 21
    };

    console.log(updated);

**Output:**

    { name: "Riya", age: 21 }

---

## 10. Spread in Function Arguments

**Definition:** Spread can pass array values as function arguments.

    function add(a, b, c) {
        return a + b + c;
    }

    let numbers = [10, 20, 30];

    console.log(add(...numbers));

**Output:**

    60

---

## 11. Find Largest Number

**Definition:** Spread can pass array values to `Math.max()`.

    let numbers = [10, 50, 20];

    console.log(Math.max(...numbers));

**Output:**

    50

---

## 12. Copy and Change an Array

**Definition:** Spread can copy an array and then change the copy.

    let numbers = [10, 20];

    let copy = [...numbers];

    copy.push(30);

    console.log(copy);

**Output:**

    [10, 20, 30]

---

## 13. Spread with `Set`

**Definition:** Spread can convert a `Set` into an array.

    let numbers = new Set([10, 20, 30]);

    let result = [...numbers];

    console.log(result);

**Output:**

    [10, 20, 30]

---

## 14. Spread with Function

**Definition:** Spread can pass all array values to a function.

    function show(a, b) {
        console.log(a);
        console.log(b);
    }

    let numbers = [10, 20];

    show(...numbers);

**Output:**

    10
    20

---

## 15. Spread vs Rest

**Definition:** Spread spreads values, while Rest collects values.

    // Spread
    let numbers = [10, 20, 30];
    let copy = [...numbers];

    // Rest
    function show(...values) {
        console.log(values);
    }

    show(10, 20, 30);

**Output:**

    [10, 20, 30]

---

# ⭐ Quick Revision

- **Spread `...`** → Spreads values.
- **Array Copy** → `[...array]`
- **Join Arrays** → `[...a, ...b]`
- **Object Copy** → `{...object}`
- **Join Objects** → `{...a, ...b}`
- **Add Values** → Add values while spreading.
- **Function Arguments** → Pass array values using `...`.
- **Rest** → Collects values.

---

# 🎯 Key Takeaways

- Spread uses `...`.
- It spreads values.
- It can copy arrays and objects.
- It can join arrays and objects.
- It can add new values.
- It can pass array values to functions.
- Spread and Rest both use `...`, but they work differently.

---

# 🎤 Interview Questions

1. What is the Spread Operator?
2. What does `...` do?
3. How do you copy an array using spread?
4. How do you join two arrays?
5. How do you copy an object?
6. How do you join two objects?
7. Can spread be used with strings?
8. How is spread used in function arguments?
9. What is the difference between Spread and Rest?
10. Can spread be used to update an object?
