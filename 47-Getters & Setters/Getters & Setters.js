
// 1. WHAT ARE GETTERS AND SETTERS
// Getter reads a value and setter changes a value.

// Normal Program
class Student1 {
    constructor(name) {
        this.name = name;
    }

    get studentName() {
        return this.name;
    }

    set studentName(name) {
        this.name = name;
    }
}

const student1 = new Student1("Sahithya");

console.log(student1.studentName);

student1.studentName = "Anu";

console.log(student1.studentName);

// Output:
// Sahithya
// Anu

// Explanation:
// Getter reads the name and setter changes the name.

// ❌ Error Program
class Student1Error {
    constructor(name) {
        this.name = name;
    }

    get studentName() {
        return this.name;
    }
}

const student1Error = new Student1Error("Sahithya");
student1Error.studentName();

// Error:
// TypeError: student1Error.studentName is not a function

// Error Explanation:
// A getter is used like a property, not like a method.

// ✅ Solution
class Student1Solution {
    constructor(name) {
        this.name = name;
    }

    get studentName() {
        return this.name;
    }
}

const student1Solution = new Student1Solution("Sahithya");

console.log(student1Solution.studentName);

// Output:
// Sahithya

// Solution Explanation:
// Access the getter like a property.

// --------------------------------------------------


// 2. GETTER
// A getter is used to read a value.

// Normal Program
class Student2 {
    constructor(name) {
        this.name = name;
    }

    get studentName() {
        return this.name;
    }
}

const student2 = new Student2("Sahithya");

console.log(student2.studentName);

// Output:
// Sahithya

// Explanation:
// The getter returns the student's name.

// ❌ Error Program
class Student2Error {
    constructor(name) {
        this.name = name;
    }

    get studentName() {
        return this.name;
    }
}

const student2Error = new Student2Error("Sahithya");

console.log(student2Error.studentName());

// Error:
// TypeError: student2Error.studentName is not a function

// Error Explanation:
// A getter should not be called with ().

// ✅ Solution
class Student2Solution {
    constructor(name) {
        this.name = name;
    }

    get studentName() {
        return this.name;
    }
}

const student2Solution = new Student2Solution("Sahithya");

console.log(student2Solution.studentName);

// Output:
// Sahithya

// Solution Explanation:
// Use the getter as a property.

// --------------------------------------------------


// 3. SETTER
// A setter is used to change a value.

// Normal Program
class Student3 {
    constructor(name) {
        this.name = name;
    }

    set studentName(name) {
        this.name = name;
    }
}

const student3 = new Student3("Sahithya");

student3.studentName = "Anu";

console.log(student3.name);

// Output:
// Anu

// Explanation:
// The setter changes the name.

// ❌ Error Program
class Student3Error {
    constructor(name) {
        this.name = name;
    }

    set studentName(name) {
        this.name = name;
    }
}

const student3Error = new Student3Error("Sahithya");

student3Error.studentName("Anu");

// Error:
// TypeError: student3Error.studentName is not a function

// Error Explanation:
// A setter is used with =, not like a function.

// ✅ Solution
class Student3Solution {
    constructor(name) {
        this.name = name;
    }

    set studentName(name) {
        this.name = name;
    }
}

const student3Solution = new Student3Solution("Sahithya");

student3Solution.studentName = "Anu";

console.log(student3Solution.name);

// Output:
// Anu

// Solution Explanation:
// Use = to call the setter.

// --------------------------------------------------


// 4. GETTER WITH A PROPERTY
// A getter can return the value of a property.

// Normal Program
class Person4 {
    constructor(name) {
        this.name = name;
    }

    get nameValue() {
        return this.name;
    }
}

const person4 = new Person4("Sahithya");

console.log(person4.nameValue);

// Output:
// Sahithya

// Explanation:
// nameValue getter returns the name.

// ❌ Error Program
class Person4Error {
    constructor(name) {
        this.name = name;
    }

    get nameValue() {
        return this.name;
    }
}

const person4Error = new Person4Error("Sahithya");

console.log(person4Error.nameValues);

// Error:
// undefined

// Error Explanation:
// The getter is named nameValue, not nameValues.

// ✅ Solution
class Person4Solution {
    constructor(name) {
        this.name = name;
    }

    get nameValue() {
        return this.name;
    }
}

const person4Solution = new Person4Solution("Sahithya");

console.log(person4Solution.nameValue);

// Output:
// Sahithya

// Solution Explanation:
// Use the correct getter name.

// --------------------------------------------------


// 5. SETTER WITH A PROPERTY
// A setter can update a property.

// Normal Program
class Person5 {
    constructor(name) {
        this.name = name;
    }

    set nameValue(name) {
        this.name = name;
    }
}

const person5 = new Person5("Sahithya");

person5.nameValue = "Anu";

console.log(person5.name);

// Output:
// Anu

// Explanation:
// The setter updates the name.

// ❌ Error Program
class Person5Error {
    constructor(name) {
        this.name = name;
    }

    set nameValue(name) {
        this.name = name;
    }
}

const person5Error = new Person5Error("Sahithya");

person5Error.nameValue("Anu");

// Error:
// TypeError: person5Error.nameValue is not a function

// Error Explanation:
// A setter is not called like a function.

// ✅ Solution
class Person5Solution {
    constructor(name) {
        this.name = name;
    }

    set nameValue(name) {
        this.name = name;
    }
}

const person5Solution = new Person5Solution("Sahithya");

person5Solution.nameValue = "Anu";

console.log(person5Solution.name);

// Output:
// Anu

// Solution Explanation:
// Use = to set the value.

// --------------------------------------------------


// 6. GETTER AND SETTER TOGETHER
// A getter reads and a setter changes the same value.

// Normal Program
class Student6 {
    constructor(name) {
        this.name = name;
    }

    get studentName() {
        return this.name;
    }

    set studentName(name) {
        this.name = name;
    }
}

const student6 = new Student6("Sahithya");

console.log(student6.studentName);

student6.studentName = "Anu";

console.log(student6.studentName);

// Output:
// Sahithya
// Anu

// Explanation:
// Getter reads the name and setter changes it.

// ❌ Error Program
class Student6Error {
    constructor(name) {
        this.name = name;
    }

    get studentName() {
        return this.name;
    }

    set studentName(name) {
        this.name = name;
    }
}

const student6Error = new Student6Error("Sahithya");

student6Error.studentName();

// Error:
// TypeError: student6Error.studentName is not a function

// Error Explanation:
// The getter is used like a property.

// ✅ Solution
class Student6Solution {
    constructor(name) {
        this.name = name;
    }

    get studentName() {
        return this.name;
    }

    set studentName(name) {
        this.name = name;
    }
}

const student6Solution = new Student6Solution("Sahithya");

console.log(student6Solution.studentName);

student6Solution.studentName = "Anu";

console.log(student6Solution.studentName);

// Output:
// Sahithya
// Anu

// Solution Explanation:
// Use the getter to read and setter to change.

// --------------------------------------------------


// 7. VALIDATION WITH SETTER
// A setter can check a value before storing it.

// Normal Program
class Student7 {
    constructor(marks) {
        this.marks = marks;
    }

    set studentMarks(marks) {
        if (marks >= 0 && marks <= 100) {
            this.marks = marks;
        }
    }
}

const student7 = new Student7(80);

student7.studentMarks = 90;

console.log(student7.marks);

// Output:
// 90

// Explanation:
// The setter accepts marks between 0 and 100.

// ❌ Error Program
class Student7Error {
    constructor(marks) {
        this.marks = marks;
    }

    set studentMarks(marks) {
        if (marks >= 0 && marks <= 100) {
            this.marks = marks;
        }
    }
}

const student7Error = new Student7Error(80);

student7Error.studentMarks = 150;

console.log(student7Error.marks);

// Error:
// 80

// Error Explanation:
// 150 is outside the allowed range, so the value is not changed.

// ✅ Solution
class Student7Solution {
    constructor(marks) {
        this.marks = marks;
    }

    set studentMarks(marks) {
        if (marks >= 0 && marks <= 100) {
            this.marks = marks;
        }
    }
}

const student7Solution = new Student7Solution(80);

student7Solution.studentMarks = 90;

console.log(student7Solution.marks);

// Output:
// 90

// Solution Explanation:
// Use a valid marks value.

// --------------------------------------------------


// 8. UPDATING DATA WITH SETTER
// A setter can update existing data.

// Normal Program
class Person8 {
    constructor(age) {
        this.age = age;
    }

    set personAge(age) {
        this.age = age;
    }
}

const person8 = new Person8(24);

person8.personAge = 25;

console.log(person8.age);

// Output:
// 25

// Explanation:
// The setter updates the age.

// ❌ Error Program
class Person8Error {
    constructor(age) {
        this.age = age;
    }

    set personAge(age) {
        this.age = age;
    }
}

const person8Error = new Person8Error(24);

person8Error.personAge();

 // Error:
// TypeError: person8Error.personAge is not a function

// Error Explanation:
// A setter is used with =.

// ✅ Solution
class Person8Solution {
    constructor(age) {
        this.age = age;
    }

    set personAge(age) {
        this.age = age;
    }
}

const person8Solution = new Person8Solution(24);

person8Solution.personAge = 25;

console.log(person8Solution.age);

// Output:
// 25

// Solution Explanation:
// Use = to update the value.

// --------------------------------------------------


// 9. READ-ONLY PROPERTY
// A getter without a setter can be used as a read-only property.

// Normal Program
class Student9 {
    constructor(name) {
        this.name = name;
    }

    get studentName() {
        return this.name;
    }
}

const student9 = new Student9("Sahithya");

console.log(student9.studentName);

// Output:
// Sahithya

// Explanation:
// There is a getter but no setter.

// ❌ Error Program
class Student9Error {
    constructor(name) {
        this.name = name;
    }

    get studentName() {
        return this.name;
    }
}

const student9Error = new Student9Error("Sahithya");

student9Error.studentName = "Anu";

console.log(student9Error.studentName);

// Error:
// The value cannot be changed through the getter.

// Error Explanation:
// There is no setter for studentName.

// ✅ Solution
class Student9Solution {
    constructor(name) {
        this.name = name;
    }

    get studentName() {
        return this.name;
    }
}

const student9Solution = new Student9Solution("Sahithya");

console.log(student9Solution.studentName);

// Output:
// Sahithya

// Solution Explanation:
// Use the getter only to read the value.

// --------------------------------------------------


// 10. WRITE-ONLY CONCEPT
// A setter can change a value without having a getter.

// Normal Program
class Student10 {
    set studentName(name) {
        this.name = name;
    }
}

const student10 = new Student10();

student10.studentName = "Sahithya";

console.log(student10.name);

// Output:
// Sahithya

// Explanation:
// The setter changes the value.

// ❌ Error Program
class Student10Error {
    set studentName(name) {
        this.name = name;
    }
}

const student10Error = new Student10Error();

student10Error.studentName();

 // Error:
// TypeError: student10Error.studentName is not a function

// Error Explanation:
// A setter is used with =.

// ✅ Solution
class Student10Solution {
    set studentName(name) {
        this.name = name;
    }
}

const student10Solution = new Student10Solution();

student10Solution.studentName = "Sahithya";

console.log(student10Solution.name);

// Output:
// Sahithya

// Solution Explanation:
// Use = to set the value.

// --------------------------------------------------


// 11. GETTER WITH CALCULATED VALUE
// A getter can return a calculated value.

// Normal Program
class Student11 {
    constructor(marks) {
        this.marks = marks;
    }

    get result() {
        return this.marks >= 35 ? "Pass" : "Fail";
    }
}

const student11 = new Student11(80);

console.log(student11.result);

// Output:
// Pass

// Explanation:
// The getter calculates the result.

// ❌ Error Program
class Student11Error {
    constructor(marks) {
        this.marks = marks;
    }

    get result() {
        return this.marks >= 35 ? "Pass" : "Fail";
    }
}

const student11Error = new Student11Error(80);

console.log(student11Error.results);

// Error:
// undefined

// Error Explanation:
// The getter name is result, not results.

// ✅ Solution
class Student11Solution {
    constructor(marks) {
        this.marks = marks;
    }

    get result() {
        return this.marks >= 35 ? "Pass" : "Fail";
    }
}

const student11Solution = new Student11Solution(80);

console.log(student11Solution.result);

// Output:
// Pass

// Solution Explanation:
// Use the correct getter name.

// --------------------------------------------------


// 12. SETTER WITH PRIVATE PROPERTY
// A setter can safely update a private property.

// Normal Program
class Student12 {
    #marks = 0;

    set studentMarks(marks) {
        this.#marks = marks;
    }

    showMarks() {
        console.log(this.#marks);
    }
}

const student12 = new Student12();

student12.studentMarks = 90;

student12.showMarks();

// Output:
// 90

// Explanation:
// The setter changes the private #marks value.

// ❌ Error Program
class Student12Error {
    #marks = 0;

    set studentMarks(marks) {
        this.#marks = marks;
    }
}

const student12Error = new Student12Error();

/*
student12Error.#marks;

// Error:
// SyntaxError: Private field '#marks' must be declared in an enclosing class
*/

// Error Explanation:
// A private property cannot be accessed directly from outside.

// ✅ Solution
class Student12Solution {
    #marks = 0;

    set studentMarks(marks) {
        this.#marks = marks;
    }

    showMarks() {
        console.log(this.#marks);
    }
}

const student12Solution = new Student12Solution();

student12Solution.studentMarks = 90;

student12Solution.showMarks();

// Output:
// 90

// Solution Explanation:
// Use the setter to update the private property.

// --------------------------------------------------


// 13. GETTER WITH PRIVATE PROPERTY
// A getter can safely read a private property.

// Normal Program
class Student13 {
    #marks = 80;

    get studentMarks() {
        return this.#marks;
    }
}

const student13 = new Student13();

console.log(student13.studentMarks);

// Output:
// 80

// Explanation:
// The getter gives access to the private #marks value.

// ❌ Error Program
class Student13Error {
    #marks = 80;

    get studentMarks() {
        return this.#marks;
    }
}

const student13Error = new Student13Error();

/*
console.log(student13Error.#marks);

// Error:
// SyntaxError: Private field '#marks' must be declared in an enclosing class
*/

// Error Explanation:
// Private properties cannot be accessed directly.

// ✅ Solution
class Student13Solution {
    #marks = 80;

    get studentMarks() {
        return this.#marks;
    }
}

const student13Solution = new Student13Solution();

console.log(student13Solution.studentMarks);

// Output:
// 80

// Solution Explanation:
// Use the getter to read the private property.

// --------------------------------------------------


// 14. REAL-LIFE EXAMPLE
// Getters and setters can be used in a bank account.

// Normal Program
class BankAccount14 {
    constructor(balance) {
        this.balance = balance;
    }

    get amount() {
        return this.balance;
    }

    set amount(value) {
        if (value >= 0) {
            this.balance = value;
        }
    }
}

const account14 = new BankAccount14(1000);

console.log(account14.amount);

account14.amount = 1500;

console.log(account14.amount);

// Output:
// 1000
// 1500

// Explanation:
// Getter reads the balance and setter updates it.

// ❌ Error Program
class BankAccount14Error {
    constructor(balance) {
        this.balance = balance;
    }

    get amount() {
        return this.balance;
    }

    set amount(value) {
        if (value >= 0) {
            this.balance = value;
        }
    }
}

const account14Error = new BankAccount14Error(1000);

account14Error.amount = -500;

console.log(account14Error.amount);

// Error:
// 1000

// Error Explanation:
// Negative values are not accepted by the setter.

// ✅ Solution
class BankAccount14Solution {
    constructor(balance) {
        this.balance = balance;
    }

    get amount() {
        return this.balance;
    }

    set amount(value) {
        if (value >= 0) {
            this.balance = value;
        }
    }
}

const account14Solution = new BankAccount14Solution(1000);

account14Solution.amount = 1500;

console.log(account14Solution.amount);

// Output:
// 1500

// Solution Explanation:
// The setter accepts the valid balance.

// --------------------------------------------------


// 15. COMPLETE GETTERS & SETTERS EXAMPLE
// Getters read data and setters update data.

// Normal Program
class Student15 {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    get studentName() {
        return this.name;
    }

    set studentName(name) {
        this.name = name;
    }

    get studentMarks() {
        return this.marks;
    }

    set studentMarks(marks) {
        if (marks >= 0 && marks <= 100) {
            this.marks = marks;
        }
    }
}

const student15 = new Student15("Sahithya", 80);

console.log(student15.studentName);
console.log(student15.studentMarks);

student15.studentName = "Anu";
student15.studentMarks = 90;

console.log(student15.studentName);
console.log(student15.studentMarks);

// Output:
// Sahithya
// 80
// Anu
// 90

// Explanation:
// Getters read the values and setters update them safely.

// ❌ Error Program
class Student15Error {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    get studentMarks() {
        return this.marks;
    }

    set studentMarks(marks) {
        if (marks >= 0 && marks <= 100) {
            this.marks = marks;
        }
    }
}

const student15Error = new Student15Error("Sahithya", 80);

student15Error.studentMarks = 150;

console.log(student15Error.studentMarks);

// Error:
// 80

// Error Explanation:
// 150 is not a valid marks value, so the setter does not update it.

// ✅ Solution
class Student15Solution {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    get studentMarks() {
        return this.marks;
    }

    set studentMarks(marks) {
        if (marks >= 0 && marks <= 100) {
            this.marks = marks;
        }
    }
}

const student15Solution = new Student15Solution("Sahithya", 80);

student15Solution.studentMarks = 90;

console.log(student15Solution.studentMarks);

// Output:
// 90

// Solution Explanation:
// Use a valid marks value.

// --------------------------------------------------
