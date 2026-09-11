# 36 – Session Storage

Session Storage is used to store data temporarily in the browser. The data is available during the current browser tab session.

## Why do we use Session Storage?

We use Session Storage when we want to keep data only for a temporary session, such as:

- Temporary form data
- Selected options
- Temporary user preferences
- Data needed while using a webpage

## Concepts Covered

### 1. What is Session Storage?

Session Storage is a browser feature used to store data as key-value pairs for the current tab session.

    sessionStorage.setItem("name", "Sahithya");

**Explanation:**  
Here, `"name"` is the key and `"Sahithya"` is the value.

### 2. setItem()

`setItem()` is used to store data in Session Storage.

    sessionStorage.setItem("name", "Sahithya");

**Output:**

    Data is stored in Session Storage.

**Explanation:**  
The value `"Sahithya"` is stored with the key `"name"`.

### 3. getItem()

`getItem()` is used to read stored data.

    sessionStorage.setItem("name", "Sahithya");

    let name = sessionStorage.getItem("name");

    console.log(name);

**Output:**

    Sahithya

**Explanation:**  
`getItem("name")` gets the value stored under `"name"`.

### 4. removeItem()

`removeItem()` is used to remove a specific item.

    sessionStorage.setItem("name", "Sahithya");

    sessionStorage.removeItem("name");

**Output:**

    The "name" item is removed.

**Explanation:**  
Only the item with the key `"name"` is deleted.

### 5. clear()

`clear()` is used to remove all Session Storage data.

    sessionStorage.setItem("name", "Sahithya");
    sessionStorage.setItem("age", "24");

    sessionStorage.clear();

**Output:**

    All Session Storage data is removed.

**Explanation:**  
`clear()` removes every item stored in Session Storage.

### 6. length

`length` tells us how many items are stored.

    sessionStorage.setItem("name", "Sahithya");
    sessionStorage.setItem("age", "24");

    console.log(sessionStorage.length);

**Output:**

    2

**Explanation:**  
There are two key-value pairs stored.

### 7. key()

`key()` is used to get the key at a particular position.

    sessionStorage.setItem("name", "Sahithya");
    sessionStorage.setItem("age", "24");

    console.log(sessionStorage.key(0));

**Output:**

    name

**Explanation:**  
`key(0)` returns the first stored key.

### 8. Storing Strings

Session Storage can store string values directly.

    sessionStorage.setItem("city", "Bengaluru");

    console.log(sessionStorage.getItem("city"));

**Output:**

    Bengaluru

**Explanation:**  
The string `"Bengaluru"` is stored and retrieved using Session Storage.

### 9. Storing Numbers

Numbers can be stored, but Session Storage stores values as strings.

    sessionStorage.setItem("age", 24);

    let age = sessionStorage.getItem("age");

    console.log(age);
    console.log(typeof age);

**Output:**

    24
    string

**Explanation:**  
Even though `24` was stored as a number, `getItem()` returns it as a string.

### 10. Storing Objects

Objects cannot be directly stored in Session Storage. We use `JSON.stringify()` to convert an object into a string.

    let student = {
        name: "Sahithya",
        age: 24
    };

    sessionStorage.setItem("student", JSON.stringify(student));

**Output:**

    Object is stored as a string.

**Explanation:**  
`JSON.stringify()` converts the object into a string so it can be stored.

### 11. Reading Objects

We use `JSON.parse()` to convert the stored string back into an object.

    let student = {
        name: "Sahithya",
        age: 24
    };

    sessionStorage.setItem("student", JSON.stringify(student));

    let data = JSON.parse(sessionStorage.getItem("student"));

    console.log(data.name);

**Output:**

    Sahithya

**Explanation:**  
`JSON.parse()` converts the stored string back into an object.

### 12. Checking Stored Data

We can check whether a value exists before using it.

    sessionStorage.setItem("name", "Sahithya");

    let name = sessionStorage.getItem("name");

    if (name) {
        console.log("Name is available");
    }

**Output:**

    Name is available

**Explanation:**  
The `if` condition checks whether the value exists.

### 13. Updating Stored Data

We can update a value by using `setItem()` again with the same key.

    sessionStorage.setItem("name", "Sahithya");

    sessionStorage.setItem("name", "Anu");

    console.log(sessionStorage.getItem("name"));

**Output:**

    Anu

**Explanation:**  
The old value is replaced with the new value.

### 14. Session-Based Data

Session Storage keeps data for the current browser tab session.

    sessionStorage.setItem("name", "Sahithya");

    console.log(sessionStorage.getItem("name"));

**Output:**

    Sahithya

**Explanation:**  
The data can be used while the tab session is active. It is normally removed when the tab or window session ends.

### 15. Session Storage vs Local Storage

Session Storage and Local Storage both store data in the browser, but they have different lifetimes.

    localStorage.setItem("name", "Sahithya");
    sessionStorage.setItem("name", "Sahithya");

**Output:**

    Local Storage → Normally remains after closing the browser
    Session Storage → Normally lasts for the current tab session

**Explanation:**  
Use Local Storage for data that should normally persist. Use Session Storage for temporary data needed only during a session.

# Quick Revision

| Method / Property | Use |
|---|---|
| `sessionStorage` | Access Session Storage |
| `setItem()` | Store data |
| `getItem()` | Get data |
| `removeItem()` | Remove one item |
| `clear()` | Remove all items |
| `length` | Count stored items |
| `key()` | Get a key |
| `JSON.stringify()` | Convert object to string |
| `JSON.parse()` | Convert string to object |

# Key Takeaways

- Session Storage stores data in the browser.
- Data is stored as key-value pairs.
- `setItem()` stores data.
- `getItem()` retrieves data.
- `removeItem()` removes one item.
- `clear()` removes all items.
- Session Storage values are stored as strings.
- Use `JSON.stringify()` to store objects.
- Use `JSON.parse()` to read objects.
- Session Storage is mainly used for temporary data.
- Session Storage is tied to the current tab session.

# Interview Questions

1. What is Session Storage?
2. Why is Session Storage used?
3. What is `setItem()`?
4. What is `getItem()`?
5. What is the difference between `removeItem()` and `clear()`?
6. What does `sessionStorage.length` return?
7. What is the use of `key()`?
8. Can Session Storage directly store objects?
9. Why do we use `JSON.stringify()`?
10. Why do we use `JSON.parse()`?
11. Are Session Storage values stored as strings?
12. How long does Session Storage data normally remain?
13. How can you update an existing Session Storage value?
14. How can you check whether Session Storage data exists?
15. What is the difference between Local Storage and Session Storage?
