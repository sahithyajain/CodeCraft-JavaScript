# 🔁 Loops in JavaScript

## 🌟 What is a Loop?

A loop is used to **repeat a block of code**.

---

## 🤔 Why Do We Use Loops?

Loops help us **repeat code without writing it again and again**.

---

## 1. `for` Loop

`for` loop is used to **repeat code a specific number of times**.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
} 
```

Output:

```text
1
2
3
4
5
```

### ⭐ Remember

```text
let i = 1  → Starting value
i <= 5     → Condition
i++        → Increase by 1
```

---

## 2. `while` Loop

`while` loop runs the code **while a condition is true**.

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Output:

```text
1
2
3
4
5
```

---

## 3. `do...while` Loop

`do...while` runs the code **at least once**, then checks the condition.

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

Output:

```text
1
2
3
4
5
```

### ⭐ `while` vs `do...while`

> **`while`** checks the condition first, while **`do...while`** runs the code first and checks the condition afterward.

Example:

```javascript
let i = 10;

while (i < 5) {
    console.log(i);
}
```

Output:

```text
Nothing
```

But:

```javascript
let i = 10;

do {
    console.log(i);
} while (i < 5);
```

Output:

```text
10
```

---

## 4. `break`

`break` is used to **stop the loop completely**.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
```

---

## 5. `continue`

`continue` is used to **skip the current iteration** and continue the loop.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

---

## ⚠️ Common Mistake

Forgetting to update the variable can create an **infinite loop**.

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

The loop never stops because `i` never increases.

Correct:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

---

## ⭐ Remember

**Loop → Repeats code**

**`for` → Repeats a specific number of times**

**`while` → Runs while condition is true**

**`do...while` → Runs at least once**

**`break` → Stops the loop**

**`continue` → Skips one iteration**

---

## 🎤 Interview Questions

1. What is a loop?
2. Why do we use loops?
3. What is a `for` loop?
4. What is a `while` loop?
5. What is a `do...while` loop?
6. What is the difference between `while` and `do...while`?
7. What does `break` do?
8. What does `continue` do?
9. What is an infinite loop?
10. What are the three parts of a `for` loop?
