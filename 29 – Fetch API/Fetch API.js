// 29 - Fetch API in JavaScript

// ==================================================
// 1. BASIC FETCH
// ==================================================

fetch("https://example.com")
    .then(response => console.log(response));

/* Output: Response object

Explanation: fetch() sends a request to the given URL. */


// ❌ Error
fetch("wrong-url")
    .then(response => console.log(response));

/* Error: TypeError: Failed to fetch

Explanation: The URL is not valid. */


// ✅ Solution
fetch("https://example.com")
    .then(response => console.log(response));

/*
Output:
Response object

Explanation:
Use a valid URL.
*/


// ==================================================
// 2. FETCH RETURNS A PROMISE
// ==================================================

const result = fetch("https://example.com");

console.log(result);

/*
Output:
Promise { <pending> }

Explanation:
fetch() returns a Promise because the request takes time.
*/


// ❌ Error
const result2 = fetch("wrong-url");

console.log(result2);

/*
Error:
The request will fail.

Explanation:
The URL is invalid.
*/


// ✅ Solution
const result3 = fetch("https://example.com");

console.log(result3);

/*
Output:
Promise { <pending> }

Explanation:
Use a valid URL.
*/


// ==================================================
// 3. GETTING JSON DATA
// ==================================================

fetch("https://example.com/data")
    .then(response => response.json())
    .then(data => console.log(data));

/*
Output:
Data from the server

Explanation:
json() converts the response into JavaScript data.
*/


// ❌ Error
fetch("https://example.com/data")
    .then(response => console.log(response.data));

/*
Error:
undefined

Explanation:
Response data is not directly available as response.data.
*/


// ✅ Solution
fetch("https://example.com/data")
    .then(response => response.json())
    .then(data => console.log(data));

/*
Output:
Data from the server

Explanation:
Use json() to read JSON data.
*/


// ==================================================
// 4. USING ASYNC/AWAIT WITH FETCH
// ==================================================

async function getData() {
    const response = await fetch("https://example.com/data");
    const data = await response.json();

    console.log(data);
}

getData();

/*
Output:
Data from the server

Explanation:
await waits for the Fetch request to finish.
*/


// ❌ Error
async function getDataError() {
    const response = await fetch("wrong-url");
    const data = await response.json();

    console.log(data);
}

getDataError();

/*
Error:
TypeError: Failed to fetch

Explanation:
The URL is invalid and the error is not handled.
*/


// ✅ Solution
async function getDataSolution() {
    try {
        const response = await fetch("https://example.com/data");
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error");
    }
}

getDataSolution();

/*
Output:
Data from the server

Explanation:
try...catch handles Fetch errors.
*/


// ==================================================
// 5. CHECKING RESPONSE
// ==================================================

fetch("https://example.com")
    .then(response => {
        console.log(response.ok);
    });

/*
Output:
true

Explanation:
response.ok tells whether the request was successful.
*/


// ❌ Error
fetch("https://example.com")
    .then(response => {
        console.log(response.success);
    });

/*
Output:
undefined

Explanation:
Response does not have a success property.
*/


// ✅ Solution
fetch("https://example.com")
    .then(response => {
        console.log(response.ok);
    });

/*
Output:
true

Explanation:
Use response.ok to check success.
*/


// ==================================================
// 6. RESPONSE STATUS
// ==================================================

fetch("https://example.com")
    .then(response => {
        console.log(response.status);
    });

/*
Output:
200

Explanation:
200 means the request was successful.
*/


// ❌ Error
fetch("https://example.com")
    .then(response => {
        console.log(response.code);
    });

/*
Output:
undefined

Explanation:
The Response object uses status, not code.
*/


// ✅ Solution
fetch("https://example.com")
    .then(response => {
        console.log(response.status);
    });

/*
Output:
200

Explanation:
Use response.status to get the HTTP status code.
*/


// ==================================================
// 7. GET REQUEST
// ==================================================

fetch("https://example.com/data")
    .then(response => response.json())
    .then(data => console.log(data));

/*
Output:
Data from the server

Explanation:
GET is used to get data from a server.
*/


// ❌ Error
fetch("https://example.com/data", {
    method: "GETT"
});

/*
Error:
Invalid request method

Explanation:
The method name is incorrect.
*/


// ✅ Solution
fetch("https://example.com/data", {
    method: "GET"
})
    .then(response => response.json())
    .then(data => console.log(data));

/*
Output:
Data from the server

Explanation:
Use GET correctly to request data.
*/


// ==================================================
// 8. POST REQUEST
// ==================================================

fetch("https://example.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Riya"
    })
});

/*
Output:
Data sent to the server

Explanation:
POST is used to send new data.
*/


// ❌ Error
fetch("https://example.com/users", {
    method: "POST",
    body: {
        name: "Riya"
    }
});

/*
Error:
Request body is not in the expected JSON format.

Explanation:
Objects should be converted to JSON before sending.
*/


// ✅ Solution
fetch("https://example.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Riya"
    })
});

/*
Output:
Data sent to the server

Explanation:
JSON.stringify() converts the object into JSON text.
*/


// ==================================================
// 9. SENDING JSON DATA
// ==================================================

const user = {
    name: "Riya",
    age: 20
};

const jsonData = JSON.stringify(user);

console.log(jsonData);

/*
Output:
{"name":"Riya","age":20}

Explanation:
JSON.stringify() converts a JavaScript object into JSON text.
*/


// ❌ Error
const userError = {
    name: "Riya"
};

console.log(userError.toJSON());

/*
Error:
TypeError: userError.toJSON is not a function

Explanation:
JavaScript objects do not have a toJSON() method by default.
*/


// ✅ Solution
const userSolution = {
    name: "Riya"
};

console.log(JSON.stringify(userSolution));

/*
Output:
{"name":"Riya"}

Explanation:
Use JSON.stringify() to convert the object to JSON.
*/


// ==================================================
// 10. READING RESPONSE TEXT
// ==================================================

fetch("https://example.com")
    .then(response => response.text())
    .then(data => console.log(data));

/*
Output:
Website text

Explanation:
text() reads the response as text.
*/


// ❌ Error
fetch("https://example.com")
    .then(response => response.text())
    .then(data => console.log(data.json()));

/*
Error:
TypeError: data.json is not a function

Explanation:
After text(), data is a string, not a Response object.
*/


// ✅ Solution
fetch("https://example.com")
    .then(response => response.text())
    .then(data => console.log(data));

/*
Output:
Website text

Explanation:
Use the text directly after calling text().
*/


// ==================================================
// 11. REQUEST HEADERS
// ==================================================

fetch("https://example.com/data", {
    headers: {
        "Content-Type": "application/json"
    }
});

/*
Output:
Request sent with headers

Explanation:
Headers provide extra information about the request.
*/


// ❌ Error
fetch("https://example.com/data", {
    header: {
        "Content-Type": "application/json"
    }
});

/*
Problem:
The header option is written incorrectly.

Explanation:
The correct property name is headers.
*/


// ✅ Solution
fetch("https://example.com/data", {
    headers: {
        "Content-Type": "application/json"
    }
});

/*
Output:
Request sent with headers

Explanation:
Use headers to provide request information.
*/


// ==================================================
// 12. HANDLING FETCH ERRORS
// ==================================================

fetch("https://wrong-url.com")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error"));

/*
Output:
Error

Explanation:
catch() handles a failed Fetch request.
*/


// ❌ Error
fetch("https://wrong-url.com")
    .then(response => response.json())
    .then(data => console.log(data));

/*
Error:
TypeError: Failed to fetch

Explanation:
There is no catch() to handle the error.
*/


// ✅ Solution
fetch("https://wrong-url.com")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error"));

/*
Output:
Error

Explanation:
Use catch() to handle Fetch errors.
*/


// ==================================================
// 13. FETCH WITH TRY...CATCH
// ==================================================

async function fetchData() {
    try {
        const response = await fetch("https://example.com/data");
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error");
    }
}

fetchData();

/*
Output:
Data from the server

Explanation:
try...catch handles errors when using async/await.
*/


// ❌ Error
async function fetchDataError() {
    const response = await fetch("wrong-url");
    const data = await response.json();

    console.log(data);
}

fetchDataError();

/*
Error:
TypeError: Failed to fetch

Explanation:
The failed request is not inside try...catch.
*/


// ✅ Solution
async function fetchDataSolution() {
    try {
        const response = await fetch("https://example.com/data");
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error");
    }
}

fetchDataSolution();

/*
Output:
Data from the server

Explanation:
Put the Fetch code inside try...catch.
*/


// ==================================================
// 14. PUT REQUEST
// ==================================================

fetch("https://example.com/users/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Riya"
    })
});

/*
Output:
Data updated

Explanation:
PUT is used to update existing data.
*/


// ❌ Error
fetch("https://example.com/users/1", {
    method: "PUT",
    body: {
        name: "Riya"
    }
});

/*
Problem:
The object is not converted to JSON.

Explanation:
Use JSON.stringify() before sending the data.
*/


// ✅ Solution
fetch("https://example.com/users/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Riya"
    })
});

/*
Output:
Data updated

Explanation:
JSON.stringify() converts the data into JSON before sending.
*/


// ==================================================
// 15. DELETE REQUEST
// ==================================================

fetch("https://example.com/users/1", {
    method: "DELETE"
});

/*
Output:
Data deleted

Explanation:
DELETE is used to remove data from a server.
*/


// ❌ Error
fetch("https://example.com/users/1", {
    method: "DELETEE"
});

/*
Error:
Invalid request method

Explanation:
The method name is incorrect.
*/


// ✅ Solution
fetch("https://example.com/users/1", {
    method: "DELETE"
});

/*
Output:
Data deleted

Explanation:
Use DELETE correctly to remove data.
*/
