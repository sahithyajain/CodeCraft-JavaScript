# 📘 Constructors in JavaScript

## 🌟 What is a Constructor?

A **constructor is a special method that runs automatically when an object is created**.

It is mainly used to give initial values to an object.

    class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    let student = new Student("Sahithya", 24);

    console.log(student.name);

**Output:**

    Sahithya

---

## 🤔 Why Do We Use Constructors?

Constructors help us:

- Give initial values to objects
- Create similar objects easily
- Avoid repeating the same code
- Set up an object when it is created

---

# 📚 Concepts Covered

## 1. Basic Constructor

A constructor is written using the `constructor` keyword.

    class Student {
        constructor() {
            console.log("Student created");
        }
    }

    let student = new Student();

**Output:**

    Student created

---

## 2. Constructor with Parameters

We can pass values to the constructor.

    class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    let student = new Student("Sahithya", 24);

    console.log(student.name);
    console.log(student.age);

**Output:**

    Sahithya
    24

---

## 3. Using `this` in Constructor

`this` refers to the object being created.

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

## 4. Creating Multiple Objects

One constructor can be used to create many objects.

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

## 5. Constructor with Multiple Properties

A constructor can initialize multiple properties.

    class Car {
        constructor(brand, model, price) {
            this.brand = brand;
            this.model = model;
            this.price = price;
        }
    }

    let car = new Car("Toyota", "Camry", 3000000);

    console.log(car.brand);
    console.log(car.model);
    console.log(car.price);

**Output:**

    Toyota
    Camry
    3000000

---

## 6. Constructor with Default Values

We can give a default value to a parameter.

    class Student {
        constructor(name, age = 18) {
            this.name = name;
            this.age = age;
        }
    }

    let student = new Student("Sahithya");

    console.log(student.age);

**Output:**

    18

---

## 7. Constructor with a Method

A class can have a constructor and methods together.

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

## 8. Constructor Runs Automatically

We do not call the constructor separately.

    class Student {
        constructor() {
            console.log("Constructor called");
        }
    }

    let student = new Student();

**Output:**

    Constructor called

The constructor runs automatically when `new Student()` is used.

---

## 9. Constructor Without Parameters

A constructor does not always need parameters.

    class Message {
        constructor() {
            this.text = "Hello";
        }
    }

    let message = new Message();

    console.log(message.text);

**Output:**

    Hello

---

## 10. Constructor with Different Objects

Different values can create different objects.

    class Employee {
        constructor(name, salary) {
            this.name = name;
            this.salary = salary;
        }
    }

    let employee1 = new Employee("Sahithya", 30000);
    let employee2 = new Employee("Anu", 35000);

    console.log(employee1.name);
    console.log(employee2.name);

**Output:**

    Sahithya
    Anu

---

## 11. Constructor and Object Initialization

The constructor initializes the object when it is created.

    class Mobile {
        constructor(brand) {
            this.brand = brand;
        }
    }

    let mobile = new Mobile("Samsung");

    console.log(mobile.brand);

**Output:**

    Samsung

---

## 12. Constructor in Inheritance

When using inheritance, `super()` is used to call the parent constructor.

    class Person {
        constructor(name) {
            this.name = name;
        }
    }

    class Student extends Person {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
    }

    let student = new Student("Sahithya", 24);

    console.log(student.name);
    console.log(student.age);

**Output:**

    Sahithya
    24

---

## 13. Constructor Error

A class constructor cannot be called like a normal function.

    class Student {
        constructor(name) {
            this.name = name;
        }
    }

    let student = Student("Sahithya");

**Error:**

    TypeError: Class constructor Student cannot be invoked without 'new'

Use `new` to create the object.

---

## 14. Constructor with Calculation

A constructor can also calculate values.

    class Rectangle {
        constructor(length, width) {
            this.length = length;
            this.width = width;
            this.area = length * width;
        }
    }

    let rectangle = new Rectangle(10, 5);

    console.log(rectangle.area);

**Output:**

    50

---

## 15. Complete Constructor Example

    class Student {
        constructor(name, age, course) {
            this.name = name;
            this.age = age;
            this.course = course;
        }

        introduce() {
            console.log("My name is " + this.name);
            console.log("I am " + this.age + " years old");
            console.log("I studied " + this.course);
        }
    }

    let student = new Student("Sahithya", 24, "MCA");

    student.introduce();

**Output:**

    My name is Sahithya
    I am 24 years old
    I studied MCA

---

# ⭐ Quick Revision

| Concept | Simple Meaning |
|---|---|
| Constructor | Runs when an object is created |
| `constructor` | Keyword used to define it |
| `this` | Refers to the current object |
| Parameter | Value given to the constructor |
| `new` | Creates a new object |
| `super()` | Calls the parent constructor |
| Initialization | Giving initial values to an object |

---

# 🎯 Key Takeaways

- A constructor runs **automatically**.
- It is written using `constructor`.
- It initializes object properties.
- It can accept parameters.
- One constructor can create many objects.
- Use `new` when creating an object.
- `super()` is used with a parent class.

---

# 🎤 Interview Questions

1. What is a constructor in JavaScript?
2. Why do we use constructors?
3. When does a constructor run?
4. Can a constructor have parameters?
5. What is the use of `this` in a constructor?
6. Can one constructor create multiple objects?
7. Why do we use the `new` keyword?
8. What is `super()`?
9. Can a constructor have default values?
10. What happens if we call a class without `new`?
