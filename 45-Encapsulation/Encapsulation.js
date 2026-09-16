
// ========================================
// 📘 ENCAPSULATION IN JAVASCRIPT
// ========================================


// 1. Data and Methods Together
console.log("1. Data and Methods Together");

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
Data and methods are kept together inside the class.
*/


// 2. Public Properties
console.log("\n2. Public Properties");

class Student2 {
    name = "Sahithya";
}

const student2 = new Student2();

console.log(student2.name);

/*
Output:
Sahithya

Explanation:
A public property can be accessed from outside the class.
*/


// 3. Private Properties
console.log("\n3. Private Properties");

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


// 4. Private Methods
console.log("\n4. Private Methods");

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
#showMessage() is private and can only be called inside the class.
*/


// 5. Accessing Private Data Through a Method
console.log("\n5. Accessing Private Data Through a Method");

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
The private balance is accessed through a public method.
*/


// 6. Getter
console.log("\n6. Getter");

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
A getter is used to read private data.
*/


// 7. Setter
console.log("\n7. Setter");

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
A setter is used to change private data.
*/


// 8. Validation with Setter
console.log("\n8. Validation with Setter");

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
The setter checks the value before changing the marks.
*/


// 9. Read-Only Data
console.log("\n9. Read-Only Data");

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
There is no setter, so the value can only be read.
*/


// 10. Encapsulation in a Class
console.log("\n10. Encapsulation in a Class");

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
The balance is private.
The deposit() method controls how it changes.
*/


// 11. Constructor with Private Data
console.log("\n11. Constructor with Private Data");

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
The constructor stores the name in the private property.
*/


// 12. Updating Private Data Safely
console.log("\n12. Updating Private Data Safely");

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
The method checks the amount before changing the balance.
*/


// 13. Direct Access to Private Data
console.log("\n13. Direct Access to Private Data");

/*
❌ ERROR PROGRAM:

class Student13 {
    #marks = 90;
}

const student13 = new Student13();

console.log(student13.#marks);

Error:
SyntaxError: Private field '#marks' must be declared
in an enclosing class.

Explanation:
A private property cannot be accessed directly from outside.
*/


// 13. Solution
class Student13Solution {
    #marks = 90;

    getMarks() {
        return this.#marks;
    }
}

const student13Solution = new Student13Solution();

console.log(student13Solution.getMarks());

/*
Output:
90

Explanation:
A public method is used to safely access the private data.
*/


// 14. Real-Life Example - Bank Account
console.log("\n14. Real-Life Example - Bank Account");

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
The balance is private and is controlled through methods.
*/


// 15. Complete Encapsulation Example
console.log("\n15. Complete Encapsulation Example");

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
The data is private and methods control how it is used.
*/


// ========================================
// ❌ ERROR EXAMPLES
// ========================================


// Error 1: Direct access to private property
/*
class StudentError1 {
    #marks = 90;
}

const studentError1 = new StudentError1();

console.log(studentError1.#marks);

Error:
SyntaxError: Private field '#marks' must be declared
in an enclosing class.
*/


// Error 2: Calling a private method from outside
/*
class StudentError2 {
    #showMessage() {
        console.log("Hello");
    }
}

const studentError2 = new StudentError2();

studentError2.#showMessage();

Error:
SyntaxError: Private field '#showMessage' must be declared
in an enclosing class.
*/


// Error 3: Changing private property directly
/*
class BankAccountError3 {
    #balance = 5000;
}

const accountError3 = new BankAccountError3();

accountError3.#balance = 10000;

Error:
SyntaxError: Private field '#balance' must be declared
in an enclosing class.
*/


// ========================================
// ✅ SIMPLE SOLUTIONS
// ========================================


// Solution 1: Use a getter
class StudentSolution1 {
    #marks = 90;

    get marks() {
        return this.#marks;
    }
}

const studentSolution1 = new StudentSolution1();

console.log(studentSolution1.marks);

/*
Output:
90

Explanation:
The getter safely reads the private property.
*/


// Solution 2: Use a public method
class StudentSolution2 {
    #name = "Sahithya";

    getName() {
        return this.#name;
    }
}

const studentSolution2 = new StudentSolution2();

console.log(studentSolution2.getName());

/*
Output:
Sahithya

Explanation:
The public method provides controlled access to private data.
*/


// Solution 3: Use a setter for controlled changes
class StudentSolution3 {
    #marks = 50;

    setMarks(value) {
        if (value >= 0 && value <= 100) {
            this.#marks = value;
        }
    }

    getMarks() {
        return this.#marks;
    }
}

const studentSolution3 = new StudentSolution3();

studentSolution3.setMarks(95);

console.log(studentSolution3.getMarks());

/*
Output:
95

Explanation:
The method checks the value before changing private data.
*/
