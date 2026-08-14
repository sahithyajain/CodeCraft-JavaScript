# 📘 Variables in JavaScript

## 🌟 What is a Variable?

A variable is a **used to store a value**.

Think of it like a box 📦 with a name.

```javascript
let age = 22;
```

Here:

- `let` → keyword used to create the variable
- `age` → variable name
- `22` → value stored in the variable

---

## 🤔 Why Do We Use Variables?

Variables are used to:

- Store information
- Use values again
- Change values when needed
- Make programs easier to understand

Example:

```javascript
let age = 22;

console.log(age);
```

Output:

```text
22
```

---

# 📚 `var`, `let` and `const`

JavaScript provides three keywords to declare variables:

### `var`

`var` is the older way of declaring variables.

```javascript
var city = "Bangalore";
```

In modern JavaScript, we generally prefer `let` and `const`.

---

### `let`

Use `let` when the value **can change**.

```javascript
let age = 22;

age = 23;
```

Here, the value of `age` changes from `22` to `23`.

---

### `const`

Use `const` when the value **should not be reassigned**.

```javascript
const country = "India";
```

This is not allowed:

```javascript
country = "USA";
```

---

## 📊 Simple Difference

| Keyword | Can value change? | Usage |
|---|---|---|
| `var` | ✅ Yes | Older JavaScript |
| `let` | ✅ Yes | Value can change |
| `const` | ❌ No | Value should not be reassigned |

### ⭐ Easy Rule

```text
const → value does not need to change
let   → value can change
var   → older way
```

---

# 📝 Rules for Naming Variables

### ✅ Correct Way

A JavaScript variable name:

- Can start with a **letter**, `_`, or `$`.
- Can contain **letters, numbers, `_`, and `$`**.
- Cannot contain spaces.
- Cannot use JavaScript reserved keywords.
- Is **case-sensitive**.
- Should have a meaningful name.

```javascript
let name;
let firstName;
let userAge;
let student1;
let _name;
let $price;
```

---

### ❌ Wrong Ways

**1. Cannot start with a number**

```javascript
let 123name;
```

**2. Cannot contain spaces**

```javascript
let user name;
```

**3. Cannot use `-`**

```javascript
let first-name;
```

Use:

```javascript
let firstName;
```

**4. Cannot use reserved keywords**

```javascript
let var;
let let;
let const;
```

**5. Avoid unclear names**

```javascript
let x = "Sahithya";
```

Better:

```javascript
let firstName = "Sahithya";
```

---

# 🎤 Interview Questions

1. What is a variable?   
2. Why do we use variables?
3. What is the difference between `let` and `const`?
4. What is `var`?
5. Which is preferred in modern JavaScript?
6. What are the rules for naming variables?

   

---

# ⭐ Key Takeaways

- A variable stores a value.
- `let` is used when the value can change.
- `const` is used when the value should not be reassigned.
- `var` is the older way of declaring variables.
- Variable names cannot start with a number.
- Variable names cannot contain spaces or `-`.
- Variable names are case-sensitive.
- Reserved keywords are special words already used by JavaScript and cannot be used as variable names.
- Examples: `let`, `const`, `var`, `if`, `else`, `for`, `function`, `class`, `return`, `new`.





   //-------------------------
// 1. VAR - Program 1
//-------------------------

var city = "Bangalore";
console.log(city);

// Output:Bangalore

// How it works:  var creates a variable called city and stores "Bangalore" in it.


// --------------------------
// 2. VAR - Program 2
// ----------------------------

var number = 10;
number = 20;
console.log(number);

// Output: 20

// How it works: var allows the value of a variable to be changed.


//----------------------
// Error Program
//------------------------

var name = "Sahithya";
var name = "Hitha";
console.log(name);

// Output: Hitha

// Important: var allows the same variable to be declared again.





// -----------------------------
// 3. LET - Program 1
//---------------------------------

let age = 22;
console.log(age);

// Output: 22

// How it works: let creates a variable called age and stores 22 in it.


// ----------------------------
// 4. LET - Program 2
//-----------------------------

let score = 50;
score = 80;
console.log(score);

// Output: 80

// How it works: let allows us to change the value stored in the variable.


//-----------------------
// Error Program
//-----------------------

let age = 22;
let age = 23;
console.log(age);

// Error: SyntaxError: Identifier 'age' has already been declared

// let cannot be declared again in the same scope.





// --------------------------------
// 5. CONST - Program 1
// ----------------------------------

const country = "India";
console.log(country);

// Output: India

// How it works:  const creates a variable whose value cannot be reassigned.


// ---------------------------------
// 6. CONST - Program 2
// ---------------------------------

const language = "JavaScript";
console.log(language);

// Output: JavaScript

// How it works: const stores a value that should not be reassigned.


//--------------------------
//error
//----------------------------

const country = "India";
country = "USA";
console.log(country);

// Error: TypeError: Assignment to constant variable.

// const does not allow its value to be reassigned.
