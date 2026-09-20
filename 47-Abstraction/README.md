# 📘 Abstraction in JavaScript

## 🌟 What is Abstraction?

**Abstraction** means hiding unnecessary details and showing only the important parts.

### Example

    class Car {
        start() {
            console.log("Car started");
        }
    }

    const car = new Car();
    car.start();

### Output

    Car started

We only use `start()`. We do not need to know how the car starts internally.

---

## 🤔 Why Do We Use Abstraction?

We use abstraction to:

- Hide complex details
- Show only important information
- Make code easier to use
- Reduce unnecessary details
- Make programs easier to understand

---

# 📚 Concepts Covered

## 1. What is Abstraction?

Abstraction hides unnecessary details and shows only what is needed.

### Example

    class Mobile {
        call() {
            console.log("Calling...");
        }
    }

    const mobile = new Mobile();
    mobile.call();

---

## 2. Why Do We Use Abstraction?

Abstraction makes complex operations easier to use.

### Example

    class Calculator {
        add(a, b) {
            return a + b;
        }
    }

    const calculator = new Calculator();

    console.log(calculator.add(10, 20));

We only call `add()`. We do not need to know its internal working.

---

## 3. Hiding Complex Details

Abstraction hides the internal working of an operation.

### Example

    class ATM {
        withdraw() {
            console.log("Money withdrawn");
        }
    }

    const atm = new ATM();
    atm.withdraw();

The user only uses `withdraw()` without knowing the internal process.

---

## 4. Showing Only Necessary Details

Abstraction shows only the information that the user needs.

### Example

    class Student {
        showName() {
            console.log("Sahithya");
        }
    }

    const student = new Student();
    student.showName();

Only the required information is shown.

---

## 5. Abstraction with Methods

Methods can hide the internal steps of an operation.

### Example

    class Login {
        login() {
            console.log("Login successful");
        }
    }

    const user = new Login();
    user.login();

The user only calls `login()`.

---

## 6. Abstraction with Classes

A class can provide simple methods while hiding the internal details.

### Example

    class Bank {
        deposit() {
            console.log("Money deposited");
        }
    }

    const bank = new Bank();
    bank.deposit();

---

## 7. Abstract-Like Classes in JavaScript

JavaScript does not have a built-in `abstract` keyword like Java.

We can create an abstract-like class using methods that must be implemented by child classes.

### Example

    class Animal {
        sound() {
            throw new Error("sound() must be implemented");
        }
    }

    class Dog extends Animal {
        sound() {
            console.log("Bark");
        }
    }

    const dog = new Dog();
    dog.sound();

---

## 8. Abstract-Like Methods

An abstract-like method can force child classes to provide their own implementation.

### Example

    class Shape {
        draw() {
            throw new Error("draw() must be implemented");
        }
    }

    class Circle extends Shape {
        draw() {
            console.log("Drawing Circle");
        }
    }

    const circle = new Circle();
    circle.draw();

---

## 9. Throwing Errors for Required Methods

We can use `throw new Error()` when a method must be implemented by a child class.

### Example

    class Vehicle {
        start() {
            throw new Error("start() must be implemented");
        }
    }

    const vehicle = new Vehicle();

Calling `start()` will produce an error because it is not implemented.

---

## 10. Abstraction with Inheritance

Inheritance can be used to create a common structure for child classes.

### Example

    class Animal {
        eat() {
            console.log("Animal eats");
        }
    }

    class Dog extends Animal {
        sound() {
            console.log("Bark");
        }
    }

    const dog = new Dog();

    dog.eat();
    dog.sound();

The parent provides common functionality, while the child provides its own behavior.

---

## 11. Abstraction with `super`

`super` allows a child class to use a parent method.

### Example

    class Animal {
        eat() {
            console.log("Animal eats");
        }
    }

    class Dog extends Animal {
        show() {
            super.eat();
            console.log("Dog barks");
        }
    }

    const dog = new Dog();
    dog.show();

---

## 12. Abstraction in Real-Life Examples

Real-life systems hide complex processes and show simple operations.

### Example

    class ATM {
        withdraw() {
            console.log("Cash withdrawn");
        }

        checkBalance() {
            console.log("Balance checked");
        }
    }

    const atm = new ATM();

    atm.withdraw();
    atm.checkBalance();

The user does not need to know how the ATM works internally.

---

## 13. Abstraction with Private Methods

Private methods can hide internal operations from outside code.

### Example

    class BankAccount {
        #checkAccount() {
            console.log("Account checked");
        }

        withdraw() {
            this.#checkAccount();
            console.log("Money withdrawn");
        }
    }

    const account = new BankAccount();
    account.withdraw();

The private method is hidden from outside access.

---

## 14. Abstraction with Getters

A getter can provide simple access to data while hiding how the value is calculated.

### Example

    class Student {
        constructor(marks) {
            this.marks = marks;
        }

        get result() {
            return this.marks >= 35 ? "Pass" : "Fail";
        }
    }

    const student = new Student(80);

    console.log(student.result);

The user simply accesses `result` without knowing the calculation.

---

## 15. Complete Abstraction Example

Abstraction hides the internal steps and provides simple methods to the user.

### Example

    class Payment {
        pay() {
            this.#checkPayment();
            console.log("Payment successful");
        }

        #checkPayment() {
            console.log("Checking payment...");
        }
    }

    const payment = new Payment();

    payment.pay();

### Output

    Checking payment...
    Payment successful

The user only calls `pay()`. The internal `#checkPayment()` method is hidden.

---

# ⭐ Quick Revision

| Concept | Meaning |
|---|---|
| Abstraction | Hiding unnecessary details |
| Methods | Hide internal operations |
| Classes | Provide simple interfaces |
| Abstract-like Class | Used to create a common structure |
| Abstract-like Method | Must be implemented by child classes |
| `throw new Error()` | Shows that a method must be implemented |
| Inheritance | Shares common functionality |
| `super` | Calls a parent method |
| Private Methods | Hide internal operations |
| Getters | Provide simple access to calculated data |

---

# 🎯 Key Takeaways

- Abstraction means **hiding unnecessary details**.
- It shows only the important parts.
- JavaScript does not have a built-in `abstract` keyword.
- Abstract-like classes can be created using methods that throw errors.
- Inheritance can be used with abstraction.
- Private methods can hide internal operations.
- Getters can provide simple access to calculated values.
- Real-life examples include **ATM, payment systems, mobile phones, and banking systems**.

---

# 🎤 Interview Questions

1. What is abstraction?
2. Why do we use abstraction?
3. What is the difference between abstraction and encapsulation?
4. Does JavaScript support the `abstract` keyword?
5. How can we create an abstract-like class in JavaScript?
6. What is an abstract-like method?
7. Why do we use `throw new Error()`?
8. How does inheritance help with abstraction?
9. What is the use of `super`?
10. How do private methods help abstraction?
11. How can getters be used for abstraction?
12. Give a real-life example of abstraction.
13. What is the difference between an abstract class and a normal class?
14. Can we create an object from an abstract-like class in JavaScript?
15. Write a JavaScript example of abstraction.
