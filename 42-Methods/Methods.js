// 1. BASIC METHOD

const student1 = {
    name: "Sahithya",

    greet() {
        console.log("Hello Sahithya");
    }
};

student1.greet();

// Output:
// Hello Sahithya

// Explanation:
// A method is a function defined inside an object.


// ❌ Error Program

const student1Error = {
    greet() {
        console.log("Hello");
    }
};

// student1Error.sayHello();

// Error:
// TypeError: student1Error.sayHello is not a function

// Error Explanation:
// The method sayHello() does not exist in the object.


// ✅ Solution

const student1Solution = {
    greet() {
        console.log("Hello");
    }
};

student1Solution.greet();

// Output:
// Hello

// Solution Explanation:
// Call the method that actually exists in the object.

// --------------------------------------------------


// 2. METHOD WITH PARAMETERS

const student2 = {
    greet(name) {
        console.log("Hello " + name);
    }
};

student2.greet("Sahithya");

// Output:
// Hello Sahithya

// Explanation:
// A method can accept parameters.


// ❌ Error Program

const student2Error = {
    greet(name) {
        console.log("Hello " + name);
    }
};

// student2Error.greet.name("Sahithya");

// Error:
// TypeError: student2Error.greet.name is not a function

// Error Explanation:
// name is not a method. greet() should be called with the argument.


// ✅ Solution

const student2Solution = {
    greet(name) {
        console.log("Hello " + name);
    }
};

student2Solution.greet("Sahithya");

// Output:
// Hello Sahithya

// Solution Explanation:
// Pass the value to the greet() method.

// --------------------------------------------------


// 3. METHOD WITH RETURN VALUE

const calculator3 = {
    add(a, b) {
        return a + b;
    }
};

console.log(calculator3.add(10, 20));

// Output:
// 30

// Explanation:
// A method can return a value.


// ❌ Error Program

const calculator3Error = {
    add(a, b) {
        return a + b;
    }
};

// console.log(calculator3Error.add(10));

// Output:
// NaN

// Error Explanation:
// The second argument is missing, so b becomes undefined.


// ✅ Solution

const calculator3Solution = {
    add(a, b) {
        return a + b;
    }
};

console.log(calculator3Solution.add(10, 20));

// Output:
// 30

// Solution Explanation:
// Pass both required values to the method.

// --------------------------------------------------


// 4. METHOD USING OBJECT PROPERTIES

const student4 = {
    name: "Sahithya",

    greet() {
        console.log("My name is " + this.name);
    }
};

student4.greet();

// Output:
// My name is Sahithya

// Explanation:
// this is used to access the current object's property.


// ❌ Error Program

const student4Error = {
    name: "Sahithya",

    greet() {
        console.log("My name is " + this.studentName);
    }
};

student4Error.greet();

// Output:
// My name is undefined

// Error Explanation:
// studentName does not exist in the object.


// ✅ Solution

const student4Solution = {
    name: "Sahithya",

    greet() {
        console.log("My name is " + this.name);
    }
};

student4Solution.greet();

// Output:
// My name is Sahithya

// Solution Explanation:
// Use this.name because name is the actual property.

// --------------------------------------------------


// 5. METHOD WITH MULTIPLE ACTIONS

const student5 = {
    name: "Sahithya",

    greet() {
        console.log("Hello");
    },

    study() {
        console.log("Studying JavaScript");
    }
};

student5.greet();
student5.study();

// Output:
// Hello
// Studying JavaScript

// Explanation:
// An object can contain multiple methods.


// ❌ Error Program

const student5Error = {
    greet() {
        console.log("Hello");
    }
};

// student5Error.study();

// Error:
// TypeError: student5Error.study is not a function

// Error Explanation:
// The study() method does not exist in the object.


// ✅ Solution

const student5Solution = {
    greet() {
        console.log("Hello");
    },

    study() {
        console.log("Studying JavaScript");
    }
};

student5Solution.study();

// Output:
// Studying JavaScript

// Solution Explanation:
// Define the study() method before calling it.

// --------------------------------------------------


// 6. METHOD IN A CLASS

class Student6 {
    greet() {
        console.log("Hello Sahithya");
    }
}

const student6 = new Student6();

student6.greet();

// Output:
// Hello Sahithya

// Explanation:
// Methods can be created inside a class.


// ❌ Error Program

class Student6Error {
    greet() {
        console.log("Hello");
    }
}

const student6Error = new Student6Error();

// student6Error.sayHello();

// Error:
// TypeError: student6Error.sayHello is not a function

// Error Explanation:
// sayHello() is not defined in the class.


// ✅ Solution

class Student6Solution {
    greet() {
        console.log("Hello");
    }
}

const student6Solution = new Student6Solution();

student6Solution.greet();

// Output:
// Hello

// Solution Explanation:
// Call the method that is defined in the class.

// --------------------------------------------------


// 7. METHOD WITH CONSTRUCTOR DATA

class Student7 {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

const student7 = new Student7("Sahithya");

student7.greet();

// Output:
// Hello Sahithya

// Explanation:
// A method can use data created by the constructor.


// ❌ Error Program

class Student7Error {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.studentName);
    }
}

const student7Error = new Student7Error("Sahithya");

student7Error.greet();

// Output:
// Hello undefined

// Error Explanation:
// studentName does not exist. The property is called name.


// ✅ Solution

class Student7Solution {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

const student7Solution = new Student7Solution("Sahithya");

student7Solution.greet();

// Output:
// Hello Sahithya

// Solution Explanation:
// Use this.name to access the constructor data.

// --------------------------------------------------


// 8. UPDATING OBJECT DATA WITH A METHOD

const student8 = {
    marks: 80,

    addMarks() {
        this.marks += 10;
    }
};

student8.addMarks();

console.log(student8.marks);

// Output:
// 90

// Explanation:
// A method can update an object's property.


// ❌ Error Program

const student8Error = {
    marks: 80
};

// student8Error.addMarks();

// Error:
// TypeError: student8Error.addMarks is not a function

// Error Explanation:
// The addMarks() method is not defined.


// ✅ Solution

const student8Solution = {
    marks: 80,

    addMarks() {
        this.marks += 10;
    }
};

student8Solution.addMarks();

console.log(student8Solution.marks);

// Output:
// 90

// Solution Explanation:
// Define the method before calling it.

// --------------------------------------------------


// 9. METHOD CALLING ANOTHER METHOD

const student9 = {
    greet() {
        console.log("Hello");
    },

    start() {
        this.greet();
        console.log("Let's learn JavaScript");
    }
};

student9.start();

// Output:
// Hello
// Let's learn JavaScript

// Explanation:
// One method can call another method using this.


// ❌ Error Program

const student9Error = {
    greet() {
        console.log("Hello");
    },

    start() {
        this.sayHello();
    }
};

student9Error.start();

// Error:
// TypeError: this.sayHello is not a function

// Error Explanation:
// The sayHello() method does not exist.


// ✅ Solution

const student9Solution = {
    greet() {
        console.log("Hello");
    },

    start() {
        this.greet();
    }
};

student9Solution.start();

// Output:
// Hello

// Solution Explanation:
// Call the method that is actually defined.

// --------------------------------------------------


// 10. ARROW FUNCTION AS AN OBJECT PROPERTY

const student10 = {
    greet: () => {
        console.log("Hello Sahithya");
    }
};

student10.greet();

// Output:
// Hello Sahithya

// Explanation:
// An arrow function can be stored as an object property.


// ❌ Error Program

const student10Error = {
    greet: () => {
        console.log("Hello");
    }
};

// student10Error.sayHello();

// Error:
// TypeError: student10Error.sayHello is not a function

// Error Explanation:
// sayHello() is not defined.


// ✅ Solution

const student10Solution = {
    greet: () => {
        console.log("Hello");
    }
};

student10Solution.greet();

// Output:
// Hello

// Solution Explanation:
// Call the existing greet() function.

// --------------------------------------------------


// 11. METHOD SHORTHAND

const student11 = {
    greet() {
        console.log("Hello");
    }
};

student11.greet();

// Output:
// Hello

// Explanation:
// JavaScript provides a shorter syntax for defining methods.


// ❌ Error Program

const student11Error = {
    greet() {
        console.log("Hello");
    }
};

// student11Error.greet("Sahithya").sayHello();

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// greet() does not return an object with a sayHello() method.


// ✅ Solution

const student11Solution = {
    greet() {
        console.log("Hello");
    }
};

student11Solution.greet();

// Output:
// Hello

// Solution Explanation:
// Call the method directly.

// --------------------------------------------------


// 12. METHODS IN INHERITANCE

class Person12 {
    greet() {
        console.log("Hello");
    }
}

class Student12 extends Person12 {
}

const student12 = new Student12();

student12.greet();

// Output:
// Hello

// Explanation:
// A child class can use methods inherited from a parent class.


// ❌ Error Program

class Person12Error {
    greet() {
        console.log("Hello");
    }
}

class Student12Error extends Person12Error {
}

const student12Error = new Student12Error();

// student12Error.study();

// Error:
// TypeError: student12Error.study is not a function

// Error Explanation:
// study() is not defined in the parent or child class.


// ✅ Solution

class Person12Solution {
    greet() {
        console.log("Hello");
    }
}

class Student12Solution extends Person12Solution {
    study() {
        console.log("Studying JavaScript");
    }
}

const student12Solution = new Student12Solution();

student12Solution.study();

// Output:
// Studying JavaScript

// Solution Explanation:
// Define study() in the child class before calling it.

// --------------------------------------------------


// 13. METHOD OVERRIDING

class Person13 {
    greet() {
        console.log("Hello from Person");
    }
}

class Student13 extends Person13 {
    greet() {
        console.log("Hello from Student");
    }
}

const student13 = new Student13();

student13.greet();

// Output:
// Hello from Student

// Explanation:
// A child class can provide its own version of a parent method.


// ❌ Error Program

class Person13Error {
    greet() {
        console.log("Hello from Person");
    }
}

class Student13Error extends Person13Error {
}

const student13Error = new Student13Error();

student13Error.greet();

// Output:
// Hello from Person

// Error Explanation:
// The child class does not override the parent method.


// ✅ Solution

class Person13Solution {
    greet() {
        console.log("Hello from Person");
    }
}

class Student13Solution extends Person13Solution {
    greet() {
        console.log("Hello from Student");
    }
}

const student13Solution = new Student13Solution();

student13Solution.greet();

// Output:
// Hello from Student

// Solution Explanation:
// Define the same method in the child class to override the parent method.

// --------------------------------------------------


// 14. METHOD WITH MULTIPLE PARAMETERS

const calculator14 = {
    multiply(a, b) {
        return a * b;
    }
};

console.log(calculator14.multiply(5, 4));

// Output:
// 20

// Explanation:
// A method can accept multiple parameters.


// ❌ Error Program

const calculator14Error = {
    multiply(a, b) {
        return a * b;
    }
};

console.log(calculator14Error.multiply(5));

// Output:
// NaN

// Error Explanation:
// The second value is missing, so b is undefined.


// ✅ Solution

const calculator14Solution = {
    multiply(a, b) {
        return a * b;
    }
};

console.log(calculator14Solution.multiply(5, 4));

// Output:
// 20

// Solution Explanation:
// Pass both required values.

// --------------------------------------------------


// 15. COMPLETE METHOD EXAMPLE

class Student15 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello " + this.name);
    }

    getAge() {
        return this.age;
    }
}

const student15 = new Student15("Sahithya", 24);

student15.greet();
console.log(student15.getAge());

// Output:
// Hello Sahithya
// 24

// Explanation:
// A class can contain multiple methods that work with its properties.


// ❌ Error Program

class Student15Error {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

const student15Error = new Student15Error("Sahithya", 24);

// student15Error.getAge();

// Error:
// TypeError: student15Error.getAge is not a function

// Error Explanation:
// The getAge() method is not defined in the class.


// ✅ Solution

class Student15Solution {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello " + this.name);
    }

    getAge() {
        return this.age;
    }
}

const student15Solution = new Student15Solution("Sahithya", 24);

student15Solution.greet();
console.log(student15Solution.getAge());

// Output:
// Hello Sahithya
// 24

// Solution Explanation:
// Define getAge() in the class before calling it.

// --------------------------------------------------
