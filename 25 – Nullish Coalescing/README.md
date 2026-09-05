# 📘 Nullish Coalescing in JavaScript

## 🌟 What is Nullish Coalescing?

**Nullish coalescing (`??`) gives a default value when the value is `null` or `undefined`.**

---

## 🤔 Why Do We Use It?

- To give a default value
- To handle `null`
- To handle `undefined`
- To avoid unwanted `undefined` values

---

# 📚 Concepts Covered

## 1. Basic Nullish Coalescing

**Definition:** `??` uses the value on the right when the value on the left is `null` or `undefined`.

    let name = null;

    console.log(name ?? "Guest");

**Output:**

    Guest

---

## 2. With `undefined`

**Definition:** `??` uses the default value when the left side is `undefined`.

    let name;

    console.log(name ?? "Guest");

**Output:**

    Guest

---

## 3. With a Normal Value

**Definition:** If the value is not `null` or `undefined`, `??` keeps that value.

    let name = "Riya";

    console.log(name ?? "Guest");

**Output:**

    Riya

---

## 4. With `null`

**Definition:** `null` makes `??` use the default value.

    let age = null;

    console.log(age ?? 18);

**Output:**

    18

---

## 5. With `undefined`

**Definition:** `undefined` makes `??` use the default value.

    let age;

    console.log(age ?? 18);

**Output:**

    18

---

## 6. With Zero

**Definition:** `??` does not replace `0` because `0` is a valid value.

    let score = 0;

    console.log(score ?? 50);

**Output:**

    0

---

## 7. With Empty String

**Definition:** `??` does not replace an empty string because it is not `null` or `undefined`.

    let name = "";

    console.log(name ?? "Guest");

**Output:**

    ""

---

## 8. With `false`

**Definition:** `??` keeps `false` because `false` is not `null` or `undefined`.

    let isStudent = false;

    console.log(isStudent ?? true);

**Output:**

    false

---

## 9. Multiple Values

**Definition:** `??` can be used to choose the first available value.

    let name = null;
    let username = undefined;

    console.log(name ?? username ?? "Guest");

**Output:**

    Guest

---

## 10. With Objects

**Definition:** `??` can provide a default object when the value is missing.

    let student = null;

    student = student ?? { name: "Guest" };

    console.log(student.name);

**Output:**

    Guest

---

## 11. With Arrays

**Definition:** `??` can provide a default array when the value is missing.

    let numbers = null;

    numbers = numbers ?? [10, 20, 30];

    console.log(numbers);

**Output:**

    [10, 20, 30]

---

## 12. With Function Return Value

**Definition:** `??` can provide a default value when a function returns `null` or `undefined`.

    function getName() {
        return null;
    }

    console.log(getName() ?? "Guest");

**Output:**

    Guest

---

## 13. Nullish Coalescing with Optional Chaining

**Definition:** `?.` safely accesses data and `??` provides a default value.

    const student = {};

    console.log(student?.name ?? "Guest");

**Output:**

    Guest

---

## 14. `??` vs `||`

**Definition:** `??` checks only `null` and `undefined`, while `||` also treats values like `0`, `""`, and `false` as false.

    let score = 0;

    console.log(score ?? 50);
    console.log(score || 50);

**Output:**

    0
    50

---

## 15. Choosing a Default Value

**Definition:** `??` is useful when we want a default only for missing values.

    let marks = 0;

    let result = marks ?? 35;

    console.log(result);

**Output:**

    0

---

# ⭐ Quick Revision

- `??` → Nullish coalescing operator
- `null` → Uses the default value
- `undefined` → Uses the default value
- `0` → Keeps `0`
- `""` → Keeps empty string
- `false` → Keeps `false`
- `??` checks only `null` and `undefined`
- `||` also treats other falsy values as false

---

# 🎯 Key Takeaways

- Use `??` when you need a default value.
- It works when the value is `null` or `undefined`.
- It does not replace `0`.
- It does not replace an empty string.
- It does not replace `false`.
- `??` is different from `||`.
- `??` can be combined with optional chaining.

---

# 🎤 Interview Questions

1. What is the nullish coalescing operator?
2. Which symbol is used for nullish coalescing?
3. When does `??` use the default value?
4. What happens when the value is `null`?
5. What happens when the value is `undefined`?
6. Does `??` replace `0`?
7. Does `??` replace an empty string?
8. Does `??` replace `false`?
9. What is the difference between `??` and `||`?
10. Can `??` be used with optional chaining?
