# 📘 Forms in JavaScript

## 🌟 What are Forms?

**Forms are used to collect information from users on a webpage.**

Example: A form can collect a user's name, email, password, or other details.

---

## 🤔 Why Do We Use Forms?

- To collect user information
- To get input from users
- To validate entered data
- To submit information
- To create login and registration pages
- To make webpages interactive

---

# 📚 Concepts Covered

## 1. Getting a Form

**Definition:** JavaScript can select an HTML form using the DOM.

### HTML:

    <form id="myForm">
        <input type="text">
        <button type="submit">Submit</button>
    </form>

### JavaScript:

    const form = document.getElementById("myForm");

    console.log(form);

**Output:**

    <form id="myForm">...</form>

**Explanation:**  
`getElementById()` selects the form using its `id`.

---

## 2. Getting Input Value

**Definition:** The `value` property gets the data entered in an input field.

### HTML:

    <input id="name" type="text">

### JavaScript:

    const input = document.getElementById("name");

    console.log(input.value);

**Output:**

    Sahithya

**Explanation:**  
`value` gives the text entered by the user.

---

## 3. Form `submit` Event

**Definition:** The `submit` event runs when a form is submitted.

### HTML:

    <form id="myForm">
        <button type="submit">Submit</button>
    </form>

### JavaScript:

    const form = document.getElementById("myForm");

    form.addEventListener("submit", () => {
        console.log("Form submitted");
    });

**Output:**

    Form submitted

**Explanation:**  
The function runs when the user submits the form.

---

## 4. `preventDefault()`

**Definition:** `preventDefault()` stops the form's normal submission.

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        console.log("Form submission stopped");
    });

**Output:**

    Form submission stopped

**Explanation:**  
Normally, submitting a form may reload or navigate the page. `preventDefault()` stops that default action.

---

## 5. Reading Multiple Inputs

**Definition:** JavaScript can read values from multiple input fields.

### HTML:

    <input id="name" type="text">
    <input id="age" type="number">

### JavaScript:

    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    console.log(nameInput.value);
    console.log(ageInput.value);

**Output:**

    Sahithya
    24

**Explanation:**  
Each input can be selected separately and its value can be read.

---

## 6. Clearing Input

**Definition:** Setting `value` to an empty string clears an input field.

    const input = document.getElementById("name");

    input.value = "";

**Output:**

    Input field becomes empty.

**Explanation:**  
`value = ""` removes the entered text.

---

## 7. Checking Empty Input

**Definition:** We can check whether an input field is empty.

    const name = document.getElementById("name");

    if (name.value === "") {
        console.log("Name is required");
    }

**Output:**

    Name is required

**Explanation:**  
The condition checks whether the input has no value.

---

## 8. Form Validation

**Definition:** Form validation checks whether the entered data is correct.

    const name = document.getElementById("name");

    if (name.value === "") {
        console.log("Please enter your name");
    } else {
        console.log("Name is valid");
    }

**Output:**

    Please enter your name

**Explanation:**  
The form checks the input before accepting the data.

---

## 9. Required Input

**Definition:** The `required` attribute makes an input compulsory.

### HTML:

    <input id="name" type="text" required>

**Output:**

    The form cannot be submitted without entering a name.

**Explanation:**  
The browser checks the required field before submitting the form.

---

## 10. Email Input

**Definition:** An email input is used to collect an email address.

### HTML:

    <input id="email" type="email">

### JavaScript:

    const email = document.getElementById("email");

    console.log(email.value);

**Output:**

    sahithya@example.com

**Explanation:**  
`type="email"` is used for email input.

---

## 11. Password Input

**Definition:** A password input hides the characters entered by the user.

### HTML:

    <input id="password" type="password">

### JavaScript:

    const password = document.getElementById("password");

    console.log(password.value);

**Output:**

    Password entered by the user

**Explanation:**  
`type="password"` hides the characters on the webpage.

---

## 12. Checkbox

**Definition:** A checkbox allows the user to select or unselect an option.

### HTML:

    <input id="agree" type="checkbox">

### JavaScript:

    const checkbox = document.getElementById("agree");

    console.log(checkbox.checked);

**Output:**

    true

**Explanation:**  
`checked` tells whether the checkbox is selected.

---

## 13. Radio Button

**Definition:** Radio buttons allow the user to select one option from a group.

### HTML:

    <input type="radio" name="gender" value="Male">
    <input type="radio" name="gender" value="Female">

### JavaScript:

    const option = document.querySelector(
        'input[name="gender"]:checked'
    );

    console.log(option.value);

**Output:**

    Female

**Explanation:**  
`:checked` selects the radio button that is currently selected.

---

## 14. Select and Option

**Definition:** A select element allows the user to choose an option from a list.

### HTML:

    <select id="city">
        <option value="Bengaluru">Bengaluru</option>
        <option value="Mysuru">Mysuru</option>
    </select>

### JavaScript:

    const city = document.getElementById("city");

    console.log(city.value);

**Output:**

    Bengaluru

**Explanation:**  
`value` gives the selected option.

---

## 15. Resetting a Form

**Definition:** `reset()` clears the form and returns its fields to their original values.

### HTML:

    <form id="myForm">
        <input type="text">
        <button type="reset">Reset</button>
    </form>

### JavaScript:

    const form = document.getElementById("myForm");

    form.reset();

**Output:**

    Form fields are cleared.

**Explanation:**  
`reset()` returns the form fields to their initial state.

---

# ⭐ Quick Revision

- **Form** → Collects user information
- **`getElementById()`** → Selects a form or input
- **`value`** → Gets input data
- **`submit`** → Handles form submission
- **`preventDefault()`** → Stops normal submission
- **Empty input** → Can be checked using `value === ""`
- **Validation** → Checks entered data
- **`required`** → Makes input compulsory
- **`type="email"`** → Email input
- **`type="password"`** → Password input
- **`checked`** → Checks checkbox/radio selection
- **`select`** → Creates a dropdown
- **`reset()`** → Resets the form

---

# 🎯 Key Takeaways

- Forms are used to collect information from users.
- JavaScript can read and validate form data.
- The `value` property gets input data.
- The `submit` event handles form submission.
- `preventDefault()` stops the browser's default submission.
- Forms can contain text fields, email fields, passwords, checkboxes, radio buttons, and dropdowns.
- `required` helps make fields compulsory.
- `reset()` resets the form.

---

# 🎤 Interview Questions

1. What is a form?
2. Why do we use forms?
3. How do you select a form using JavaScript?
4. How do you get the value of an input?
5. What is the `submit` event?
6. What does `preventDefault()` do?
7. What is form validation?
8. What does the `required` attribute do?
9. How do you check whether an input is empty?
10. What is the use of `type="email"`?
11. What is the use of `type="password"`?
12. What does the `checked` property do?
13. What is a radio button?
14. How do you get the selected option from a dropdown?
15. What does `form.reset()` do?
