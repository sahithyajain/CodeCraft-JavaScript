# 📘 Classes in JavaScript

## 🌟 What is a Class?

A **class is a blueprint used to create objects**.

Think of it like a house blueprint:

**Class → Blueprint**  
**Object → Actual house**

    class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

Here, `Student` is a class.

---

## 🤔 Why Do We Use Classes?

Classes help us:

- Create multiple similar objects
- Keep related data and functions together
- Reuse code
- Organize large programs
- Make OOP easier to understand

Example:

    let student1 = new Student("Sahithya", 24);
    let student2 = new Student("Anu", 23);

Both objects are created using the same class.

---

# 📚 Concepts Covered

## 1. Creating a Class

We use the `class` keyword to create a class.

    class Student {
        // class code
    }

---

## 2. Creating an Object from a Class

We use `new` to create an object from a class.

    class Student {
    }

    let student = new Student();

---

## 3. Constructor in a Class

A `constructor` runs automatically when an object is created.

    class Student {
        constructor(name) {
            this.name = name;
        }
    }

    let student = new Student("Sahithya");

    console.log(student.name);

**Output:**

    Sahithya

---

## 4. Class Properties

Properties store information about an object.

    class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    let student = new Student("Sahithya", 24);

    console.log(student.age);

**Output:**

    24

---

## 5. Class Methods

A method is a function inside a class.

    class Student {
        greet() {
            console.log("Hello!");
        }
    }

    let student = new Student();

    student.greet();

**Output:**

    Hello!

---

## 6. Multiple Objects from a Class

One class can create many objects.

    class Student {
        constructor(name) {
            this.name = name;
        }
    }

    let student1 = new Student("Sahithya");
    let student2 = new Student("Anu");

    console.log(student1.name);
    console.log(student2.name);

**Output:**

    Sahithya
    Anu

---

## 7. Class with Properties and Methods

A class can contain both properties and methods.

    class Student {
        constructor(name) {
            this.name = name;
        }

        greet() {
            console.log("Hello " + this.name);
        }
    }

    let student = new Student("Sahithya");

    student.greet();

**Output:**

    Hello Sahithya

---

## 8. Passing Different Values

We can pass different values when creating objects.

    class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    let student1 = new Student("Sahithya", 24);
    let student2 = new Student("Anu", 23);

    console.log(student1.name);
    console.log(student2.name);

**Output:**

    Sahithya
    Anu

---

## 9. Updating Object Properties

We can change the property of an object.

    class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    let student = new Student("Sahithya", 24);

    student.age = 25;

    console.log(student.age);

**Output:**

    25

---

## 10. Adding a Method

We can add methods inside a class to perform actions.

    class Calculator {
        add(a, b) {
            return a + b;
        }
    }

    let calculator = new Calculator();

    console.log(calculator.add(10, 20));

**Output:**

    30

---

## 11. Class Expression

A class can also be stored in a variable.

    let Student = class {
        greet() {
            console.log("Hello!");
        }
    };

    let student = new Student();

    student.greet();

**Output:**

    Hello!

---

## 12. Checking an Object with `instanceof`

`instanceof` checks whether an object belongs to a class.

    class Student {
    }

    let student = new Student();

    console.log(student instanceof Student);

**Output:**

    true

---

## 13. Class Inheritance

One class can get features from another class.

    class Person {
        greet() {
            console.log("Hello!");
        }
    }

    class Student extends Person {
    }

    let student = new Student();

    student.greet();

**Output:**

    Hello!

---

## 14. Static Method

A static method belongs to the class, not to its objects.

    class Student {
        static greet() {
            console.log("Hello Students!");
        }
    }

    Student.greet();

**Output:**

    Hello Students!

---

## 15. Class Example

Here is a simple complete example.

    class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        introduce() {
            console.log("My name is " + this.name);
            console.log("My age is " + this.age);
        }
    }

    let student = new Student("Sahithya", 24);

    student.introduce();

**Output:**

    My name is Sahithya
    My age is 24

---

# ⭐ Quick Revision

| Concept | Simple Meaning |
|---|---|
| Class | Blueprint for creating objects |
| `class` | Creates a class |
| `new` | Creates an object |
| Constructor | Runs when an object is created |
| Property | Stores object data |
| Method | Function inside a class |
| `extends` | Creates inheritance |
| `instanceof` | Checks the object's class |
| `static` | Creates a class-level method |

---

# 🎯 Key Takeaways

- A **class is a blueprint**.
- Objects are created from classes.
- Use `class` to create a class.
- Use `new` to create an object.
- A `constructor` initializes the object.
- Classes can contain **properties and methods**.
- One class can create **many objects**.
- Classes make code easier to organize and reuse.

---

# 🎤 Interview Questions

1. What is a class in JavaScript?
2. Why do we use classes?
3. How do you create a class?
4. How do you create an object from a class?
5. What is a constructor?
6. What is a method in a class?
7. Can one class create multiple objects?
8. What is the `new` keyword?
9. What is `instanceof`?
10. What is a static method?
