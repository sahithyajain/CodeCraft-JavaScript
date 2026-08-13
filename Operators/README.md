# ⚙️ Operators in JavaScript

## 🌟 What is an Operator?

An operator is a **symbol used to perform an operation on values**.

Example:

```javascript
let a = 10;
let b = 5;

console.log(a + b);
```

Output:

```text
15
```

---

## ➕ 1. Arithmetic Operators

Arithmetic operators are used to **perform calculations**.

```text
+  → Addition
-  → Subtraction
*  → Multiplication
/  → Division
%  → Remainder
```

Example:

```javascript
10 + 5
```

Output:

```text
15
```

---

## 📝 2. Assignment Operators

Assignment operators are used to **assign or change a value**.

```text
=   → Assigns a value
+=  → Adds and assigns
-=  → Subtracts and assigns
*=  → Multiplies and assigns
/=  → Divides and assigns
```

Example:

```javascript
let x = 10;

x += 5;

console.log(x);
```

Output:

```text
15
```

---

## 🔍 3. Comparison Operators

Comparison operators are used to **compare two values** and return `true` or `false`.

```text
==   → Equal value
===  → Equal value and type
!=   → Not equal
!==  → Not equal value or type
>    → Greater than
<    → Less than
>=   → Greater than or equal
<=   → Less than or equal
```

Example:

```javascript
console.log(10 > 5);
```

Output:

```text
true
```

### `==` vs `===`

```javascript
console.log(5 == "5");   // true
console.log(5 === "5");  // false
```

`==` checks the value, while `===` checks both the value and the data type.

---

## 🧠 4. Logical Operators

Logical operators are used to **combine or reverse conditions**.

```text
&&  → AND
||  → OR
!   → NOT
```

Example:

```javascript
let age = 22;

console.log(age > 18 && age < 30);
```

Output:

```text
true
```

---

## ⭐ Remember

**Arithmetic → Calculations**

**Assignment → Assign or change values**

**Comparison → Compare values**

**Logical → Combine conditions**

---

## 🎤 Interview Questions

1. What is an operator?
2. What are arithmetic operators?
3. What is the difference between `==` and `===`?
4. What are assignment operators?
5. What are comparison operators?
6. What are logical operators?
7. What does `%` do?
8. What is the difference between `&&` and `||`?

