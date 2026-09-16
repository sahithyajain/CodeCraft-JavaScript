# 📘 OOP Basics in JavaScript

## 🌟 What is OOP?

**OOP (Object-Oriented Programming) is a way of writing programs by using objects.**

An object can contain **data and functions** together.

### Example:

    const student = {
        name: "Sahithya",
        age: 24,

        greet() {
            console.log("Hello!");
        }
    };

    student.greet();

**Output:**

    Hello!

**Explanation:**  
`student` is an object. It contains data like `name` and `age`, and a function called `greet()`.

---

## 🤔 Why Do We Use OOP?

- To organize code
- To reuse code
- To avoid repeating code
- To make large programs easier to manage
- To keep related data and functions together
- To make code easier to maintain

---

# 📚 Concepts Covered

## 1. Objects

**Definition:** An object is a collection of related data and functions.

    const student = {
        name: "Sahithya",
        age: 24
    };

    console.log(student.name);

**Output:**

    Sahithya

**Explanation:**  
The `student` object stores information about a student.

---

## 2. Properties

**Definition:** Properties are the data stored inside an object.

    const student = {
        name: "Sahithya",
        age: 24
    };

    console.log(student.age);

**Output:**

    24

**Explanation:**  
`name` and `age` are properties of the `student` object.

---

## 3. Methods

**Definition:** A method is a function inside an object.

    const student = {
        name: "Sahithya",

        greet() {
            console.log("Hello Sahithya");
        }
    };

    student.greet();

**Output:**

    Hello Sahithya

**Explanation:**  
`greet()` is a method because it is a function inside the object.

---

## 4. Creating Multiple Objects

**Definition:** We can create different objects to store different data.

    const student1 = {
        name: "Sahithya",
        age: 24
    };

    const student2 = {
        name: "Anu",
        age: 22
    };

    console.log(student1.name);
    console.log(student2.name);

**Output:**

    Sahithya
    Anu

**Explanation:**  
Each object has its own data.

---

## 5. Constructor Function

**Definition:** A constructor function is used to create multiple objects with the same structure.

    function Student(name, age) {
        this.name = name;
        this.age = age;
    }

    const student = new Student("Sahithya", 24);

    console.log(student.name);

**Output:**

    Sahithya

**Explanation:**  
`Student()` can create student objects with a name and age.

---

## 6. The `this` Keyword

**Definition:** `this` refers to the object that is using the method.

    const student = {
        name: "Sahithya",

        greet() {
            console.log(this.name);
        }
    };

    student.greet();

**Output:**

    Sahithya

**Explanation:**  
Here, `this` refers to the `student` object.

---

## 7. Encapsulation

**Definition:** Encapsulation means keeping related data and functions together in one place.

    const student = {
        name: "Sahithya",

        showName() {
            console.log(this.name);
        }
    };

    student.showName();

**Output:**

    Sahithya

**Explanation:**  
The student's data and function are kept together inside the `student` object.

---

## 8. Inheritance

**Definition:** Inheritance allows one class to use features from another class.

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

**Explanation:**  
`Student` gets the `greet()` method from `Person`.

---

## 9. Polymorphism

**Definition:** Polymorphism allows the same method to behave differently in different classes.

    class Animal {
        sound() {
            console.log("Animal sound");
        }
    }

    class Dog extends Animal {
        sound() {
            console.log("Dog barks");
        }
    }

    const dog = new Dog();

    dog.sound();

**Output:**

    Dog barks

**Explanation:**  
Both classes have a `sound()` method, but `Dog` gives it different behavior.

---

## 10. Abstraction

**Definition:** Abstraction means showing only what is needed and hiding unnecessary details.

    class Car {
        start() {
            console.log("Car started");
        }
    }

    const car = new Car();

    car.start();

**Output:**

    Car started

**Explanation:**  
We only use `start()`. We do not need to know how the car starts internally.

---

## 11. Reusability

**Definition:** OOP allows us to use the same code for multiple objects.

    class Student {
        greet() {
            console.log("Hello Student");
        }
    }

    const student1 = new Student();
    const student2 = new Student();

    student1.greet();
    student2.greet();

**Output:**

    Hello Student
    Hello Student

**Explanation:**  
The same `greet()` method is reused by both objects.

---

## 12. `new` Keyword

**Definition:** The `new` keyword creates a new object from a class or constructor function.

    class Student {
        constructor(name) {
            this.name = name;
        }
    }

    const student = new Student("Sahithya");

    console.log(student.name);

**Output:**

    Sahithya

**Explanation:**  
`new Student()` creates a new `student` object.

---

## 13. Constructor

**Definition:** A constructor is a special method that runs automatically when an object is created.

    class Student {
        constructor(name) {
            this.name = name;
        }
    }

    const student = new Student("Sahithya");

    console.log(student.name);

**Output:**

    Sahithya

**Explanation:**  
When `new Student()` is used, the constructor runs automatically and sets the student's name.

---

## 14. Class

**Definition:** A class is a blueprint used to create objects.

    class Student {
        greet() {
            console.log("Hello Student");
        }
    }

    const student = new Student();

    student.greet();

**Output:**

    Hello Student

**Explanation:**  
The `Student` class is like a blueprint. We use it to create student objects.

---

## 15. Four Main Principles of OOP

**Definition:** The four main principles of OOP are **Encapsulation, Inheritance, Polymorphism, and Abstraction**.

### Encapsulation
Keeping related data and functions together.

### Inheritance
Getting features from another class.

### Polymorphism
Using the same method with different behavior.

### Abstraction
Showing only the necessary details.

**Example:**

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

**Explanation:**  
These principles help us organize and reuse code in OOP.

---

# ⭐ Quick Revision

| **Concept** | **Simple Meaning** |
|---|---|
| Object | Stores related data and functions |
| Property | Data inside an object |
| Method | Function inside an object |
| Constructor Function | Creates similar objects |
| `this` | Refers to the current object |
| Encapsulation | Keeps related data and functions together |
| Inheritance | Gets features from another class |
| Polymorphism | Same method, different behavior |
| Abstraction | Hides unnecessary details |
| Reusability | Allows code to be used again |
| `new` | Creates a new object |
| Constructor | Initializes an object |
| Class | Blueprint for creating objects |

---

# 🎯 Key Takeaways

- **OOP** means Object-Oriented Programming.
- OOP helps us organize code using objects.
- Objects contain **properties and methods**.
- A **class** is a blueprint for creating objects.
- A **constructor** initializes an object.
- `this` refers to the current object.
- **Inheritance** helps reuse features from another class.
- **Encapsulation** keeps related data and functions together.
- **Polymorphism** allows the same method to have different behavior.
- **Abstraction** hides unnecessary details.
- OOP makes code easier to **organize, reuse, and maintain**.

---

# 🎤 Interview Questions

1. What is OOP?
2. Why do we use OOP in JavaScript?
3. What is an object?
4. What is a property?
5. What is a method?
6. What is a class?
7. What is a constructor?
8. What is the `this` keyword?
9. What is inheritance?
10. What is encapsulation?
11. What is polymorphism?
12. What is abstraction?
13. What is the use of the `new` keyword?
14. What is a constructor function?
15. What are the four main principles of OOP?
