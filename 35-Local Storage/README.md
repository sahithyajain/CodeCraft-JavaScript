# 35 – Local Storage

Local Storage is used to store data in the browser. The stored data normally remains even after closing and reopening the browser.

## Why do we use Local Storage?

We use Local Storage to save small amounts of data in the browser, such as:

- User preferences
- Theme settings
- Simple form data
- Shopping cart data
- User information

## Concepts Covered

### 1. What is Local Storage?

Local Storage is a browser feature used to store data as key-value pairs.

    localStorage.setItem("name", "Sahithya");

**Explanation:**  
Here, `"name"` is the key and `"Sahithya"` is the value.

---

### 2. setItem()

`setItem()` is used to store data in Local Storage.

    localStorage.setItem("name", "Sahithya");

**Output:**

    Data is stored in Local Storage.

**Explanation:**  
The value `"Sahithya"` is stored with the key `"name"`.

---

### 3. getItem()

`getItem()` is used to read stored data.

    localStorage.setItem("name", "Sahithya");

    let name = localStorage.getItem("name");

    console.log(name);

**Output:**

    Sahithya

**Explanation:**  
`getItem("name")` gets the value stored under `"name"`.

---

### 4. removeItem()

`removeItem()` is used to remove a specific item.

    localStorage.setItem("name", "Sahithya");

    localStorage.removeItem("name");

**Output:**

    The "name" item is removed.

**Explanation:**  
Only the item with the key `"name"` is deleted.

---

### 5. clear()

`clear()` is used to remove all Local Storage data.

    localStorage.setItem("name", "Sahithya");
    localStorage.setItem("age", "24");

    localStorage.clear();

**Output:**

    All Local Storage data is removed.

**Explanation:**  
`clear()` removes every item stored in Local Storage.

---

### 6. length

`length` tells us how many items are stored.

    localStorage.setItem("name", "Sahithya");
    localStorage.setItem("age", "24");

    console.log(localStorage.length);

**Output:**

    2

**Explanation:**  
There are two key-value pairs stored.

---

### 7. key()

`key()` is used to get the key at a particular position.

    localStorage.setItem("name", "Sahithya");
    localStorage.setItem("age", "24");

    console.log(localStorage.key(0));

**Output:**

    name

**Explanation:**  
`key(0)` returns the first stored key.

---

### 8. Storing Strings

Local Storage can store string values.

    localStorage.setItem("city", "Bengaluru");

    console.log(localStorage.getItem("city"));

**Output:**

    Bengaluru

**Explanation:**  
The string `"Bengaluru"` is stored and retrieved using Local Storage.

---

### 9. Storing Numbers

Numbers can be stored, but Local Storage stores values as strings.

    localStorage.setItem("age", 24);

    let age = localStorage.getItem("age");

    console.log(age);
    console.log(typeof age);

**Output:**

    24
    string

**Explanation:**  
Even though `24` was stored as a number, `getItem()` returns it as a string.

---

### 10. Storing Objects

Objects cannot be directly stored in Local Storage. We use `JSON.stringify()` to convert an object into a string.

    let student = {
        name: "Sahithya",
        age: 24
    };

    localStorage.setItem("student", JSON.stringify(student));

**Output:**

    Object is stored as a string.

**Explanation:**  
`JSON.stringify()` converts the object into a string so it can be stored.

---

### 11. Reading Objects

We use `JSON.parse()` to convert the stored string back into an object.

    let student = {
        name: "Sahithya",
        age: 24
    };

    localStorage.setItem("student", JSON.stringify(student));

    let data = JSON.parse(localStorage.getItem("student"));

    console.log(data.name);

**Output:**

    Sahithya

**Explanation:**  
`JSON.parse()` converts the stored string back into an object.

---

### 12. Checking Stored Data

We can check whether a value exists before using it.

    localStorage.setItem("name", "Sahithya");

    let name = localStorage.getItem("name");

    if (name) {
        console.log("Name is available");
    }

**Output:**

    Name is available

**Explanation:**  
The `if` condition checks whether the value exists.

---

### 13. Updating Stored Data

We can update a value by using `setItem()` again with the same key.

    localStorage.setItem("name", "Sahithya");

    localStorage.setItem("name", "Anu");

    console.log(localStorage.getItem("name"));

**Output:**

    Anu

**Explanation:**  
The old value is replaced with the new value.

---

### 14. Data Persists After Browser Restart

Local Storage data normally remains saved even after the browser is closed and opened again.

    localStorage.setItem("name", "Sahithya");

**Output:**

    Data remains stored after reopening the browser.

**Explanation:**  
Local Storage is persistent. It is not automatically removed when the browser is closed.

---

### 15. Error Handling

We can use `try...catch` when stored data may contain invalid JSON.

    let data = localStorage.getItem("student");

    try {
        let student = JSON.parse(data);
        console.log(student.name);
    } catch (error) {
        console.log("Invalid stored data");
    }

**Output:**

    Invalid stored data

**Explanation:**  
`try...catch` prevents the program from stopping when stored data cannot be converted into valid JSON.

---

# Quick Revision

| Method / Property | Use |
|---|---|
| `localStorage` | Access Local Storage |
| `setItem()` | Store data |
| `getItem()` | Get data |
| `removeItem()` | Remove one item |
| `clear()` | Remove all items |
| `length` | Count stored items |
| `key()` | Get a key |
| `JSON.stringify()` | Convert object to string |
| `JSON.parse()` | Convert string to object |

# Key Takeaways

- Local Storage stores data in the browser.
- Data is stored as key-value pairs.
- `setItem()` stores data.
- `getItem()` retrieves data.
- `removeItem()` removes one item.
- `clear()` removes all items.
- Local Storage values are stored as strings.
- Use `JSON.stringify()` to store objects.
- Use `JSON.parse()` to read objects.
- Local Storage data normally remains after closing the browser.

# Interview Questions

1. What is Local Storage?
2. Why is Local Storage used?
3. What is `setItem()`?
4. What is `getItem()`?
5. What is the difference between `removeItem()` and `clear()`?
6. What does `localStorage.length` return?
7. What is the use of `key()`?
8. Can Local Storage directly store objects?
9. Why do we use `JSON.stringify()`?
10. Why do we use `JSON.parse()`?
11. Are Local Storage values stored as strings?
12. Does Local Storage data remain after closing the browser?
13. How can you update an existing Local Storage value?
14. How can you check whether a Local Storage value exists?
15. What happens if `JSON.parse()` receives invalid JSON?
