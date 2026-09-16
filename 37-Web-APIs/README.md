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
