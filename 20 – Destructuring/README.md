# 📘 Destructuring in JavaScript

## 🌟 What is Destructuring?

**Destructuring** is a simple way to take values from arrays and objects.

---

## 🤔 Why Do We Use It?

- To get values easily
- To write less code
- To make code cleaner

---

# 📚 Concepts Covered

## 1. Array Destructuring

**Definition:** Taking values from an array into variables.

    let fruits = ["Apple", "Mango"];

    let [first, second] = fruits;

    console.log(first);
    console.log(second);

**Output:**

    Apple
    Mango

---

## 2. Object Destructuring

**Definition:** Taking values from an object into variables.

    let student = {
        name: "Riya",
        age: 20
    };

    let { name, age } = student;

    console.log(name);
    console.log(age);

**Output:**

    Riya
    20

---

## 3. Different Variable Name

**Definition:** We can give a new name to an object value.

    let student = {
        name: "Riya"
    };

    let { name: studentName } = student;

    console.log(studentName);

**Output:**

    Riya

---

## 4. Skipping Array Values

**Definition:** We can skip values we don't need.

    let numbers = [10, 20, 30];

    let [first, , third] = numbers;

    console.log(first);
    console.log(third);

**Output:**

    10
    30

---

## 5. Default Values

**Definition:** We can give a value when the original value is missing.

    let numbers = [10];

    let [first, second = 20] = numbers;

    console.log(first);
    console.log(second);

**Output:**

    10
    20

---

## 6. Rest with Array

**Definition:** `...` collects the remaining values.

    let numbers = [10, 20, 30, 40];

    let [first, ...rest] = numbers;

    console.log(first);
    console.log(rest);

**Output:**

    10
    [20, 30, 40]

---

## 7. Rest with Object

**Definition:** `...` collects the remaining object properties.

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

## 8. Nested Object Destructuring

**Definition:** We can get values from an object inside another object.

    let student = {
        name: "Riya",
        address: {
            city: "Bangalore"
        }
    };

    let { address: { city } } = student;

    console.log(city);

**Output:**

    Bangalore

---

## 9. Nested Array Destructuring

**Definition:** We can get values from an array inside another array.

    let numbers = [10, [20, 30]];

    let [first, [second, third]] = numbers;

    console.log(first);
    console.log(second);
    console.log(third);

**Output:**

    10
    20
    30

---

## 10. Destructuring in Function Parameters

**Definition:** We can take object values directly in a function.

    function showStudent({ name, age }) {
        console.log(name);
        console.log(age);
    }

    showStudent({
        name: "Riya",
        age: 20
    });

**Output:**

    Riya
    20

---

## 11. Array Destructuring in Function

**Definition:** We can take array values directly in a function.

    function add([a, b]) {
        console.log(a + b);
    }

    add([10, 5]);

**Output:**

    15

---

## 12. Swapping Variables

**Definition:** Destructuring can easily exchange two values.

    let a = 10;
    let b = 20;

    [a, b] = [b, a];

    console.log(a);
    console.log(b);

**Output:**

    20
    10

---

## 13. Destructuring with `const`

**Definition:** We can use `const` with destructuring.

    const [a, b] = [10, 20];

    console.log(a);
    console.log(b);

**Output:**

    10
    20

---

## 14. Destructuring with `let`

**Definition:** We can use `let` with destructuring.

    let [a, b] = [10, 20];

    a = 30;

    console.log(a);
    console.log(b);

**Output:**

    30
    20

---

## 15. Destructuring Function Return

**Definition:** We can take values from an array returned by a function.

    function getNumbers() {
        return [10, 20];
    }

    let [a, b] = getNumbers();

    console.log(a);
    console.log(b);

**Output:**

    10
    20

---

# ⭐ Quick Revision

- **Destructuring** → Taking values easily.
- **Array** → Uses `[]`.
- **Object** → Uses `{}`.
- **Skipping** → Leave an empty space.
- **Default** → Used when a value is missing.
- **Rest `...`** → Gets remaining values.
- **Nested** → Gets values from inside another array/object.
- **Swapping** → Exchanges two values.

---

# 🎯 Key Takeaways

- Destructuring makes code shorter.
- Use `[]` for arrays.
- Use `{}` for objects.
- We can skip values.
- We can set default values.
- `...` collects remaining values.
- Destructuring can be used with functions.

---

# 🎤 Interview Questions

1. What is destructuring?
2. What is array destructuring?
3. What is object destructuring?
4. How do you skip an array value?
5. What is a default value?
6. What does `...` do?
7. Can we destructure nested objects?
8. Can we destructure nested arrays?
9. Can destructuring be used in functions?
10. How can destructuring swap two values?
