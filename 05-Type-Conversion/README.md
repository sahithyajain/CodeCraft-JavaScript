# 🔄 Type Conversion in JavaScript

## 🌟 What is Type Conversion?

Type conversion means **changing a value from one data type to another**.

---

## 1. Explicit Conversion

Explicit conversion means **we manually convert the value**.

```text
String()  → Converts to String
Number()  → Converts to Number
Boolean() → Converts to Boolean
```

Example:

```javascript
let age = "22";

age = Number(age);
```

`"22"` changes from **String → Number**.

---

## 2. Implicit Conversion

Implicit conversion means **JavaScript automatically converts the value**.

```javascript
let age = "22";

console.log(age + 5);
```

Output:

```text
225
```

JavaScript converts `5` to `"5"` and joins them.

---

## ⭐ Remember

**Explicit → We convert**

**Implicit → JavaScript converts**

---

## 🎤 Interview Questions

1. What is type conversion?
2. What is explicit conversion?
3. What is implicit conversion?
4. What is the difference between explicit and implicit conversion?
5. What does `Number()` do?
6. What does `String()` do?
7. What does `Boolean()` do?

