# 📘 Optional Chaining in JavaScript

## 🌟 What is Optional Chaining?

**Optional chaining (`?.`) lets us safely access a value without getting an error when something is missing.**

---

## 🤔 Why Do We Use It?

- To safely access object properties
- To avoid errors when data is missing
- To work easily with nested objects
- To handle `null` and `undefined`

---

# 📚 Concepts Covered

## 1. Basic Optional Chaining

**Definition:** `?.` safely checks whether a property exists before accessing it.

    const student = {
        name: "Riya"
    };

    console.log(student?.name);

**Output:**

    Riya

---

## 2. Missing Property

**Definition:** Optional chaining returns `undefined` when a property is missing.

    const student = {
        name: "Riya"
    };

    console.log(student?.age);

**Output:**

    undefined

---

## 3. Without Optional Chaining

**Definition:** Accessing a property of `undefined` or `null` can cause an error.

    const student = undefined;

    console.log(student.name);

**Output:**

    TypeError

---

## 4. With Optional Chaining

**Definition:** Optional chaining prevents the error when the value is `undefined` or `null`.

    const student = undefined;

    console.log(student?.name);

**Output:**

    undefined

---

## 5. Nested Objects

**Definition:** `?.` can safely access properties inside nested objects.

    const student = {
        address: {
            city: "Bangalore"
        }
    };

    console.log(student?.address?.city);

**Output:**

    Bangalore

---

## 6. Missing Nested Property

**Definition:** Optional chaining safely handles a missing nested property.

    const student = {
        address: {}
    };

    console.log(student?.address?.city);

**Output:**

    undefined

---

## 7. Optional Chaining with Arrays

**Definition:** `?.` can safely access an array element.

    const fruits = ["Apple", "Mango"];

    console.log(fruits?.[0]);

**Output:**

    Apple

---

## 8. Missing Array Element

**Definition:** Optional chaining returns `undefined` when the array element does not exist.

    const fruits = ["Apple", "Mango"];

    console.log(fruits?.[5]);

**Output:**

    undefined

---

## 9. Optional Chaining with Functions

**Definition:** `?.()` safely calls a function only when it exists.

    const student = {
        greet() {
            return "Hello";
        }
    };

    console.log(student.greet?.());

**Output:**

    Hello

---

## 10. Missing Function

**Definition:** `?.()` avoids an error when the function does not exist.

    const student = {};

    console.log(student.greet?.());

**Output:**

    undefined

---

## 11. Optional Chaining with `null`

**Definition:** Optional chaining safely handles `null` values.

    const student = null;

    console.log(student?.name);

**Output:**

    undefined

---

## 12. Optional Chaining with `undefined`

**Definition:** Optional chaining safely handles `undefined` values.

    let student;

    console.log(student?.name);

**Output:**

    undefined

---

## 13. Multiple Optional Chains

**Definition:** We can use `?.` more than once to safely access deeply nested data.

    const student = {
        details: {
            address: {
                city: "Mysore"
            }
        }
    };

    console.log(student?.details?.address?.city);

**Output:**

    Mysore

---

## 14. Optional Chaining with Method

**Definition:** `?.` can safely access a method that may not exist.

    const user = {
        getName() {
            return "Riya";
        }
    };

    console.log(user.getName?.());

**Output:**

    Riya

---

## 15. Optional Chaining vs Normal Access

**Definition:** Optional chaining is safer when a value may be missing.

    const user = undefined;

    console.log(user?.name);

**Output:**

    undefined

---

# ⭐ Quick Revision

- `?.` → Optional chaining operator
- Safely accesses properties
- Returns `undefined` when the value is missing
- Works with objects
- Works with nested objects
- Works with arrays
- Works with functions using `?.()`
- Handles `null` and `undefined`

---

# 🎯 Key Takeaways

- Optional chaining uses `?.`.
- It prevents errors when a value is `null` or `undefined`.
- It is useful for nested objects.
- It can be used with arrays.
- It can safely call functions using `?.()`.
- The result is usually `undefined` when something is missing.

---

# 🎤 Interview Questions

1. What is optional chaining?
2. What symbol is used for optional chaining?
3. Why do we use `?.`?
4. What happens when a property does not exist?
5. How does optional chaining handle `null`?
6. How does optional chaining handle `undefined`?
7. Can we use optional chaining with nested objects?
8. Can we use optional chaining with arrays?
9. What is `?.()` used for?
10. What is the difference between `.` and `?.`?
