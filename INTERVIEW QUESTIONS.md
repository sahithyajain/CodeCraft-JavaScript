# 🎤 Methods – Interview Questions & Answers

## 1. What is a Method in JavaScript?

A **method is a function defined inside an object or class**.

Example:

    const student = {
        greet() {
            console.log("Hello Sahithya");
        }
    };

    student.greet();

**Output:**

    Hello Sahithya

**Answer:** `greet()` is a method because it is defined inside the `student` object.

---

## 2. What is the Difference Between a Function and a Method?

A **function** can exist independently, while a **method** is associated with an object or class.

Example:

    function greet() {
        console.log("Hello");
    }

    const student = {
        greet() {
            console.log("Hello");
        }
    };

**Answer:** The first `greet()` is a function. The second `greet()` is a method.

---

## 3. How Do You Create a Method Inside an Object?

We can define a method directly inside an object.

Example:

    const student = {
        greet() {
            console.log("Hello Sahithya");
        }
    };

    student.greet();

**Output:**

    Hello Sahithya

**Answer:** Define the method inside the object and call it using the object name.

---

## 4. Can a Method Accept Parameters?

**Yes.** A method can accept parameters just like a function.

Example:

    const student = {
        greet(name) {
            console.log("Hello " + name);
        }
    };

    student.greet("Sahithya");

**Output:**

    Hello Sahithya

**Answer:** A method can receive values through parameters.

---

## 5. Can a Method Return a Value?

**Yes.** A method can use `return` to send a value back.

Example:

    const calculator = {
        add(a, b) {
            return a + b;
        }
    };

    console.log(calculator.add(10, 20));

**Output:**

    30

**Answer:** A method can return a result using the `return` keyword.

---

## 6. What is `this` Inside a Method?

`this` refers to the **object that is calling the method**.

Example:

    const student = {
        name: "Sahithya",

        greet() {
            console.log(this.name);
        }
    };

    student.greet();

**Output:**

    Sahithya

**Answer:** `this.name` accesses the `name` property of the `student` object.

---

## 7. Can an Object Have Multiple Methods?

**Yes.** An object can have multiple methods.

Example:

    const student = {
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

**Answer:** An object can contain many methods for different actions.

---

## 8. Can One Method Call Another Method?

**Yes.**

Example:

    const student = {
        greet() {
            console.log("Hello");
        },

        start() {
            this.greet();
        }
    };

    student.start();

**Output:**

    Hello

**Answer:** One method can call another method using `this`.

---

## 9. Can We Create Methods Inside a Class?

**Yes.**

Example:

    class Student {
        greet() {
            console.log("Hello Sahithya");
        }
    }

    const student = new Student();

    student.greet();

**Output:**

    Hello Sahithya

**Answer:** Methods can be defined directly inside a class.

---

## 10. What is Method Shorthand?

Method shorthand is a **shorter syntax for defining methods inside an object**.

Example:

    const student = {
        greet() {
            console.log("Hello");
        }
    };

Instead of:

    const student = {
        greet: function() {
            console.log("Hello");
        }
    };

**Answer:** `greet()` is the shorter and commonly used syntax for defining an object method.

---

## 11. What is an Instance Method?

An **instance method is a method called using an object created from a class**.

Example:

    class Student {
        greet() {
            console.log("Hello");
        }
    }

    const student = new Student();

    student.greet();

**Output:**

    Hello

**Answer:** `greet()` is an instance method because it is called using the `student` object.

---

## 12. What is Method Overriding?

Method overriding happens when a **child class provides its own version of a parent method**.

Example:

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

**Answer:** The child class `Student` replaces the behavior of the parent's `greet()` method.

---

## 13. Can a Method Modify Object Properties?

**Yes.**

Example:

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

**Answer:** A method can change an object's properties.

---

## 14. Can a Method Have Multiple Parameters?

**Yes.**

Example:

    const calculator = {
        multiply(a, b) {
            return a * b;
        }
    };

    console.log(calculator.multiply(5, 4));

**Output:**

    20

**Answer:** A method can accept multiple parameters.

---

## 15. What is the Difference Between a Normal Method and a Static Method?

A **normal method is called using an object**, while a **static method is called using the class**.

Normal method:

    class Student {
        greet() {
            console.log("Hello");
        }
    }

    const student = new Student();

    student.greet();

Static method:

    class Student {
        static greet() {
            console.log("Hello");
        }
    }

    Student.greet();

**Simple Answer:**

    Normal Method → object.method()

    Static Method → Class.method()

---

# ⭐ Quick Interview Revision

| Concept | Simple Meaning |
|---|---|
| Method | Function associated with an object or class |
| Function | Block of code that can work independently |
| Parameter | Input given to a method |
| Return | Sends a value back |
| `this` | Refers to the current object |
| Instance Method | Method called using an object |
| Method Overriding | Child class changes a parent method |
| Static Method | Method called using the class |

---

# 🎯 Key Points to Remember

- A method is a function associated with an object or class.
- Methods can accept parameters.
- Methods can return values.
- `this` can access object properties.
- A class can contain multiple methods.
- Child classes can override parent methods.
- Normal methods are called using objects.
- Static methods are called using the class.
