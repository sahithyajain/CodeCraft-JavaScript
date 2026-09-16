# 📘 Objects in JavaScript

## 🌟 What is an Object?

An **object** is used to store related information together.
An object is an actual thing containing data.

For example, a student has a **name, age, and course**.

    let student = {
        name: "Sahithya",
        age: 24,
        course: "MCA"
    };

Here, `student` is an object.

---

## 🤔 Why Do We Use Objects?

Objects help us:

- Store related information together
- Organize data
- Access data easily
- Represent real-world things

**Example:**

Student → name, age, course  
Car → brand, model, price  
Mobile → brand, color, price

---

# 📚 Concepts Covered

## 1. Creating an Object

We use `{ }` to create an object.

    let student = {
        name: "Sahithya",
        age: 24
    };

---

## 2. Object Properties

Properties are the **information stored inside an object**.

    let student = {
        name: "Sahithya",
        age: 24
    };

`name` and `age` are properties.

---

## 3. Accessing Properties

We can access a property using `.`.

    console.log(student.name);

**Output:**

    Sahithya

---

## 4. Changing Properties

We can change an object's property.

    student.age = 25;

    console.log(student.age);

**Output:**

    25

---

## 5. Adding Properties

We can add a new property to an object.

    student.city = "Bangalore";

    console.log(student.city);

**Output:**

    Bangalore

---

## 6. Deleting Properties

We can delete a property using `delete`.

    delete student.city;

---

## 7. Object Methods

A function inside an object is called a **method**.

    let student = {
        name: "Sahithya",

        greet: function() {
            console.log("Hello!");
        }
    };

    student.greet();

**Output:**

    Hello!

---

## 8. Nested Objects

An object can contain another object.

    let student = {
        name: "Sahithya",
        address: {
            city: "Bangalore",
            state: "Karnataka"
        }
    };

    console.log(student.address.city);

**Output:**

    Bangalore

---

## 9. Object with Array

An object can also contain an array.

    let student = {
        name: "Sahithya",
        subjects: ["JavaScript", "Java", "Python"]
    };

    console.log(student.subjects[0]);

**Output:**

    JavaScript

---

## 10. Object.keys()

`Object.keys()` gives all property names.

    let student = {
        name: "Sahithya",
        age: 24
    };

    console.log(Object.keys(student));

**Output:**

    ["name", "age"]

---

## 11. Object.values()

`Object.values()` gives all property values.

    console.log(Object.values(student));

**Output:**

    ["Sahithya", 24]

---

## 12. Object.entries()

`Object.entries()` gives properties and their values together.

    console.log(Object.entries(student));

**Output:**

    [["name", "Sahithya"], ["age", 24]]

---

## 13. Checking a Property

We can check whether a property exists using `in`.

    console.log("name" in student);

**Output:**

    true

---

## 14. Multiple Objects

We can create multiple objects.

    let student1 = {
        name: "Sahithya",
        age: 24
    };

    let student2 = {
        name: "Anu",
        age: 23
    };

    console.log(student1.name);
    console.log(student2.name);

**Output:**

    Sahithya
    Anu

---

## 15. Object Destructuring

We can take values from an object into variables.

    let student = {
        name: "Sahithya",
        age: 24
    };

    let { name, age } = student;

    console.log(name);
    console.log(age);

**Output:**

    Sahithya
    24

---

# ⭐ Quick Revision

| Concept | Simple Meaning |
|---|---|
| Object | Stores related information |
| Property | Information inside an object |
| Method | Function inside an object |
| `.` | Accesses a property |
| `Object.keys()` | Gets property names |
| `Object.values()` | Gets property values |
| `Object.entries()` | Gets properties and values |
| `in` | Checks if a property exists |
| Nested Object | Object inside another object |
| Destructuring | Takes values from an object |

---

# 🎯 Key Takeaways

- Objects store **related data together**.
- Objects use **key-value pairs**.
- Properties store information.
- Methods perform actions.
- Objects can contain **arrays and other objects**.
- JavaScript provides useful methods like `Object.keys()` and `Object.values()`.

---

# 🎤 Interview Questions

1. What is an object in JavaScript?
2. What is a property?
3. What is a method?
4. How do you create an object?
5. How do you access an object property?
6. How do you add a new property?
7. What is a nested object?
8. What is `Object.keys()`?
9. What is `Object.values()`?
10. What is object destructuring?
