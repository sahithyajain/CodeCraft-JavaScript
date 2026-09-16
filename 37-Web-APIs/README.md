# 37 – Web APIs

Web APIs are features provided by the browser that allow JavaScript to interact with the browser and device.

## Why do we use Web APIs?

We use Web APIs to:

- Run code after a delay
- Run code repeatedly
- Work with dates and time
- Get browser information
- Work with the current webpage URL
- Access browser features
- Interact with the browser window

## Concepts Covered

### 1. What are Web APIs?

Web APIs are browser-provided features that JavaScript can use to perform tasks outside normal JavaScript operations.

    console.log(window.innerWidth);

**Output:**

    1920

**Explanation:**  
`window` is a browser API that gives information about the browser window.

---

### 2. setTimeout()

`setTimeout()` runs a function after a specified amount of time.

    setTimeout(() => {
        console.log("Hello Sahithya");
    }, 2000);

**Output after 2 seconds:**

    Hello Sahithya

**Explanation:**  
`2000` milliseconds means 2 seconds.

---

### 3. setInterval()

`setInterval()` runs a function repeatedly after a fixed time.

    let count = 1;

    setInterval(() => {
        console.log(count);
        count++;
    }, 1000);

**Output:**

    1
    2
    3
    4
    ...

**Explanation:**  
The function runs every 1 second until it is stopped.

---

### 4. clearTimeout()

`clearTimeout()` is used to cancel a scheduled `setTimeout()`.

    let timer = setTimeout(() => {
        console.log("Hello");
    }, 3000);

    clearTimeout(timer);

**Output:**

    No output

**Explanation:**  
The timeout is cancelled before it runs.

---

### 5. clearInterval()

`clearInterval()` is used to stop a running interval.

    let count = 1;

    let timer = setInterval(() => {
        console.log(count);
        count++;

        if (count > 3) {
            clearInterval(timer);
        }
    }, 1000);

**Output:**

    1
    2
    3

**Explanation:**  
The interval stops when `count` becomes greater than 3.

---

### 6. window

`window` represents the browser window.

    console.log(window.innerWidth);

**Output:**

    1920

**Explanation:**  
`innerWidth` gives the width of the browser window.

---

### 7. window.innerHeight

`innerHeight` gives the height of the browser window.

    console.log(window.innerHeight);

**Output:**

    900

**Explanation:**  
It returns the height of the visible browser area.

---

### 8. navigator

`navigator` provides information about the browser and device environment.

    console.log(navigator.language);

**Output:**

    en-US

**Explanation:**  
`navigator.language` tells us the browser's preferred language.

---

### 9. location

`location` provides information about the current webpage URL.

    console.log(location.href);

**Output:**

    https://example.com/

**Explanation:**  
`location.href` returns the complete URL of the current webpage.

---

### 10. location.reload()

`location.reload()` is used to reload the current webpage.

    location.reload();

**Output:**

    The webpage reloads.

**Explanation:**  
The browser loads the current page again.

---

### 11. Date

`Date` is used to work with date and time.

    let today = new Date();

    console.log(today);

**Output:**

    Current date and time

**Explanation:**  
`new Date()` creates an object containing the current date and time.

---

### 12. Getting Date Information

We can use Date methods to get specific information.

    let today = new Date();

    console.log(today.getFullYear());

**Output:**

    2026

**Explanation:**  
`getFullYear()` returns the current year.

---

### 13. window.alert()

`alert()` displays a message box in the browser.

    window.alert("Hello Sahithya!");

**Output:**

    A popup showing:
    Hello Sahithya!

**Explanation:**  
It displays a simple message to the user.

---

### 14. window.confirm()

`confirm()` displays a message with OK and Cancel buttons.

    let result = window.confirm("Do you want to continue?");

    console.log(result);

**Output:**

    true

**Explanation:**  
It returns `true` when the user selects OK and `false` when the user selects Cancel.

---

### 15. window.prompt()

`prompt()` allows the user to enter some information.

    let name = window.prompt("Enter your name:");

    console.log(name);

**Output:**

    Sahithya

**Explanation:**  
The value entered by the user is returned and stored in the `name` variable.

---

# Quick Revision

| Web API | Use |
|---|---|
| `setTimeout()` | Run code after a delay |
| `setInterval()` | Run code repeatedly |
| `clearTimeout()` | Stop a timeout |
| `clearInterval()` | Stop an interval |
| `window` | Access browser window |
| `innerWidth` | Get window width |
| `innerHeight` | Get window height |
| `navigator` | Get browser information |
| `location` | Get webpage URL |
| `location.reload()` | Reload webpage |
| `Date` | Work with date and time |
| `alert()` | Show message |
| `confirm()` | Ask for confirmation |
| `prompt()` | Get user input |

# Key Takeaways

- Web APIs provide browser features to JavaScript.
- `setTimeout()` runs code after a delay.
- `setInterval()` runs code repeatedly.
- `clearTimeout()` cancels a timeout.
- `clearInterval()` stops an interval.
- `window` represents the browser window.
- `navigator` provides browser information.
- `location` provides URL information.
- `Date` is used to work with date and time.
- `alert()`, `confirm()`, and `prompt()` interact with the user.

# Interview Questions

1. What are Web APIs?
2. Why are Web APIs used?
3. What is `setTimeout()`?
4. What is `setInterval()`?
5. What is the difference between `setTimeout()` and `setInterval()`?
6. What is `clearTimeout()`?
7. What is `clearInterval()`?
8. What is the `window` object?
9. What is `navigator`?
10. What is the use of `location`?
11. What does `location.href` return?
12. What does `location.reload()` do?
13. What is the use of the `Date` object?
14. What is the difference between `alert()` and `confirm()`?
15. What does `prompt()` return?



<!-- # 📘 Session Storage

## 🌟 What is Session Storage?

**Session Storage is used to store data temporarily in the browser. The data is available during the current browser tab session.**

---

## 🤔 Why Do We Use Session Storage?

- To store temporary form data
- To store selected options
- To store temporary user preferences
- To store data needed while using a webpage
- To keep data available during a browser tab session

---

# 📚 Concepts Covered

## 1. What is Session Storage?

**Definition:** Session Storage is a browser feature used to store data as key-value pairs for the current tab session.

    sessionStorage.setItem("name", "Sahithya");

**Explanation:**  
Here, `"name"` is the key and `"Sahithya"` is the value.

---

## 2. setItem()

**Definition:** `setItem()` is used to store data in Session Storage.

    sessionStorage.setItem("name", "Sahithya");

**Output:**

    Data is stored in Session Storage.

**Explanation:**  
The value `"Sahithya"` is stored with the key `"name"`.

---

## 3. getItem()

**Definition:** `getItem()` is used to read stored data.

    sessionStorage.setItem("name", "Sahithya");

    let name = sessionStorage.getItem("name");

    console.log(name);

**Output:**

    Sahithya

**Explanation:**  
`getItem("name")` gets the value stored under `"name"`.

---

## 4. removeItem()

**Definition:** `removeItem()` is used to remove a specific item.

    sessionStorage.setItem("name", "Sahithya");

    sessionStorage.removeItem("name");

**Output:**

    The "name" item is removed.

**Explanation:**  
Only the item with the key `"name"` is deleted.

---

## 5. clear()

**Definition:** `clear()` is used to remove all Session Storage data.

    sessionStorage.setItem("name", "Sahithya");
    sessionStorage.setItem("age", "24");

    sessionStorage.clear();

**Output:**

    All Session Storage data is removed.

**Explanation:**  
`clear()` removes every item stored in Session Storage.

---

## 6. length

**Definition:** `length` tells us how many items are stored.

    sessionStorage.setItem("name", "Sahithya");
    sessionStorage.setItem("age", "24");

    console.log(sessionStorage.length);

**Output:**

    2

**Explanation:**  
There are two key-value pairs stored.

---

## 7. key()

**Definition:** `key()` is used to get the key at a particular position.

    sessionStorage.setItem("name", "Sahithya");
    sessionStorage.setItem("age", "24");

    console.log(sessionStorage.key(0));

**Output:**

    name

**Explanation:**  
`key(0)` returns the first stored key.

---

## 8. Storing Strings

**Definition:** Session Storage can store string values directly.

    sessionStorage.setItem("city", "Bengaluru");

    console.log(sessionStorage.getItem("city"));

**Output:**

    Bengaluru

**Explanation:**  
The string `"Bengaluru"` is stored and retrieved using Session Storage.

---

## 9. Storing Numbers

**Definition:** Numbers can be stored, but Session Storage stores values as strings.

    sessionStorage.setItem("age", 24);

    let age = sessionStorage.getItem("age");

    console.log(age);
    console.log(typeof age);

**Output:**

    24
    string

**Explanation:**  
Even though `24` was stored as a number, `getItem()` returns it as a string.

---

## 10. Storing Objects

**Definition:** Objects cannot be directly stored in Session Storage. We use `JSON.stringify()` to convert an object into a string.

    let student = {
        name: "Sahithya",
        age: 24
    };

    sessionStorage.setItem("student", JSON.stringify(student));

**Output:**

    Object is stored as a string.

**Explanation:**  
`JSON.stringify()` converts the object into a string so it can be stored.

---

## 11. Reading Objects

**Definition:** We use `JSON.parse()` to convert the stored string back into an object.

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

---

## 12. Checking Stored Data

**Definition:** We can check whether a value exists before using it.

    sessionStorage.setItem("name", "Sahithya");

    let name = sessionStorage.getItem("name");

    if (name) {
        console.log("Name is available");
    }

**Output:**

    Name is available

**Explanation:**  
The `if` condition checks whether the value exists.

---

## 13. Updating Stored Data

**Definition:** We can update a value by using `setItem()` again with the same key.

    sessionStorage.setItem("name", "Sahithya");

    sessionStorage.setItem("name", "Anu");

    console.log(sessionStorage.getItem("name"));

**Output:**

    Anu

**Explanation:**  
The old value is replaced with the new value.

---

## 14. Session-Based Data

**Definition:** Session Storage keeps data for the current browser tab session.

    sessionStorage.setItem("name", "Sahithya");

    console.log(sessionStorage.getItem("name"));

**Output:**

    Sahithya

**Explanation:**  
The data can be used while the tab session is active. It is normally removed when the tab or window session ends.

---

## 15. Session Storage vs Local Storage

**Definition:** Session Storage and Local Storage both store data in the browser, but they have different lifetimes.

    localStorage.setItem("name", "Sahithya");
    sessionStorage.setItem("name", "Sahithya");

**Output:**

    Local Storage → Normally remains after closing the browser
    Session Storage → Normally lasts for the current tab session

**Explanation:**  
Use **Local Storage** for data that should normally persist. Use **Session Storage** for temporary data needed only during a session.

---

# ⭐ Quick Revision

| **Method / Property** | **Use** |
| ---------------------- | ------- |
| `sessionStorage` | Access Session Storage |
| `setItem()` | Store data |
| `getItem()` | Get data |
| `removeItem()` | Remove one item |
| `clear()` | Remove all items |
| `length` | Count stored items |
| `key()` | Get a key |
| `JSON.stringify()` | Convert object to string |
| `JSON.parse()` | Convert string to object |

---

# 🎯 Key Takeaways

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

---

# 🎤 Interview Questions

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
15. What is the difference between Local Storage and Session Storage?-->
