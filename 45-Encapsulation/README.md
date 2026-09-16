# 📘 Encapsulation in JavaScript

## 🌟 What is Encapsulation?

**Encapsulation means keeping data safe and controlling how we access or change it.**

👉 In simple words: **Hide the data and control its use.**

### Example

    class BankAccount {
        #balance = 1000;

        getBalance() {
            return this.#balance;
        }
    }

    const account = new BankAccount();

    console.log(account.getBalance());

**Output:**

    1000

Here, `#balance` is private, so we cannot access it directly from outside the class.

---

## 🤔 Why Do We Use Encapsulation?

We use encapsulation to:

- 🔒 Keep data safe
- 🚫 Stop unwanted changes
- 🎯 Control how data is used
- 🧹 Keep code organized
- ♻️ Reuse code easily

---

# 📚 Concepts Covered

## 1. Data and Methods Together

**Definition:** Encapsulation keeps related data and methods together inside a class.

### Example

    class Student {
        name = "Sahithya";

        showName() {
            console.log(this.name);
        }
    }

    const student = new Student();

    student.showName();

**Output:**

    Sahithya

The `name` and `showName()` method are inside the same class.

---

## 2. Public Properties

**Definition:** A public property can be accessed from outside the class.

### Example

    class Student {
        name = "Sahithya";
    }

    const student = new Student();

    console.log(student.name);

**Output:**

    Sahithya

`name` is public, so we can access it directly.

---

## 3. Private Properties

**Definition:** A private property cannot be accessed directly from outside the class.

### Example

    class Student {
        #marks = 90;

        showMarks() {
            console.log(this.#marks);
        }
    }

    const student = new Student();

    student.showMarks();

**Output:**

    90

`#marks` is private and can only be used inside the class.

👉 `#` is used to create a private property.

---

## 4. Private Methods

**Definition:** A private method can only be used inside the class.

### Example

    class Student {
        #showMessage() {
            console.log("Hello Sahithya");
        }

        display() {
            this.#showMessage();
        }
    }

    const student = new Student();

    student.display();

**Output:**

    Hello Sahithya

`#showMessage()` is private, so it is called inside the class through `display()`.

---

## 5. Accessing Private Data Through a Method

**Definition:** We can use a public method to access private data.

### Example

    class BankAccount {
        #balance = 5000;

        getBalance() {
            return this.#balance;
        }
    }

    const account = new BankAccount();

    console.log(account.getBalance());

**Output:**

    5000

We cannot access `#balance` directly, so we use `getBalance()`.

---

## 6. Getter

**Definition:** A getter is used to read private data.

### Example

    class Student {
        #marks = 90;

        get marks() {
            return this.#marks;
        }
    }

    const student = new Student();

    console.log(student.marks);

**Output:**

    90

The getter lets us read the private `#marks`.

👉 **Getter → Read**

---

## 7. Setter

**Definition:** A setter is used to change private data.

### Example

    class Student {
        #marks = 50;

        set marks(value) {
            this.#marks = value;
        }

        get marks() {
            return this.#marks;
        }
    }

    const student = new Student();

    student.marks = 90;

    console.log(student.marks);

**Output:**

    90

The setter changes the private `#marks`.

👉 **Setter → Change**

---

## 8. Validation with Setter

**Definition:** A setter can check a value before changing private data.

### Example

    class Student {
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

    const student = new Student();

    student.marks = 90;

    console.log(student.marks);

**Output:**

    90

The setter checks whether the marks are between `0` and `100`.

👉 **Validation → Check before changing**

---

## 9. Read-Only Data

**Definition:** Data is read-only when we can read it but cannot change it from outside.

### Example

    class Student {
        #rollNumber = 101;

        get rollNumber() {
            return this.#rollNumber;
        }
    }

    const student = new Student();

    console.log(student.rollNumber);

**Output:**

    101

There is no setter, so we can read the value but cannot change it through `rollNumber`.

---

## 10. Encapsulation in a Class

**Definition:** A class can hide its data and use methods to control it.

### Example

    class BankAccount {
        #balance = 1000;

        deposit(amount) {
            this.#balance += amount;
        }

        getBalance() {
            return this.#balance;
        }
    }

    const account = new BankAccount();

    account.deposit(500);

    console.log(account.getBalance());

**Output:**

    1500

The balance is private, and `deposit()` controls how it is changed.

---

## 11. Constructor with Private Data

**Definition:** A constructor can set private data when an object is created.

### Example

    class Student {
        #name;

        constructor(name) {
            this.#name = name;
        }

        getName() {
            return this.#name;
        }
    }

    const student = new Student("Sahithya");

    console.log(student.getName());

**Output:**

    Sahithya

The constructor stores the name in the private `#name`.

---

## 12. Updating Private Data Safely

**Definition:** A public method can check and safely change private data.

### Example

    class BankAccount {
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

    const account = new BankAccount();

    account.withdraw(300);

    console.log(account.getBalance());

**Output:**

    700

The method checks the amount before changing the balance.

---

## 13. Direct Access to Private Data

**Definition:** Private data cannot be accessed directly from outside the class.

### Example

    class Student {
        #marks = 90;
    }

    const student = new Student();

    console.log(student.#marks);

❌ **Error:**

    SyntaxError: Private field '#marks' must be declared in an enclosing class

`#marks` is private, so direct access is not allowed.

### Correct Way

    class Student {
        #marks = 90;

        getMarks() {
            return this.#marks;
        }
    }

    const student = new Student();

    console.log(student.getMarks());

**Output:**

    90

We use a public method to access the private data.

---

## 14. Real-Life Example — Bank Account

**Definition:** A bank account can hide the balance and control it through methods.

### Example

    class BankAccount {
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

    const account = new BankAccount();

    account.deposit(1000);
    account.withdraw(500);

    console.log(account.getBalance());

**Output:**

    5500

The balance is private and is controlled through `deposit()`, `withdraw()`, and `getBalance()`.

---

## 15. Complete Encapsulation Example

**Definition:** Encapsulation hides data and uses methods to control that data.

### Example

    class Student {
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

    const student = new Student("Sahithya", 80);

    student.setMarks(95);
    student.getDetails();

**Output:**

    Sahithya
    95

The data is private, and the methods control how the data is used.

---

# ⭐ Quick Revision

| Concept | Simple Meaning |
|---|---|
| Encapsulation | Keep data safe and control its use |
| Public Property | Can be accessed from outside |
| Private Property | Cannot be accessed directly from outside |
| `#` | Creates private data |
| Private Method | Can only be used inside the class |
| Getter | Reads private data |
| Setter | Changes private data |
| Validation | Checks data before changing it |
| Read-only | Can be read but not changed |
| Constructor | Sets data when an object is created |

---

# 🎯 Key Takeaways

- 🔒 Encapsulation keeps data safe.
- `#` is used for private properties and methods.
- Private data cannot be accessed directly from outside.
- Public methods can control private data.
- Getter is used to **read** data.
- Setter is used to **change** data.
- Setters can also **validate** data.
- Encapsulation makes code safer and organized.

---

# 🎤 Interview Questions

1. What is encapsulation in JavaScript?
2. Why do we use encapsulation?
3. What is a public property?
4. What is a private property?
5. What does `#` mean in JavaScript?
6. Can we access a private property from outside?
7. What is a private method?
8. What is a getter?
9. What is a setter?
10. What is the difference between getter and setter?
11. How can a setter validate data?
12. What is read-only data?
13. How can we access private data?
14. Give a real-life example of encapsulation.
15. What are the benefits of encapsulation?
