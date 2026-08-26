# 📦 JavaScript Objects

## 🌟 What is an Object?

An **object** is used to store related data and information in **key-value pairs**.

```javascript
let student = {
    name: "Sahithya",
    age: 22,
    course: "JavaScript"
};
```

---

# 📚 Object Concepts

## 1. Creating Objects

Create an object using `{ }`.

```javascript
let student = {
    name: "Sahithya",
    age: 22
};
```

---

## 2. Object Properties

Properties store information inside an object.

```javascript
let student = {
    name: "Sahithya",
    age: 22
};

console.log(student.name);
```

Output:

```text
Sahithya
```

---

## 3. Accessing Properties

Object properties can be accessed using their property names.

```javascript
console.log(student.name);
console.log(student.age);
```

---

## 4. Dot Notation

Dot notation is used to access a property using `.`.

```javascript
console.log(student.name);
```

---

## 5. Bracket Notation

Bracket notation uses `[ ]` to access a property.

```javascript
console.log(student["name"]);
```

---

## 6. Adding Properties

New properties can be added to an object.

```javascript
student.city = "Bangalore";
```

---

## 7. Updating Properties

Existing property values can be changed.

```javascript
student.age = 23;
```

---

## 8. Deleting Properties

The `delete` keyword removes a property.

```javascript
delete student.age;
```

---

## 9. Nested Objects

An object can contain another object.

```javascript
let student = {
    name: "Sahithya",
    address: {
        city: "Bangalore",
        country: "India"
    }
};
```

Access a nested property:

```javascript
console.log(student.address.city);
```

---

## 10. Object Methods

A function stored inside an object is called a method.

```javascript
let student = {
    name: "Sahithya",

    greet: function() {
        console.log("Hello!");
    }
};

student.greet();
```

---

## 11. `this` Inside Objects

`this` refers to the current object.

```javascript
let student = {
    name: "Sahithya",

    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};

student.greet();
```

Output:

```text
Hello Sahithya
```

---

## 12. Objects with Functions

Objects can contain properties and functions together.

```javascript
let calculator = {
    number: 10,

    double: function() {
        return this.number * 2;
    }
};

console.log(calculator.double());
```

Output:

```text
20
```

---

## 13. Checking Properties

We can check whether an object contains a property.

```javascript
let student = {
    name: "Sahithya",
    age: 22
};

console.log("name" in student);
```

Output:

```text
true
```

---

## 14. `in` Operator

The `in` operator checks whether a property exists in an object.

```javascript
console.log("age" in student);
```

Output:

```text
true
```

---

## 15. `Object.keys()`

`Object.keys()` returns an array containing the property names.

```javascript
let student = {
    name: "Sahithya",
    age: 22,
    city: "Bangalore"
};

console.log(Object.keys(student));
```

Output:

```text
["name", "age", "city"]
```

---

## 16. `Object.values()`

`Object.values()` returns an array containing the property values.

```javascript
console.log(Object.values(student));
```

Output:

```text
["Sahithya", 22, "Bangalore"]
```

---

## 17. `Object.entries()`

`Object.entries()` returns an array containing key-value pairs.

```javascript
console.log(Object.entries(student));
```

Output:

```text
[
    ["name", "Sahithya"],
    ["age", 22],
    ["city", "Bangalore"]
]
```

---

## 18. `Object.assign()`

`Object.assign()` copies properties from one object to another.

```javascript
let student = {
    name: "Sahithya"
};

let details = {
    age: 22
};

let result = Object.assign({}, student, details);

console.log(result);
```

Output:

```text
{
    name: "Sahithya",
    age: 22
}
```

---

## 19. Copying Objects

The spread operator can be used to copy an object.

```javascript
let student = {
    name: "Sahithya",
    age: 22
};

let copy = { ...student };

console.log(copy);
```

---

## 20. Combining Objects

The spread operator can combine multiple objects.

```javascript
let student = {
    name: "Sahithya"
};

let details = {
    age: 22
};

let result = {
    ...student,
    ...details
};

console.log(result);
```

---

## 21. Object Destructuring

Object destructuring takes properties from an object and stores them in variables.

```javascript
let student = {
    name: "Sahithya",
    age: 22
};

let { name, age } = student;

console.log(name);
console.log(age);
```

Output:

```text
Sahithya
22
```

---

## 22. Nested Object Destructuring

Nested properties can also be extracted using destructuring.

```javascript
let student = {
    name: "Sahithya",

    address: {
        city: "Bangalore",
        country: "India"
    }
};

let {
    address: { city, country }
} = student;

console.log(city);
console.log(country);
```

Output:

```text
Bangalore
India
```

---

## 23. Spread Operator with Objects

The spread operator `...` copies or combines object properties.

```javascript
let student = {
    name: "Sahithya",
    age: 22
};

let newStudent = {
    ...student,
    course: "JavaScript"
};

console.log(newStudent);
```

---

## 24. Optional Chaining `?.`

Optional chaining safely accesses properties that may not exist.

```javascript
let student = {
    name: "Sahithya"
};

console.log(student.address?.city);
```

Output:

```text
undefined
```

---

## 25. Property Shorthand

When the property name and variable name are the same, shorthand can be used.

```javascript
let name = "Sahithya";
let age = 22;

let student = {
    name,
    age
};

console.log(student);
```

---

## 26. Computed Property Names

Computed property names allow us to use a variable as an object property name.

```javascript
let property = "name";

let student = {
    [property]: "Sahithya"
};

console.log(student);
```

Output:

```text
{
    name: "Sahithya"
}
```

---

# ⭐ Quick Revision

```text
Object
→ Stores related data in key-value pairs

Object Property
→ Stores information inside an object

Dot Notation
→ Accesses a property using .

Bracket Notation
→ Accesses a property using [ ]

Adding Properties
→ Adds a new property

Updating Properties
→ Changes an existing property

delete
→ Removes a property

Nested Object
→ An object inside another object

Object Method
→ A function inside an object

this
→ Refers to the current object

in
→ Checks whether a property exists

Object.keys()
→ Returns property names

Object.values()
→ Returns property values

Object.entries()
→ Returns key-value pairs

Object.assign()
→ Copies properties between objects

Object Copying
→ Creates another object with the same properties

Object Combining
→ Combines properties from multiple objects

Object Destructuring
→ Takes properties into variables

Nested Destructuring
→ Extracts properties from nested objects

Spread Operator (...)
→ Copies or combines object properties

Optional Chaining (?.)
→ Safely accesses properties

Property Shorthand
→ Shorter way to write properties

Computed Property Names
→ Uses a variable as a property name
```

---

# 🎤 Interview Questions

1. What is an object?
2. What is a property?
3. How do you create an object?
4. How do you access an object property?
5. What is dot notation?
6. What is bracket notation?
7. How do you add a property?
8. How do you update a property?
9. How do you delete a property?
10. What is a nested object?
11. What is an object method?
12. What does `this` mean inside an object?
13. What does the `in` operator do?
14. What does `Object.keys()` return?
15. What does `Object.values()` return?
16. What does `Object.entries()` return?
17. What does `Object.assign()` do?
18. How do you copy an object?
19. How do you combine objects?
20. What is object destructuring?
21. What is nested object destructuring?
22. What is the spread operator with objects?
23. What is optional chaining?
24. What is property shorthand?
25. What are computed property names?
