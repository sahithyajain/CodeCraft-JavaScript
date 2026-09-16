
// 1. WHAT IS POLYMORPHISM
// Same method can behave differently.

// Normal Program
class Dog1 {
    sound() {
        console.log("Bark");
    }
}

class Cat1 {
    sound() {
        console.log("Meow");
    }
}

new Dog1().sound();
new Cat1().sound();

// Output:
// Bark
// Meow

// Explanation:
// Both classes have sound(), but the result is different.

// ❌ Error Program
class Dog1Error {
    sound() {
        console.log("Bark");
    }
}

const dog1Error = new Dog1Error();
dog1Error.speak();

// Error:
// TypeError: dog1Error.speak is not a function

// Error Explanation:
// speak() does not exist.

// ✅ Solution
class Dog1Solution {
    sound() {
        console.log("Bark");
    }
}

const dog1Solution = new Dog1Solution();
dog1Solution.sound();

// Output:
// Bark

// Solution Explanation:
// Use the correct method name.

// --------------------------------------------------


// 2. SAME METHOD NAME, DIFFERENT BEHAVIOR
// Different classes can have the same method name.

// Normal Program
class Car2 {
    move() {
        console.log("Car moves");
    }
}

class Boat2 {
    move() {
        console.log("Boat moves");
    }
}

new Car2().move();
new Boat2().move();

// Output:
// Car moves
// Boat moves

// Explanation:
// Both classes have move(), but their behavior is different.

// ❌ Error Program
class Car2Error {
    move() {
        console.log("Car moves");
    }
}

const car2Error = new Car2Error();
car2Error.run();

// Error:
// TypeError: car2Error.run is not a function

// Error Explanation:
// run() does not exist.

// ✅ Solution
class Car2Solution {
    move() {
        console.log("Car moves");
    }
}

const car2Solution = new Car2Solution();
car2Solution.move();

// Output:
// Car moves

// Solution Explanation:
// Call the correct method.

// --------------------------------------------------


// 3. METHOD OVERRIDING
// A child class can change the parent method.

// Normal Program
class Animal3 {
    sound() {
        console.log("Animal sound");
    }
}

class Dog3 extends Animal3 {
    sound() {
        console.log("Dog barks");
    }
}

const dog3 = new Dog3();
dog3.sound();

// Output:
// Dog barks

// Explanation:
// Dog3 changes the sound() method of Animal3.

// ❌ Error Program
class Animal3Error {
    sound() {
        console.log("Animal sound");
    }
}

class Dog3Error extends Animal3Error {
    sound() {
        console.log("Dog barks");
    }
}

const dog3Error = new Dog3Error();
dog3Error.speak();

// Error:
// TypeError: dog3Error.speak is not a function

// Error Explanation:
// speak() is not defined.

// ✅ Solution
class Animal3Solution {
    sound() {
        console.log("Animal sound");
    }
}

class Dog3Solution extends Animal3Solution {
    sound() {
        console.log("Dog barks");
    }
}

const dog3Solution = new Dog3Solution();
dog3Solution.sound();

// Output:
// Dog barks

// Solution Explanation:
// Use the overridden sound() method.

// --------------------------------------------------


// 4. PARENT AND CHILD METHODS
// A child can use the parent method and its own method.

// Normal Program
class Animal4 {
    eat() {
        console.log("Animal eats");
    }
}

class Dog4 extends Animal4 {
    bark() {
        console.log("Dog barks");
    }
}

const dog4 = new Dog4();

dog4.eat();
dog4.bark();

// Output:
// Animal eats
// Dog barks

// Explanation:
// Dog4 gets eat() from Animal4 and has its own bark().

// ❌ Error Program
class Animal4Error {
    eat() {
        console.log("Animal eats");
    }
}

class Dog4Error extends Animal4Error {
    bark() {
        console.log("Dog barks");
    }
}

const dog4Error = new Dog4Error();
dog4Error.sleep();

// Error:
// TypeError: dog4Error.sleep is not a function

// Error Explanation:
// sleep() does not exist.

// ✅ Solution
class Animal4Solution {
    eat() {
        console.log("Animal eats");
    }
}

class Dog4Solution extends Animal4Solution {
    bark() {
        console.log("Dog barks");
    }
}

const dog4Solution = new Dog4Solution();

dog4Solution.eat();
dog4Solution.bark();

// Output:
// Animal eats
// Dog barks

// Solution Explanation:
// Use the methods that are available.

// --------------------------------------------------


// 5. super WITH OVERRIDING
// super is used to call the parent method.

// Normal Program
class Animal5 {
    sound() {
        console.log("Animal sound");
    }
}

class Dog5 extends Animal5 {
    sound() {
        super.sound();
        console.log("Dog barks");
    }
}

const dog5 = new Dog5();
dog5.sound();

// Output:
// Animal sound
// Dog barks

// Explanation:
// super.sound() calls the parent sound().

// ❌ Error Program
class Animal5Error {
    sound() {
        console.log("Animal sound");
    }
}

class Dog5Error extends Animal5Error {
    sound() {
        super.speak();
    }
}

const dog5Error = new Dog5Error();
dog5Error.sound();

// Error:
// TypeError: (intermediate value).speak is not a function

// Error Explanation:
// The parent method is sound(), not speak().

// ✅ Solution
class Animal5Solution {
    sound() {
        console.log("Animal sound");
    }
}

class Dog5Solution extends Animal5Solution {
    sound() {
        super.sound();
        console.log("Dog barks");
    }
}

const dog5Solution = new Dog5Solution();
dog5Solution.sound();

// Output:
// Animal sound
// Dog barks

// Solution Explanation:
// super.sound() correctly calls the parent method.

// --------------------------------------------------


// 6. POLYMORPHISM WITH DIFFERENT CLASSES
// Different classes can have the same method.

// Normal Program
class Circle6 {
    draw() {
        console.log("Circle");
    }
}

class Square6 {
    draw() {
        console.log("Square");
    }
}

new Circle6().draw();
new Square6().draw();

// Output:
// Circle
// Square

// Explanation:
// Both classes have draw(), but give different results.

// ❌ Error Program
class Circle6Error {
    draw() {
        console.log("Circle");
    }
}

const circle6Error = new Circle6Error();
circle6Error.show();

// Error:
// TypeError: circle6Error.show is not a function

// Error Explanation:
// show() does not exist.

// ✅ Solution
class Circle6Solution {
    draw() {
        console.log("Circle");
    }
}

const circle6Solution = new Circle6Solution();
circle6Solution.draw();

// Output:
// Circle

// Solution Explanation:
// Use the draw() method.

// --------------------------------------------------


// 7. COMMON METHOD ACROSS CLASSES
// Different classes can use one common method name.

// Normal Program
class Teacher7 {
    work() {
        console.log("Teacher teaches");
    }
}

class Student7 {
    work() {
        console.log("Student studies");
    }
}

new Teacher7().work();
new Student7().work();

// Output:
// Teacher teaches
// Student studies

// Explanation:
// Both classes have work(), but do different things.

// ❌ Error Program
class Teacher7Error {
    work() {
        console.log("Teacher teaches");
    }
}

const teacher7Error = new Teacher7Error();
teacher7Error.study();

// Error:
// TypeError: teacher7Error.study is not a function

// Error Explanation:
// study() does not exist in Teacher7Error.

// ✅ Solution
class Teacher7Solution {
    work() {
        console.log("Teacher teaches");
    }
}

const teacher7Solution = new Teacher7Solution();
teacher7Solution.work();

// Output:
// Teacher teaches

// Solution Explanation:
// Call the correct work() method.

// --------------------------------------------------


// 8. FUNCTION POLYMORPHISM
// The same function can work with different values.

// Normal Program
function show8(value) {
    console.log(value);
}

show8("Sahithya");
show8(24);

// Output:
// Sahithya
// 24

// Explanation:
// The same function works with a string and a number.

// ❌ Error Program
function show8Error(value) {
    console.log(value.toUpperCase());
}

show8Error(24);

// Error:
// TypeError: value.toUpperCase is not a function

// Error Explanation:
// toUpperCase() works with strings, not numbers.

// ✅ Solution
function show8Solution(value) {
    console.log(value);
}

show8Solution("Sahithya");
show8Solution(24);

// Output:
// Sahithya
// 24

// Solution Explanation:
// Print the value without using a string-only method.

// --------------------------------------------------


// 9. PARAMETER-BASED BEHAVIOR
// A function can behave differently based on a parameter.

// Normal Program
function calculate9(a, b, operation) {
    if (operation === "add") {
        return a + b;
    }

    if (operation === "multiply") {
        return a * b;
    }
}

console.log(calculate9(10, 5, "add"));
console.log(calculate9(10, 5, "multiply"));

// Output:
// 15
// 50

// Explanation:
// The operation decides what calculation happens.

// ❌ Error Program
function calculate9Error(a, b, operation) {
    if (operation === "add") {
        return a + b;
    }

    if (operation === "multiply") {
        return a * b;
    }

    throw new Error("Invalid operation");
}

calculate9Error(10, 5, "divide");

// Error:
// Error: Invalid operation

// Error Explanation:
// divide is not supported by the function.

// ✅ Solution
function calculate9Solution(a, b, operation) {
    if (operation === "add") {
        return a + b;
    }

    if (operation === "multiply") {
        return a * b;
    }
}

console.log(calculate9Solution(10, 5, "add"));
console.log(calculate9Solution(10, 5, "multiply"));

// Output:
// 15
// 50

// Solution Explanation:
// Use a supported operation.

// --------------------------------------------------


// 10. DIFFERENT TYPES OF VALUES
// The same function can accept different types of values.

// Normal Program
function print10(value) {
    console.log(value);
}

print10("Hello");
print10(100);
print10(true);

// Output:
// Hello
// 100
// true

// Explanation:
// The function accepts different types of values.

// ❌ Error Program
function print10Error(value) {
    console.log(value.toUpperCase());
}

print10Error(100);

// Error:
// TypeError: value.toUpperCase is not a function

// Error Explanation:
// toUpperCase() cannot be used with a number.

// ✅ Solution
function print10Solution(value) {
    console.log(value);
}

print10Solution("Hello");
print10Solution(100);
print10Solution(true);

// Output:
// Hello
// 100
// true

// Solution Explanation:
// The function can handle different values.

// --------------------------------------------------


// 11. JAVASCRIPT AND METHOD OVERLOADING
// JavaScript does not support traditional method overloading.

// Normal Program
class Calculator11 {
    add(a, b) {
        return a + b;
    }
}

const calculator11 = new Calculator11();

console.log(calculator11.add(10, 20));

// Output:
// 30

// Explanation:
// A class can have an add() method.

// ❌ Error Program
class Calculator11Error {
    add(a, b) {
        return a + b;
    }

    add(a, b, c) {
        return a + b + c;
    }
}

const calculator11Error = new Calculator11Error();

console.log(calculator11Error.add(10, 20));

// Error:
// NaN

// Error Explanation:
// The second add() replaces the first one.
// c is undefined, so the result becomes NaN.

// ✅ Solution
class Calculator11Solution {
    add(a, b, c = 0) {
        return a + b + c;
    }
}

const calculator11Solution = new Calculator11Solution();

console.log(calculator11Solution.add(10, 20));

// Output:
// 30

// Solution Explanation:
// Default parameter c = 0 allows the method to work with two values.

// --------------------------------------------------


// 12. SIMULATING METHOD OVERLOADING WITH ARGUMENTS
// We can check arguments to create overloading-like behavior.

// Normal Program
function add12(a, b) {
    if (b === undefined) {
        return a;
    }

    return a + b;
}

console.log(add12(10));
console.log(add12(10, 20));

// Output:
// 10
// 30

// Explanation:
// The function behaves differently when b is present or missing.

// ❌ Error Program
function add12Error(a, b) {
    return a + b;
}

console.log(add12Error(10));

// Error:
// NaN

// Error Explanation:
// b is undefined, so 10 + undefined gives NaN.

// ✅ Solution
function add12Solution(a, b) {
    if (b === undefined) {
        return a;
    }

    return a + b;
}

console.log(add12Solution(10));
console.log(add12Solution(10, 20));

// Output:
// 10
// 30

// Solution Explanation:
// Check whether b was provided.

// --------------------------------------------------


// 13. DEFAULT PARAMETERS
// A default parameter gives a value when no argument is provided.

// Normal Program
function greet13(name = "Sahithya") {
    console.log("Hello " + name);
}

greet13();
greet13("Anu");

// Output:
// Hello Sahithya
// Hello Anu

// Explanation:
// Sahithya is used when no name is given.

// ❌ Error Program
function greet13Error(name) {
    console.log(name.toUpperCase());
}

greet13Error();

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// name is undefined because no value was given.

// ✅ Solution
function greet13Solution(name = "Sahithya") {
    console.log(name.toUpperCase());
}

greet13Solution();

// Output:
// SAHITHYA

// Solution Explanation:
// The default value gives name a value.

// --------------------------------------------------


// 14. POLYMORPHISM WITH CLASSES
// Different classes can respond differently to the same method.

// Normal Program
class Dog14 {
    sound() {
        console.log("Bark");
    }
}

class Cat14 {
    sound() {
        console.log("Meow");
    }
}

const dog14 = new Dog14();
const cat14 = new Cat14();

dog14.sound();
cat14.sound();

// Output:
// Bark
// Meow

// Explanation:
// The same sound() method gives different results.

// ❌ Error Program
class Dog14Error {
    sound() {
        console.log("Bark");
    }
}

const dog14Error = new Dog14Error();
dog14Error.speak();

// Error:
// TypeError: dog14Error.speak is not a function

// Error Explanation:
// speak() does not exist.

// ✅ Solution
class Dog14Solution {
    sound() {
        console.log("Bark");
    }
}

const dog14Solution = new Dog14Solution();
dog14Solution.sound();

// Output:
// Bark

// Solution Explanation:
// Use the correct sound() method.

// --------------------------------------------------


// 15. COMPLETE POLYMORPHISM EXAMPLE
// Different child classes can override the same parent method.

// Normal Program
class Employee15 {
    work() {
        console.log("Employee works");
    }
}

class Teacher15 extends Employee15 {
    work() {
        console.log("Teacher teaches");
    }
}

class Developer15 extends Employee15 {
    work() {
        console.log("Developer codes");
    }
}

const teacher15 = new Teacher15();
const developer15 = new Developer15();

teacher15.work();
developer15.work();

// Output:
// Teacher teaches
// Developer codes

// Explanation:
// Both child classes have work(), but their behavior is different.

// ❌ Error Program
class Employee15Error {
    work() {
        console.log("Employee works");
    }
}

class Teacher15Error extends Employee15Error {
    work() {
        console.log("Teacher teaches");
    }
}

const teacher15Error = new Teacher15Error();
teacher15Error.works();

// Error:
// TypeError: teacher15Error.works is not a function

// Error Explanation:
// The method name is work(), not works().

// ✅ Solution
class Employee15Solution {
    work() {
        console.log("Employee works");
    }
}

class Teacher15Solution extends Employee15Solution {
    work() {
        console.log("Teacher teaches");
    }
}

class Developer15Solution extends Employee15Solution {
    work() {
        console.log("Developer codes");
    }
}

const teacher15Solution = new Teacher15Solution();
const developer15Solution = new Developer15Solution();

teacher15Solution.work();
developer15Solution.work();

// Output:
// Teacher teaches
// Developer codes

// Solution Explanation:
// Both child classes use the same work() method
// with different behavior.

// --------------------------------------------------
