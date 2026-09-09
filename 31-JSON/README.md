# 📘 JSON in JavaScript

## 🌟 What is JSON?

**JSON (JavaScript Object Notation) is a simple format used to store and exchange data between applications.**

JSON is commonly used when working with **APIs, servers, websites, and databases**.

### Example:

    {
        "name": "Riya",
        "age": 20,
        "city": "Bengaluru"
    }

Here:

- `"name"` → key
- `"Riya"` → value
- `"age"` → key
- `20` → value

---

## 🤔 Why Do We Use JSON?

We use JSON because it is:

- Simple and easy to understand
- Easy for computers to read
- Easy for humans to read
- Commonly used to exchange data
- Used with APIs
- Supported by many programming languages

### Example:

A website may request student information from a server.

The server can send:

    {
        "name": "Riya",
        "age": 20
    }

JavaScript can then read and use this data.

---

# 📚 Concepts Covered

## 1. JSON Basics

**Definition:** JSON stores data using **key-value pairs**.

### Example:

    const user = {
        "name": "Riya",
        "age": 20,
        "city": "Bengaluru"
    };

    console.log(user.name);

### Output:

    Riya

### Explanation:

The data is stored using keys and values.

Here:

    "name": "Riya"

`name` is the key and `Riya` is its value.

We can access the value using:

    user.name

---

### 🔹 JSON Data Types

JSON can store different types of values:

    {
        "name": "Riya",
        "age": 20,
        "isStudent": true,
        "marks": null
    }

Here:

- `"Riya"` → String
- `20` → Number
- `true` → Boolean
- `null` → Null

JSON can also contain arrays and objects.

### Example:

    {
        "name": "Riya",
        "subjects": ["Maths", "Science", "English"]
    }

---

### 🔹 JSON Rules

JSON has some simple rules:

1. Keys are written inside double quotes.
2. Strings use double quotes.
3. Data is written as key-value pairs.
4. Key and value are separated by `:`.
5. Different pairs are separated by commas.
6. Objects use `{ }`.
7. Arrays use `[ ]`.

### Example:

    {
        "name": "Riya",
        "age": 20
    }

---

### ❌ Common Error

    const data = {
        'name': 'Riya'
    };

    console.log(data);

### Explanation:

This is a valid **JavaScript object**, but standard JSON requires **double quotes** around keys and strings.

---

### ✅ Correct JSON

    const data = {
        "name": "Riya"
    };

    console.log(data);

### Output:

    { name: "Riya" }

### Explanation:

JSON uses double quotes for keys and string values.

---

# 2. `JSON.parse()`

**Definition:** `JSON.parse()` converts JSON text into a JavaScript object.

### Why Do We Need It?

When JSON data comes from a server, it may be received as **text**.

JavaScript needs to convert that text into an object before easily working with its values.

### Example:

    const data = '{"name":"Riya","age":20}';

    const user = JSON.parse(data);

    console.log(user.name);
    console.log(user.age);

### Output:

    Riya
    20

### Explanation:

Before parsing, `data` is JSON text.

    '{"name":"Riya","age":20}'

After using `JSON.parse()`:

    const user = JSON.parse(data);

it becomes a JavaScript object.

We can then access its values:

    user.name
    user.age

---

### 🔹 JSON Text vs JavaScript Object

JSON text:

    '{"name":"Riya","age":20}'

JavaScript object:

    {
        name: "Riya",
        age: 20
    }

`JSON.parse()` converts:

**JSON text → JavaScript object**

---

### ❌ Error

    const data = '{"name":"Riya","age":20';

    const user = JSON.parse(data);

### Error:

    SyntaxError

### Explanation:

The JSON is incomplete because the closing `}` is missing.

---

### ✅ Solution

    const data = '{"name":"Riya","age":20}';

    const user = JSON.parse(data);

    console.log(user.name);

### Output:

    Riya

### Explanation:

The JSON is correctly written, so `JSON.parse()` can convert it into an object.

---

# 3. `JSON.stringify()`

**Definition:** `JSON.stringify()` converts a JavaScript object into JSON text.

### Why Do We Need It?

When we want to **send JavaScript data to a server**, we often convert the object into JSON text first.

### Example:

    const user = {
        name: "Riya",
        age: 20
    };

    const data = JSON.stringify(user);

    console.log(data);

### Output:

    {"name":"Riya","age":20}

### Explanation:

Before `JSON.stringify()`:

    {
        name: "Riya",
        age: 20
    }

After `JSON.stringify()`:

    '{"name":"Riya","age":20}'

So:

**JavaScript object → JSON text**

---

### 🔹 `JSON.stringify()` with an Array

It can also convert arrays into JSON text.

    const fruits = ["Apple", "Mango", "Orange"];

    const data = JSON.stringify(fruits);

    console.log(data);

### Output:

    ["Apple","Mango","Orange"]

### Explanation:

The JavaScript array is converted into JSON text.

---

### ❌ Error

    const user = {
        name: "Riya",
        age: 20
    };

    console.log(user.toJSON());

### Error:

    TypeError

### Explanation:

`toJSON()` is not the method used to convert an object into JSON.

---

### ✅ Solution

    const user = {
        name: "Riya",
        age: 20
    };

    const data = JSON.stringify(user);

    console.log(data);

### Output:

    {"name":"Riya","age":20}

### Explanation:

Use `JSON.stringify()` to convert the JavaScript object into JSON text.

---

# 🔄 JSON.parse() vs JSON.stringify()

These two methods work in **opposite directions**.

### `JSON.parse()`

    JSON text
         ↓
    JavaScript object

Example:

    const data = '{"name":"Riya"}';

    const user = JSON.parse(data);

---

### `JSON.stringify()`

    JavaScript object
         ↓
    JSON text

Example:

    const user = {
        name: "Riya"
    };

    const data = JSON.stringify(user);

---

# 🌐 JSON with APIs

JSON is very commonly used when working with APIs.

### Example:

A server may send:

    {
        "name": "Riya",
        "age": 20
    }

JavaScript can receive the JSON data and convert it into an object using:

    JSON.parse()

If JavaScript needs to send an object to a server, it can use:

    JSON.stringify()

### Simple Flow:

    Server
       ↓
    JSON data
       ↓
    JSON.parse()
       ↓
    JavaScript Object

And when sending data:

    JavaScript Object
       ↓
    JSON.stringify()
       ↓
    JSON data
       ↓
    Server

---

# ⭐ Quick Revision

- **JSON** → Format used to store and exchange data
- **Key-value pair** → Basic structure of JSON
- **Object `{ }`** → Stores JSON data as an object
- **Array `[ ]`** → Stores a list of values
- **`JSON.parse()`** → JSON text → JavaScript object
- **`JSON.stringify()`** → JavaScript object → JSON text
- **Double quotes** → Used for JSON keys and strings
- **API** → JSON is commonly used to exchange API data

---

# 🎯 Key Takeaways

- JSON stands for **JavaScript Object Notation**.
- JSON is used to store and exchange data.
- JSON uses **key-value pairs**.
- JSON commonly uses strings, numbers, booleans, null, arrays, and objects.
- JSON keys and strings use **double quotes**.
- `JSON.parse()` converts JSON text into a JavaScript object.
- `JSON.stringify()` converts a JavaScript object into JSON text.
- JSON is commonly used when working with APIs.
- `parse()` and `stringify()` work in opposite directions.

---

# 🎤 Interview Questions

1. What is JSON?
2. What does JSON stand for?
3. Why do we use JSON?
4. Where is JSON commonly used?
5. What is a key-value pair?
6. What are the basic rules of JSON?
7. What data types can JSON store?
8. What is `JSON.parse()`?
9. What does `JSON.parse()` return?
10. What is `JSON.stringify()`?
11. What does `JSON.stringify()` return?
12. What is the difference between `JSON.parse()` and `JSON.stringify()`?
13. Why are double quotes used in JSON?
14. How is JSON useful when working with APIs?
15. What happens if invalid JSON is passed to `JSON.parse()`?
