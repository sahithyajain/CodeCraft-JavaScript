# 🔐 Scope in JavaScript

## 🌟 What is Scope?

Scope tells us **where a variable can be used in our code**.

---

## 1. Global Scope

A variable declared outside a function or block has **global scope**.

```javascript
let name = "Sahithya";

function greet() {
    console.log(name);
}

greet();
```

Output:

```text
Sahithya
```

**How it works:** Since `name` is declared outside the function, it can be used inside the function.

---

## 2. Function Scope

A variable declared inside a function can be used **only inside that function**.

```javascript
function greet() {
    let message = "Hello!";
    console.log(message);
}

greet();
```

Output:

```text
Hello!
```

**How it works:** `message` belongs to the `greet()` function, so it cannot be used outside the function.

---

## 3. Block Scope

A variable declared with `let` or `const` inside `{ }` can be used **only inside that block**.

```javascript
if (true) {
    let age = 22;
    const city = "Bangalore";

    console.log(age);
    console.log(city);
}
```

Output:

```text
22
Bangalore
```

**How it works:** `age` and `city` are inside the `if` block, so they cannot be used outside it.

---

## 4. Local Scope

A variable created inside a function or block is called a **local variable**.

```javascript
function greet() {
    let message = "Hello!";
    console.log(message);
}

greet();
```

Output:

```text
Hello!
```

**How it works:** `message` is available only in the local area where it was created.

---

## ⭐ `var`, `let`, and `const` in Scope

`var`, `let`, and `const` have different scope behavior.

```text
var   → Function Scope
let   → Block Scope
const → Block Scope
```

### Example

```javascript
function test() {

    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }

    console.log(a);
}
```

Output:

```text
10
```

`a` can be accessed outside the `if` block because `var` is **function-scoped**.

But `b` and `c` cannot be accessed outside the block because `let` and `const` are **block-scoped**.

### ⭐ Easy Way to Remember

> **`var` can escape a block, but `let` and `const` cannot.**

---

## ⭐ `var` vs `let` vs `const`

| Keyword | Scope | Can be changed? | Modern JavaScript |
|---|---|---|---|
| `var` | Function Scope | Yes | Older |
| `let` | Block Scope | Yes | Yes |
| `const` | Block Scope | No reassignment | Yes |

### Example

```javascript
var age = 20;
age = 21;

let marks = 80;
marks = 90;

const name = "Sahithya";
```

Here:

- `var` can be changed.
- `let` can be changed.
- `const` cannot be reassigned.

**Remember:** `var` is the older way of declaring variables, while `let` and `const` are the modern way.

---

## ⚠️ Common Error

Trying to use a variable outside its scope causes an error.

```javascript
function test() {
    let message = "Hello!";
}

console.log(message);
```

Output:

```text
ReferenceError: message is not defined
```

**How it works:** `message` was created inside `test()`, so it cannot be used outside the function.

---

## ⭐ Remember

**Scope → Where a variable can be used**

**Global Scope → Can be used throughout the program**

**Function Scope → Can be used inside a function**

**Block Scope → Can be used inside `{ }`**

**Local Scope → Can be used only in its local area**

**`var` → Function-scoped and older**

**`let` → Block-scoped and can be changed**

**`const` → Block-scoped and cannot be reassigned**

---

## 🎤 Interview Questions

1. What is scope?
2. What is global scope?
3. What is function scope?
4. What is block scope?
5. What is local scope?
6. What is the difference between `var`, `let`, and `const`?
7. What is the difference between function scope and block scope?
8. Why are `let` and `const` block-scoped?
9. Is `var` block-scoped?
10. Which is preferred in modern JavaScript: `var`, `let`, or `const`?
