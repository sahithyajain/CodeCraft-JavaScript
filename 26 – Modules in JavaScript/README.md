# 📘 Modules in JavaScript

## 🌟 What are Modules?

**Modules let us split JavaScript code into separate files and use that code in other files.**

---

## 🤔 Why Do We Use Them?

- To organize code
- To reuse code
- To keep files smaller
- To make projects easier to manage

---

# 📚 Concepts Covered

## 1. Basic Module

**Definition:** A JavaScript file can contain code that can be used by another file.

    // math.js
    const add = (a, b) => {
        return a + b;
    };

---

## 2. Export

**Definition:** `export` makes code available to other JavaScript files.

    export const name = "Riya";

---

## 3. Import

**Definition:** `import` brings exported code into another JavaScript file.

    import { name } from "./user.js";

    console.log(name);

**Output:**

    Riya

---

## 4. Named Export

**Definition:** A named export exports a specific variable, function, or value by its name.

    export const age = 20;

---

## 5. Named Import

**Definition:** A named import imports a specific exported value using its name.

    import { age } from "./user.js";

    console.log(age);

**Output:**

    20

---

## 6. Exporting a Function

**Definition:** A function can be exported and used in another file.

    export function add(a, b) {
        return a + b;
    }

---

## 7. Importing a Function

**Definition:** An exported function can be imported and called in another file.

    import { add } from "./math.js";

    console.log(add(10, 20));

**Output:**

    30

---

## 8. Multiple Named Exports

**Definition:** A module can export multiple values.

    export const name = "Riya";
    export const age = 20;

---

## 9. Multiple Named Imports

**Definition:** Multiple exported values can be imported together.

    import { name, age } from "./user.js";

    console.log(name);
    console.log(age);

**Output:**

    Riya
    20

---

## 10. Default Export

**Definition:** `export default` exports one main value from a module.

    export default function greet() {
        console.log("Hello");
    }

---

## 11. Default Import

**Definition:** A default export can be imported with any name.

    import greet from "./greet.js";

    greet();

**Output:**

    Hello

---

## 12. Default Export vs Named Export

**Definition:** A module can have a default export and named exports.

    export default function greet() {
        console.log("Hello");
    }

    export const name = "Riya";

---

## 13. Import with Alias

**Definition:** `as` gives an imported value a different name.

    import { name as studentName } from "./user.js";

    console.log(studentName);

**Output:**

    Riya

---

## 14. Export with Alias

**Definition:** `as` can give an exported value another name.

    const name = "Riya";

    export { name as studentName };

---

## 15. Module File Extension

**Definition:** JavaScript modules are commonly used with `.js` files and loaded as modules.

    <script type="module" src="app.js"></script>

---

# ⭐ Quick Revision

- **Module** → Separate JavaScript file
- **`export`** → Makes code available
- **`import`** → Brings code into another file
- **Named Export** → Export using a specific name
- **Named Import** → Import using that name
- **`export default`** → Main export from a file
- **`import` default** → Can use any name
- **`as`** → Gives another name

---

# 🎯 Key Takeaways

- Modules help organize JavaScript code.
- Use `export` to share code.
- Use `import` to use shared code.
- We can use named exports.
- We can use default exports.
- We can rename imports and exports using `as`.
- Modules are very useful in large projects.

---

# 🎤 Interview Questions

1. What are modules in JavaScript?
2. Why do we use modules?
3. What is `export`?
4. What is `import`?
5. What is a named export?
6. What is a default export?
7. What is the difference between named and default exports?
8. Can we export multiple values from a module?
9. What is `as` used for?
10. How do we load a JavaScript file as a module?
