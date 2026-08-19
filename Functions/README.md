# 🔧 Functions in JavaScript

## 🌟 What is a Function?

A function is a **reusable block of code that performs a specific task**.

For example, instead of writing the same code many times, we can put it inside a function and use it whenever we need it.

---

## 🤔 Why Do We Use Functions?

Functions help us to:

- Reuse code
- Avoid writing the same code again
- Make programs easier to understand
- Make code easier to maintain
- Break a large program into smaller tasks

---

## 1. Function Declaration

A function declaration is used to **create a function**.

```javascript
function greet() {
    console.log("Hello!");
}
```

Here, `greet` is the **function name**.

The code inside `{ }` runs when we call the function.

---

## 2. Function Call

A function call is used to **run a function**.

```javascript
function greet() {
    console.log("Hello!");
}

greet();
```

Output:

```text
Hello!
```

`greet()` tells JavaScript to **run the function**.

---

## 3. Parameters

A parameter is a **value received by a function**.

```javascript
function greet(name) {
    console.log("Hello " + name);
}
```

Here, `name` is a **parameter**.

---

## 4. Arguments

An argument is a **value passed to a function when calling it**.

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Sahithya");
```

Output:

```text
Hello Sahithya
```

Here, `"Sahithya"` is the **argument**.

### ⭐ Parameter vs Argument

> **Parameter → Value received by the function**
>
> **Argument → Value passed to the function**

---

## 5. Multiple Parameters

A function can have **more than one parameter**.

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 5);
```

Output:

```text
15
```

Here:

```text
a → 10
b → 5
```

---

## 6. Return

`return` is used to **send a value back from a function**.

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 5);

console.log(result);
```

Output:

```text
15
```

### Without `return`

If a function does not return a value, the result is usually:

```text
undefined
```

---

## 7. Arrow Function

An arrow function is a **shorter way to write a function**.

Normal function:

```javascript
function add(a, b) {
    return a + b;
}
```

Arrow function:

```javascript
const add = (a, b) => {
    return a + b;
};
```

Both functions perform the same task.

---

## 8. Function with No Parameter

A function does not always need parameters.

```javascript
function welcome() {
    console.log("Welcome!");
}

welcome();
```

Output:

```text
Welcome!
```

---

## 9. Function with a Return Value

A function can calculate something and **return the result**.

```javascript
function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 2);

console.log(result);
```

Output:

```text
10
```

---

## ⚠️ Common Mistakes

### Forgetting to Call the Function

```javascript
function greet() {
    console.log("Hello!");
}
```

Nothing is printed because the function was created but **not called**.

Correct:

```javascript
greet();
```

---

### Forgetting `return`

```javascript
function add(a, b) {
    a + b;
}

console.log(add(10, 5));
```

Output:

```text
undefined
```

Correct:

```javascript
function add(a, b) {
    return a + b;
}
```

---

## ⭐ Remember

**Function → Reusable block of code**

**Declaration → Creates a function**

**Call → Runs the function**

**Parameter → Value received**

**Argument → Value passed**

**Return → Sends a value back**

**Arrow Function → Shorter function syntax**

---

## 🎤 Interview Questions

1. What is a function?
2. Why do we use functions?
3. What is a function declaration?
4. What is a function call?
5. What is a parameter?
6. What is an argument?
7. What is the difference between a parameter and an argument?
8. What does `return` do?
9. What happens if a function does not return a value?
10. What is an arrow function?
11. What is the difference between a normal function and an arrow function?
