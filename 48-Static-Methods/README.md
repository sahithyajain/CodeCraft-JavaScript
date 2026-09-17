# 📘 Static Methods in JavaScript

## 🌟 What is a Static Method?

A **static method** belongs to the class itself, not to its objects.

We use the class name to call a static method.

### Example

    class Student {
        static show() {
            console.log("Student details");
        }
    }

    Student.show();

### Output

    Student details

---

## 🤔 Why Do We Use Static Methods?

We use static methods to:

- Perform tasks related to the class
- Create utility methods
- Use a method without creating an object
- Keep common functionality inside a class

---

# 📚 Concepts Covered

## 1. What is a Static Method?

A static method belongs to the class instead of an object.

### Example

    class Student {
        static hello() {
            console.log("Hello");
        }
    }

    Student.hello();

---

## 2. Creating a Static Method

Use the `static` keyword before the method name.

### Example

    class Student {
        static show() {
            console.log("Student");
        }
    }

    Student.show();

---

## 3. Calling a Static Method

A static method is called using the class name.

### Example

    class Student {
        static show() {
            console.log("Sahithya");
        }
    }

    Student.show();

---

## 4. Static Method vs Normal Method

A static method is called using the class name, while a normal method is called using an object.

### Example

    class Student {
        static show() {
            console.log("Static method");
        }

        hello() {
            console.log("Normal method");
        }
    }

    Student.show();

    const student = new Student();
    student.hello();

---

## 5. Static Method with Parameters

A static method can accept parameters.

### Example

    class Calculator {
        static add(a, b) {
            console.log(a + b);
        }
    }

    Calculator.add(10, 20);

---

## 6. Multiple Static Methods

A class can have multiple static methods.

### Example

    class Calculator {
        static add(a, b) {
            return a + b;
        }

        static multiply(a, b) {
            return a * b;
        }
    }

    console.log(Calculator.add(10, 20));
    console.log(Calculator.multiply(10, 20));

---

## 7. Static Method with Return Value

A static method can return a value.

### Example

    class Calculator {
        static square(number) {
            return number * number;
        }
    }

    console.log(Calculator.square(5));

---

## 8. Static Properties

A static property belongs to the class.

### Example

    class Student {
        static school = "ABC School";
    }

    console.log(Student.school);

---

## 9. Accessing Static Properties

Static properties are accessed using the class name.

### Example

    class Student {
        static age = 24;
    }

    console.log(Student.age);

---

## 10. Static Method with Static Property

A static method can access a static property using the class name.

### Example

    class Student {
        static school = "ABC School";

        static showSchool() {
            console.log(Student.school);
        }
    }

    Student.showSchool();

---

## 11. Static Method in Inheritance

Static methods can be inherited by a child class.

### Example
