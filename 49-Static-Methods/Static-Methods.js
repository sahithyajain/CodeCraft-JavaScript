// 1. WHAT IS A STATIC METHOD
// A static method belongs to the class, not to its object.

// Normal Program
class Student1 {
    static show() {
        console.log("Student");
    }
}

Student1.show();

// Output:
// Student

// Explanation:
// We call the static method using the class name.

// ❌ Error Program
class Student1Error {
    static show() {
        console.log("Student");
    }
}

const student1Error = new Student1Error();
student1Error.show();

// Error:
// TypeError: student1Error.show is not a function

// Error Explanation:
// A static method cannot be called using an object.

// ✅ Solution
class Student1Solution {
    static show() {
        console.log("Student");
    }
}

Student1Solution.show();

// Output:
// Student

// Solution Explanation:
// Call the static method using the class name.

// --------------------------------------------------


// 2. CREATING A STATIC METHOD
// Use the static keyword to create a static method.

// Normal Program
class Student2 {
    static hello() {
        console.log("Hello");
    }
}

Student2.hello();

// Output:
// Hello

// Explanation:
// The static keyword makes hello() a static method.

// ❌ Error Program
class Student2Error {
    static hello() {
        console.log("Hello");
    }
}

const student2Error = new Student2Error();
student2Error.hello();

// Error:
// TypeError: student2Error.hello is not a function

// Error Explanation:
// The method belongs to the class, not the object.

// ✅ Solution
class Student2Solution {
    static hello() {
        console.log("Hello");
    }
}

Student2Solution.hello();

// Output:
// Hello

// Solution Explanation:
// Use the class name to call the static method.

// --------------------------------------------------


// 3. CALLING A STATIC METHOD
// A static method is called using the class name.

// Normal Program
class Student3 {
    static show() {
        console.log("Sahithya");
    }
}

Student3.show();

// Output:
// Sahithya

// Explanation:
// Student3 is used to call the static method.

// ❌ Error Program
class Student3Error {
    static show() {
        console.log("Sahithya");
    }
}

const student3Error = new Student3Error();
student3Error.show();

// Error:
// TypeError: student3Error.show is not a function

// Error Explanation:
// Static methods are not available on objects.

// ✅ Solution
class Student3Solution {
    static show() {
        console.log("Sahithya");
    }
}

Student3Solution.show();

// Output:
// Sahithya

// Solution Explanation:
// Use the class name.

// --------------------------------------------------


// 4. STATIC METHOD VS NORMAL METHOD
// Static methods use the class, while normal methods use objects.

// Normal Program
class Student4 {
    static show() {
        console.log("Static method");
    }

    hello() {
        console.log("Normal method");
    }
}

Student4.show();

const student4 = new Student4();
student4.hello();

// Output:
// Static method
// Normal method

// Explanation:
// Static method uses the class.
// Normal method uses the object.

// ❌ Error Program
class Student4Error {
    static show() {
        console.log("Static method");
    }
}

const student4Error = new Student4Error();
student4Error.show();

// Error:
// TypeError: student4Error.show is not a function

// Error Explanation:
// show() is static, so the object cannot call it.

// ✅ Solution
class Student4Solution {
    static show() {
        console.log("Static method");
    }
}

Student4Solution.show();

// Output:
// Static method

// Solution Explanation:
// Call the static method using the class.

// --------------------------------------------------


// 5. STATIC METHOD WITH PARAMETERS
// A static method can accept parameters.

// Normal Program
class Calculator5 {
    static add(a, b) {
        console.log(a + b);
    }
}

Calculator5.add(10, 20);

// Output:
// 30

// Explanation:
// The static method receives two values.

// ❌ Error Program
class Calculator5Error {
    static add(a, b) {
        console.log(a + b);
    }
}

Calculator5Error.add();

// Error:
// NaN

// Error Explanation:
// Both required values were not provided.

// ✅ Solution
class Calculator5Solution {
    static add(a, b) {
        console.log(a + b);
    }
}

Calculator5Solution.add(10, 20);

// Output:
// 30

// Solution Explanation:
// Pass the required parameters.

// --------------------------------------------------


// 6. MULTIPLE STATIC METHODS
// A class can have more than one static method.

// Normal Program
class Calculator6 {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

console.log(Calculator6.add(10, 20));
console.log(Calculator6.multiply(10, 20));

// Output:
// 30
// 200

// Explanation:
// The class has two static methods.

// ❌ Error Program
class Calculator6Error {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

Calculator6Error.subtract(10, 20);

// Error:
// TypeError: Calculator6Error.subtract is not a function

// Error Explanation:
// subtract() is not defined.

// ✅ Solution
class Calculator6Solution {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

console.log(Calculator6Solution.add(10, 20));
console.log(Calculator6Solution.multiply(10, 20));

// Output:
// 30
// 200

// Solution Explanation:
// Call the static methods that exist.

// --------------------------------------------------


// 7. STATIC METHOD WITH RETURN VALUE
// A static method can return a value.

// Normal Program
class Calculator7 {
    static square(number) {
        return number * number;
    }
}

console.log(Calculator7.square(5));

// Output:
// 25

// Explanation:
// square() returns the calculated value.

// ❌ Error Program
class Calculator7Error {
    static square(number) {
        return number * number;
    }
}

console.log(Calculator7Error.square());

// Error:
// NaN

// Error Explanation:
// number is undefined.

// ✅ Solution
class Calculator7Solution {
    static square(number) {
        return number * number;
    }
}

console.log(Calculator7Solution.square(5));

// Output:
// 25

// Solution Explanation:
// Pass a number to the method.

// --------------------------------------------------


// 8. STATIC PROPERTIES
// A static property belongs to the class.

// Normal Program
class Student8 {
    static school = "ABC School";
}

console.log(Student8.school);

// Output:
// ABC School

// Explanation:
// school belongs to the Student8 class.

// ❌ Error Program
class Student8Error {
    static school = "ABC School";
}

const student8Error = new Student8Error();

console.log(student8Error.school);

// Error:
// undefined

// Error Explanation:
// A static property is not available through the object.

// ✅ Solution
class Student8Solution {
    static school = "ABC School";
}

console.log(Student8Solution.school);

// Output:
// ABC School

// Solution Explanation:
// Access the static property using the class name.

// --------------------------------------------------


// 9. ACCESSING STATIC PROPERTIES
// Static properties are accessed using the class name.

// Normal Program
class Student9 {
    static age = 24;
}

console.log(Student9.age);

// Output:
// 24

// Explanation:
// Student9.age accesses the static property.

// ❌ Error Program
class Student9Error {
    static age = 24;
}

const student9Error = new Student9Error();

console.log(student9Error.age);

// Error:
// undefined

// Error Explanation:
// age is a static property, so the object cannot access it.

// ✅ Solution
class Student9Solution {
    static age = 24;
}

console.log(Student9Solution.age);

// Output:
// 24

// Solution Explanation:
// Use the class name.

// --------------------------------------------------


// 10. STATIC METHOD WITH STATIC PROPERTY
// A static method can access a static property.

// Normal Program
class Student10 {
    static school = "ABC School";

    static showSchool() {
        console.log(Student10.school);
    }
}

Student10.showSchool();

// Output:
// ABC School

// Explanation:
// The static method reads the static property.

// ❌ Error Program
class Student10Error {
    static school = "ABC School";

    static showSchool() {
        console.log(Student10Error.schools);
    }
}

Student10Error.showSchool();

// Error:
// undefined

// Error Explanation:
// The property is school, not schools.

// ✅ Solution
class Student10Solution {
    static school = "ABC School";

    static showSchool() {
        console.log(Student10Solution.school);
    }
}

Student10Solution.showSchool();

// Output:
// ABC School

// Solution Explanation:
// Use the correct static property name.

// --------------------------------------------------


// 11. STATIC METHOD IN INHERITANCE
// A child class can inherit a static method.

// Normal Program
class Animal11 {
    static sound() {
        console.log("Animal sound");
    }
}

class Dog11 extends Animal11 {
}

Dog11.sound();

// Output:
// Animal sound

// Explanation:
// Dog11 can use the static method from Animal11.

// ❌ Error Program
class Animal11Error {
    static sound() {
        console.log("Animal sound");
    }
}

class Dog11Error extends Animal11Error {
}

Dog11Error.sounds();

// Error:
// TypeError: Dog11Error.sounds is not a function

// Error Explanation:
// The method is sound(), not sounds().

// ✅ Solution
class Animal11Solution {
    static sound() {
        console.log("Animal sound");
    }
}

class Dog11Solution extends Animal11Solution {
}

Dog11Solution.sound();

// Output:
// Animal sound

// Solution Explanation:
// Dog11Solution inherits sound() from Animal11Solution.

// --------------------------------------------------


// 12. CALLING PARENT STATIC METHOD
// super can call a parent static method.

// Normal Program
class Animal12 {
    static show() {
        console.log("Animal");
    }
}

class Dog12 extends Animal12 {
    static display() {
        super.show();
    }
}

Dog12.display();

// Output:
// Animal

// Explanation:
// super.show() calls the parent static method.

// ❌ Error Program
class Animal12Error {
    static show() {
        console.log("Animal");
    }
}

class Dog12Error extends Animal12Error {
    static display() {
        super.print();
    }
}

Dog12Error.display();

// Error:
// TypeError: (intermediate value).print is not a function

// Error Explanation:
// The parent method is show(), not print().

// ✅ Solution
class Animal12Solution {
    static show() {
        console.log("Animal");
    }
}

class Dog12Solution extends Animal12Solution {
    static display() {
        super.show();
    }
}

Dog12Solution.display();

// Output:
// Animal

// Solution Explanation:
// super.show() correctly calls the parent method.

// --------------------------------------------------


// 13. STATIC UTILITY METHODS
// Static methods are useful for common helper operations.

// Normal Program
class MathHelper13 {
    static double(number) {
        return number * 2;
    }
}

console.log(MathHelper13.double(5));

// Output:
// 10

// Explanation:
// We use the utility method without creating an object.

// ❌ Error Program
class MathHelper13Error {
    static double(number) {
        return number * 2;
    }
}

const helper13Error = new MathHelper13Error();

console.log(helper13Error.double(5));

// Error:
// TypeError: helper13Error.double is not a function

// Error Explanation:
// double() is a static method.

// ✅ Solution
class MathHelper13Solution {
    static double(number) {
        return number * 2;
    }
}

console.log(MathHelper13Solution.double(5));

// Output:
// 10

// Solution Explanation:
// Call the utility method using the class name.

// --------------------------------------------------


// 14. REAL-LIFE EXAMPLE
// Static methods can perform common tasks related to a class.

// Normal Program
class User14 {
    static welcome() {
        console.log("Welcome");
    }
}

User14.welcome();

// Output:
// Welcome

// Explanation:
// We do not need a User object to call welcome().

// ❌ Error Program
class User14Error {
    static welcome() {
        console.log("Welcome");
    }
}

const user14Error = new User14Error();

user14Error.welcome();

// Error:
// TypeError: user14Error.welcome is not a function

// Error Explanation:
// welcome() is a static method.

// ✅ Solution
class User14Solution {
    static welcome() {
        console.log("Welcome");
    }
}

User14Solution.welcome();

// Output:
// Welcome

// Solution Explanation:
// Call the static method using User14Solution.

// --------------------------------------------------


// 15. COMPLETE STATIC METHODS EXAMPLE
// A class can contain static properties and static methods.

// Normal Program
class Student15 {
    static school = "ABC School";

    static showSchool() {
        console.log(Student15.school);
    }

    static add(a, b) {
        return a + b;
    }
}

Student15.showSchool();

console.log(Student15.add(10, 20));

// Output:
// ABC School
// 30

// Explanation:
// The class has a static property and two static methods.

// ❌ Error Program
class Student15Error {
    static school = "ABC School";

    static showSchool() {
        console.log(Student15Error.school);
    }
}

const student15Error = new Student15Error();

student15Error.showSchool();

// Error:
// TypeError: student15Error.showSchool is not a function

// Error Explanation:
// showSchool() is a static method and cannot be called using an object.

// ✅ Solution
class Student15Solution {
    static school = "ABC School";

    static showSchool() {
        console.log(Student15Solution.school);
    }
}

Student15Solution.showSchool();

// Output:
// ABC School

// Solution Explanation:
// Use the class name to call the static method.

// --------------------------------------------------
