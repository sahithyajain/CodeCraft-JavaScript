# 📘 Polymorphism in JavaScript

## 🌟 What is Polymorphism?

**Polymorphism** means **"many forms."**

It means the same method or function can behave differently depending on the object or value.
 
### Example

    class Dog {
        speak() {
            console.log("Dog barks");
        }
    }

    class Cat {
        speak() {
            console.log("Cat meows");
        }
    }

    const dog = new Dog();
    const cat = new Cat();

    dog.speak();
    cat.speak();

### Output

    Dog barks
    Cat meows

Here, both classes have the same `speak()` method, but they behave differently.

---

## 🤔 Why Do We Use Polymorphism?

We use polymorphism to:

- Use the same method name for different behaviors
- Make code flexible
- Reduce repeated code
- Work with different objects easily
- Make programs easier to maintain

---

# 📚 Concepts Covered

## 1. What is Polymorphism?

Polymorphism allows the same method or function to behave differently.

### Example

    class Dog {
        speak() {
            console.log("Dog barks");
        }
    }

    class Cat {
        speak() {
            console.log("Cat meows");
        }
    }

    new Dog().speak();
    new Cat().speak();

---

## 2. Same Method Name, Different Behavior

Different classes can use the same method name but perform different actions.

### Example

    class Car {
        move() {
            console.log("Car moves on road");
        }
    }

    class Boat {
        move() {
            console.log("Boat moves on water");
        }
    }

    new Car().move();
    new Boat().move();

---

## 3. Method Overriding

Method overriding happens when a child class creates its own version of a parent method.

### Example

    class Animal {
        sound() {
            console.log("Animal makes a sound");
        }
    }

    class Dog extends Animal {
        sound() {
            console.log("Dog barks");
        }
    }

    const dog = new Dog();
    dog.sound();

---

## 4. Parent and Child Methods

A child class can use methods from the parent and also have its own methods.

### Example

    class Animal {
        eat() {
            console.log("Animal eats");
        }
    }

    class Dog extends Animal {
        bark() {
            console.log("Dog barks");
        }
    }

    const dog = new Dog();

    dog.eat();
    dog.bark();

---

## 5. `super` with Overriding

`super` is used to call the parent class method.

### Example

    class Animal {
        sound() {
            console.log("Animal makes a sound");
        }
    }

    class Dog extends Animal {
        sound() {
            super.sound();
            console.log("Dog barks");
        }
    }

    const dog = new Dog();
    dog.sound();

---

## 6. Polymorphism with Different Classes

Different classes can have the same method and each class can provide different behavior.

### Example

    class Circle {
        draw() {
            console.log("Drawing Circle");
        }
    }

    class Square {
        draw() {
            console.log("Drawing Square");
        }
    }

    const shapes = [new Circle(), new Square()];

    shapes.forEach(shape => shape.draw());

---

## 7. Common Method Across Classes

Different classes can have one common method name.

### Example

    class Teacher {
        work() {
            console.log("Teacher teaches");
        }
    }

    class Student {
        work() {
            console.log("Student studies");
        }
    }

    const people = [new Teacher(), new Student()];

    people.forEach(person => person.work());

---

## 8. Function Polymorphism

A function can work with different types of values.

### Example

    function printValue(value) {
        console.log(value);
    }

    printValue("Sahithya");
    printValue(24);
    printValue(true);

---

## 9. Parameter-Based Behavior

A function can perform different actions based on the parameter.

### Example

    function calculate(a, b, operation) {
        if (operation === "add") {
            return a + b;
        }

        if (operation === "multiply") {
            return a * b;
        }
    }

    console.log(calculate(10, 5, "add"));
    console.log(calculate(10, 5, "multiply"));

---

## 10. Different Types of Values

The same function can accept different types of values.

### Example

    function show(value) {
        console.log(value);
    }

    show("Hello");
    show(100);
    show([1, 2, 3]);

---

## 11. JavaScript and Method Overloading

JavaScript does not support traditional method overloading like Java.

If two methods have the same name, the last method definition is used.

### Example

    class Calculator {
        add(a, b) {
            return a + b;
        }
    }

    const calculator = new Calculator();

    console.log(calculator.add(10, 20));

---

## 12. Simulating Method Overloading with Arguments

JavaScript can create similar behavior by checking the arguments.

### Example

    function add(a, b) {
        if (b === undefined) {
            return a;
        }

        return a + b;
    }

    console.log(add(10));
    console.log(add(10, 20));

---

## 13. Default Parameters

Default parameters provide a value when an argument is not given.

### Example

    function greet(name = "Sahithya") {
        console.log("Hello", name);
    }

    greet();
    greet("Anu");

---

## 14. Polymorphism with Classes

Different classes can respond differently to the same method call.

### Example

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

    const animals = [new Dog(), new Cat()];

    animals.forEach(animal => animal.sound());

---

## 15. Complete Polymorphism Example

Different child classes can override the same parent method with their own behavior.

### Example

    class Employee {
        work() {
            console.log("Employee works");
        }
    }

    class Teacher extends Employee {
        work() {
            console.log("Teacher teaches students");
        }
    }

    class Developer extends Employee {
        work() {
            console.log("Developer writes code");
        }
    }

    const employees = [
        new Teacher(),
        new Developer()
    ];

    employees.forEach(employee => employee.work());

---

# ⭐ Quick Revision

| Concept | Meaning |
|---|---|
| Polymorphism | Same method or function can have different behavior |
| Method Overriding | Child class changes the parent method |
| `super` | Calls the parent method |
| Function Polymorphism | Same function works with different values |
| Method Overloading | Traditional overloading is not supported in JavaScript |
| Arguments | Can be used to create overloading-like behavior |
| Default Parameters | Give a default value when no argument is passed |

---

# 🎯 Key Takeaways

- Polymorphism means **many forms**.
- The same method can behave differently.
- Method overriding is an important example of polymorphism.
- Child classes can change parent methods.
- `super` can call the parent method.
- Different objects can use the same method name.
- JavaScript does not support traditional method overloading.
- Arguments can be used to create overloading-like behavior.

---

# 🎤 Interview Questions

1. What is polymorphism?
2. What does polymorphism mean in JavaScript?
3. Why do we use polymorphism?
4. What is method overriding?
5. How does method overriding work?
6. What is the use of `super`?
7. Can different classes have the same method name?
8. What is function polymorphism?
9. Does JavaScript support method overloading?
10. How can you simulate method overloading?
11. What are default parameters?
12. Give a real-life example of polymorphism.
13. What is the difference between overriding and overloading?
14. How is polymorphism related to inheritance?
15. Write a JavaScript example of polymorphism.
