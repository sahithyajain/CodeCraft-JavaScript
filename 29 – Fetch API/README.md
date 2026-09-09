# 📘 Fetch API in JavaScript

## 🌟 What is Fetch API?

**Fetch API is used to get or send data from a server.**

---

## 🤔 Why Do We Use It?

- To get data from a server
- To send data to a server
- To work with APIs
- To handle online data

---

# 📚 Concepts Covered

## 1. Basic Fetch

**Definition:** `fetch()` is used to request data from a URL.

    fetch("https://example.com")
        .then(response => console.log(response));

**Output:**

    Response object

---

## 2. Fetch Returns a Promise

**Definition:** `fetch()` returns a Promise.

    const result = fetch("https://example.com");

    console.log(result);

**Output:**

    Promise { <pending> }

---

## 3. Getting JSON Data

**Definition:** `.json()` converts the response into JavaScript data.

    fetch("https://example.com/data")
        .then(response => response.json())
        .then(data => console.log(data));

**Output:**

    Data from the server

---

## 4. Using `async/await` with Fetch

**Definition:** `async/await` can make Fetch code easier to read.

    async function getData() {
        const response = await fetch("https://example.com/data");
        const data = await response.json();

        console.log(data);
    }

    getData();

**Output:**

    Data from the server

---

## 5. Checking Response

**Definition:** `response.ok` tells us whether the request was successful.

    fetch("https://example.com")
        .then(response => {
            console.log(response.ok);
        });

**Output:**

    true

---

## 6. Response Status

**Definition:** `response.status` gives the HTTP status code.

    fetch("https://example.com")
        .then(response => {
            console.log(response.status);
        });

**Output:**

    200

---

## 7. GET Request

**Definition:** A GET request is used to get data from a server.

    fetch("https://example.com/data")
        .then(response => response.json())
        .then(data => console.log(data));

**Output:**

    Data from the server

---

## 8. POST Request

**Definition:** A POST request is used to send data to a server.

    fetch("https://example.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Riya"
        })
    });

**Output:**

    Data sent to the server

---

## 9. Sending JSON Data

**Definition:** `JSON.stringify()` converts an object into JSON text.

    const user = {
        name: "Riya",
        age: 20
    };

    const data = JSON.stringify(user);

    console.log(data);

**Output:**

    {"name":"Riya","age":20}

---

## 10. Reading Response Text

**Definition:** `.text()` reads the response as text.

    fetch("https://example.com")
        .then(response => response.text())
        .then(data => console.log(data));

**Output:**

    Website text

---

## 11. Request Headers

**Definition:** Headers give extra information about a request.

    fetch("https://example.com/data", {
        headers: {
            "Content-Type": "application/json"
        }
    });

**Output:**

    Request sent with headers

---

## 12. Handling Fetch Errors

**Definition:** Errors from a failed Fetch request can be handled with `catch()`.

    fetch("https://wrong-url.com")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log("Error"));

**Output:**

    Error

---

## 13. Fetch with `try...catch`

**Definition:** `try...catch` can handle errors when using Fetch with `async/await`.

    async function getData() {
        try {
            const response = await fetch("https://example.com/data");
            const data = await response.json();

            console.log(data);
        } catch (error) {
            console.log("Error");
        }
    }

    getData();

**Output:**

    Data from the server

---

## 14. PUT Request

**Definition:** A PUT request is used to update existing data.

    fetch("https://example.com/users/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Riya"
        })
    });

**Output:**

    Data updated

---

## 15. DELETE Request

**Definition:** A DELETE request is used to remove data.

    fetch("https://example.com/users/1", {
        method: "DELETE"
    });

**Output:**

    Data deleted

---

# ⭐ Quick Revision

- **`fetch()`** → Sends a request
- **GET** → Gets data
- **POST** → Sends new data
- **PUT** → Updates data
- **DELETE** → Removes data
- **`.json()`** → Reads JSON data
- **`.text()`** → Reads text
- **`response.ok`** → Checks success
- **`response.status`** → Gives status code
- **`JSON.stringify()`** → Converts object to JSON
- **`catch()`** → Handles errors

---

# 🎯 Key Takeaways

- Fetch API is used to communicate with servers.
- `fetch()` returns a Promise.
- We can use `.then()` or `async/await`.
- `.json()` is commonly used to read API data.
- GET gets data.
- POST sends data.
- PUT updates data.
- DELETE removes data.
- Use error handling when working with Fetch.

---

# 🎤 Interview Questions

1. What is Fetch API?
2. Why do we use `fetch()`?
3. What does `fetch()` return?
4. What is a GET request?
5. What is a POST request?
6. What is a PUT request?
7. What is a DELETE request?
8. What does `.json()` do?
9. What is `response.ok`?
10. What is `response.status`?
11. Can Fetch API be used with `async/await`?
12. How do you handle Fetch errors?
