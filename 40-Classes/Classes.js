// CLASSES IN JAVASCRIPT
// =====================


// 1. CREATING A CLASS
// A class is a blueprint used to create objects.

class Student {
    // class code
}

console.log("Student class created");

// Output:
// Student class created

// Explanation:
// Student is a class.


/* ❌ Error Program

console.log(student.name);

Error:
ReferenceError: student is not defined

Error Explanation:
We are trying to use an object that has not been created.
*/


// ✅ Solution

class Student1 {
}

let student1 = new Student1();

console.log(student1);

// Output:
// Student1 {}

// Solution Explanation:
// We create an object from the class using new.


// --------------------------------------------------


// 2. CREATING AN OBJECT FROM A CLASS
// We use new to create an object from a class.

class Person {
}

let person = new Person();

console.log(person);

// Output:
// Person {}

// Explanation:
// person is an object created from the Person class.


/* ❌ Error Program

let person2 = Person();

Error:
TypeError: Class constructor Person cannot be invoked without 'new'

Error Explanation:
A class must be called using new.
*/


// ✅ Solution

let person3 = new Person();

console.log(person3);

// Output:
// Person {}

// Solution Explanation:
// new creates the object correctly.


// --------------------------------------------------


// 3. CONSTRUCTOR IN A CLASS
// A constructor runs automatically when an object is created.

class StudentInfo {
    constructor(name) {
        this.name = name;
    }
}

let studentInfo = new StudentInfo("Sahithya");

console.log(studentInfo.name);

// Output:
// Sahithya

// Explanation:
// The constructor gives the object its name.


/* ❌ Error Program

console.log(studentInfo.age.toString());

Error:
TypeError: Cannot read properties of undefined

Error Explanation:
age was not created in the object.
*/


// ✅ Solution

class StudentInfo2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let studentInfo2 = new StudentInfo2("Sahithya", 24);

console.log(studentInfo2.age);

// Output:
// 24

// Solution Explanation:
// We add age in the constructor.


// --------------------------------------------------


// 4. CLASS PROPERTIES
// Properties store information about an object.

class StudentData {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let studentData = new StudentData("Sahithya", 24);

console.log(studentData.name);
console.log(studentData.age);

// Output:
// Sahithya
// 24

// Explanation:
// name and age are properties of the object.


/* ❌ Error Program

console.log(studentData.course.toUpperCase());

Error:
TypeError: Cannot read properties of undefined

Error Explanation:
course does not exist.
*/


// ✅ Solution

studentData.course = "MCA";

console.log(studentData.course);

// Output:
// MCA

// Solution Explanation:
// We add the course property before using it.


// --------------------------------------------------


// 5. CLASS METHODS
// A method is a function inside a class.

class Greeting {
    greet() {
        console.log("Hello!");
    }
}

let greeting = new Greeting();

greeting.greet();

// Output:
// Hello!

// Explanation:
// greet() is a method inside the class.


/* ❌ Error Program

greeting.sayHello();

Error:
TypeError: greeting.sayHello is not a function

Error Explanation:
sayHello() does not exist in the class.
*/


// ✅ Solution

greeting.greet();

// Output:
// Hello!

// Solution Explanation:
// We call the method that exists.


// --------------------------------------------------


// 6. MULTIPLE OBJECTS FROM A CLASS
// One class can create many objects.

class StudentMultiple {
    constructor(name) {
        this.name = name;
    }
}

let studentA = new StudentMultiple("Sahithya");
let studentB = new StudentMultiple("Anu");

console.log(studentA.name);
console.log(studentB.name);

// Output:
// Sahithya
// Anu

// Explanation:
// Both objects were created from the same class.


/* ❌ Error Program

console.log(studentC.name);

Error:
ReferenceError: studentC is not defined

Error Explanation:
studentC was never created.
*/


// ✅ Solution

let studentC = new StudentMultiple("Rahul");

console.log(studentC.name);

// Output:
// Rahul

// Solution Explanation:
// We create studentC before using it.


// --------------------------------------------------


// 7. CLASS WITH PROPERTIES AND METHODS
// A class can contain both properties and methods.

class StudentProfile {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

let profile = new StudentProfile("Sahithya");

profile.greet();

// Output:
// Hello Sahithya

// Explanation:
// The class contains a property and a method.


/* ❌ Error Program

profile.greetUser();

Error:
TypeError: profile.greetUser is not a function

Error Explanation:
greetUser() is not defined.
*/


// ✅ Solution

profile.greet();

// Output:
// Hello Sahithya

// Solution Explanation:
// We call the correct method.


// --------------------------------------------------


// 8. PASSING DIFFERENT VALUES
// We can pass different values when creating objects.

class StudentValues {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let valueStudent1 = new StudentValues("Sahithya", 24);
let valueStudent2 = new StudentValues("Anu", 23);

console.log(valueStudent1.name);
console.log(valueStudent2.name);

// Output:
// Sahithya
// Anu

// Explanation:
// The same class can receive different values.


/* ❌ Error Program

let valueStudent3 = new StudentValues();

console.log(valueStudent3.name.toUpperCase());

Error:
TypeError: Cannot read properties of undefined

Error Explanation:
No name was provided.
*/


// ✅ Solution

let valueStudent3 = new StudentValues("Rahul", 22);

console.log(valueStudent3.name);

// Output:
// Rahul

// Solution Explanation:
// We provide the required values.


// --------------------------------------------------


// 9. UPDATING OBJECT PROPERTIES
// We can change a property after creating an object.

class StudentUpdate {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let updateStudent = new StudentUpdate("Sahithya", 24);

updateStudent.age = 25;

console.log(updateStudent.age);

// Output:
// 25

// Explanation:
// The age property was changed from 24 to 25.


/* ❌ Error Program

updateStudent.age.toUpperCase();

Error:
TypeError: updateStudent.age.toUpperCase is not a function

Error Explanation:
age contains a number, not a string.
*/


// ✅ Solution

console.log(updateStudent.age);

// Output:
// 25

// Solution Explanation:
// We use the number directly.


// --------------------------------------------------


// 10. ADDING A METHOD
// Methods can perform actions.

class Calculator {
    add(a, b) {
        return a + b;
    }
}

let calculator = new Calculator();

console.log(calculator.add(10, 20));

// Output:
// 30

// Explanation:
// add() returns the sum of two numbers.


/* ❌ Error Program

console.log(calculator.subtract(10, 5));

Error:
TypeError: calculator.subtract is not a function

Error Explanation:
subtract() was not defined.
*/


// ✅ Solution

class Calculator2 {
    subtract(a, b) {
        return a - b;
    }
}

let calculator2 = new Calculator2();

console.log(calculator2.subtract(10, 5));

// Output:
// 5

// Solution Explanation:
// We define subtract() before using it.


// --------------------------------------------------


// 11. CLASS EXPRESSION
// A class can also be stored in a variable.

let StudentExpression = class {
    greet() {
        console.log("Hello!");
    }
};

let expressionStudent = new StudentExpression();

expressionStudent.greet();

// Output:
// Hello!

// Explanation:
// The class is stored inside the StudentExpression variable.


/* ❌ Error Program

let expressionStudent2 = new StudentExpression2();

Error:
ReferenceError: StudentExpression2 is not defined

Error Explanation:
StudentExpression2 does not exist.
*/


// ✅ Solution

let expressionStudent2 = new StudentExpression();

expressionStudent2.greet();

// Output:
// Hello!

// Solution Explanation:
// We use the correct class variable.


// --------------------------------------------------


// 12. instanceof
// instanceof checks whether an object belongs to a class.

class StudentCheck {
}

let checkStudent = new StudentCheck();

console.log(checkStudent instanceof StudentCheck);

// Output:
// true

// Explanation:
// checkStudent was created from StudentCheck.


/* ❌ Error Program

console.log(checkStudent instanceof StudentCheck2);

Error:
ReferenceError: StudentCheck2 is not defined

Error Explanation:
StudentCheck2 does not exist.
*/


// ✅ Solution

console.log(checkStudent instanceof StudentCheck);

// Output:
// true

// Solution Explanation:
// We check against the class that exists.


// --------------------------------------------------


// 13. CLASS INHERITANCE
// One class can get features from another class.

class PersonBase {
    greet() {
        console.log("Hello!");
    }
}

class StudentChild extends PersonBase {
}

let childStudent = new StudentChild();

childStudent.greet();

// Output:
// Hello!

// Explanation:
// StudentChild gets greet() from PersonBase.


/* ❌ Error Program

childStudent.study();

Error:
TypeError: childStudent.study is not a function

Error Explanation:
study() does not exist in StudentChild or PersonBase.
*/


// ✅ Solution

class StudentChild2 extends PersonBase {
    study() {
        console.log("Studying");
    }
}

let childStudent2 = new StudentChild2();

childStudent2.study();

// Output:
// Studying

// Solution Explanation:
// We define the study() method before calling it.


// --------------------------------------------------


// 14. STATIC METHOD
// A static method belongs to the class, not its objects.

class StudentStatic {
    static greet() {
        console.log("Hello Students!");
    }
}

StudentStatic.greet();

// Output:
// Hello Students!

// Explanation:
// We call a static method using the class name.


/* ❌ Error Program

let staticStudent = new StudentStatic();

staticStudent.greet();

Error:
TypeError: staticStudent.greet is not a function

Error Explanation:
A static method belongs to the class, not the object.
*/


// ✅ Solution

StudentStatic.greet();

// Output:
// Hello Students!

// Solution Explanation:
// Static methods are called using the class name.


// --------------------------------------------------


// 15. COMPLETE CLASS EXAMPLE
// A class can contain properties, a constructor, and methods.

class StudentFinal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
    }
}

let finalStudent = new StudentFinal("Sahithya", 24);

finalStudent.introduce();

// Output:
// My name is Sahithya
// My age is 24

// Explanation:
// StudentFinal creates a student object with name and age.
// introduce() displays the student's information.


// ❌ Error Program

let finalStudent2 = new StudentFinal();

finalStudent2.introduce();

// Output:
// My name is undefined
// My age is undefined

// Error Explanation:
// No name or age was given when creating the object.


// ✅ Solution

let finalStudent3 = new StudentFinal("Sahithya", 24);

finalStudent3.introduce();

// Output:
// My name is Sahithya
// My age is 24

// Solution Explanation:
// We provide the required values when creating the object.


// ==================================================
// QUICK REVISION
// ==================================================
//
// Class        → Blueprint for creating objects
// class        → Keyword used to create a class
// new          → Creates an object
// Constructor  → Runs when an object is created
// Property     → Stores object data
// Method       → Function inside a class
// extends      → Used for inheritance
// instanceof   → Checks an object's class
// static       → Creates a class-level method
//
// ==================================================
