# 📘 Methods in JavaScript

## 🌟 What are Methods?

A **method** is a function defined inside an object or class that is used to perform an action.

Example:

    const student = {
        name: "Sahithya",

        greet() {
            console.log("Hello!");
        }
    };

    student.greet();

**Output:**

    Hello!

---

## 🤔 Why Do We Use Methods?

Methods help us to:

- Perform actions using objects
- Organize related functionality
- Reuse code
- Work with object data
- Create behavior inside classes

---

# 📚 Concepts Covered

## 1. Basic Method

A method is a function written inside an object.

    const student = {
        name: "Sahithya",

        greet() {
            console.log("Hello Sahithya");
        }
    };

    student.greet();

**Output:**

    Hello Sahithya

---

## 2. Method with Parameters

A method can accept parameters.

    const student = {
        greet(name) {
            console.log("Hello " + name);
        }
    };

    student.greet("Sahithya");

**Output:**

    Hello Sahithya

---

## 3. Method with Return Value

A method can return a value.

    const calculator = {
        add(a, b) {
            return a + b;
        }
    };

    console.log(calculator.add(10, 20));

**Output:**

    30

---

## 4. Method Using Object Properties

A method can access properties of the same object using `this`.

    const student = {
        name: "Sahithya",

        greet() {
            console.log("My name is " + this.name);
        }
    };

    student.greet();

**Output:**

    My name is Sahithya

---

## 5. Method with Multiple Actions

An object can have multiple methods.

    const student = {
        name: "Sahithya",

        greet() {
            console.log("Hello");
        },

        study() {
            console.log("Studying JavaScript");
        }
    };

    student.greet();
    student.study();

**Output:**

    Hello
    Studying JavaScript

---

## 6. Method in a Class

Methods can be created inside a class.

    class Student {
        greet() {
            console.log("Hello Sahithya");
        }
    }

    const student = new Student();

    student.greet();

**Output:**

    Hello Sahithya

---

## 7. Method with Constructor Data

A method can use data created by the constructor.

    class Student {
        constructor(name) {
            this.name = name;
        }

        greet() {
            console.log("Hello " + this.name);
        }
    }

    const student = new Student("Sahithya");

    student.greet();

**Output:**

    Hello Sahithya

---

## 8. Updating Object Data with a Method

A method can change an object's property.

    const student = {
        marks: 80,

        addMarks() {
            this.marks += 10;
        }
    };

    student.addMarks();

    console.log(student.marks);

**Output:**

    90

---

## 9. Method Calling Another Method

One method can call another method using `this`.

    const student = {
        greet() {
            console.log("Hello");
        },

        start() {
            this.greet();
            console.log("Let's learn JavaScript");
        }
    };

    student.start();

**Output:**

    Hello
    Let's learn JavaScript

---

## 10. Arrow Function as an Object Property

An arrow function can also be stored as an object property.

    const student = {
        greet: () => {
            console.log("Hello Sahithya");
        }
    };

    student.greet();

**Output:**

    Hello Sahithya

---

## 11. Method Shorthand

JavaScript allows a shorter syntax for writing methods.

    const student = {
        greet() {
            console.log("Hello");
        }
    };

    student.greet();

**Output:**

    Hello

---

## 12. Methods in Inheritance

A child class can use methods inherited from a parent class.

    class Person {
        greet() {
            console.log("Hello");
        }
    }

    class Student extends Person {
    }

    const student = new Student();

    student.greet();

**Output:**

    Hello

---

## 13. Method Overriding

A child class can provide its own version of a parent method.

    class Person {
        greet() {
            console.log("Hello from Person");
        }
    }

    class Student extends Person {
        greet() {
            console.log("Hello from Student");
        }
    }

    const student = new Student();

    student.greet();

**Output:**

    Hello from Student

---

## 14. Method with Multiple Parameters

A method can work with multiple values.

    const calculator = {
        multiply(a, b) {
            return a * b;
        }
    };

    console.log(calculator.multiply(5, 4));

**Output:**

    20

---

## 15. Complete Method Example

Methods can combine properties, parameters, `this`, and return values.

    class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            console.log("Hello " + this.name);
        }

        getAge() {
            return this.age;
        }
    }

    const student = new Student("Sahithya", 24);

    student.greet();
    console.log(student.getAge());

**Output:**

    Hello Sahithya
    24

---

# ⭐ Quick Revision

| Concept | Meaning |
|---|---|
| Method | Function inside an object or class |
| Parameters | Values passed to a method |
| Return | Sends a value back |
| `this` | Refers to the current object |
| Class Method | Method defined inside a class |
| Method Overriding | Child class changes a parent method |
| Method Shorthand | Short syntax for defining methods |

---

# 🎯 Key Takeaways

- A method is a function associated with an object or class.
- Methods can accept parameters and return values.
- `this` can be used to access object properties.
- Classes can contain methods.
- Child classes can inherit and override methods.
- Static methods are different and are covered separately in **49 – Static Methods**.

---

# 🎤 Interview Questions

1. What is a method in JavaScript?
2. What is the difference between a function and a method?
3. How do you create a method inside an object?
4. How do you create a method inside a class?
5. What is method shorthand?
6. How can a method access object properties?
7. What is the use of `this` inside a method?
8. Can a method return a value?
9. What is method overriding?
10. What is the difference between a normal method and a static method?
