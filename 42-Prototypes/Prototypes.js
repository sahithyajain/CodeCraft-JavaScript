// ========================================
// 📘 PROTOTYPES IN JAVASCRIPT
// ========================================


// 1. Object Prototype

const student1 = {
    name: "Sahithya"
};

console.log(student1.toString());

/*
Output:
[object Object]

Explanation:
The toString() method comes from the object's prototype.
*/


// ❌ Error

const student1Error = {};

student1Error.sayHello();

/*
Error:
TypeError: student1Error.sayHello is not a function

Explanation:
The method does not exist.
*/


// ✅ Solution

const student1Solution = {
    sayHello() {
        console.log("Hello");
    }
};

student1Solution.sayHello();

/*
Output:
Hello

Explanation:
The method is added to the object.
*/


// ========================================
// 2. Object.getPrototypeOf()

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


// ❌ Error

const student2Error = {};

console.log(student2Error.getPrototypeOf);

/*
Output:
undefined

Explanation:
getPrototypeOf() is not a method of the object itself.
*/


// ✅ Solution

const student2Solution = {};

console.log(Object.getPrototypeOf(student2Solution) === Object.prototype);

/*
Output:
true
*/


// ========================================
// 3. Object.prototype

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


// ❌ Error

const student3Error = Object.create(null);

student3Error.hasOwnProperty("name");

/*
Error:
TypeError: student3Error.hasOwnProperty is not a function

Explanation:
This object has no Object.prototype.
*/


// ✅ Solution

const student3Solution = {
    name: "Sahithya"
};

console.log(student3Solution.hasOwnProperty("name"));

/*
Output:
true
*/


// ========================================
// 4. Prototype Chain

const student4 = {
    name: "Sahithya"
};

console.log(student4.toString());

/*
Output:
[object Object]

Explanation:
JavaScript checks the object first.
If it does not find the method, it checks the prototype.
*/


// ❌ Error

const student4Error = Object.create(null);

student4Error.toString();

/*
Error:
TypeError: student4Error.toString is not a function

Explanation:
There is no prototype containing toString().
*/


// ✅ Solution

const student4Solution = {};

console.log(student4Solution.toString());

/*
Output:
[object Object]
*/


// ========================================
// 5. __proto__

const student5 = {
    name: "Sahithya"
};

console.log(student5.__proto__ === Object.prototype);

/*
Output:
true

Explanation:
__proto__ gives access to the object's prototype.
*/


// ❌ Error

const student5Error = {};

console.log(student5Error.__proto__.name);

/*
Output:
undefined

Explanation:
The prototype does not have a name property.
*/


// ✅ Solution

const student5Solution = {};

student5Solution.__proto__.name = "Sahithya";

console.log(student5Solution.__proto__.name);

/*
Output:
Sahithya
*/


// ========================================
// 6. Creating a Custom Prototype

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
student6 uses studentMethods6 as its prototype.
*/


// ❌ Error

const student6Error = Object.create(null);

student6Error.sayHello();

/*
Error:
TypeError: student6Error.sayHello is not a function

Explanation:
No prototype method was provided.
*/


// ✅ Solution

const methods6 = {
    sayHello() {
        console.log("Hello Sahithya");
    }
};

const student6Solution = Object.create(methods6);

student6Solution.sayHello();

/*
Output:
Hello Sahithya
*/


// ========================================
// 7. Object.create()

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
Object.create() creates an object with a given prototype.
*/


// ❌ Error

const student7Error = Object.create(null);

student7Error.greet();

/*
Error:
TypeError: student7Error.greet is not a function
*/


// ✅ Solution

const person7Solution = {
    greet() {
        console.log("Hello");
    }
};

const student7Solution = Object.create(person7Solution);

student7Solution.greet();

/*
Output:
Hello
*/


// ========================================
// 8. Adding a Method to a Prototype

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
The method is added to Student8.prototype.
*/


// ❌ Error

function Student8Error(name) {
    this.name = name;
}

const student8Error = new Student8Error("Sahithya");

student8Error.sayHello();

/*
Error:
TypeError: student8Error.sayHello is not a function
*/


// ✅ Solution

function Student8Solution(name) {
    this.name = name;
}

Student8Solution.prototype.sayHello = function() {
    console.log("Hello " + this.name);
};

const student8Solution = new Student8Solution("Sahithya");

student8Solution.sayHello();

/*
Output:
Hello Sahithya
*/


// ========================================
// 9. Sharing Methods Between Objects

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
Both objects share the same prototype method.
*/


// ❌ Error

function Student9Error(name) {
    this.name = name;
}

const student9Error = new Student9Error("Sahithya");

student9Error.showName();

/*
Error:
TypeError: student9Error.showName is not a function
*/


// ✅ Solution

function Student9Solution(name) {
    this.name = name;
}

Student9Solution.prototype.showName = function() {
    console.log(this.name);
};

const student9Solution = new Student9Solution("Sahithya");

student9Solution.showName();

/*
Output:
Sahithya
*/


// ========================================
// 10. Constructor's prototype

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
Objects created using Student10 can use Student10.prototype.
*/


// ❌ Error

function Student10Error(name) {
    this.name = name;
}

const student10Error = new Student10Error("Sahithya");

student10Error.sayHello();

/*
Error:
TypeError: student10Error.sayHello is not a function
*/


// ✅ Solution

function Student10Solution(name) {
    this.name = name;
}

Student10Solution.prototype.sayHello = function() {
    console.log("Hello");
};

const student10Solution = new Student10Solution("Sahithya");

student10Solution.sayHello();

/*
Output:
Hello
*/


// ========================================
// 11. Prototype and new

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
new creates an object connected to Student11.prototype.
*/


// ❌ Error

function Student11Error(name) {
    this.name = name;
}

const student11Error = Student11Error("Sahithya");

/*
Error:
TypeError may occur when using student11Error as an object.

Explanation:
Without new, the function does not create a new object.
*/


// ✅ Solution

function Student11Solution(name) {
    this.name = name;
}

const student11Solution = new Student11Solution("Sahithya");

console.log(student11Solution.name);

/*
Output:
Sahithya
*/


// ========================================
// 12. isPrototypeOf()

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
person12 is the prototype of student12.
*/


// ❌ Error

const person12Error = {};

const student12Error = {};

console.log(person12Error.isPrototypeOf(student12Error));

/*
Output:
false

Explanation:
person12Error is not the prototype of student12Error.
*/


// ✅ Solution

const person12Solution = {};

const student12Solution = Object.create(person12Solution);

console.log(person12Solution.isPrototypeOf(student12Solution));

/*
Output:
true
*/


// ========================================
// 13. instanceof

function Student13(name) {
    this.name = name;
}

const student13 = new Student13("Sahithya");

console.log(student13 instanceof Student13);

/*
Output:
true

Explanation:
student13 is connected to Student13.prototype.
*/


// ❌ Error

function Student13Error() {
}

const person13Error = {};

console.log(person13Error instanceof Student13Error);

/*
Output:
false

Explanation:
person13Error was not created from Student13Error.
*/


// ✅ Solution

function Student13Solution() {
}

const student13Solution = new Student13Solution();

console.log(student13Solution instanceof Student13Solution);

/*
Output:
true
*/


// ========================================
// 14. Prototype Method vs Object Method

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
The same prototype method is used by both objects.
*/


// ❌ Error

function Student14Error(name) {
    this.name = name;
}

const student14Error = new Student14Error("Sahithya");

student14Error.sayHello();

/*
Error:
TypeError: student14Error.sayHello is not a function
*/


// ✅ Solution

function Student14Solution(name) {
    this.name = name;
}

Student14Solution.prototype.sayHello = function() {
    console.log("Hello " + this.name);
};

const student14Solution = new Student14Solution("Sahithya");

student14Solution.sayHello();

/*
Output:
Hello Sahithya
*/


// ========================================
// 15. Prototype and Memory

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
Both objects use the same function from the prototype.
This helps avoid creating a separate copy of the method.
*/


// ❌ Error

function Student15Error(name) {
    this.name = name;

    this.showName = function() {
        console.log(this.name);
    };
}

const student15ErrorA = new Student15Error("Sahithya");
const student15ErrorB = new Student15Error("Anu");

console.log(student15ErrorA.showName === student15ErrorB.showName);

/*
Output:
false

Explanation:
A new function is created for each object.
*/


// ✅ Solution

function Student15Solution(name) {
    this.name = name;
}

Student15Solution.prototype.showName = function() {
    console.log(this.name);
};

const student15SolutionA = new Student15Solution("Sahithya");
const student15SolutionB = new Student15Solution("Anu");

console.log(
    student15SolutionA.showName === student15SolutionB.showName
);

/*
Output:
true

Explanation:
The method is stored in the prototype and shared by the objects.
*/
