// ========================================
// 📘 PROTOTYPES IN JAVASCRIPT
// ========================================

// 1. Object Prototype
console.log("1. Object Prototype");

const student1 = {
    name: "Sahithya"
};

console.log(student1.toString());

/*
Output:
[object Object]

Explanation:
toString() is not written inside student1.
JavaScript gets it from the object's prototype.
*/


// 2. Object.getPrototypeOf()
console.log("\n2. Object.getPrototypeOf()");

const student2 = {
    name: "Sahithya"
};

console.log(Object.getPrototypeOf(student2) === Object.prototype);

/*
Output:
true

Explanation:
Object.getPrototypeOf() returns the prototype of an object.
*/


// 3. Object.prototype
console.log("\n3. Object.prototype");

const student3 = {
    name: "Sahithya"
};

console.log(student3.hasOwnProperty("name"));

/*
Output:
true

Explanation:
hasOwnProperty() comes from Object.prototype.
*/


// 4. Prototype Chain
console.log("\n4. Prototype Chain");

const student4 = {
    name: "Sahithya"
};

console.log(student4.toString());

/*
Output:
[object Object]

Explanation:
JavaScript first checks student4.
If it does not find toString(), it checks its prototype.
*/


// 5. __proto__
console.log("\n5. __proto__");

const student5 = {
    name: "Sahithya"
};

console.log(student5.__proto__ === Object.prototype);

/*
Output:
true

Explanation:
__proto__ gives access to an object's prototype.

Note:
Object.getPrototypeOf() is preferred in modern JavaScript.
*/


// 6. Creating a Custom Prototype
console.log("\n6. Creating a Custom Prototype");

const studentMethods6 = {
    sayHello() {
        console.log("Hello Sahithya");
    }
};

const student6 = Object.create(studentMethods6);

student6.sayHello();

/*
Output:
Hello Sahithya

Explanation:
student6 gets the sayHello() method from studentMethods6.
*/


// 7. Object.create()
console.log("\n7. Object.create()");

const person7 = {
    greet() {
        console.log("Hello");
    }
};

const student7 = Object.create(person7);

student7.greet();

/*
Output:
Hello

Explanation:
Object.create() creates a new object using another object
as its prototype.
*/


// 8. Adding a Method to a Prototype
console.log("\n8. Adding a Method to a Prototype");

function Student8(name) {
    this.name = name;
}

Student8.prototype.sayHello = function() {
    console.log("Hello " + this.name);
};

const student8 = new Student8("Sahithya");

student8.sayHello();

/*
Output:
Hello Sahithya

Explanation:
The method is stored on Student8.prototype.
The student object can use it.
*/


// 9. Sharing Methods Between Objects
console.log("\n9. Sharing Methods Between Objects");

function Student9(name) {
    this.name = name;
}

Student9.prototype.showName = function() {
    console.log(this.name);
};

const student9a = new Student9("Sahithya");
const student9b = new Student9("Anu");

student9a.showName();
student9b.showName();

/*
Output:
Sahithya
Anu

Explanation:
Both objects use the same showName() method
from Student9.prototype.
*/


// 10. Constructor's prototype
console.log("\n10. Constructor's prototype");

function Student10(name) {
    this.name = name;
}

Student10.prototype.sayHello = function() {
    console.log("Hello");
};

const student10 = new Student10("Sahithya");

student10.sayHello();

/*
Output:
Hello

Explanation:
student10 can access methods from Student10.prototype.
*/


// 11. Prototype and new
console.log("\n11. Prototype and new");

function Student11(name) {
    this.name = name;
}

Student11.prototype.showName = function() {
    console.log(this.name);
};

const student11 = new Student11("Sahithya");

student11.showName();

/*
Output:
Sahithya

Explanation:
When new creates an object, the object is connected
to the constructor's prototype.
*/


// 12. isPrototypeOf()
console.log("\n12. isPrototypeOf()");

const person12 = {
    greet() {
        console.log("Hello");
    }
};

const student12 = Object.create(person12);

console.log(person12.isPrototypeOf(student12));

/*
Output:
true

Explanation:
isPrototypeOf() checks whether an object is a prototype
of another object.
*/


// 13. instanceof
console.log("\n13. instanceof");

function Student13(name) {
    this.name = name;
}

const student13 = new Student13("Sahithya");

console.log(student13 instanceof Student13);

/*
Output:
true

Explanation:
instanceof checks whether an object belongs to
a constructor's prototype chain.
*/


// 14. Prototype Method vs Object Method
console.log("\n14. Prototype Method vs Object Method");

function Student14(name) {
    this.name = name;
}

Student14.prototype.sayHello = function() {
    console.log("Hello " + this.name);
};

const student14a = new Student14("Sahithya");
const student14b = new Student14("Anu");

student14a.sayHello();
student14b.sayHello();

/*
Output:
Hello Sahithya
Hello Anu

Explanation:
The same prototype method is reused by both objects.
*/


// 15. Prototype and Memory
console.log("\n15. Prototype and Memory");

function Student15(name) {
    this.name = name;
}

Student15.prototype.showName = function() {
    console.log(this.name);
};

const student15a = new Student15("Sahithya");
const student15b = new Student15("Anu");

console.log(student15a.showName === student15b.showName);

/*
Output:
true

Explanation:
Both objects use the same showName() function
from the prototype.
*/


// ========================================
// ❌ ERROR EXAMPLES
// ========================================

// Error 1: Accessing a missing property
/*
const studentError1 = {};

console.log(studentError1.name.toUpperCase());

Error:
TypeError: Cannot read properties of undefined
*/

// Error 2: Calling a missing method
/*
const studentError2 = {};

studentError2.sayHello();

Error:
TypeError: studentError2.sayHello is not a function
*/

// Error 3: Wrong instanceof check
/*
function StudentError3() {}

const personError3 = {};

console.log(personError3 instanceof StudentError3);

Output:
false

Explanation:
The object was not created from StudentError3.
*/

// Error 4: Direct private-style prototype mistake
/*
const studentError4 = Object.create(null);

console.log(studentError4.toString());

Error:
TypeError: studentErrorError4.toString is not a function
*/

// ========================================
// ✅ SIMPLE SOLUTIONS
// ========================================

// Solution 1: Check property before using it
const studentSolution1 = {};

if (studentSolution1.name) {
    console.log(studentSolution1.name.toUpperCase());
} else {
    console.log("Name is not available");
}

/*
Output:
Name is not available
*/


// Solution 2: Add the method to the prototype
function StudentSolution2(name) {
    this.name = name;
}

StudentSolution2.prototype.sayHello = function() {
    console.log("Hello " + this.name);
};

const studentSolution2 = new StudentSolution2("Sahithya");

studentSolution2.sayHello();

/*
Output:
Hello Sahithya
*/


// Solution 3: Create the object using the constructor
function StudentSolution3(name) {
    this.name = name;
}

const studentSolution3 = new StudentSolution3("Sahithya");

console.log(studentSolution3 instanceof StudentSolution3);

/*
Output:
true
*/


// Solution 4: Give the object a useful prototype
const personSolution4 = {
    toString() {
        return "Student Object";
    }
};

const studentSolution4 = Object.create(personSolution4);

console.log(studentSolution4.toString());

/*
Output:
Student Object
*/
