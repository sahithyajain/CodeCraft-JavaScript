// ========================================
// 📘 INHERITANCE IN JAVASCRIPT
// ========================================


// 1. Parent Class
console.log("1. Parent Class");

class Person1 {
    greet() {
        console.log("Hello");
    }
}

const person1 = new Person1();

person1.greet();

/*
Output:
Hello

Explanation:
Person1 is the parent class.
*/


// 2. Child Class
console.log("\n2. Child Class");

class Person2 {
    greet() {
        console.log("Hello");
    }
}

class Student2 extends Person2 {
}

const student2 = new Student2();

student2.greet();

/*
Output:
Hello

Explanation:
Student2 is the child class of Person2.
*/


// 3. extends
console.log("\n3. extends");

class Person3 {
    greet() {
        console.log("Hello");
    }
}

class Student3 extends Person3 {
}

const student3 = new Student3();

student3.greet();

/*
Output:
Hello

Explanation:
extends creates a child class from a parent class.
*/


// 4. Inheriting Methods
console.log("\n4. Inheriting Methods");

class Person4 {
    greet() {
        console.log("Hello Sahithya");
    }
}

class Student4 extends Person4 {
}

const student4 = new Student4();

student4.greet();

/*
Output:
Hello Sahithya

Explanation:
Student4 inherits the greet() method from Person4.
*/


// 5. Adding a New Method
console.log("\n5. Adding a New Method");

class Person5 {
    greet() {
        console.log("Hello");
    }
}

class Student5 extends Person5 {
    study() {
        console.log("Student is studying");
    }
}

const student5 = new Student5();

student5.greet();
student5.study();

/*
Output:
Hello
Student is studying

Explanation:
The child class can use inherited methods and
also have its own methods.
*/


// 6. Inheriting Properties
console.log("\n6. Inheriting Properties");

class Person6 {
    constructor(name) {
        this.name = name;
    }
}

class Student6 extends Person6 {
}

const student6 = new Student6("Sahithya");

console.log(student6.name);

/*
Output:
Sahithya

Explanation:
The name property is initialized by the parent constructor.
*/


// 7. super()
console.log("\n7. super()");

class Person7 {
    constructor(name) {
        this.name = name;
    }
}

class Student7 extends Person7 {
    constructor(name, course) {
        super(name);
        this.course = course;
    }
}

const student7 = new Student7("Sahithya", "MCA");

console.log(student7.name);
console.log(student7.course);

/*
Output:
Sahithya
MCA

Explanation:
super(name) calls the parent constructor.
*/


// 8. Calling a Parent Method with super
console.log("\n8. Calling a Parent Method with super");

class Person8 {
    greet() {
        console.log("Hello from Person");
    }
}

class Student8 extends Person8 {
    greet() {
        super.greet();
        console.log("Hello from Student");
    }
}

const student8 = new Student8();

student8.greet();

/*
Output:
Hello from Person
Hello from Student

Explanation:
super.greet() calls the parent's greet() method.
*/


// 9. Method Overriding
console.log("\n9. Method Overriding");

class Person9 {
    greet() {
        console.log("Hello from Person");
    }
}

class Student9 extends Person9 {
    greet() {
        console.log("Hello from Student");
    }
}

const student9 = new Student9();

student9.greet();

/*
Output:
Hello from Student

Explanation:
The child class has its own greet() method,
so it overrides the parent method.
*/


// 10. Parent and Child Properties
console.log("\n10. Parent and Child Properties");

class Person10 {
    constructor(name) {
        this.name = name;
    }
}

class Student10 extends Person10 {
    constructor(name, course) {
        super(name);
        this.course = course;
    }
}

const student10 = new Student10("Sahithya", "MCA");

console.log(student10.name);
console.log(student10.course);

/*
Output:
Sahithya
MCA

Explanation:
name comes from the parent and course is added by the child.
*/


// 11. Multiple Levels of Inheritance
console.log("\n11. Multiple Levels of Inheritance");

class Person11 {
    greet() {
        console.log("Hello");
    }
}

class Student11 extends Person11 {
    study() {
        console.log("Studying");
    }
}

class CollegeStudent11 extends Student11 {
    attendClass() {
        console.log("Attending class");
    }
}

const student11 = new CollegeStudent11();

student11.greet();
student11.study();
student11.attendClass();

/*
Output:
Hello
Studying
Attending class

Explanation:
CollegeStudent11 inherits from Student11,
and Student11 inherits from Person11.
*/


// 12. Inheritance with instanceof
console.log("\n12. Inheritance with instanceof");

class Person12 {
}

class Student12 extends Person12 {
}

const student12 = new Student12();

console.log(student12 instanceof Student12);
console.log(student12 instanceof Person12);

/*
Output:
true
true

Explanation:
student12 belongs to Student12 and its parent Person12.
*/


// 13. Calling Parent Constructor
console.log("\n13. Calling Parent Constructor");

class Person13 {
    constructor(name) {
        this.name = name;
    }
}

class Student13 extends Person13 {
    constructor(name) {
        super(name);
    }
}

const student13 = new Student13("Sahithya");

console.log(student13.name);

/*
Output:
Sahithya

Explanation:
super(name) initializes the parent part of the object.
*/


// 14. Real-Life Example
console.log("\n14. Real-Life Example");

class Vehicle14 {
    start() {
        console.log("Vehicle started");
    }
}

class Car14 extends Vehicle14 {
    drive() {
        console.log("Car is driving");
    }
}

const car14 = new Car14();

car14.start();
car14.drive();

/*
Output:
Vehicle started
Car is driving

Explanation:
Car14 inherits start() from Vehicle14.
*/


// 15. Complete Inheritance Example
console.log("\n15. Complete Inheritance Example");

class Person15 {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

class Student15 extends Person15 {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    study() {
        console.log(this.name + " is studying " + this.course);
    }
}

const student15 = new Student15("Sahithya", "MCA");

student15.greet();
student15.study();

/*
Output:
Hello Sahithya
Sahithya is studying MCA

Explanation:
Student15 inherits from Person15 and adds its own
property and method.
*/


// ========================================
// ❌ ERROR EXAMPLES
// ========================================

// Error 1: Using this before super()
/*
class PersonError1 {
    constructor(name) {
        this.name = name;
    }
}

class StudentError1 extends PersonError1 {
    constructor(name) {
        this.name = name;
    }
}

const studentError1 = new StudentError1("Sahithya");

Error:
ReferenceError: Must call super constructor in derived
class before accessing 'this'
*/


// Error 2: Calling super() twice
/*
class PersonError2 {
    constructor(name) {
        this.name = name;
    }
}

class StudentError2 extends PersonError2 {
    constructor(name) {
        super(name);
        super(name);
    }
}

Error:
ReferenceError: Super constructor may only be called once
*/


// Error 3: Calling a method that does not exist
/*
class PersonError3 {
    greet() {
        console.log("Hello");
    }
}

class StudentError3 extends PersonError3 {
}

const studentError3 = new StudentError3();

studentError3.study();

Error:
TypeError: studentError3.study is not a function
*/


// Error 4: Trying to extend a non-class value
/*
const PersonError4 = 10;

class StudentError4 extends PersonError4 {
}

Error:
TypeError: Class extends value 10 is not a constructor
*/


// ========================================
// ✅ SIMPLE SOLUTIONS
// ========================================


// Solution 1: Use super() before this
class PersonSolution1 {
    constructor(name) {
        this.name = name;
    }
}

class StudentSolution1 extends PersonSolution1 {
    constructor(name) {
        super(name);
    }
}

const studentSolution1 = new StudentSolution1("Sahithya");

console.log(studentSolution1.name);

/*
Output:
Sahithya

Explanation:
super() must be called before using this in a child constructor.
*/


// Solution 2: Call super() only once
class PersonSolution2 {
    constructor(name) {
        this.name = name;
    }
}

class StudentSolution2 extends PersonSolution2 {
    constructor(name) {
        super(name);
    }
}

const studentSolution2 = new StudentSolution2("Sahithya");

console.log(studentSolution2.name);

/*
Output:
Sahithya

Explanation:
The parent constructor is called only once.
*/


// Solution 3: Add the required method
class PersonSolution3 {
    greet() {
        console.log("Hello");
    }
}

class StudentSolution3 extends PersonSolution3 {
    study() {
        console.log("Student is studying");
    }
}

const studentSolution3 = new StudentSolution3();

studentSolution3.study();

/*
Output:
Student is studying

Explanation:
The child class now has its own study() method.
*/


// Solution 4: Extend a valid class
class PersonSolution4 {
    greet() {
        console.log("Hello");
    }
}

class StudentSolution4 extends PersonSolution4 {
}

const studentSolution4 = new StudentSolution4();

studentSolution4.greet();

/*
Output:
Hello

Explanation:
StudentSolution4 correctly extends a class.
*/
