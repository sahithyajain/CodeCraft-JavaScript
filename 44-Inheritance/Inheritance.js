// ========================================
// 📘 INHERITANCE IN JAVASCRIPT
// ========================================


// 1. PARENT CLASS
console.log("1. Parent Class");

// A parent class is a class whose properties and methods
// can be inherited by another class.

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


// ❌ Error Program

const person1Error = new Person1();

person1Error.study();

/*
Error:
TypeError: person1Error.study is not a function

Error Explanation:
study() is not defined in the Person1 class.
*/


// ✅ Solution

class PersonSolution1 {
    greet() {
        console.log("Hello");
    }

    study() {
        console.log("Person is studying");
    }
}

const personSolution1 = new PersonSolution1();

personSolution1.study();

/*
Output:
Person is studying

Solution Explanation:
The study() method is now defined in the class.
*/


// --------------------------------------------------


// 2. CHILD CLASS
console.log("\n2. Child Class");

// A child class is a class that inherits from another class.

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


// ❌ Error Program

class PersonError2 {
    greet() {
        console.log("Hello");
    }
}

class StudentError2 {
}

const studentError2 = new StudentError2();

studentError2.greet();

/*
Error:
TypeError: studentError2.greet is not a function

Error Explanation:
StudentError2 does not inherit from PersonError2.
*/


// ✅ Solution

class StudentSolution2 extends PersonError2 {
}

const studentSolution2 = new StudentSolution2();

studentSolution2.greet();

/*
Output:
Hello

Solution Explanation:
StudentSolution2 extends PersonError2,
so it inherits the greet() method.
*/


// --------------------------------------------------


// 3. extends
console.log("\n3. extends");

// extends is used to create a child class from a parent class.

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
Student3 extends Person3,
so Student3 inherits from Person3.
*/


// ❌ Error Program

class PersonError3 {
    greet() {
        console.log("Hello");
    }
}

class StudentError3 {
}

const studentError3 = new StudentError3();

studentError3.greet();

/*
Error:
TypeError: studentError3.greet is not a function

Error Explanation:
The child class does not use extends,
so it does not inherit greet().
*/


// ✅ Solution

class StudentSolution3 extends PersonError3 {
}

const studentSolution3 = new StudentSolution3();

studentSolution3.greet();

/*
Output:
Hello

Solution Explanation:
extends creates the inheritance relationship.
*/


// --------------------------------------------------


// 4. INHERITING METHODS
console.log("\n4. Inheriting Methods");

// A child class can use methods from its parent class.

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


// ❌ Error Program

const student4Error = new Student4();

student4Error.study();

/*
Error:
TypeError: student4Error.study is not a function

Error Explanation:
study() is not defined in Student4 or Person4.
*/


// ✅ Solution

class StudentSolution4 extends Person4 {
    study() {
        console.log("Student is studying");
    }
}

const studentSolution4 = new StudentSolution4();

studentSolution4.greet();
studentSolution4.study();

/*
Output:
Hello Sahithya
Student is studying

Solution Explanation:
The child class can use inherited methods
and also define its own methods.
*/


// --------------------------------------------------


// 5. ADDING A NEW METHOD
console.log("\n5. Adding a New Method");

// A child class can have its own methods
// in addition to inherited methods.

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
The child class can use both inherited
and its own methods.
*/


// ❌ Error Program

const student5Error = new Student5();

student5Error.play();

/*
Error:
TypeError: student5Error.play is not a function

Error Explanation:
play() is not defined in the child or parent class.
*/


// ✅ Solution

class StudentSolution5 extends Person5 {
    study() {
        console.log("Student is studying");
    }

    play() {
        console.log("Student is playing");
    }
}

const studentSolution5 = new StudentSolution5();

studentSolution5.greet();
studentSolution5.study();
studentSolution5.play();

/*
Output:
Hello
Student is studying
Student is playing

Solution Explanation:
The child class can add new methods.
*/


// --------------------------------------------------


// 6. INHERITING PROPERTIES
console.log("\n6. Inheriting Properties");

// A child class can use properties initialized
// by the parent constructor.

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
The name property is created by the parent constructor.
*/


// ❌ Error Program

const student6Error = new Student6();

console.log(student6Error.name.toUpperCase());

/*
Error:
TypeError: Cannot read properties of undefined

Error Explanation:
No name was passed to the constructor,
so name is undefined.
*/


// ✅ Solution

const studentSolution6 = new Student6("Sahithya");

console.log(studentSolution6.name.toUpperCase());

/*
Output:
SAHITHYA

Solution Explanation:
A valid name is passed to the parent constructor.
*/


// --------------------------------------------------


// 7. super()
console.log("\n7. super()");

// super() calls the parent class constructor.

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


// ❌ Error Program

class PersonError7 {
    constructor(name) {
        this.name = name;
    }
}

class StudentError7 extends PersonError7 {
    constructor(name) {
        this.name = name;
    }
}

const studentError7 = new StudentError7("Sahithya");

/*
Error:
ReferenceError: Must call super constructor in derived
class before accessing 'this'

Error Explanation:
A child constructor must call super()
before using this.
*/


// ✅ Solution

class StudentSolution7 extends PersonError7 {
    constructor(name) {
        super(name);
    }
}

const studentSolution7 = new StudentSolution7("Sahithya");

console.log(studentSolution7.name);

/*
Output:
Sahithya

Solution Explanation:
super(name) calls the parent constructor
before using the child object.
*/


// --------------------------------------------------


// 8. CALLING A PARENT METHOD WITH super
console.log("\n8. Calling a Parent Method with super");

// super.method() is used to call a method
// from the parent class.

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


// ❌ Error Program

class PersonError8 {
    greet() {
        console.log("Hello from Person");
    }
}

class StudentError8 extends PersonError8 {
    greet() {
        super.welcome();
    }
}

const studentError8 = new StudentError8();

studentError8.greet();

/*
Error:
TypeError: (intermediate value).welcome is not a function

Error Explanation:
welcome() does not exist in the parent class.
*/


// ✅ Solution

class StudentSolution8 extends PersonError8 {
    greet() {
        super.greet();
        console.log("Hello from Student");
    }
}

const studentSolution8 = new StudentSolution8();

studentSolution8.greet();

/*
Output:
Hello from Person
Hello from Student

Solution Explanation:
super.greet() correctly calls the parent method.
*/


// --------------------------------------------------


// 9. METHOD OVERRIDING
console.log("\n9. Method Overriding");

// Method overriding means creating a child method
// with the same name as a parent method.

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
The child's greet() method overrides
the parent's greet() method.
*/


// ❌ Error Program

class PersonError9 {
    greet() {
        console.log("Hello from Person");
    }
}

class StudentError9 extends PersonError9 {
    greet() {
        console.log("Hello from Student");
    }
}

const studentError9 = new StudentError9();

studentError9.welcome();

/*
Error:
TypeError: studentError9.welcome is not a function

Error Explanation:
welcome() is not defined in the parent or child class.
*/


// ✅ Solution

const studentSolution9 = new StudentError9();

studentSolution9.greet();

/*
Output:
Hello from Student

Solution Explanation:
The child class has the greet() method,
so it overrides the parent method.
*/


// --------------------------------------------------


// 10. PARENT AND CHILD PROPERTIES
console.log("\n10. Parent and Child Properties");

// A child class can have its own properties
// along with inherited properties.

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


// ❌ Error Program

const student10Error = new Student10("Sahithya");

console.log(student10Error.course.toUpperCase());

/*
Error:
TypeError: Cannot read properties of undefined

Error Explanation:
course was not provided,
so course is undefined.
*/


// ✅ Solution

const studentSolution10 = new Student10("Sahithya", "MCA");

console.log(studentSolution10.name);
console.log(studentSolution10.course.toUpperCase());

/*
Output:
Sahithya
MCA

Solution Explanation:
Both the parent and child properties are initialized.
*/


// --------------------------------------------------


// 11. MULTIPLE LEVELS OF INHERITANCE
console.log("\n11. Multiple Levels of Inheritance");

// A class can inherit from a class that already
// inherits from another class.

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


// ❌ Error Program

class PersonError11 {
    greet() {
        console.log("Hello");
    }
}

class StudentError11 extends PersonError11 {
}

class CollegeStudentError11 extends StudentError11 {
}

const studentError11 = new CollegeStudentError11();

studentError11.study();

/*
Error:
TypeError: studentError11.study is not a function

Error Explanation:
study() was not defined in StudentError11
or any class above it.
*/


// ✅ Solution

class StudentSolution11 extends PersonError11 {
    study() {
        console.log("Studying");
    }
}

class CollegeStudentSolution11 extends StudentSolution11 {
    attendClass() {
        console.log("Attending class");
    }
}

const studentSolution11 = new CollegeStudentSolution11();

studentSolution11.greet();
studentSolution11.study();
studentSolution11.attendClass();

/*
Output:
Hello
Studying
Attending class

Solution Explanation:
CollegeStudentSolution11 inherits through
multiple levels.
*/


// --------------------------------------------------


// 12. INHERITANCE WITH instanceof
console.log("\n12. Inheritance with instanceof");

// instanceof checks whether an object belongs
// to a class or its inheritance chain.

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
The student belongs to Student12 and its parent Person12.
*/


// ❌ Error Program

class PersonError12 {
}

class StudentError12 extends PersonError12 {
}

const studentError12 = new StudentError12();

console.log(studentError12 instanceof "StudentError12");

/*
Error:
TypeError: Right-hand side of 'instanceof'
is not an object

Error Explanation:
instanceof requires a constructor or function,
not a string.
*/


// ✅ Solution

const studentSolution12 = new StudentError12();

console.log(studentSolution12 instanceof StudentError12);
console.log(studentSolution12 instanceof PersonError12);

/*
Output:
true
true

Solution Explanation:
The object belongs to StudentError12
and its parent PersonError12.
*/


// --------------------------------------------------


// 13. CALLING PARENT CONSTRUCTOR
console.log("\n13. Calling Parent Constructor");

// A child constructor must call super()
// before using this.

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


// ❌ Error Program

class PersonError13 {
    constructor(name) {
        this.name = name;
    }
}

class StudentError13 extends PersonError13 {
    constructor(name) {
        this.name = name;
    }
}

const studentError13 = new StudentError13("Sahithya");

/*
Error:
ReferenceError: Must call super constructor in derived
class before accessing 'this'

Error Explanation:
A child constructor must call super()
before using this.
*/


// ✅ Solution

class StudentSolution13 extends PersonError13 {
    constructor(name) {
        super(name);
    }
}

const studentSolution13 = new StudentSolution13("Sahithya");

console.log(studentSolution13.name);

/*
Output:
Sahithya

Solution Explanation:
super(name) calls the parent constructor first.
*/


// --------------------------------------------------


// 14. REAL-LIFE EXAMPLE
console.log("\n14. Real-Life Example");

// Inheritance can represent a general class
// and a more specific class.

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


// ❌ Error Program

class VehicleError14 {
    start() {
        console.log("Vehicle started");
    }
}

class CarError14 extends VehicleError14 {
}

const carError14 = new CarError14();

carError14.drive();

/*
Error:
TypeError: carError14.drive is not a function

Error Explanation:
drive() is not defined in CarError14.
*/


// ✅ Solution

class CarSolution14 extends VehicleError14 {
    drive() {
        console.log("Car is driving");
    }
}

const carSolution14 = new CarSolution14();

carSolution14.start();
carSolution14.drive();

/*
Output:
Vehicle started
Car is driving

Solution Explanation:
CarSolution14 inherits start()
and has its own drive() method.
*/


// --------------------------------------------------


// 15. COMPLETE INHERITANCE EXAMPLE
console.log("\n15. Complete Inheritance Example");

// Inheritance allows a child class to reuse
// and extend the functionality of a parent class.

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
Student15 inherits from Person15 and adds
its own property and method.
*/


// ❌ Error Program

let finalStudent2 = new Student15();

finalStudent2.study();

/*
Output:
undefined is studying undefined

Error Explanation:
No values were passed to the constructor,
so name and course are undefined.
*/


// ✅ Solution

let finalStudent3 = new Student15("Sahithya", "MCA");

finalStudent3.greet();
finalStudent3.study();

/*
Output:
Hello Sahithya
Sahithya is studying MCA

Solution Explanation:
We pass the required values when creating the object.
*/


// --------------------------------------------------


// ==================================================
// ⭐ QUICK REVISION
// ==================================================

// Inheritance      → Reusing code from another class
// Parent Class     → Class being inherited
// Child Class      → Class that inherits
// extends          → Creates inheritance
// super()          → Calls parent constructor
// super.method()   → Calls parent method
// Method Overriding → Child changes a parent method
// instanceof       → Checks class/inheritance relationship
// Multiple Levels  → Inheritance across multiple classes
