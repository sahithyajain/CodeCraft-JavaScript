# 📘 Events in JavaScript

## 🌟 What are Events?

**Events are actions that happen on a webpage, such as clicking a button, typing in a box, or moving the mouse.**

JavaScript can detect these actions and run code when they happen.

---

## 🤔 Why Do We Use Events?

- To respond to user actions
- To make webpages interactive
- To handle button clicks
- To detect keyboard actions
- To respond to mouse actions
- To handle form actions

---

# 📚 Concepts Covered

## 1. What is an Event?

**Definition:** An event is an action that happens on a webpage.

### Example:

    <button id="btn">Click Me</button>

    const button = document.getElementById("btn");

    button.addEventListener("click", () => {
        console.log("Button clicked");
    });

**Output when the button is clicked:**

    Button clicked

**Explanation:**  
The `click` is the event. JavaScript runs the code when the user clicks the button.

---

## 2. `addEventListener()`

**Definition:** `addEventListener()` is used to listen for an event and run a function.

    const button = document.getElementById("btn");

    button.addEventListener("click", () => {
        console.log("Hello!");
    });

**Output when clicked:**

    Hello!

**Explanation:**  
`addEventListener()` waits for the specified event and then runs the function.

---

## 3. Click Event

**Definition:** The `click` event happens when an element is clicked.

    const button = document.getElementById("btn");

    button.addEventListener("click", () => {
        console.log("Button clicked");
    });

**Output:**

    Button clicked

**Explanation:**  
The function runs whenever the button is clicked.

---

## 4. Double Click Event

**Definition:** The `dblclick` event happens when an element is double-clicked.

    const button = document.getElementById("btn");

    button.addEventListener("dblclick", () => {
        console.log("Double clicked");
    });

**Output:**

    Double clicked

**Explanation:**  
The function runs when the user double-clicks the button.

---

## 5. Mouseover Event

**Definition:** The `mouseover` event happens when the mouse moves over an element.

    const box = document.getElementById("box");

    box.addEventListener("mouseover", () => {
        console.log("Mouse is over the box");
    });

**Output:**

    Mouse is over the box

**Explanation:**  
The event runs when the mouse pointer moves over the element.

---

## 6. Mouseout Event

**Definition:** The `mouseout` event happens when the mouse leaves an element.

    const box = document.getElementById("box");

    box.addEventListener("mouseout", () => {
        console.log("Mouse left the box");
    });

**Output:**

    Mouse left the box

**Explanation:**  
The function runs when the mouse moves away from the element.

---

## 7. `keydown` Event

**Definition:** The `keydown` event happens when a keyboard key is pressed.

    document.addEventListener("keydown", () => {
        console.log("Key pressed");
    });

**Output when a key is pressed:**

    Key pressed

**Explanation:**  
JavaScript detects when the user presses a keyboard key.

---

## 8. `keyup` Event

**Definition:** The `keyup` event happens when a keyboard key is released.

    document.addEventListener("keyup", () => {
        console.log("Key released");
    });

**Output:**

    Key released

**Explanation:**  
The event runs when the user releases a key.

---

## 9. `input` Event

**Definition:** The `input` event happens when the value of an input field changes.

### HTML:

    <input id="name">

### JavaScript:

    const input = document.getElementById("name");

    input.addEventListener("input", () => {
        console.log(input.value);
    });

**Output while typing:**

    S
    Sa
    Sah
    Sahithya

**Explanation:**  
The event runs whenever the user changes the input value.

---

## 10. `change` Event

**Definition:** The `change` event happens when the value of an input or select element changes.

    const input = document.getElementById("name");

    input.addEventListener("change", () => {
        console.log("Value changed");
    });

**Output:**

    Value changed

**Explanation:**  
The event runs when the value is changed and the user finishes the input.

---

## 11. `submit` Event

**Definition:** The `submit` event happens when a form is submitted.

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
The event runs when the form is submitted.

---

## 12. `event` Object

**Definition:** The `event` object contains information about the event that happened.

    const button = document.getElementById("btn");

    button.addEventListener("click", (event) => {
        console.log(event.type);
    });

**Output:**

    click

**Explanation:**  
The `event` object gives information about the event.

---

## 13. `event.target`

**Definition:** `event.target` gives the element that caused the event.

    const button = document.getElementById("btn");

    button.addEventListener("click", (event) => {
        console.log(event.target);
    });

**Output:**

    <button id="btn">Click Me</button>

**Explanation:**  
`event.target` tells us which element was clicked.

---

## 14. `preventDefault()`

**Definition:** `preventDefault()` stops the browser's default action.

### HTML:

    <form id="myForm">
        <button type="submit">Submit</button>
    </form>

### JavaScript:

    const form = document.getElementById("myForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Submission stopped");
    });

**Output:**

    Submission stopped

**Explanation:**  
The form's normal submission is stopped.

---

## 15. Removing an Event Listener

**Definition:** `removeEventListener()` removes an event listener.

    function sayHello() {
        console.log("Hello");
    }

    const button = document.getElementById("btn");

    button.addEventListener("click", sayHello);

    button.removeEventListener("click", sayHello);

**Output:**

    No output when clicked

**Explanation:**  
The click listener is removed, so `sayHello()` does not run.

---

# ⭐ Quick Revision

- **Event** → An action on a webpage
- **`addEventListener()`** → Listens for an event
- **`click`** → Mouse click
- **`dblclick`** → Double click
- **`mouseover`** → Mouse moves over an element
- **`mouseout`** → Mouse leaves an element
- **`keydown`** → Key is pressed
- **`keyup`** → Key is released
- **`input`** → Input value changes
- **`change`** → Value changes
- **`submit`** → Form is submitted
- **`event`** → Contains event information
- **`event.target`** → Element that caused the event
- **`preventDefault()`** → Stops default action
- **`removeEventListener()`** → Removes an event listener

---

# 🎯 Key Takeaways

- Events allow JavaScript to respond to user actions.
- `addEventListener()` is commonly used to handle events.
- JavaScript can handle mouse, keyboard, input, and form events.
- The `event` object provides information about an event.
- `event.target` identifies the element that caused the event.
- `preventDefault()` can stop the browser's normal action.
- `removeEventListener()` removes an event listener.

---

# 🎤 Interview Questions

1. What is an event in JavaScript?
2. What is `addEventListener()`?
3. What is a click event?
4. What is the difference between `click` and `dblclick`?
5. What is the `mouseover` event?
6. What is the `mouseout` event?
7. What is the `keydown` event?
8. What is the `keyup` event?
9. What is the `input` event?
10. What is the `change` event?
11. What is the `submit` event?
12. What is the event object?
13. What is `event.target`?
14. What does `preventDefault()` do?
15. What does `removeEventListener()` do?
