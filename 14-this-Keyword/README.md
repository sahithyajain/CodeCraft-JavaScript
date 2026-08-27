# 🎯 JavaScript `this` Keyword

## 📖 What is `this`?

`this` is a special keyword in JavaScript.

It tells us **which object or context the function is working with**.(It refers to the **current object**)


The important thing to remember is:

```text
The value of `this` depends on how the function is called.
```

---

A simple way to remember:

```text
Who is calling the function?
        ↓
       `this` 
```

---

# 📚 Concepts Covered

## 1. `this` in the Global Scope

When we use `this` directly in the global scope, it refers to the global context.

```javascript
console.log(this);
```

In a browser's normal JavaScript script, this usually refers to the `window` object.

```javascript
console.log(this === window);
```

Output:

```text
true
```

### How it works:

We are not inside an object or function.

```text
Global scope
     ↓
   this
     ↓
Global object
```

> The exact behavior can be different in browsers, modules, and Node.js.

---

## 2. `this` Inside an Object

When an object calls a regular function that belongs to it, `this` refers to that object.

```javascript
let student = {
    name: "Sahithya",

    greet: function() {
        console.log(this.name);
    }
};

student.greet();
```

Output:

```text
Sahithya
```

### How it works:

Look at:

```javascript
student.greet();
```

Here, `student` is calling `greet()`.

So:

```text
student calls greet()
        ↓
     this = student
```

Therefore:

```javascript
this.name
```

means:

```javascript
student.name
```

---

## 3. Using `this` with Multiple Object Properties

`this` can be used to access many properties from the same object.

```javascript
let student = {
    name: "Sahithya",
    age: 22,
    course: "JavaScript",

    showDetails: function() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.course);
    }
};

student.showDetails();
```

Output:

```text
Sahithya
22
JavaScript
```

### How it works:

Because `student` calls `showDetails()`:

```text
this = student
```

So:

```text
this.name   → student.name
this.age    → student.age
this.course → student.course
```

This is useful because we don't have to repeatedly write the object name.

---

## 4. `this` in a Regular Function

In a regular function, `this` depends on **how the function is called**.

```javascript
function showThis() {
    console.log(this);
}

showThis();
```

### How it works:

The function is called normally:

```javascript
showThis();
```

It is not being called through an object.

So the value of `this` depends on the JavaScript environment and whether strict mode is being used.

---

## 5. `this` in Strict Mode

In strict mode, `this` is `undefined` when a regular function is called normally.

```javascript
"use strict";

function showThis() {
    console.log(this);
}

showThis();
```

Output:

```text
undefined
```

### How it works:

Because strict mode is enabled:

```text
Normal function call
        ↓
this = undefined
```

---

## 6. `this` with `call()`

`call()` lets us choose which object should become `this`.

```javascript
let student = {
    name: "Sahithya"
};

function greet() {
    console.log(`Hello ${this.name}`);
}

greet.call(student);
```

Output:

```text
Hello Sahithya
```

### How it works:

Normally:

```javascript
greet();
```

doesn't tell the function which object to use.

But:

```javascript
greet.call(student);
```

says:

```text
Use student as this.
```

So:

```javascript
this.name
```

means:

```javascript
student.name
```

---

## 7. `this` with `call()` and Arguments

`call()` can also pass arguments to the function.

```javascript
let student = {
    name: "Sahithya"
};

function introduce(age, course) {
    console.log(`${this.name} is ${age} years old and learns ${course}.`);
}

introduce.call(student, 22, "JavaScript");
```

Output:

```text
Sahithya is 22 years old and learns JavaScript.
```

### How it works:

The first argument becomes `this`:

```text
student → this
```

The remaining arguments are passed to the function:

```text
22 → age
JavaScript → course
```

---

## 8. `this` with `apply()`

`apply()` also allows us to choose the value of `this`.

```javascript
let student = {
    name: "Sahithya"
};

function introduce(age, course) {
    console.log(`${this.name} is ${age} years old and learns ${course}.`);
}

introduce.apply(student, [22, "JavaScript"]);
```

Output:

```text
Sahithya is 22 years old and learns JavaScript.
```

### How it works:

The first argument becomes `this`.

The second argument is an **array of function arguments**.

```text
apply(student, [22, "JavaScript"])
       ↓          ↓
     this       arguments
```

---

## 9. `this` with `bind()`

`bind()` creates a new function with a fixed `this` value.

```javascript
let student = {
    name: "Sahithya"
};

function greet() {
    console.log(`Hello ${this.name}`);
}

let newGreet = greet.bind(student);

newGreet();
```

Output:

```text
Hello Sahithya
```

### How it works:

```javascript
greet.bind(student);
```

creates a new function.

That new function remembers:

```text
this = student
```

The function can be called later.

---

## 10. `this` in Arrow Functions

Arrow functions are different from regular functions.

They **do not have their own `this`**.

Instead, they use `this` from the surrounding scope.

```javascript
let student = {
    name: "Sahithya",

    greet: () => {
        console.log(this.name);
    }
};

student.greet();
```

### Important:

Even though:

```javascript
student.greet();
```

calls the function, the arrow function does not make `student` its `this`.

---

## 11. Regular Function vs Arrow Function

This is one of the most important differences.

### Regular Function

```javascript
let student = {
    name: "Sahithya",

    greet: function() {
        console.log(this.name);
    }
};

student.greet();
```

Output:

```text
Sahithya
```

Here:

```text
student calls greet()
        ↓
this = student
```

### Arrow Function

```javascript
let student = {
    name: "Sahithya",

    greet: () => {
        console.log(this.name);
    }
};

student.greet();
```

The arrow function does not get `this` from `student`.

### Easy Difference

```text
Regular Function
→ Gets this based on how it is called

Arrow Function
→ Does not have its own this
→ Uses this from the surrounding scope
```

---

## 12. `this` in Nested Functions

A regular nested function does not automatically get the `this` value of the outer function.

```javascript
let student = {
    name: "Sahithya",

    showName: function() {

        function innerFunction() {
            console.log(this.name);
        }

        innerFunction();
    }
};

student.showName();
```

### How it works:

First:

```javascript
student.showName();
```

So the outer function gets:

```text
this = student
```

But then:

```javascript
innerFunction();
```

is called normally.

The inner regular function does not automatically inherit the outer `this`.

---

## 13. Arrow Function Preserving `this`

An arrow function can use the `this` value from the surrounding regular function.

```javascript
let student = {
    name: "Sahithya",

    showName: function() {

        let innerFunction = () => {
            console.log(this.name);
        };

        innerFunction();
    }
};

student.showName();
```

Output:

```text
Sahithya
```

### How it works:

First:

```javascript
student.showName();
```

So:

```text
this = student
```

The inner function is an arrow function.

Arrow functions do not create their own `this`.

So the arrow function uses the `this` from `showName()`.

---

## 14. `this` with `new`

When we use `new` to create an object, `this` refers to the **newly created object**.

```javascript
function Student(name) {
    this.name = name;
}

let student = new Student("Sahithya");

console.log(student.name);
```

Output:

```text
Sahithya
```

### How it works:

When this runs:

```javascript
new Student("Sahithya");
```

JavaScript creates a new object.

Then:

```javascript
this
```

refers to that new object.

So:

```javascript
this.name = name;
```

adds the name to the new object.

Think of it like:

```text
new Student()
      ↓
New object created
      ↓
this = new object
      ↓
this.name = "Sahithya"
```

---

## 15. Losing `this`

Sometimes we take a method out of its object and store it in another variable.

This can cause `this` to lose its original object.

```javascript
let student = {
    name: "Sahithya",

    greet: function() {
        console.log(this.name);
    }
};

let greetStudent = student.greet;

greetStudent();
```

### How it works:

Originally:

```javascript
student.greet();
```

would give:

```text
this = student
```

But now:

```javascript
greetStudent();
```

calls the function by itself.

The connection with `student` is lost.

This is called **losing `this`**.

---

## 16. Fixing Lost `this`

We can use `bind()` to keep the correct `this`.

```javascript
let student = {
    name: "Sahithya",

    greet: function() {
        console.log(this.name);
    }
};

let greetStudent = student.greet.bind(student);

greetStudent();
```

Output:

```text
Sahithya
```

### How it works:

`bind(student)` permanently sets:

```text
this = student
```

for the new function.

---

## 17. `this` in DOM Event Handlers

When a regular function is used as a DOM event handler, `this` usually refers to the element that received the event.

```javascript
button.addEventListener("click", function() {
    console.log(this);
});
```

### How it works:

If the button is clicked:

```text
button is the event target
        ↓
this
        ↓
button
```

This is one reason regular functions can be useful in event handlers.

---

## 18. `this` with Prototype Methods

Methods can be added to a constructor's prototype.

Inside a prototype method, `this` refers to the object using the method.

```javascript
function Student(name) {
    this.name = name;
}

Student.prototype.greet = function() {
    console.log(`Hello ${this.name}`);
};

let student = new Student("Sahithya");

student.greet();
```

Output:

```text
Hello Sahithya
```

### How it works:

`student` calls:

```javascript
student.greet();
```

So:

```text
this = student
```

Therefore:

```javascript
this.name
```

means:

```javascript
student.name
```

---

## 19. `this` with `super`

In classes, `super` is used to access the parent class.

`this` can then be used to access the current object's properties.

```javascript
class Person {

    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {

    constructor(name, course) {
        super(name);
        this.course = course;
    }

    showDetails() {
        console.log(this.name);
        console.log(this.course);
    }
}

let student = new Student("Sahithya", "JavaScript");

student.showDetails();
```

Output:

```text
Sahithya
JavaScript
```

### How it works:

```javascript
super(name);
```

calls the parent constructor.

Then:

```javascript
this.course = course;
```

adds the course to the current student object.

---

## 20. `this` in Getters and Setters

Getters and setters can use `this` to access the object's properties.

```javascript
let student = {
    firstName: "Sahithya",

    get name() {
        return this.firstName;
    },

    set name(value) {
        this.firstName = value;
    }
};

console.log(student.name);

student.name = "Ananya";

console.log(student.name);
```

Output:

```text
Sahithya
Ananya
```

### How it works:

Inside the getter:

```javascript
this.firstName
```

refers to the object's `firstName`.

The setter also uses `this` to change the object's property.

---

## 21. `this` in Static Methods

Static methods belong to the **class itself**, not to individual objects.

Inside a static method, `this` refers to the class.

```javascript
class Student {

    static school = "ABC School";

    static showSchool() {
        console.log(this.school);
    }
}

Student.showSchool();
```

Output:

```text
ABC School
```

### How it works:

We call:

```javascript
Student.showSchool();
```

The class itself is calling the method.

So:

```text
this = Student
```

Therefore:

```javascript
this.school
```

means:

```javascript
Student.school
```

---

## 22. `this` in Classes

Inside a class method, `this` refers to the object using the method.

```javascript
class Student {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

let student = new Student("Sahithya");

student.greet();
```

Output:

```text
Hello Sahithya
```

### How it works:

The new student object is:

```text
student
```

When:

```javascript
student.greet();
```

is called:

```text
this = student
```

So:

```javascript
this.name
```

means:

```javascript
student.name
```

---

## 23. `this` in a Constructor

Inside a constructor, `this` refers to the newly created object.

```javascript
class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let student = new Student("Sahithya", 22);

console.log(student.name);
console.log(student.age);
```

Output:

```text
Sahithya
22
```

### How it works:

When `new Student()` creates an object:

```text
New object
   ↓
this
   ↓
this.name = "Sahithya"
this.age = 22
```

---

## 24. Detached Methods

A detached method is a method that is taken out of its object.

```javascript
let student = {
    name: "Sahithya",

    greet: function() {
        console.log(this.name);
    }
};

let greet = student.greet;

greet();
```

### How it works:

When we use:

```javascript
student.greet();
```

`this` refers to `student`.

But when we use:

```javascript
greet();
```

the function is no longer called through `student`.

So the original `this` connection is lost.

---

## 25. `this` in ES Modules

ES modules have different global `this` behavior.

At the top level of an ES module:

```javascript
console.log(this);
```

the result is:

```text
undefined
```

### How it works:

Modules have their own scope.

So top-level `this` in an ES module is not the browser's `window` object.

---

# ⭐ Quick Revision

```text
this
→ A special keyword whose value depends on how the function is called

Global this
→ Refers to the global context

Object Method
→ this usually refers to the object calling the method

Multiple Properties
→ this can access many properties of the current object

Regular Function
→ this depends on how the function is called

Strict Mode
→ this is undefined in a normally called regular function

call()
→ Calls a function and sets this

apply()
→ Calls a function and sets this
→ Arguments are passed as an array

bind()
→ Creates a new function with a fixed this

Arrow Function
→ Does not have its own this
→ Uses this from the surrounding scope

Regular vs Arrow
→ Regular functions get this from how they are called
→ Arrow functions use surrounding this

Nested Function
→ Regular nested functions do not automatically inherit this

Arrow Nested Function
→ Arrow functions can use this from the surrounding function

new
→ this refers to the newly created object

Losing this
→ Happens when a method is called without its original object

Fixing Lost this
→ bind() can keep the correct this

DOM Event Handler
→ Regular event-handler functions usually get this as the event element

Prototype Method
→ this refers to the object using the prototype method

super
→ Used to access the parent class
→ this refers to the current object

Getters and Setters
→ this can access the object's properties

Static Method
→ this refers to the class itself

Class Method
→ this refers to the object using the method

Constructor
→ this refers to the newly created object

Detached Method
→ A method separated from its object can lose its original this

ES Module
→ Top-level this is undefined
```

---

# 🎤 Interview Questions

1. What is the `this` keyword?
2. What does `this` refer to inside an object method?
3. Why do we use `this` inside an object?
4. How does `this` work with multiple object properties?
5. What does `this` refer to in the global scope?
6. How does `this` behave inside a regular function?
7. What happens to `this` in strict mode?
8. What is `call()`?
9. What is `apply()`?
10. What is `bind()`?
11. What is the difference between `call()` and `apply()`?
12. What is the difference between `call()` and `bind()`?
13. Does an arrow function have its own `this`?
14. What is the difference between `this` in regular and arrow functions?
15. How does `this` work inside nested functions?
16. How can an arrow function preserve `this`?
17. What happens to `this` when using `new`?
18. What does losing `this` mean?
19. How can we fix lost `this`?
20. What does `this` refer to in a DOM event handler?
21. What does `this` refer to inside a prototype method?
22. How does `this` work with `super`?
23. How does `this` work in getters and setters?
24. What does `this` refer to inside a static method?
25. What does `this` refer to inside a class method?
26. What does `this` refer to inside a constructor?
27. What is a detached method?
28. What happens to top-level `this` inside an ES module?
29. Why do arrow functions behave differently from regular functions?
30. What is the easiest way to understand `this`?
