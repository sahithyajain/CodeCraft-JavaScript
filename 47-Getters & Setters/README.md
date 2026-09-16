# 📘 Getters & Setters in JavaScript

## 🌟 What are Getters & Setters?

**Getters and Setters** are special methods used to **get and set object properties**.

- **Getter (`get`)** → used to read a value.
- **Setter (`set`)** → used to change a value.

### Example

    class Student {
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

    const student = new Student("Sahithya");

    console.log(student.studentName);

    student.studentName = "Anu";

    console.log(student.studentName);

### Output

    Sahithya
    Anu

---

## 🤔 Why Do We Use Getters & Setters?

We use getters and setters to:

- Read and update data easily
- Control how properties are accessed
- Validate data before changing it
- Protect data from incorrect values
- Make code cleaner

---

# 📚 Concepts Covered

## 1. What are Getters and Setters?

A getter reads a value and a setter changes a value.

### Example

    class Student {
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

    const student = new Student("Sahithya");

    console.log(student.studentName);

    student.studentName = "Anu";

    console.log(student.studentName);

---

## 2. Getter

A getter is used to read a property value.

### Example

    class Student {
        constructor(name) {
            this.name = name;
        }

        get studentName() {
            return this.name;
        }
    }

    const student = new Student("Sahithya");

    console.log(student.studentName);

---

## 3. Setter

A setter is used to change a property value.

### Example

    class Student {
        constructor(name) {
            this.name = name;
        }

        set studentName(name) {
            this.name = name;
        }
    }

    const student = new Student("Sahithya");

    student.studentName = "Anu";

    console.log(student.name);

---

## 4. Getter with a Property

A getter can return the value of a property.

### Example

    class Person {
        constructor(name) {
            this.name = name;
        }

        get nameValue() {
            return this.name;
        }
    }

    const person = new Person("Sahithya");

    console.log(person.nameValue);

---

## 5. Setter with a Property

A setter can update the value of a property.

### Example

    class Person {
        constructor(name) {
            this.name = name;
        }

        set nameValue(name) {
            this.name = name;
        }
    }

    const person = new Person("Sahithya");

    person.nameValue = "Anu";

    console.log(person.name);

---

## 6. Getter and Setter Together

A getter and setter can be used together for the same property.

### Example

    class Student {
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

    const student = new Student("Sahithya");

    console.log(student.studentName);

    student.studentName = "Anu";

    console.log(student.studentName);

---

## 7. Validation with Setter

A setter can check a value before storing it.

### Example

    class Student {
        constructor(marks) {
            this.marks = marks;
        }

        set studentMarks(marks) {
            if (marks >= 0 && marks <= 100) {
                this.marks = marks;
            }
        }
    }

    const student = new Student(80);

    student.studentMarks = 90;

    console.log(student.marks);

---

## 8. Updating Data with Setter

A setter can be used to update existing data.

### Example

    class Person {
        constructor(age) {
            this.age = age;
        }

        set personAge(age) {
            this.age = age;
        }
    }

    const person = new Person(24);

    person.personAge = 25;

    console.log(person.age);

---

## 9. Read-Only Property

A getter without a setter can create a read-only property.

### Example

    class Student {
        constructor(name) {
            this.name = name;
        }

        get studentName() {
            return this.name;
        }
    }

    const student = new Student("Sahithya");

    console.log(student.studentName);

There is no setter, so the property cannot be changed through `studentName`.

---

## 10. Write-Only Concept

A setter can be used to change a value without providing a getter for that property.

### Example

    class Student {
        set studentName(name) {
            this.name = name;
        }
    }

    const student = new Student();

    student.studentName = "Sahithya";

    console.log(student.name);

The setter changes the value, but there is no getter for `studentName`.

---

## 11. Getter with Calculated Value

A getter can return a calculated value.

### Example

    class Student {
        constructor(marks) {
            this.marks = marks;
        }

        get result() {
            return this.marks >= 35 ? "Pass" : "Fail";
        }
    }

    const student = new Student(80);

    console.log(student.result);

---

## 12. Setter with Private Property

A setter can safely update a private property.

### Example

    class Student {
        #marks = 0;

        set studentMarks(marks) {
            this.#marks = marks;
        }

        showMarks() {
            console.log(this.#marks);
        }
    }

    const student = new Student();

    student.studentMarks = 90;

    student.showMarks();

---

## 13. Getter with Private Property

A getter can safely read a private property.

### Example

    class Student {
        #marks = 80;

        get studentMarks() {
            return this.#marks;
        }
    }

    const student = new Student();

    console.log(student.studentMarks);

---

## 14. Real-Life Example

Getters and setters can be used in a bank account to safely access and update a balance.

### Example

    class BankAccount {
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

    const account = new BankAccount(1000);

    console.log(account.amount);

    account.amount = 1500;

    console.log(account.amount);

---

## 15. Complete Getters & Setters Example

Getters and setters can be used together to read, update, and validate data.

### Example

    class Student {
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

    const student = new Student("Sahithya", 80);

    console.log(student.studentName);
    console.log(student.studentMarks);

    student.studentName = "Anu";
    student.studentMarks = 90;

    console.log(student.studentName);
    console.log(student.studentMarks);

---

# ⭐ Quick Revision

| Concept | Meaning |
|---|---|
| Getter | Reads a value |
| Setter | Changes a value |
| `get` | Creates a getter |
| `set` | Creates a setter |
| Validation | Checks data before changing it |
| Read-Only | Getter without a setter |
| Write-Only | Setter without a getter |
| Private Property | Data hidden inside a class |
| Calculated Getter | Getter that returns a calculated value |

---

# 🎯 Key Takeaways

- `get` is used to **read** a value.
- `set` is used to **change** a value.
- Getters and setters are written inside a class.
- A getter is used like a normal property.
- A setter is also used like a normal property.
- Setters can be used for **validation**.
- A getter without a setter can create a **read-only property**.
- Getters and setters can work with **private properties**.

---

# 🎤 Interview Questions

1. What is a getter?
2. What is a setter?
3. What is the difference between getter and setter?
4. How do you create a getter in JavaScript?
5. How do you create a setter in JavaScript?
6. How do you call a getter?
7. How do you use a setter?
8. Can a getter have a setter?
9. How can a setter validate data?
10. What is a read-only property?
11. What is a write-only concept?
12. Can getters access private properties?
13. Can setters update private properties?
14. What is the difference between a normal method and a getter?
15. Give a real-life example of getters and setters.
