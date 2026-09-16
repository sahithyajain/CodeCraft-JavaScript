# 📘 Prototypes in JavaScript

## 🌟 What is a Prototype?

A **prototype** is an object that JavaScript uses to share properties and methods between objects.

👉 In simple words: **A prototype helps objects reuse code.**

### Example

    const student = {
        name: "Sahithya"
    };

    console.log(student.toString());

**Output:**

    [object Object]

Here, `toString()` is not written inside `student`. JavaScript gets it from the object's prototype.

---

## 🤔 Why Do We Use Prototypes?

We use prototypes to:

- ♻️ Reuse methods
- 💾 Save memory
- 🔗 Share properties and methods
- 🧱 Understand how JavaScript objects work
- 📚 Understand classes and inheritance

---

# 📚 Concepts Covered

## 1. Object Prototype

**Definition:** Every normal JavaScript object is connected to a prototype.

### Example

    const student = {
        name: "Sahithya"
    };

    console.log(student.toString());

**Output:**

    [object Object]

The `student` object can use methods from its prototype.

---

## 2. `Object.getPrototypeOf()`

**Definition:** `Object.getPrototypeOf()` returns the prototype of an object.

### Example

    const student = {
        name: "Sahithya"
    };

    console.log(Object.getPrototypeOf(student));

**Output:**

    [Object: null prototype] {}

The object is connected to `Object.prototype`.

---

## 3. `Object.prototype`

**Definition:** `Object.prototype` is the main prototype from which normal objects get common methods.

### Example

    const student = {
        name: "Sahithya"
    };

    console.log(student.hasOwnProperty("name"));

**Output:**

    true

`hasOwnProperty()` comes from `Object.prototype`.

---

## 4. Prototype Chain

**Definition:** The prototype chain is the path JavaScript follows to find a property or method.

### Example

    const student = {
        name: "Sahithya"
    };

    console.log(student.toString());

**Output:**

    [object Object]

JavaScript first checks `student`. If it does not find `toString()`, it checks its prototype.

---

## 5. `__proto__`

**Definition:** `__proto__` gives access to an object's prototype.

### Example

    const student = {
        name: "Sahithya"
    };

    console.log(student.__proto__ === Object.prototype);

**Output:**

    true

The object's `__proto__` points to its prototype.

> `Object.getPrototypeOf()` is preferred in modern JavaScript.

---

## 6. Creating a Custom Prototype

**Definition:** We can create our own prototype object and connect objects to it.

### Example

    const studentMethods = {
        sayHello() {
            console.log("Hello Sahithya");
        }
    };

    const student = Object.create(studentMethods);

    student.sayHello();

**Output:**

    Hello Sahithya

The `student` object gets `sayHello()` from `studentMethods`.

---

## 7. `Object.create()`

**Definition:** `Object.create()` creates a new object using another object as its prototype.

### Example

    const person = {
        greet() {
            console.log("Hello");
        }
    };

    const student = Object.create(person);

    student.greet();

**Output:**

    Hello

Here, `person` is the prototype of `student`.

---

## 8. Adding a Method to a Prototype

**Definition:** A method can be added to a constructor's prototype so all its objects can use it.

### Example

    function Student(name) {
        this.name = name;
    }

    Student.prototype.sayHello = function() {
        console.log("Hello " + this.name);
    };

    const student = new Student("Sahithya");

    student.sayHello();

**Output:**

    Hello Sahithya

The method is stored on `Student.prototype` and can be used by every `Student` object.

---

## 9. Sharing Methods Between Objects

**Definition:** Prototype methods are shared by all objects created from the same constructor.

### Example

    function Student(name) {
        this.name = name;
    }

    Student.prototype.showName = function() {
        console.log(this.name);
    };

    const student1 = new Student("Sahithya");
    const student2 = new Student("Anu");

    student1.showName();
    student2.showName();

**Output:**

    Sahithya
    Anu

Both objects use the same `showName()` method.

---

## 10. Constructor's `prototype`

**Definition:** A constructor function has a `prototype` property used to share methods with objects created using `new`.

### Example

    function Student(name) {
        this.name = name;
    }

    Student.prototype.sayHello = function() {
        console.log("Hello");
    };

    const student = new Student("Sahithya");

    student.sayHello();

**Output:**

    Hello

`student` can access methods from `Student.prototype`.

---

## 11. Prototype and `new`

**Definition:** When `new` creates an object, the new object is connected to the constructor's prototype.

### Example

    function Student(name) {
        this.name = name;
    }

    Student.prototype.showName = function() {
        console.log(this.name);
    };

    const student = new Student("Sahithya");

    student.showName();

**Output:**

    Sahithya

The new object can use methods from `Student.prototype`.

---

## 12. Checking a Prototype with `isPrototypeOf()`

**Definition:** `isPrototypeOf()` checks whether an object exists in another object's prototype chain.

### Example

    const person = {
        greet() {
            console.log("Hello");
        }
    };

    const student = Object.create(person);

    console.log(person.isPrototypeOf(student));

**Output:**

    true

`person` is the prototype of `student`.

---

## 13. `instanceof`

**Definition:** `instanceof` checks whether an object belongs to a constructor's prototype chain.

### Example

    function Student(name) {
        this.name = name;
    }

    const student = new Student("Sahithya");

    console.log(student instanceof Student);

**Output:**

    true

The `student` object is connected to `Student.prototype`.

---

## 14. Prototype Method vs Object Method

**Definition:** An object method belongs to one object, while a prototype method can be shared by many objects.

### Example

    function Student(name) {
        this.name = name;
    }

    Student.prototype.sayHello = function() {
        console.log("Hello " + this.name);
    };

    const student1 = new Student("Sahithya");
    const student2 = new Student("Anu");

    student1.sayHello();
    student2.sayHello();

**Output:**

    Hello Sahithya
    Hello Anu

The same prototype method is reused by both objects.

---

## 15. Prototype and Memory

**Definition:** Prototype methods can be shared instead of creating a separate method for every object.

### Example

    function Student(name) {
        this.name = name;
    }

    Student.prototype.showName = function() {
        console.log(this.name);
    };

    const student1 = new Student("Sahithya");
    const student2 = new Student("Anu");

    console.log(student1.showName === student2.showName);

**Output:**

    true

Both objects use the same `showName()` function.

---

# ⭐ Quick Revision

| Concept | Meaning |
|---|---|
| Prototype | Object used to share properties and methods |
| `Object.prototype` | Common prototype for normal objects |
| Prototype Chain | Path used to find properties and methods |
| `__proto__` | Accesses an object's prototype |
| `Object.getPrototypeOf()` | Gets an object's prototype |
| `Object.create()` | Creates an object with a given prototype |
| `Constructor.prototype` | Used to share methods |
| `instanceof` | Checks the prototype chain |
| `isPrototypeOf()` | Checks prototype relationship |
| Prototype Method | Method shared by objects |

---

# 🎯 Key Takeaways

- 🔗 Every normal object has a prototype.
- ♻️ Prototypes help us reuse code.
- 📚 JavaScript uses the prototype chain to find properties and methods.
- `Object.prototype` provides common object methods.
- `Object.create()` can create objects with a specific prototype.
- Constructor functions use their `prototype` property to share methods.
- `instanceof` checks the prototype chain.
- Prototype methods can be shared by many objects.
- Classes in JavaScript are built on top of the prototype system.

---

# 🎤 Interview Questions

1. What is a prototype in JavaScript?
2. Why are prototypes used?
3. What is the prototype chain?
4. What is `Object.prototype`?
5. What is `__proto__`?
6. What is `Object.getPrototypeOf()`?
7. What is `Object.create()`?
8. What is the difference between `prototype` and `__proto__`?
9. What is `Constructor.prototype`?
10. How do you add a method to a prototype?
11. Why are prototype methods useful?
12. What does `instanceof` do?
13. What does `isPrototypeOf()` do?
14. How does `new` work with prototypes?
15. How do prototypes help with memory and code reuse?
