# 📘 Inheritance in JavaScript

## 🌟 What is Inheritance?

**Inheritance** allows one class to use the properties and methods of another class.

👉 In simple words: **A child class can reuse code from a parent class.**

### Example

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

`Student` inherits the `greet()` method from `Person`.

---

## 🤔 Why Do We Use Inheritance?

We use inheritance to:

- ♻️ Reuse code
- 🚫 Avoid writing the same code again
- 👨‍👩‍👧 Create parent and child relationships
- 🧹 Keep code organized
- 🔧 Add new features to existing classes

---

# 📚 Concepts Covered

## 1. Parent Class

**Definition:** A parent class is a class whose properties and methods can be inherited by another class.

### Example

    class Person {
        greet() {
            console.log("Hello");
        }
    }

    const person = new Person();

    person.greet();

**Output:**

    Hello

`Person` is the parent class.

---

## 2. Child Class

**Definition:** A child class is a class that inherits from another class.

### Example

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

`Student` is the child class of `Person`.

---

## 3. `extends`

**Definition:** `extends` is used to create a child class from a parent class.

### Example

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

`Student extends Person` means Student inherits from Person.

---

## 4. Inheriting Methods

**Definition:** A child class can use methods from its parent class.

### Example

    class Person {
        greet() {
            console.log("Hello Sahithya");
        }
    }

    class Student extends Person {
    }

    const student = new Student();

    student.greet();

**Output:**

    Hello Sahithya

`Student` uses the `greet()` method inherited from `Person`.

---

## 5. Adding a New Method

**Definition:** A child class can have its own methods in addition to inherited methods.

### Example

    class Person {
        greet() {
            console.log("Hello");
        }
    }

    class Student extends Person {
        study() {
            console.log("Student is studying");
        }
    }

    const student = new Student();

    student.greet();
    student.study();

**Output:**

    Hello
    Student is studying

The child class can use both inherited and its own methods.

---

## 6. Inheriting Properties

**Definition:** A child class can use properties initialized by the parent constructor.

### Example

    class Person {
        constructor(name) {
            this.name = name;
        }
    }

    class Student extends Person {
    }

    const student = new Student("Sahithya");

    console.log(student.name);

**Output:**

    Sahithya

The `name` property is created by the parent constructor.

---

## 7. `super()`

**Definition:** `super()` calls the parent class constructor.

### Example

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
    }

    const student = new Student("Sahithya", "MCA");

    console.log(student.name);
    console.log(student.course);

**Output:**

    Sahithya
    MCA

`super(name)` calls the parent constructor.

---

## 8. Calling a Parent Method with `super`

**Definition:** `super.method()` is used to call a method from the parent class.

### Example

    class Person {
        greet() {
            console.log("Hello from Person");
        }
    }

    class Student extends Person {
        greet() {
            super.greet();
            console.log("Hello from Student");
        }
    }

    const student = new Student();

    student.greet();

**Output:**

    Hello from Person
    Hello from Student

`super.greet()` calls the parent's `greet()` method.

---

## 9. Method Overriding

**Definition:** Method overriding means creating a child method with the same name as a parent method.

### Example

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

The child's method replaces the inherited method when called on the child object.

---

## 10. Parent and Child Properties

**Definition:** A child class can have its own properties along with inherited properties.

### Example

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
    }

    const student = new Student("Sahithya", "MCA");

    console.log(student.name);
    console.log(student.course);

**Output:**

    Sahithya
    MCA

`name` comes from the parent and `course` is added by the child.

---

## 11. Multiple Levels of Inheritance

**Definition:** A class can inherit from a class that already inherits from another class.

### Example

    class Person {
        greet() {
            console.log("Hello");
        }
    }

    class Student extends Person {
        study() {
            console.log("Studying");
        }
    }

    class CollegeStudent extends Student {
        attendClass() {
            console.log("Attending class");
        }
    }

    const student = new CollegeStudent();

    student.greet();
    student.study();
    student.attendClass();

**Output:**

    Hello
    Studying
    Attending class

`CollegeStudent` gets methods from both `Student` and `Person`.

---

## 12. Inheritance with `instanceof`

**Definition:** `instanceof` checks whether an object belongs to a class or its inheritance chain.

### Example

    class Person {
    }

    class Student extends Person {
    }

    const student = new Student();

    console.log(student instanceof Student);
    console.log(student instanceof Person);

**Output:**

    true
    true

The student belongs to both `Student` and its parent `Person`.

---

## 13. Calling Parent Constructor

**Definition:** A child constructor must call `super()` before using `this`.

### Example

    class Person {
        constructor(name) {
            this.name = name;
        }
    }

    class Student extends Person {
        constructor(name) {
            super(name);
        }
    }

    const student = new Student("Sahithya");

    console.log(student.name);

**Output:**

    Sahithya

`super(name)` initializes the parent part of the object.

---

## 14. Real-Life Example

**Definition:** Inheritance can represent a general class and a more specific class.

### Example

    class Vehicle {
        start() {
            console.log("Vehicle started");
        }
    }

    class Car extends Vehicle {
        drive() {
            console.log("Car is driving");
        }
    }

    const car = new Car();

    car.start();
    car.drive();

**Output:**

    Vehicle started
    Car is driving

`Car` inherits `start()` from `Vehicle`.

---

## 15. Complete Inheritance Example

**Definition:** Inheritance allows a child class to reuse and extend the functionality of a parent class.

### Example

    class Person {
        constructor(name) {
            this.name = name;
        }

        greet() {
            console.log("Hello " + this.name);
        }
    }

    class Student extends Person {
        constructor(name, course) {
            super(name);
            this.course = course;
        }

        study() {
            console.log(this.name + " is studying " + this.course);
        }
    }

    const student = new Student("Sahithya", "MCA");

    student.greet();
    student.study();

**Output:**

    Hello Sahithya
    Sahithya is studying MCA

The `Student` class inherits from `Person` and also adds its own property and method.

---

# ⭐ Quick Revision

| Concept | Meaning |
|---|---|
| Inheritance | Reusing code from another class |
| Parent Class | Class being inherited |
| Child Class | Class that inherits |
| `extends` | Creates inheritance |
| `super()` | Calls parent constructor |
| `super.method()` | Calls parent method |
| Method Overriding | Child changes a parent method |
| `instanceof` | Checks class/inheritance relationship |
| Multiple Inheritance Levels | Inheritance across multiple classes |

---

# 🎯 Key Takeaways

- ♻️ Inheritance helps reuse code.
- `extends` creates a child class.
- A child class can use parent methods.
- A child class can add its own methods.
- `super()` calls the parent constructor.
- `super.method()` calls a parent method.
- A child class can override a parent method.
- `instanceof` can check inheritance relationships.

---

# 🎤 Interview Questions

1. What is inheritance in JavaScript?
2. Why do we use inheritance?
3. What is a parent class?
4. What is a child class?
5. What does `extends` do?
6. What is `super()`?
7. Why is `super()` used in a child constructor?
8. What is `super.method()`?
9. What is method overriding?
10. Can a child class have its own methods?
11. Can a child class use parent properties?
12. What happens if a child class has no constructor?
13. What does `instanceof` do?
14. Can inheritance have multiple levels?
15. Give a real-life example of inheritance.
