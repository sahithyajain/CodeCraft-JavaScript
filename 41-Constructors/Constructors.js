// CONSTRUCTORS IN JAVASCRIPT
// ==========================


// 1. BASIC CONSTRUCTOR
// A constructor runs automatically when an object is created.

class Student {
    constructor() {
        console.log("Student created");
    }
}

let student = new Student();

// Output:
// Student created

// Explanation:
// The constructor runs automatically when new Student() is used.


// ❌ Error Program

let student2 = Student();

// Error:
// TypeError: Class constructor Student cannot be invoked without 'new'

// Error Explanation:
// A class constructor must be called using new.


// ✅ Solution

let student3 = new Student();

// Output:
// Student created

// Solution Explanation:
// new creates the object and runs the constructor.


// --------------------------------------------------


// 2. CONSTRUCTOR WITH PARAMETERS
// We can pass values to the constructor.

class StudentInfo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let studentInfo = new StudentInfo("Sahithya", 24);

console.log(studentInfo.name);
console.log(studentInfo.age);

// Output:
// Sahithya
// 24

// Explanation:
// name and age are passed to the constructor.


// ❌ Error Program

console.log(studentInfo.name.toUpperCase());
console.log(studentInfo.age.toUpperCase());

// Error:
// TypeError: studentInfo.age.toUpperCase is not a function

// Error Explanation:
// age is a number, so toUpperCase() cannot be used.


// ✅ Solution

console.log(studentInfo.name.toUpperCase());
console.log(studentInfo.age);

// Output:
// SAHITHYA
// 24

// Solution Explanation:
// toUpperCase() is used only with the name string.


// --------------------------------------------------


// 3. USING this IN A CONSTRUCTOR
// this refers to the object being created.

class StudentName {
    constructor(name) {
        this.name = name;
    }
}

let studentName = new StudentName("Sahithya");

console.log(studentName.name);

// Output:
// Sahithya

// Explanation:
// this.name stores the name inside the new object.


// ❌ Error Program

class StudentWrong {
    constructor(name) {
        this.fullName = name;
    }
}

let wrongStudent = new StudentWrong("Sahithya");

console.log(wrongStudent.name.toUpperCase());

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// The property is called fullName, not name.


// ✅ Solution

console.log(wrongStudent.fullName.toUpperCase());

// Output:
// SAHITHYA

// Solution Explanation:
// We use the property that was created.


// --------------------------------------------------


// 4. CREATING MULTIPLE OBJECTS
// One constructor can create many objects.

class StudentMultiple {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let student1 = new StudentMultiple("Sahithya", 24);
let student4 = new StudentMultiple("Anu", 23);

console.log(student1.name);
console.log(student4.name);

// Output:
// Sahithya
// Anu

// Explanation:
// The same constructor is used for different objects.


// ❌ Error Program

console.log(student5.name);

// Error:
// ReferenceError: student5 is not defined

// Error Explanation:
// student5 was never created.


// ✅ Solution

let student5 = new StudentMultiple("Rahul", 22);

console.log(student5.name);

// Output:
// Rahul

// Solution Explanation:
// We create the object before using it.


// --------------------------------------------------


// 5. CONSTRUCTOR WITH MULTIPLE PROPERTIES
// A constructor can initialize many properties.

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

// Output:
// Toyota
// Camry
// 3000000

// Explanation:
// The constructor initializes three properties.


// ❌ Error Program

console.log(car.brand.toFixed(2));

// Error:
// TypeError: car.brand.toFixed is not a function

// Error Explanation:
// brand is a string, not a number.


// ✅ Solution

console.log(car.price.toFixed(2));

// Output:
// 3000000.00

// Solution Explanation:
// price is a number, so toFixed() can be used.


// --------------------------------------------------


// 6. CONSTRUCTOR WITH DEFAULT VALUES
// A parameter can have a default value.

class StudentDefault {
    constructor(name, age = 18) {
        this.name = name;
        this.age = age;
    }
}

let defaultStudent = new StudentDefault("Sahithya");

console.log(defaultStudent.age);

// Output:
// 18

// Explanation:
// 18 is used because no age was provided.


// ❌ Error Program

console.log(defaultStudent.name.toFixed(2));

// Error:
// TypeError: defaultStudent.name.toFixed is not a function

// Error Explanation:
// name is a string, not a number.


// ✅ Solution

console.log(defaultStudent.name);
console.log(defaultStudent.age);

// Output:
// Sahithya
// 18

// Solution Explanation:
// We use each property correctly.


// --------------------------------------------------


// 7. CONSTRUCTOR WITH A METHOD
// A class can have a constructor and methods together.

class StudentGreeting {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

let greetingStudent = new StudentGreeting("Sahithya");

greetingStudent.greet();

// Output:
// Hello Sahithya

// Explanation:
// The constructor stores the name and greet() uses it.


// ❌ Error Program

greetingStudent.welcome();

// Error:
// TypeError: greetingStudent.welcome is not a function

// Error Explanation:
// welcome() is not defined in the class.


// ✅ Solution

greetingStudent.greet();

// Output:
// Hello Sahithya

// Solution Explanation:
// We call the method that exists.


// --------------------------------------------------


// 8. CONSTRUCTOR RUNS AUTOMATICALLY
// We do not call the constructor separately.

class Message {
    constructor() {
        console.log("Constructor called");
    }
}

let message = new Message();

// Output:
// Constructor called

// Explanation:
// The constructor runs automatically when the object is created.


// ❌ Error Program

message.constructor();

// Output:
// Constructor called

// Error Explanation:
// This is not the normal way to initialize the object.
// The constructor already ran when new Message() was used.


// ✅ Solution

let message2 = new Message();

// Output:
// Constructor called

// Solution Explanation:
// Use new to create the object and run the constructor.


// --------------------------------------------------


// 9. CONSTRUCTOR WITHOUT PARAMETERS
// A constructor does not always need parameters.

class Welcome {
    constructor() {
        this.text = "Hello";
    }
}

let welcome = new Welcome();

console.log(welcome.text);

// Output:
// Hello

// Explanation:
// The constructor gives text a value automatically.


// ❌ Error Program

console.log(welcome.message.toUpperCase());

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// message does not exist in the object.


// ✅ Solution

console.log(welcome.text.toUpperCase());

// Output:
// HELLO

// Solution Explanation:
// text is the property created by the constructor.


// --------------------------------------------------


// 10. CONSTRUCTOR WITH DIFFERENT OBJECTS
// Different values create different objects.

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

// Output:
// Sahithya
// Anu

// Explanation:
// Both objects use the same constructor.


// ❌ Error Program

console.log(employee1.salary.toUpperCase());

// Error:
// TypeError: employee1.salary.toUpperCase is not a function

// Error Explanation:
// salary is a number.


// ✅ Solution

console.log(employee1.salary);

// Output:
// 30000

// Solution Explanation:
// salary is used as a number.


// --------------------------------------------------


// 11. OBJECT INITIALIZATION
// The constructor initializes an object when it is created.

class Mobile {
    constructor(brand) {
        this.brand = brand;
    }
}

let mobile = new Mobile("Samsung");

console.log(mobile.brand);

// Output:
// Samsung

// Explanation:
// The constructor initializes the brand property.


// ❌ Error Program

console.log(mobile.model.toUpperCase());

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// model was not initialized.


// ✅ Solution

mobile.model = "Galaxy";

console.log(mobile.model);

// Output:
// Galaxy

// Solution Explanation:
// We add the model before using it.


// --------------------------------------------------


// 12. CONSTRUCTOR IN INHERITANCE
// super() is used to call the parent constructor.

class Person {
    constructor(name) {
        this.name = name;
    }
}

class StudentChild extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

let childStudent = new StudentChild("Sahithya", 24);

console.log(childStudent.name);
console.log(childStudent.age);

// Output:
// Sahithya
// 24

// Explanation:
// super(name) calls the Person constructor.


// ❌ Error Program

class Teacher extends Person {
    constructor(name, subject) {
        this.subject = subject;
    }
}

// Error:
// ReferenceError / ReferenceError caused by using this before super()

// Error Explanation:
// A derived class constructor must call super()
// before using this.


// ✅ Solution

class Teacher2 extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

let teacher = new Teacher2("Anu", "JavaScript");

console.log(teacher.name);
console.log(teacher.subject);

// Output:
// Anu
// JavaScript

// Solution Explanation:
// super() calls the parent constructor first.


// --------------------------------------------------


// 13. CONSTRUCTOR CALLED WITHOUT new
// A class constructor cannot be called like a normal function.

class User {
    constructor(name) {
        this.name = name;
    }
}


/* ❌ Error Program

let user = User("Sahithya");

Error:
TypeError: Class constructor User cannot be invoked without 'new'

Error Explanation:
Class constructors must be called with new.
*/


// ✅ Solution

let user = new User("Sahithya");

console.log(user.name);

// Output:
// Sahithya

// Solution Explanation:
// new correctly creates the object.


// --------------------------------------------------


// 14. CONSTRUCTOR WITH CALCULATION
// A constructor can also calculate values.

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
        this.area = length * width;
    }
}

let rectangle = new Rectangle(10, 5);

console.log(rectangle.area);

// Output:
// 50

// Explanation:
// The constructor calculates and stores the area.


// ❌ Error Program

console.log(rectangle.area.toUpperCase());

// Error:
// TypeError: rectangle.area.toUpperCase is not a function

// Error Explanation:
// area is a number, not a string.


// ✅ Solution

console.log(rectangle.area);

// Output:
// 50

// Solution Explanation:
// area is used as a number.


// --------------------------------------------------


// 15. COMPLETE CONSTRUCTOR EXAMPLE
// Constructor + properties + method.

class StudentFinal {
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

let finalStudent = new StudentFinal("Sahithya", 24, "MCA");

finalStudent.introduce();

// Output:
// My name is Sahithya
// I am 24 years old
// I studied MCA

// Explanation:
// The constructor initializes the student.
// introduce() displays the student's information.


// ❌ Error Program

let finalStudent2 = new StudentFinal();

finalStudent2.introduce();

// Output:
// My name is undefined
// I am undefined years old
// I studied undefined

// Error Explanation:
// No values were passed to the constructor.


// ✅ Solution

let finalStudent3 = new StudentFinal("Sahithya", 24, "MCA");

finalStudent3.introduce();

// Output:
// My name is Sahithya
// I am 24 years old
// I studied MCA

// Solution Explanation:
// We pass the required values when creating the object.


// ==================================================
// QUICK REVISION
// ==================================================
//
// Constructor  → Runs when an object is created
// constructor  → Keyword used to define it
// this         → Refers to the current object
// Parameter    → Value given to the constructor
// new          → Creates a new object
// super()      → Calls the parent constructor
// Initialization → Giving initial values to an object
//
// ==================================================
