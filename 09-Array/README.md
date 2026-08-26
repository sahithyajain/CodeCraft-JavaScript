# 📦 JavaScript Arrays

## 🌟 What is an Array?

An **array** is used to store **multiple values in one variable**.

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

---

# 📚 Array Concepts

## 1. Array

An array stores multiple values together.

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

---

## 2. Array Index

An **index** is the position of an item in an array.

Array indexes start from **0**.

```text
Apple   → 0
Banana  → 1
Mango   → 2
```

---

## 3. `length`

`length` tells us how many items are in an array.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);
```

Output:

```text
3
```

---

# ➕ Adding and Removing Items

## 4. `push()`

`push()` adds an item to the **end** of an array.

```javascript
fruits.push("Orange");
```

---

## 5. `pop()`

`pop()` removes the **last item**.

```javascript
fruits.pop();
```

---

## 6. `unshift()`

`unshift()` adds an item to the **beginning**.

```javascript
fruits.unshift("Orange");
```

---

## 7. `shift()`

`shift()` removes the **first item**.

```javascript
fruits.shift();
```

---

# 🔍 Finding Items

## 8. `indexOf()`

`indexOf()` finds the position of an item.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.indexOf("Banana"));
```

Output:

```text
1
```

If the item is not found, it returns `-1`.

---

## 9. `includes()`

`includes()` checks whether an item exists in the array.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Banana"));
```

Output:

```text
true
```

---

## 10. `find()`

`find()` finds the **first item that matches a condition**.

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.find(function(number) {
    return number > 20;
});

console.log(result);
```

Output:

```text
30
```

---

## 11. `findIndex()`

`findIndex()` finds the **index of the first item that matches a condition**.

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.findIndex(function(number) {
    return number > 20;
});

console.log(result);
```

Output:

```text
2
```

---

# ✂️ Taking and Changing Parts

## 12. `slice()`

`slice()` takes a part of an array **without changing the original array**.

```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let result = fruits.slice(1, 3);

console.log(result);
```

Output:

```text
["Banana", "Mango"]
```

---

## 13. `splice()`

`splice()` can **add, remove, or replace** items in an array.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1);

console.log(fruits);
```

Output:

```text
["Apple", "Mango"]
```

---

# 🔗 Combining and Converting

## 14. `concat()`

`concat()` combines two or more arrays.

```javascript
let fruits = ["Apple", "Banana"];
let vegetables = ["Carrot", "Potato"];

let food = fruits.concat(vegetables);

console.log(food);
```

Output:

```text
["Apple", "Banana", "Carrot", "Potato"]
```

---

## 15. `join()`

`join()` combines array items into a string.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join(", "));
```

Output:

```text
Apple, Banana, Mango
```

---

# 🔄 Changing the Order

## 16. `reverse()`

`reverse()` reverses the order of the array.

```javascript
let numbers = [1, 2, 3, 4];

numbers.reverse();

console.log(numbers);
```

Output:

```text
[4, 3, 2, 1]
```

---

## 17. `sort()`

`sort()` arranges array items in order.

```javascript
let fruits = ["Mango", "Apple", "Banana"];

fruits.sort();

console.log(fruits);
```

Output:

```text
["Apple", "Banana", "Mango"]
```

---

# 🔁 Looping Through Arrays

## 18. `for` Loop

A `for` loop goes through array items one by one.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

---

## 19. `for...of`

`for...of` gets each array value directly.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

---

## 20. `forEach()`

`forEach()` runs a function for every item.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

---

# ⚡ Creating New Arrays

## 21. `map()`

`map()` creates a **new array** by changing each item.

```javascript
let numbers = [1, 2, 3];

let doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled);
```

Output:

```text
[2, 4, 6]
```

---

## 22. `filter()`

`filter()` creates a new array containing only items that match a condition.

```javascript
let numbers = [10, 15, 20, 25];

let result = numbers.filter(function(number) {
    return number > 15;
});

console.log(result);
```

Output:

```text
[20, 25]
```

---

# ✅ Checking Items

## 23. `some()`

`some()` checks whether **at least one item** matches a condition.

```javascript
let numbers = [10, 20, 30];

console.log(numbers.some(function(number) {
    return number > 25;
}));
```

Output:

```text
true
```

---

## 24. `every()`

`every()` checks whether **all items** match a condition.

```javascript
let numbers = [10, 20, 30];

console.log(numbers.every(function(number) {
    return number > 5;
}));
```

Output:

```text
true
```

---

# 🧮 Combining Values

## 25. `reduce()`

`reduce()` combines all array values into **one final result**.

```javascript
let numbers = [10, 20, 30];

let total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log(total);
```

Output:

```text
60
```

---

# 🔎 Checking an Array

## 26. `Array.isArray()`

`Array.isArray()` checks whether a value is an array.

```javascript
let fruits = ["Apple", "Banana"];

console.log(Array.isArray(fruits));
```

Output:

```text
true
```

---

# 🪆 Nested Arrays

## 27. Nested Array

A nested array is an **array inside another array**.

```javascript
let numbers = [
    [1, 2],
    [3, 4]
];

console.log(numbers[0][1]);
```

Output:

```text
2
```

---

# 📦 Array Destructuring

## 28. Array Destructuring

Destructuring takes values from an array and puts them into separate variables.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

let [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);
```

Output:

```text
Apple
Banana
Mango
```

---

# 📋 Spread Operator

## 29. Spread Operator `...`

The spread operator takes the values out of an array.

```javascript
let fruits = ["Apple", "Banana"];

let newFruits = [...fruits, "Mango"];

console.log(newFruits);
```

Output:

```text
["Apple", "Banana", "Mango"]
```

---

# 📋 Copying an Array

## 30. Copying an Array

We can create a new array with the same values.

```javascript
let fruits = ["Apple", "Banana"];

let newFruits = [...fruits];

console.log(newFruits);
```

---

# 🔗 Combining Arrays

## 31. Combining Arrays

We can combine arrays using `concat()` or the spread operator.

```javascript
let fruits = ["Apple", "Banana"];
let vegetables = ["Carrot", "Potato"];

let food = [...fruits, ...vegetables];

console.log(food);
```

---

# ⭐ Quick Revision

```text
Array
→ Stores multiple values in one variable

Index
→ Position of an item

length
→ Tells how many items are in the array

push()
→ Adds an item to the end

pop()
→ Removes the last item

unshift()
→ Adds an item to the beginning

shift()
→ Removes the first item

indexOf()
→ Finds the position of an item

includes()
→ Checks whether an item exists

find()
→ Finds the first item that matches a condition

findIndex()
→ Finds the index of the first matching item

slice()
→ Takes a part without changing the original array

splice()
→ Adds, removes, or replaces items

concat()
→ Combines arrays

join()
→ Combines array items into a string

reverse()
→ Reverses the array

sort()
→ Arranges array items in order

for loop
→ Goes through items using indexes

for...of
→ Gets each value one by one

forEach()
→ Runs code for every item

map()
→ Changes every item and creates a new array

filter()
→ Keeps only matching items

some()
→ Checks if at least one item matches

every()
→ Checks if all items match

reduce()
→ Combines values into one final result

Array.isArray()
→ Checks whether a value is an array

Nested Array
→ An array inside another array

Array Destructuring
→ Takes array values into separate variables

Spread Operator (...)
→ Takes values out of an array

Copying an Array
→ Creates a new array with the same values

Combining Arrays
→ Joins multiple arrays into one
```

---

# 🎤 Interview Questions

1. What is an array?
2. Why do we use arrays?
3. What is an array index?
4. Why does an array index start from 0?
5. What does `length` do?
6. What does `push()` do?
7. What does `pop()` do?
8. What does `shift()` do?
9. What does `unshift()` do?
10. What does `indexOf()` return?
11. What does `includes()` do?
12. What is the difference between `slice()` and `splice()`?
13. What does `concat()` do?
14. What does `join()` do?
15. What does `map()` do?
16. What does `filter()` do?
17. What does `find()` do?
18. What does `findIndex()` do?
19. What does `some()` do?
20. What does `every()` do?
21. What does `reduce()` do?
22. What is a nested array?
23. What is array destructuring?
24. What is the spread operator?
25. How do you check whether a value is an array?
