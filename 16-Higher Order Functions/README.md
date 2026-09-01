# 📘 Higher Order Functions in JavaScript

## 🌟 What is a Higher Order Function?

A Higher Order Function is a function that **takes another function as an argument or returns another function**.

### Simple Definition

A Higher Order Function is a function that works with other functions.

---

## 🤔 Why Do We Use Higher Order Functions?

Higher Order Functions help us to:

- Reuse code
- Avoid repeating code
- Pass different functions when needed
- Make programs flexible
- Work with callbacks

---

# 📚 Concepts Covered

## 1. Function as an Argument

A function can be passed to another function.

### Example

function greet() {
    console.log("Hello");
}

function run(callback) {
    callback();
}

run(greet);

### Explanation

`greet` is passed to `run()`.

`run()` receives it as `callback`.

Then `callback()` runs the `greet` function.

So `run()` is a Higher Order Function.

---

## 2. Function Returning Another Function

A function can return another function.

### Example

function createGreeting() {
    return function() {
        console.log("Hello");
    };
}

let greet = createGreeting();

greet();

### Explanation

`createGreeting()` returns another function.

The returned function is stored in `greet`.

Then `greet()` runs that function.

---

## 3. Higher Order Function with Arguments

A Higher Order Function can pass values to another function.

### Example

function calculate(callback) {
    callback(10, 5);
}

### Explanation

`calculate()` receives a function.

It then gives `10` and `5` to that function.

---

## 4. Higher Order Function with Return Value

A Higher Order Function can use the value returned by another function.

### Example

function add(a, b) {
    return a + b;
}

function calculate(callback) {
    return callback(10, 5);
}

let result = calculate(add);

console.log(result);

### Output

15

### Explanation

`add()` returns `15`.

`calculate()` receives that returned value.

---

## 5. Arrow Function as an Argument

An arrow function can also be passed to another function.

### Example

function run(callback) {
    callback();
}

run(() => {
    console.log("Hello");
});

### Explanation

The arrow function is passed to `run()`.

`run()` calls it using `callback()`.

---

## 6. Named Function as an Argument

A named function can be passed to another function.

### Example

function greet() {
    console.log("Hello");
}

function run(callback) {
    callback();
}

run(greet);

### Explanation

`greet` has a name.

It is passed to `run()` and used as a callback.

---

## 7. Anonymous Function as an Argument

A function without a name can also be passed.

### Example

function run(callback) {
    callback();
}

run(function() {
    console.log("Hello");
});

### Explanation

The function does not have a name.

It is written directly where it is needed.

---

## 8. forEach() as a Higher Order Function

`forEach()` takes a function as an argument.

### Example

let names = ["Asha", "Riya", "Anu"];

names.forEach(function(name) {
    console.log(name);
});

### Explanation

`forEach()` receives a function.

It runs that function for every item in the array.

So `forEach()` is a Higher Order Function.

---

## 9. map() as a Higher Order Function

`map()` takes a function and creates a new array.

### Example

let numbers = [1, 2, 3];

let result = numbers.map(function(number) {
    return number * 2;
});

console.log(result);

### Output

[2, 4, 6]

### Explanation

`map()` runs the function for each number.

The returned values are placed into a new array.

---

## 10. filter() as a Higher Order Function

`filter()` uses a function to select values.

### Example

let ages = [15, 20, 25];

let adults = ages.filter(function(age) {
    return age >= 18;
});

console.log(adults);

### Output

[20, 25]

### Explanation

The function checks each age.

If it returns `true`, the value is kept.

---

## 11. reduce() as a Higher Order Function

`reduce()` uses a function to combine values.

### Example

let numbers = [10, 20, 30];

let total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log(total);

### Output

60

### Explanation

`reduce()` uses the function to combine the values.

Here, it adds all the numbers together.

---

## 12. Higher Order Function vs Callback

These two are related, but they are not the same.

### Higher Order Function

A function that receives or returns another function.

### Callback

The function that is passed to another function.

### Example

run(greet);

Here:

`run` → Higher Order Function

`greet` → Callback

### Easy Way to Remember

The function receiving or returning another function is the Higher Order Function.

The function being passed is the Callback.

---

## 13. Returning a Function

A Higher Order Function can return a function.

### Example

function outer() {
    return function() {
        console.log("Hello");
    };
}

let message = outer();

message();

### Output

Hello

### Explanation

`outer()` returns a function.

That function is stored in `message`.

Then `message()` runs it.

---

## 14. Function Factory

A function can create and return another function.

This is called a Function Factory.

### Example

function createGreeting(name) {
    return function() {
        console.log("Hello " + name);
    };
}

let greet = createGreeting("Sahithya");

greet();

### Output

Hello Sahithya

### Explanation

`createGreeting()` creates a new function.

The returned function can be used later.

---

## 15. Reusing a Higher Order Function

The same Higher Order Function can work with different functions.

### Example

function calculate(callback) {
    return callback(10, 5);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculate(add));
console.log(calculate(multiply));

### Output

15
50

### Explanation

The same `calculate()` function works with different functions.

This helps us reuse code.

---

# ⭐ Quick Revision

Higher Order Function
→ A function that receives or returns another function.

Function as Argument
→ A function can be passed to another function.

Function as Return Value
→ A function can return another function.

Callback
→ The function passed to another function.

Arrow Function
→ Can also be passed as an argument.

forEach()
→ Runs a function for every array item.

map()
→ Creates a new array.

filter()
→ Selects values.

reduce()
→ Combines values.

Function Factory
→ A function that creates and returns another function.

Reusability
→ One Higher Order Function can work with different functions.

---

# 🎯 Key Takeaways

- A Higher Order Function works with other functions.
- It can receive a function.
- It can return a function.
- A callback is a function passed to another function.
- `forEach()`, `map()`, `filter()`, and `reduce()` use functions.
- Higher Order Functions help us reuse code.
- They make programs more flexible and easier to manage.

---

# 🎤 Interview Questions

1. What is a Higher Order Function?
2. Why do we use Higher Order Functions?
3. Can a function take another function as an argument?
4. Can a function return another function?
5. What is a callback?
6. What is the difference between a callback and a Higher Order Function?
7. Is `forEach()` a Higher Order Function?
8. Is `map()` a Higher Order Function?
9. Is `filter()` a Higher Order Function?
10. Is `reduce()` a Higher Order Function?
11. What is a Function Factory?
12. Can an arrow function be passed to a Higher Order Function?
13. Can a Higher Order Function receive arguments?
14. Can a Higher Order Function return a value?
15. Why are Higher Order Functions useful?
