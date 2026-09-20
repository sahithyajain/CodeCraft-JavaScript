// ========================================
// 📘 ENCAPSULATION IN JAVASCRIPT
// ========================================


// 1. DATA AND METHODS TOGETHER
console.log("1. Data and Methods Together");

// Encapsulation keeps related data and methods
// together inside a class.

class Student1 {
    name = "Sahithya";

    showName() {
        console.log(this.name);
    }
}

const student1 = new Student1();

student1.showName();

/*
Output:
Sahithya

Explanation:
The name and showName() method are inside the same class.
*/


// ❌ Error Program

student1.showMarks();

/*
Error:
TypeError: student1.showMarks is not a function

Error Explanation:
showMarks() is not defined in the Student1 class.
*/


// ✅ Solution

class StudentSolution1 {
    name = "Sahithya";

    showName() {
        console.log(this.name);
    }

    showMarks() {
        console.log(90);
    }
}

const studentSolution1 = new StudentSolution1();

studentSolution1.showMarks();

/*
Output:
90

Solution Explanation:
The showMarks() method is now defined in the class.
*/


// --------------------------------------------------


// 2. PUBLIC PROPERTIES
console.log("\n2. Public Properties");

// A public property can be accessed
// from outside the class.

class Student2 {
    name = "Sahithya";
}

const student2 = new Student2();

console.log(student2.name);

/*
Output:
Sahithya

Explanation:
name is public, so we can access it directly.
*/


// ❌ Error Program

console.log(student2.marks.toFixed(2));

/*
Error:
TypeError: Cannot read properties of undefined

Error Explanation:
marks is not defined in the Student2 class.
*/


// ✅ Solution

class StudentSolution2 {
    name = "Sahithya";
    marks = 90;
}

const studentSolution2 = new StudentSolution2();

console.log(studentSolution2.marks.toFixed(2));

/*
Output:
90.00

Solution Explanation:
marks is now defined as a public property.
*/


// --------------------------------------------------


// 3. PRIVATE PROPERTIES
console.log("\n3. Private Properties");

// A private property cannot be accessed
// directly from outside the class.

class Student3 {
    #marks = 90;

    showMarks() {
        console.log(this.#marks);
    }
}

const student3 = new Student3();

student3.showMarks();

/*
Output:
90

Explanation:
#marks is private and can only be used inside the class.
*/


// ❌ Error Program

/*
console.log(student3.#marks);

Error:
SyntaxError: Private field '#marks' must be declared
in an enclosing class

Error Explanation:
Private properties cannot be accessed directly
from outside the class.
*/


// ✅ Solution

class StudentSolution3 {
    #marks = 90;

    showMarks() {
        console.log(this.#marks);
    }
}

const studentSolution3 = new StudentSolution3();

studentSolution3.showMarks();

/*
Output:
90

Solution Explanation:
A public method is used to access the private property.
*/


// --------------------------------------------------


// 4. PRIVATE METHODS
console.log("\n4. Private Methods");

// A private method can only be used inside the class.

class Student4 {
    #showMessage() {
        console.log("Hello Sahithya");
    }

    display() {
        this.#showMessage();
    }
}

const student4 = new Student4();

student4.display();

/*
Output:
Hello Sahithya

Explanation:
#showMessage() is private and is called
inside the class through display().
*/


// ❌ Error Program

/*
student4.#showMessage();

Error:
SyntaxError: Private field '#showMessage' must be declared
in an enclosing class

Error Explanation:
Private methods cannot be called directly from outside.
*/


// ✅ Solution

class StudentSolution4 {
    #showMessage() {
        console.log("Hello Sahithya");
    }

    display() {
        this.#showMessage();
    }
}

const studentSolution4 = new StudentSolution4();

studentSolution4.display();

/*
Output:
Hello Sahithya

Solution Explanation:
The private method is called through a public method.
*/


// --------------------------------------------------


// 5. ACCESSING PRIVATE DATA THROUGH A METHOD
console.log("\n5. Accessing Private Data Through a Method");

// We can use a public method to access private data.

class BankAccount5 {
    #balance = 5000;

    getBalance() {
        return this.#balance;
    }
}

const account5 = new BankAccount5();

console.log(account5.getBalance());

/*
Output:
5000

Explanation:
We cannot access #balance directly,
so we use getBalance().
*/


// ❌ Error Program

/*
console.log(account5.#balance);

Error:
SyntaxError: Private field '#balance' must be declared
in an enclosing class

Error Explanation:
#balance is private and cannot be accessed directly.
*/


// ✅ Solution

console.log(account5.getBalance());

/*
Output:
5000

Solution Explanation:
The public getBalance() method safely accesses
the private balance.
*/


// --------------------------------------------------


// 6. GETTER
console.log("\n6. Getter");

// A getter is used to read private data.

class Student6 {
    #marks = 90;

    get marks() {
        return this.#marks;
    }
}

const student6 = new Student6();

console.log(student6.marks);

/*
Output:
90

Explanation:
The getter lets us read the private #marks.
*/


// ❌ Error Program

/*
console.log(student6.#marks);

Error:
SyntaxError: Private field '#marks' must be declared
in an enclosing class

Error Explanation:
The private property cannot be accessed directly.
*/


// ✅ Solution

console.log(student6.marks);

/*
Output:
90

Solution Explanation:
The getter is used to read the private property.
*/


// --------------------------------------------------


// 7. SETTER
console.log("\n7. Setter");

// A setter is used to change private data.

class Student7 {
    #marks = 50;

    set marks(value) {
        this.#marks = value;
    }

    get marks() {
        return this.#marks;
    }
}

const student7 = new Student7();

student7.marks = 90;

console.log(student7.marks);

/*
Output:
90

Explanation:
The setter changes the private #marks.
*/


// ❌ Error Program

/*
student7.#marks = 100;

Error:
SyntaxError: Private field '#marks' must be declared
in an enclosing class

Error Explanation:
The private property cannot be changed directly
from outside the class.
*/


// ✅ Solution

student7.marks = 100;

console.log(student7.marks);

/*
Output:
100

Solution Explanation:
The setter is used to safely change the private property.
*/


// --------------------------------------------------


// 8. VALIDATION WITH SETTER
console.log("\n8. Validation with Setter");

// A setter can check a value before changing
// private data.

class Student8 {
    #marks = 0;

    set marks(value) {
        if (value >= 0 && value <= 100) {
            this.#marks = value;
        }
    }

    get marks() {
        return this.#marks;
    }
}

const student8 = new Student8();

student8.marks = 90;

console.log(student8.marks);

/*
Output:
90

Explanation:
The setter checks whether marks are between
0 and 100 before changing the value.
*/


// ❌ Error Program

student8.marks = 150;

console.log(student8.marks);

/*
Output:
90

Error Explanation:
150 is outside the allowed range,
so the setter does not change the marks.
*/


// ✅ Solution

student8.marks = 100;

console.log(student8.marks);

/*
Output:
100

Solution Explanation:
100 is within the valid range,
so the setter updates the marks.
*/


// --------------------------------------------------


// 9. READ-ONLY DATA
console.log("\n9. Read-Only Data");

// Data is read-only when it can be read
// but cannot be changed through a setter.

class Student9 {
    #rollNumber = 101;

    get rollNumber() {
        return this.#rollNumber;
    }
}

const student9 = new Student9();

console.log(student9.rollNumber);

/*
Output:
101

Explanation:
There is a getter but no setter,
so rollNumber can only be read.
*/


// ❌ Error Program

/*
student9.#rollNumber = 200;

Error:
SyntaxError: Private field '#rollNumber' must be declared
in an enclosing class

Error Explanation:
The private rollNumber cannot be changed directly.
*/


// ✅ Solution

console.log(student9.rollNumber);

/*
Output:
101

Solution Explanation:
The value can be safely read using the getter.
*/


// --------------------------------------------------


// 10. ENCAPSULATION IN A CLASS
console.log("\n10. Encapsulation in a Class");

// A class can hide its data and use methods
// to control it.

class BankAccount10 {
    #balance = 1000;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account10 = new BankAccount10();

account10.deposit(500);

console.log(account10.getBalance());

/*
Output:
1500

Explanation:
The balance is private,
and deposit() controls how it is changed.
*/


// ❌ Error Program

/*
account10.#balance = 10000;

Error:
SyntaxError: Private field '#balance' must be declared
in an enclosing class

Error Explanation:
The private balance cannot be changed directly.
*/


// ✅ Solution

account10.deposit(1000);

console.log(account10.getBalance());

/*
Output:
2500

Solution Explanation:
The deposit() method safely changes the private balance.
*/


// --------------------------------------------------


// 11. CONSTRUCTOR WITH PRIVATE DATA
console.log("\n11. Constructor with Private Data");

// A constructor can set private data
// when an object is created.

class Student11 {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

const student11 = new Student11("Sahithya");

console.log(student11.getName());

/*
Output:
Sahithya

Explanation:
The constructor stores the name in private #name.
*/


// ❌ Error Program

/*
console.log(student11.#name);

Error:
SyntaxError: Private field '#name' must be declared
in an enclosing class

Error Explanation:
#name is private and cannot be accessed directly.
*/


// ✅ Solution

console.log(student11.getName());

/*
Output:
Sahithya

Solution Explanation:
The public getName() method accesses the private name.
*/


// --------------------------------------------------


// 12. UPDATING PRIVATE DATA SAFELY
console.log("\n12. Updating Private Data Safely");

// A public method can check and safely change
// private data.

class BankAccount12 {
    #balance = 1000;

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account12 = new BankAccount12();

account12.withdraw(300);

console.log(account12.getBalance());

/*
Output:
700

Explanation:
The withdraw() method checks the amount
before changing the private balance.
*/


// ❌ Error Program

/*
account12.#balance -= 500;

Error:
SyntaxError: Private field '#balance' must be declared
in an enclosing class

Error Explanation:
The private balance cannot be changed directly.
*/


// ✅ Solution

account12.withdraw(200);

console.log(account12.getBalance());

/*
Output:
500

Solution Explanation:
withdraw() safely updates the private balance.
*/


// --------------------------------------------------


// 13. DIRECT ACCESS TO PRIVATE DATA
console.log("\n13. Direct Access to Private Data");

// Private data cannot be accessed directly
// from outside the class.

class Student13 {
    #marks = 90;

    getMarks() {
        return this.#marks;
    }
}

const student13 = new Student13();

console.log(student13.getMarks());

/*
Output:
90

Explanation:
getMarks() is used to access the private #marks.
*/


// ❌ Error Program

/*
console.log(student13.#marks);

Error:
SyntaxError: Private field '#marks' must be declared
in an enclosing class

Error Explanation:
#marks is private, so direct access is not allowed.
*/


// ✅ Solution

console.log(student13.getMarks());

/*
Output:
90

Solution Explanation:
A public method is used to access the private data.
*/


// --------------------------------------------------


// 14. REAL-LIFE EXAMPLE - BANK ACCOUNT
console.log("\n14. Real-Life Example - Bank Account");

// A bank account can hide the balance
// and control it through methods.

class BankAccount14 {
    #balance = 5000;

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account14 = new BankAccount14();

account14.deposit(1000);
account14.withdraw(500);

console.log(account14.getBalance());

/*
Output:
5500

Explanation:
The balance is private and is controlled through
deposit(), withdraw(), and getBalance().
*/


// ❌ Error Program

/*
account14.#balance = 100000;

Error:
SyntaxError: Private field '#balance' must be declared
in an enclosing class

Error Explanation:
The balance is private and cannot be changed directly.
*/


// ✅ Solution

account14.deposit(500);

console.log(account14.getBalance());

/*
Output:
6000

Solution Explanation:
The deposit() method safely changes the private balance.
*/


// --------------------------------------------------


// 15. COMPLETE ENCAPSULATION EXAMPLE
console.log("\n15. Complete Encapsulation Example");

// Encapsulation hides data and uses methods
// to control that data.

class Student15 {
    #name;
    #marks;

    constructor(name, marks) {
        this.#name = name;
        this.#marks = marks;
    }

    getDetails() {
        console.log(this.#name);
        console.log(this.#marks);
    }

    setMarks(marks) {
        if (marks >= 0 && marks <= 100) {
            this.#marks = marks;
        }
    }
}

const student15 = new Student15("Sahithya", 80);

student15.setMarks(95);
student15.getDetails();

/*
Output:
Sahithya
95

Explanation:
The data is private, and the methods control
how the data is used.
*/


// ❌ Error Program

/*
student15.#marks = 100;

Error:
SyntaxError: Private field '#marks' must be declared
in an enclosing class

Error Explanation:
#marks is private and cannot be accessed directly.
*/


// ✅ Solution

student15.setMarks(100);
student15.getDetails();

/*
Output:
Sahithya
100

Solution Explanation:
setMarks() safely changes the private marks.
*/


// --------------------------------------------------
