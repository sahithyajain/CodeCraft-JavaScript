// OOP BASICS IN JAVASCRIPT
// =========================


// 1. OBJECTS
// An object stores related data and functions together.

let student = {
    name: "Sahithya",
    age: 24
};

console.log(student.name);

// Output:
// Sahithya

// Explanation:
// The object stores the student's name and age.



// ❌ Error Program

console.log(student.city.name);

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// city does not exist in the object.



// ✅ Solution

console.log(student.name);

// Output:
// Sahithya

// Solution Explanation:
// We access a property that exists in the object.


// --------------------------------------------------


// 2. PROPERTIES
// Properties are the data stored inside an object.

let person = {
    name: "Sahithya",
    age: 24
};

console.log(person.age);

// Output:
// 24

// Explanation:
// age is a property of the person object.



// ❌ Error Program

console.log(person.salary);

// Output:
// undefined

// Error Explanation:
// salary does not exist in the object.



// ✅ Solution

console.log(person.age);

// Output:
// 24

// Solution Explanation:
// We access an existing property.


// --------------------------------------------------


// 3. METHODS
// A method is a function inside an object.

let user = {
    name: "Sahithya",

    greet: function () {
        console.log("Hello Sahithya");
    }
};

user.greet();

// Output:
// Hello Sahithya

// Explanation:
// greet() is a method of the user object.



// ❌ Error Program

user.sayHello();

// Error:
// TypeError: user.sayHello is not a function

// Error Explanation:
// sayHello() does not exist in the object.



// ✅ Solution

user.greet();

// Output:
// Hello Sahithya

// Solution Explanation:
// We call the method that actually exists.


// --------------------------------------------------


// 4. CREATING MULTIPLE OBJECTS
// We can create many objects with the same type of data.

let student1 = {
    name: "Sahithya",
    age: 24
};

let student2 = {
    name: "Anu",
    age: 23
};

console.log(student1.name);
console.log(student2.name);

// Output:
// Sahithya
// Anu

// Explanation:
// We created two different student objects.



// ❌ Error Program

console.log(student3.name);

// Error:
// ReferenceError: student3 is not defined

// Error Explanation:
// student3 was never created.



// ✅ Solution

let student3 = {
    name: "Rahul",
    age: 22
};

console.log(student3.name);

// Output:
// Rahul

// Solution Explanation:
// We create the object before using it.


// --------------------------------------------------


// 5. CONSTRUCTOR FUNCTION
// A constructor function creates multiple similar objects.

function Student(name, age) {
    this.name = name;
    this.age = age;
}

let s1 = new Student("Sahithya", 24);
let s2 = new Student("Anu", 23);

console.log(s1.name);
console.log(s2.name);

// Output:
// Sahithya
// Anu

// Explanation:
// Student() is used to create similar objects.



// ❌ Error Program

let s3 = Student("Rahul", 22);

console.log(s3.name);

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// Without new, the constructor does not create the object correctly.



// ✅ Solution

let s4 = new Student("Rahul", 22);

console.log(s4.name);

// Output:
// Rahul

// Solution Explanation:
// The new keyword creates a new object.


// --------------------------------------------------


// 6. THE this KEYWORD
// this refers to the current object.

let employee = {
    name: "Sahithya",

    showName: function () {
        console.log(this.name);
    }
};

employee.showName();

// Output:
// Sahithya

// Explanation:
// this.name refers to the name of employee.



// ❌ Error Program

let employee2 = {
    name: "Sahithya",

    showName: function () {
        console.log(this.fullName);
    }
};

employee2.showName();

// Output:
// undefined

// Error Explanation:
// fullName is not a property of employee2.



// ✅ Solution

let employee3 = {
    name: "Sahithya",

    showName: function () {
        console.log(this.name);
    }
};

employee3.showName();

// Output:
// Sahithya

// Solution Explanation:
// this.name correctly accesses the object's name.


// --------------------------------------------------


// 7. ENCAPSULATION
// Encapsulation keeps data and the functions that use it together.

let account = {
    balance: 5000,

    showBalance: function () {
        console.log(this.balance);
    }
};

account.showBalance();

// Output:
// 5000

// Explanation:
// The balance and the function that uses it are kept together.



// ❌ Error Program

let account2 = {
    balance: 5000
};

account2.showBalance();

// Error:
// TypeError: account2.showBalance is not a function

// Error Explanation:
// showBalance() was not added to the object.



// ✅ Solution

let account3 = {
    balance: 5000,

    showBalance: function () {
        console.log(this.balance);
    }
};

account3.showBalance();

// Output:
// 5000

// Solution Explanation:
// The data and related function are kept together.


// --------------------------------------------------


// 8. INHERITANCE
// Inheritance allows one object or class to use features of another.

class Person {
    greet() {
        console.log("Hello");
    }
}

class Student extends Person {
}

let student = new Student();

student.greet();

// Output:
// Hello

// Explanation:
// Student gets the greet() method from Person.



// ❌ Error Program

class Teacher {
    teach() {
        console.log("Teaching");
    }
}

let teacher = new Teacher();

teacher.study();

// Error:
// TypeError: teacher.study is not a function

// Error Explanation:
// study() does not exist in Teacher.



// ✅ Solution

class Teacher2 {
    teach() {
        console.log("Teaching");
    }
}

let teacher2 = new Teacher2();

teacher2.teach();

// Output:
// Teaching

// Solution Explanation:
// We call the method that exists.


// --------------------------------------------------


// 9. POLYMORPHISM
// Polymorphism means the same method can behave differently.

class Dog {
    sound() {
        console.log("Bark");
    }
}

class Cat {
    sound() {
        console.log("Meow");
    }
}

let dog = new Dog();
let cat = new Cat();

dog.sound();
cat.sound();

// Output:
// Bark
// Meow

// Explanation:
// Both classes have sound(), but they give different results.



// ❌ Error Program

dog.speak();

// Error:
// TypeError: dog.speak is not a function

// Error Explanation:
// speak() does not exist in Dog.



// ✅ Solution

dog.sound();

// Output:
// Bark

// Solution Explanation:
// sound() is the method available in Dog.


// --------------------------------------------------


// 10. ABSTRACTION
// Abstraction means showing only the important part and hiding details.

class Car {
    start() {
        console.log("Car started");
    }
}

let car = new Car();

car.start();

// Output:
// Car started

// Explanation:
// We simply call start() without worrying about its internal details.



// ❌ Error Program

car.engineDetails();

// Error:
// TypeError: car.engineDetails is not a function

// Error Explanation:
// engineDetails() is not available in the Car class.



// ✅ Solution

car.start();

// Output:
// Car started

// Solution Explanation:
// We use the available public method.


// --------------------------------------------------


// 11. REUSABILITY
// OOP allows us to reuse code.

class Greeting {
    sayHello() {
        console.log("Hello!");
    }
}

let person1 = new Greeting();
let person2 = new Greeting();

person1.sayHello();
person2.sayHello();

// Output:
// Hello!
// Hello!

// Explanation:
// The same class is reused to create multiple objects.



// ❌ Error Program

let person3 = new Greetings();

// Error:
// ReferenceError: Greetings is not defined

// Error Explanation:
// The class name is Greeting, not Greetings.



// ✅ Solution

let person4 = new Greeting();

person4.sayHello();

// Output:
// Hello!

// Solution Explanation:
// We use the correct class name.


// --------------------------------------------------


// 12. new KEYWORD
// new creates a new object from a constructor or class.

class User {
    constructor(name) {
        this.name = name;
    }
}

let user1 = new User("Sahithya");

console.log(user1.name);

// Output:
// Sahithya

// Explanation:
// new creates a new User object.



// ❌ Error Program

let user2 = User("Anu");

console.log(user2.name);

// Error:
// TypeError: Class constructor User cannot be invoked without 'new'

// Error Explanation:
// A class must be called using new.



// ✅ Solution

let user3 = new User("Anu");

console.log(user3.name);

// Output:
// Anu

// Solution Explanation:
// new correctly creates the object.


// --------------------------------------------------


// 13. CONSTRUCTOR
// A constructor runs automatically when an object is created.

class StudentInfo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let info = new StudentInfo("Sahithya", 24);

console.log(info.name);
console.log(info.age);

// Output:
// Sahithya
// 24

// Explanation:
// The constructor automatically sets the object's values.



// ❌ Error Program

class StudentInfo2 {
    constructor(name) {
        this.name = name;
    }
}

let info2 = new StudentInfo2();

console.log(info2.name.toUpperCase());

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// No name was provided, so name is undefined.



// ✅ Solution

let info3 = new StudentInfo2("Sahithya");

console.log(info3.name.toUpperCase());

// Output:
// SAHITHYA

// Solution Explanation:
// We provide a name when creating the object.


// --------------------------------------------------


// 14. CLASS
// A class is a blueprint used to create objects.

class Mobile {
    constructor(brand) {
        this.brand = brand;
    }

    showBrand() {
        console.log(this.brand);
    }
}

let mobile = new Mobile("Samsung");

mobile.showBrand();

// Output:
// Samsung

// Explanation:
// Mobile is a class used to create a mobile object.



// ❌ Error Program

mobile.showModel();

// Error:
// TypeError: mobile.showModel is not a function

// Error Explanation:
// showModel() does not exist in the class.



// ✅ Solution

mobile.showBrand();

// Output:
// Samsung

// Solution Explanation:
// We call the method defined in the class.


// --------------------------------------------------


// 15. FOUR MAIN PRINCIPLES OF OOP
// The four main principles are:
// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Abstraction

class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class DogAnimal extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

let animal = new DogAnimal();

animal.sound();

// Output:
// Dog barks

// Explanation:
// This example shows:
// Inheritance  -> DogAnimal extends Animal
// Polymorphism -> sound() behaves differently
// Encapsulation -> data and methods stay together
// Abstraction  -> we use sound() without knowing internal details



// ❌ Error Program

let animal2 = new DogAnimal();

animal2.speak();

// Error:
// TypeError: animal2.speak is not a function

// Error Explanation:
// speak() is not defined in DogAnimal or Animal.



// ✅ Solution

animal2.sound();

// Output:
// Dog barks

// Solution Explanation:
// We call the method that is defined in the class.


// ==================================================
// QUICK REVISION
// ==================================================
//
// Object       → Stores related data and functions
// Property     → Data inside an object
// Method       → Function inside an object
// Constructor  → Creates and initializes objects
// this         → Refers to the current object
// Class        → Blueprint for objects
// new          → Creates a new object
// Inheritance  → Reuses features from another class
// Polymorphism → Same method can behave differently
// Encapsulation → Keeps data and methods together
// Abstraction  → Hides unnecessary details
//
// ==================================================
