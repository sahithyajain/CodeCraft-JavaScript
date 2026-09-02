# 📘 Template Literals in JavaScript

## 🌟 What are Template Literals?

**Template literals** are an easy way to write strings and add variables.

They use **backticks (`)**.

---

## 🤔 Why Do We Use Them?

- To write strings easily
- To add variables easily
- To combine text and values
- To write multiple lines

---

# 📚 Concepts Covered

## 1. Basic Template Literal

**Definition:** A string written using backticks.

    let message = `Hello World`;

    console.log(message);

**Output:**

    Hello World

---

## 2. Variable Inside Template Literal

**Definition:** Use `${}` to add a variable.

    let name = "Riya";

    console.log(`Hello ${name}`);

**Output:**

    Hello Riya

---

## 3. Multiple Variables

**Definition:** We can add many variables using `${}`.

    let name = "Riya";
    let age = 20;

    console.log(`Name: ${name}, Age: ${age}`);

**Output:**

    Name: Riya, Age: 20

---

## 4. Expression Inside Template Literal

**Definition:** We can do calculations inside `${}`.

    let a = 10;
    let b = 5;

    console.log(`Total: ${a + b}`);

**Output:**

    Total: 15

---

## 5. Function Inside Template Literal

**Definition:** We can call a function inside `${}`.

    function greet() {
        return "Hello";
    }

    console.log(`${greet()} Riya`);

**Output:**

    Hello Riya

---

## 6. Object Value Inside Template Literal

**Definition:** We can use object properties inside `${}`.

    let student = {
        name: "Riya"
    };

    console.log(`Name: ${student.name}`);

**Output:**

    Name: Riya

---

## 7. Array Value Inside Template Literal

**Definition:** We can use array values inside `${}`.

    let fruits = ["Apple", "Mango"];

    console.log(`Fruit: ${fruits[0]}`);

**Output:**

    Fruit: Apple

---

## 8. Multiple Lines

**Definition:** Template literals can write text on multiple lines.

    let message = `Hello
    Welcome
    Good Morning`;

    console.log(message);

**Output:**

    Hello
    Welcome
    Good Morning

---

## 9. Joining Text and Variables

**Definition:** Template literals join text and variables without using `+`.

    let name = "Riya";
    let age = 20;

    console.log(`My name is ${name} and I am ${age}`);

**Output:**

    My name is Riya and I am 20

---

## 10. Conditional Expression

**Definition:** We can use a condition inside `${}`.

    let age = 20;

    console.log(`${age >= 18 ? "Adult" : "Minor"}`);

**Output:**

    Adult

---

## 11. Template Literal in a Function

**Definition:** A function can return a template literal.

    function greet(name) {
        return `Hello ${name}`;
    }

    console.log(greet("Asha"));

**Output:**

    Hello Asha

---

## 12. Template Literal with `map()`

**Definition:** We can use template literals inside `map()`.

    let names = ["Asha", "Riya"];

    let result = names.map(name => `Hello ${name}`);

    console.log(result);

**Output:**

    ["Hello Asha", "Hello Riya"]

---

## 13. Template Literal with `if`

**Definition:** We can show different text based on a condition.

    let marks = 80;

    let result = `${marks >= 35 ? "Pass" : "Fail"}`;

    console.log(result);

**Output:**

    Pass

---

## 14. Template Literal vs `+`

**Definition:** Template literals are a simpler way to join text and variables.

    let name = "Riya";

    // Using +
    console.log("Hello " + name);

    // Using Template Literal
    console.log(`Hello ${name}`);

**Output:**

    Hello Riya
    Hello Riya

---

## 15. Backticks vs Quotes

**Definition:** Template literals use backticks instead of quotes.

    let name = "Riya";

    console.log(`Hello ${name}`);

**Output:**

    Hello Riya

---

# ⭐ Quick Revision

- **Template Literal** → String using backticks.
- **Backticks** → `` ` ``
- **`${}`** → Adds variables or expressions.
- **Multiple Lines** → Can be written easily.
- **Expression** → Calculations can be used.
- **Function** → Functions can be called inside `${}`.

---

# 🎯 Key Takeaways

- Use backticks for template literals.
- Use `${}` for variables.
- Calculations can be written inside `${}`.
- Multiple lines are easy to write.
- They are easier than using `+`.

---

# 🎤 Interview Questions

1. What are template literals?
2. Which symbol is used for template literals?
3. What is `${}` used for?
4. Can we add variables inside template literals?
5. Can we do calculations inside `${}`?
6. Can template literals have multiple lines?
7. Can we call a function inside `${}`?
8. What is the difference between `+` and template literals?
