// 1. WHAT IS ABSTRACTION
// Abstraction hides unnecessary details and shows only what is needed.

// Normal Program
class Car1 {
    start() {
        console.log("Car started");
    }
}

const car1 = new Car1();
car1.start();

// Output:
// Car started

// Explanation:
// We only use start() without knowing its internal working.

// ❌ Error Program
class Car1Error {
    start() {
        console.log("Car started");
    }
}

const car1Error = new Car1Error();
car1Error.run();

// Error:
// TypeError: car1Error.run is not a function

// Error Explanation:
// run() does not exist in the class.

// ✅ Solution
class Car1Solution {
    start() {
        console.log("Car started");
    }
}

const car1Solution = new Car1Solution();
car1Solution.start();

// Output:
// Car started

// Solution Explanation:
// Use the correct start() method.

// --------------------------------------------------


// 2. WHY DO WE USE ABSTRACTION
// Abstraction makes complex operations easier to use.

// Normal Program
class Calculator2 {
    add(a, b) {
        return a + b;
    }
}

const calculator2 = new Calculator2();

console.log(calculator2.add(10, 20));

// Output:
// 30

// Explanation:
// We only use add() without worrying about its internal working.

// ❌ Error Program
class Calculator2Error {
    add(a, b) {
        return a + b;
    }
}

const calculator2Error = new Calculator2Error();

console.log(calculator2Error.sum(10, 20));

// Error:
// TypeError: calculator2Error.sum is not a function

// Error Explanation:
// sum() does not exist in the class.

// ✅ Solution
class Calculator2Solution {
    add(a, b) {
        return a + b;
    }
}

const calculator2Solution = new Calculator2Solution();

console.log(calculator2Solution.add(10, 20));

// Output:
// 30

// Solution Explanation:
// Use the correct add() method.

// --------------------------------------------------


// 3. HIDING COMPLEX DETAILS
// Abstraction hides the internal working of an operation.

// Normal Program
class ATM3 {
    withdraw() {
        console.log("Money withdrawn");
    }
}

const atm3 = new ATM3();
atm3.withdraw();

// Output:
// Money withdrawn

// Explanation:
// The user only calls withdraw().

// ❌ Error Program
class ATM3Error {
    withdraw() {
        console.log("Money withdrawn");
    }
}

const atm3Error = new ATM3Error();
atm3Error.takeMoney();

// Error:
// TypeError: atm3Error.takeMoney is not a function

// Error Explanation:
// takeMoney() does not exist.

// ✅ Solution
class ATM3Solution {
    withdraw() {
        console.log("Money withdrawn");
    }
}

const atm3Solution = new ATM3Solution();
atm3Solution.withdraw();

// Output:
// Money withdrawn

// Solution Explanation:
// Use the correct withdraw() method.

// --------------------------------------------------


// 4. SHOWING ONLY NECESSARY DETAILS
// Abstraction shows only the information that is needed.

// Normal Program
class Student4 {
    showName() {
        console.log("Sahithya");
    }
}

const student4 = new Student4();
student4.showName();

// Output:
// Sahithya

// Explanation:
// The method shows only the required information.

// ❌ Error Program
class Student4Error {
    showName() {
        console.log("Sahithya");
    }
}

const student4Error = new Student4Error();
student4Error.name();

// Error:
// TypeError: student4Error.name is not a function

// Error Explanation:
// name() is not a method in the class.

// ✅ Solution
class Student4Solution {
    showName() {
        console.log("Sahithya");
    }
}

const student4Solution = new Student4Solution();
student4Solution.showName();

// Output:
// Sahithya

// Solution Explanation:
// Use the correct showName() method.

// --------------------------------------------------


// 5. ABSTRACTION WITH METHODS
// A method can hide the internal steps of an operation.

// Normal Program
class Login5 {
    login() {
        console.log("Login successful");
    }
}

const login5 = new Login5();
login5.login();

// Output:
// Login successful

// Explanation:
// We simply call login() without knowing the internal steps.

// ❌ Error Program
class Login5Error {
    login() {
        console.log("Login successful");
    }
}

const login5Error = new Login5Error();
login5Error.signIn();

// Error:
// TypeError: login5Error.signIn is not a function

// Error Explanation:
// signIn() does not exist.

// ✅ Solution
class Login5Solution {
    login() {
        console.log("Login successful");
    }
}

const login5Solution = new Login5Solution();
login5Solution.login();

// Output:
// Login successful

// Solution Explanation:
// Call the correct login() method.

// --------------------------------------------------


// 6. ABSTRACTION WITH CLASSES
// A class can provide simple methods while hiding details.

// Normal Program
class Bank6 {
    deposit() {
        console.log("Money deposited");
    }
}

const bank6 = new Bank6();
bank6.deposit();

// Output:
// Money deposited

// Explanation:
// The class gives us a simple deposit() method.

// ❌ Error Program
class Bank6Error {
    deposit() {
        console.log("Money deposited");
    }
}

const bank6Error = new Bank6Error();
bank6Error.addMoney();

// Error:
// TypeError: bank6Error.addMoney is not a function

// Error Explanation:
// addMoney() does not exist.

// ✅ Solution
class Bank6Solution {
    deposit() {
        console.log("Money deposited");
    }
}

const bank6Solution = new Bank6Solution();
bank6Solution.deposit();

// Output:
// Money deposited

// Solution Explanation:
// Use the deposit() method provided by the class.

// --------------------------------------------------


// 7. ABSTRACT-LIKE CLASSES IN JAVASCRIPT
// JavaScript has no abstract keyword, but we can create abstract-like classes.

// Normal Program
class Animal7 {
    sound() {
        throw new Error("sound() must be implemented");
    }
}

class Dog7 extends Animal7 {
    sound() {
        console.log("Bark");
    }
}

const dog7 = new Dog7();
dog7.sound();

// Output:
// Bark

// Explanation:
// Dog7 provides its own implementation of sound().

// ❌ Error Program
class Animal7Error {
    sound() {
        throw new Error("sound() must be implemented");
    }
}

const animal7Error = new Animal7Error();
animal7Error.sound();

// Error:
// Error: sound() must be implemented

// Error Explanation:
// The parent method expects a child class to implement it.

// ✅ Solution
class Animal7Solution {
    sound() {
        throw new Error("sound() must be implemented");
    }
}

class Dog7Solution extends Animal7Solution {
    sound() {
        console.log("Bark");
    }
}

const dog7Solution = new Dog7Solution();
dog7Solution.sound();

// Output:
// Bark

// Solution Explanation:
// The child class implements sound().

// --------------------------------------------------


// 8. ABSTRACT-LIKE METHODS
// An abstract-like method must be implemented by the child class.

// Normal Program
class Shape8 {
    draw() {
        throw new Error("draw() must be implemented");
    }
}

class Circle8 extends Shape8 {
    draw() {
        console.log("Drawing Circle");
    }
}

const circle8 = new Circle8();
circle8.draw();

// Output:
// Drawing Circle

// Explanation:
// Circle8 provides the required draw() method.

// ❌ Error Program
class Shape8Error {
    draw() {
        throw new Error("draw() must be implemented");
    }
}

const shape8Error = new Shape8Error();
shape8Error.draw();

// Error:
// Error: draw() must be implemented

// Error Explanation:
// The abstract-like method has not been implemented.

// ✅ Solution
class Shape8Solution {
    draw() {
        throw new Error("draw() must be implemented");
    }
}

class Circle8Solution extends Shape8Solution {
    draw() {
        console.log("Drawing Circle");
    }
}

const circle8Solution = new Circle8Solution();
circle8Solution.draw();

// Output:
// Drawing Circle

// Solution Explanation:
// Circle8Solution implements draw().

// --------------------------------------------------


// 9. THROWING ERRORS FOR REQUIRED METHODS
// throw new Error() can tell us that a method must be implemented.

// Normal Program
class Vehicle9 {
    start() {
        throw new Error("start() must be implemented");
    }
}

class Car9 extends Vehicle9 {
    start() {
        console.log("Car started");
    }
}

const car9 = new Car9();
car9.start();

// Output:
// Car started

// Explanation:
// Car9 implements the required start() method.

// ❌ Error Program
class Vehicle9Error {
    start() {
        throw new Error("start() must be implemented");
    }
}

const vehicle9Error = new Vehicle9Error();
vehicle9Error.start();

// Error:
// Error: start() must be implemented

// Error Explanation:
// The parent class does not provide the actual implementation.

// ✅ Solution
class Vehicle9Solution {
    start() {
        throw new Error("start() must be implemented");
    }
}

class Car9Solution extends Vehicle9Solution {
    start() {
        console.log("Car started");
    }
}

const car9Solution = new Car9Solution();
car9Solution.start();

// Output:
// Car started

// Solution Explanation:
// The child class provides the required method.

// --------------------------------------------------


// 10. ABSTRACTION WITH INHERITANCE
// Inheritance can provide common methods to child classes.

// Normal Program
class Animal10 {
    eat() {
        console.log("Animal eats");
    }
}

class Dog10 extends Animal10 {
    sound() {
        console.log("Bark");
    }
}

const dog10 = new Dog10();

dog10.eat();
dog10.sound();

// Output:
// Animal eats
// Bark

// Explanation:
// The parent provides eat(), while the child provides sound().

// ❌ Error Program
class Animal10Error {
    eat() {
        console.log("Animal eats");
    }
}

class Dog10Error extends Animal10Error {
    sound() {
        console.log("Bark");
    }
}

const dog10Error = new Dog10Error();
dog10Error.sleep();

// Error:
// TypeError: dog10Error.sleep is not a function

// Error Explanation:
// sleep() does not exist.

// ✅ Solution
class Animal10Solution {
    eat() {
        console.log("Animal eats");
    }
}

class Dog10Solution extends Animal10Solution {
    sound() {
        console.log("Bark");
    }
}

const dog10Solution = new Dog10Solution();

dog10Solution.eat();
dog10Solution.sound();

// Output:
// Animal eats
// Bark

// Solution Explanation:
// Use the inherited eat() and child sound() methods.

// --------------------------------------------------


// 11. ABSTRACTION WITH super
// super allows a child class to use a parent method.

// Normal Program
class Animal11 {
    eat() {
        console.log("Animal eats");
    }
}

class Dog11 extends Animal11 {
    show() {
        super.eat();
        console.log("Dog barks");
    }
}

const dog11 = new Dog11();
dog11.show();

// Output:
// Animal eats
// Dog barks

// Explanation:
// super.eat() calls the parent method.

// ❌ Error Program
class Animal11Error {
    eat() {
        console.log("Animal eats");
    }
}

class Dog11Error extends Animal11Error {
    show() {
        super.sleep();
    }
}

const dog11Error = new Dog11Error();
dog11Error.show();

// Error:
// TypeError: (intermediate value).sleep is not a function

// Error Explanation:
// sleep() does not exist in the parent class.

// ✅ Solution
class Animal11Solution {
    eat() {
        console.log("Animal eats");
    }
}

class Dog11Solution extends Animal11Solution {
    show() {
        super.eat();
        console.log("Dog barks");
    }
}

const dog11Solution = new Dog11Solution();
dog11Solution.show();

// Output:
// Animal eats
// Dog barks

// Solution Explanation:
// super.eat() correctly calls the parent method.

// --------------------------------------------------


// 12. ABSTRACTION IN REAL-LIFE EXAMPLES
// Real-life systems hide complex processes and provide simple actions.

// Normal Program
class ATM12 {
    withdraw() {
        console.log("Cash withdrawn");
    }

    balance() {
        console.log("Balance checked");
    }
}

const atm12 = new ATM12();

atm12.withdraw();
atm12.balance();

// Output:
// Cash withdrawn
// Balance checked

// Explanation:
// The user uses simple methods without knowing the internal ATM process.

// ❌ Error Program
class ATM12Error {
    withdraw() {
        console.log("Cash withdrawn");
    }
}

const atm12Error = new ATM12Error();
atm12Error.money();

// Error:
// TypeError: atm12Error.money is not a function

// Error Explanation:
// money() is not available in the class.

// ✅ Solution
class ATM12Solution {
    withdraw() {
        console.log("Cash withdrawn");
    }
}

const atm12Solution = new ATM12Solution();
atm12Solution.withdraw();

// Output:
// Cash withdrawn

// Solution Explanation:
// Use the available withdraw() method.

// --------------------------------------------------


// 13. ABSTRACTION WITH PRIVATE METHODS
// Private methods can hide internal operations.

// Normal Program
class BankAccount13 {
    #checkAccount() {
        console.log("Account checked");
    }

    withdraw() {
        this.#checkAccount();
        console.log("Money withdrawn");
    }
}

const account13 = new BankAccount13();
account13.withdraw();

// Output:
// Account checked
// Money withdrawn

// Explanation:
// #checkAccount() is hidden and used only inside the class.

// ❌ Error Program
class BankAccount13Error {
    #checkAccount() {
        console.log("Account checked");
    }
}

const account13Error = new BankAccount13Error();

/*
account13Error.#checkAccount();

// Error:
// SyntaxError: Private field '#checkAccount' must be declared in an enclosing class
*/

// Error Explanation:
// Private methods cannot be accessed from outside the class.

// ✅ Solution
class BankAccount13Solution {
    #checkAccount() {
        console.log("Account checked");
    }

    withdraw() {
        this.#checkAccount();
        console.log("Money withdrawn");
    }
}

const account13Solution = new BankAccount13Solution();
account13Solution.withdraw();

// Output:
// Account checked
// Money withdrawn

// Solution Explanation:
// Call the public withdraw() method.
// It internally uses the private method.

// --------------------------------------------------


// 14. ABSTRACTION WITH GETTERS
// A getter provides simple access to a calculated value.

// Normal Program
class Student14 {
    constructor(marks) {
        this.marks = marks;
    }

    get result() {
        return this.marks >= 35 ? "Pass" : "Fail";
    }
}

const student14 = new Student14(80);

console.log(student14.result);

// Output:
// Pass

// Explanation:
// The getter calculates the result internally.

// ❌ Error Program
class Student14Error {
    constructor(marks) {
        this.marks = marks;
    }

    get result() {
        return this.marks >= 35 ? "Pass" : "Fail";
    }
}

const student14Error = new Student14Error(80);

console.log(student14Error.results);

// Error:
// undefined

// Error Explanation:
// The getter name is result, not results.

// ✅ Solution
class Student14Solution {
    constructor(marks) {
        this.marks = marks;
    }

    get result() {
        return this.marks >= 35 ? "Pass" : "Fail";
    }
}

const student14Solution = new Student14Solution(80);

console.log(student14Solution.result);

// Output:
// Pass

// Solution Explanation:
// Use the correct getter name.

// --------------------------------------------------


// 15. COMPLETE ABSTRACTION EXAMPLE
// Abstraction hides internal steps and provides simple methods.

// Normal Program
class Payment15 {
    #checkPayment() {
        console.log("Checking payment");
    }

    pay() {
        this.#checkPayment();
        console.log("Payment successful");
    }
}

const payment15 = new Payment15();

payment15.pay();

// Output:
// Checking payment
// Payment successful

// Explanation:
// The user only calls pay().
// The internal #checkPayment() method is hidden.

// ❌ Error Program
class Payment15Error {
    #checkPayment() {
        console.log("Checking payment");
    }

    pay() {
        this.#checkPayment();
        console.log("Payment successful");
    }
}

const payment15Error = new Payment15Error();

/*
payment15Error.#checkPayment();

// Error:
// SyntaxError: Private field '#checkPayment' must be declared in an enclosing class
*/

// Error Explanation:
// A private method cannot be accessed from outside the class.

// ✅ Solution
class Payment15Solution {
    #checkPayment() {
        console.log("Checking payment");
    }

    pay() {
        this.#checkPayment();
        console.log("Payment successful");
    }
}

const payment15Solution = new Payment15Solution();

payment15Solution.pay();

// Output:
// Checking payment
// Payment successful

// Solution Explanation:
// Use the public pay() method.
// The private method runs internally.

// --------------------------------------------------
