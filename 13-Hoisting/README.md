# 🚀 Hoisting in JavaScript

## 🌟 What is Hoisting?

**Hoisting** means JavaScript **processes variable and function declarations before executing the code**.

In simple words:

> Before JavaScript starts running your code, it first notices the variables and functions that are declared in the code.

> Hoisting does **not** mean JavaScript physically moves the code to the top. It means JavaScript prepares the declarations before executing the code.

---

## ⭐ Why do we learn `var`, `let`, and `const` in Hoisting?

We learn `var`, `let`, and `const` because all three are used to create variables, but JavaScript handles them differently during hoisting.

- `var` → Can be accessed before its declaration and gives `undefined`.
- `let` → Cannot be accessed before its declaration and gives a `ReferenceError`.
- `const` → Cannot be accessed before its declaration and gives a `ReferenceError`.

So, learning `var`, `let`, and `const` helps us understand **how hoisting works differently for each one**.

---

## 1. `var` Hoisting

`var` is hoisted and is initially given the value `undefined`.

```javascript
var age = 22;

console.log(age);
```

### Output

```text
22
```

### Explanation

We create `age` and give it the value `22`.

Then we print `age`, so JavaScript prints `22`.

### ❌ Error Program

```javascript
console.log(age);

var age = 22;
```

### Output

```text
undefined
```

### Explanation

Before JavaScript starts running the code, it notices the `var age` declaration.

It prepares the variable, but the value `22` is given later.

So when `console.log(age)` runs, `age` is `undefined`.

### ✅ Correct Version

```javascript
var age = 22;

console.log(age);
```

### Output

```text
22
```

### Explanation

Here, `age` gets its value before we use it.

So JavaScript prints `22`.

---

## 2. `let` Hoisting

`let` is also processed before the code runs, but we **cannot use it before its declaration**.

```javascript
let name = "Sahithya";

console.log(name);
```

### Output

```text
Sahithya
```

### Explanation

We declare `name`, give it a value, and then print it.

### ❌ Error Program

```javascript
console.log(name);

let name = "Sahithya";
```

### Error Output

```text
ReferenceError: Cannot access 'name' before initialization
```

### Explanation

JavaScript notices the `let name` declaration.

But we try to use `name` before reaching that declaration.

So JavaScript gives a `ReferenceError`.

### ✅ Correct Version

```javascript
let name = "Sahithya";

console.log(name);
```

### Output

```text
Sahithya
```

### Explanation

We declare and initialize `name` before using it.

So the program works correctly.

---

## 3. `const` Hoisting

`const` behaves similarly to `let` during hoisting.

We cannot use a `const` variable before its declaration.

```javascript
const country = "India";

console.log(country);
```

### Output

```text
India
```

### Explanation

We create `country`, give it the value `"India"`, and then print it.

### ❌ Error Program

```javascript
console.log(country);

const country = "India";
```

### Error Output

```text
ReferenceError: Cannot access 'country' before initialization
```

### Explanation

JavaScript notices the `const country` declaration.

But we try to use `country` before reaching that declaration.

So JavaScript gives a `ReferenceError`.

### ✅ Correct Version

```javascript
const country = "India";

console.log(country);
```

### Output

```text
India
```

### Explanation

We give `country` its value first and then use it.

---

## 4. Function Declaration Hoisting

Normal function declarations are hoisted.

This means we can call the function before its declaration.

```javascript
greet();

function greet() {
    console.log("Hello!");
}
```

### Output

```text
Hello!
```

### Explanation

Before JavaScript starts running the code, it notices the `greet` function.

So when `greet()` is called, JavaScript already knows the function.

### ❌ Error Program

```javascript
greet();

let greet = function () {
    console.log("Hello!");
};
```

### Error Output

```text
ReferenceError: Cannot access 'greet' before initialization
```

### Explanation

Here, `greet` is stored in a `let` variable.

We try to use it before reaching its declaration.

So JavaScript gives a `ReferenceError`.

### ✅ Correct Version

```javascript
let greet = function () {
    console.log("Hello!");
};

greet();
```

### Output

```text
Hello!
```

### Explanation

First, the function is assigned to `greet`.

Then we call `greet()`, so JavaScript can run the function.

---

## 5. Function Expression with `var`

A function stored inside a `var` variable behaves differently from a normal function declaration.

```javascript
var welcome = function () {
    console.log("Welcome!");
};

welcome();
```

### Output

```text
Welcome!
```

### Explanation

We store the function inside `welcome`.

Then we call `welcome()`, so the function runs.

### ❌ Error Program

```javascript
welcome();

var welcome = function () {
    console.log("Welcome!");
};
```

### Error Output

```text
TypeError: welcome is not a function
```

### Explanation

Before JavaScript starts running the code, it notices `var welcome`.

It prepares the variable, but the function is assigned only later.

When `welcome()` runs, `welcome` is still `undefined`.

So JavaScript cannot call it as a function.

### ✅ Correct Version

```javascript
var welcome = function () {
    console.log("Welcome!");
};

welcome();
```

### Output

```text
Welcome!
```

### Explanation

The function is assigned to `welcome` first.

Then we call `welcome()`, so it works correctly.

---

## 6. Temporal Dead Zone (TDZ)

**TDZ** stands for **Temporal Dead Zone**.

In simple words:

> TDZ is the time between entering a scope and reaching the declaration of a `let` or `const` variable.

During this time, we cannot use the variable.

```javascript
let marks = 90;

console.log(marks);
```

### Output

```text
90
```

### Explanation

We declare `marks` and give it the value `90`.

Then we use `marks`, so JavaScript prints `90`.

### ❌ Error Program

```javascript
console.log(marks);

let marks = 90;
```

### Error Output

```text
ReferenceError: Cannot access 'marks' before initialization
```

### Explanation

We try to use `marks` before reaching the `let marks` declaration.

This period is called the **Temporal Dead Zone**.

### ✅ Correct Version

```javascript
let marks = 90;

console.log(marks);
```

### Output

```text
90
```

### Explanation

We declare and give `marks` a value before using it.

So the error does not occur.

---

## ⭐ `var` vs `let` vs `const` in Hoisting

| Keyword | Hoisted? | Can be used before declaration? | Result |
|---|---|---|---|
| `var` | Yes | Yes | `undefined` |
| `let` | Yes | No | `ReferenceError` |
| `const` | Yes | No | `ReferenceError` |

---

## ⭐ Function Declaration vs Function Expression

### Function Declaration

```javascript
function greet() {
    console.log("Hello!");
}

greet();
```

A normal function declaration is hoisted, so it can be called before its declaration.

### Function Expression

```javascript
var greet = function () {
    console.log("Hello!");
};

greet();
```

The function must be assigned to the variable before we call it.

---

## ⭐ Remember

**Hoisting → JavaScript processes declarations before executing the code.**

**`var` → Hoisted and initialized with `undefined`.**

**`let` → Hoisted but cannot be used before initialization.**

**`const` → Hoisted but cannot be used before initialization.**

**Function Declaration → Can be called before its declaration.**

**Function Expression → The function must be assigned before calling it.**

**TDZ → The time when `let` and `const` cannot be accessed before their declaration.**

---

## 🎤 Interview Questions

1. What is hoisting?
2. What does hoisting mean in simple words?
3. Why do we learn `var`, `let`, and `const` in hoisting?
4. What happens when we use `var` before its declaration?
5. What happens when we use `let` before its declaration?
6. What happens when we use `const` before its declaration?
7. What is the Temporal Dead Zone?
8. Can a function declaration be called before its declaration?
9. What is the difference between a function declaration and a function expression?
10. How do `var`, `let`, and `const` behave differently during hoisting?
