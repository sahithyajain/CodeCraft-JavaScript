
# 📘 DOM in JavaScript

## 🌟 What is DOM?

**DOM (Document Object Model) allows JavaScript to access and change the elements of an HTML page.**

Example: JavaScript can change a heading, paragraph, button, image, or style on a webpage.

---

## 🤔 Why Do We Use DOM?

- To access HTML elements
- To change HTML content
- To change styles
- To add or remove elements
- To respond to user actions
- To make webpages interactive

---

# 📚 Concepts Covered

## 1. `document`

**Definition:** `document` represents the HTML page in JavaScript.

    console.log(document);

**Output:**

    HTML document

**Explanation:**  
JavaScript uses `document` to access the webpage.

---

## 2. `getElementById()`

**Definition:** `getElementById()` selects an HTML element using its `id`.

### HTML:

    <h1 id="title">Hello</h1>

### JavaScript:

    const heading = document.getElementById("title");

    console.log(heading);

**Output:**

    <h1 id="title">Hello</h1>

**Explanation:**  
The element with the `id` of `title` is selected.

---

## 3. `querySelector()`

**Definition:** `querySelector()` selects the first element that matches a CSS selector.

### HTML:

    <p class="message">Hello</p>

### JavaScript:

    const text = document.querySelector(".message");

    console.log(text);

**Output:**

    <p class="message">Hello</p>

**Explanation:**  
`.message` selects the element with the class `message`.

---

## 4. `querySelectorAll()`

**Definition:** `querySelectorAll()` selects all elements that match a CSS selector.

### HTML:

    <p class="item">Apple</p>
    <p class="item">Mango</p>

### JavaScript:

    const items = document.querySelectorAll(".item");

    console.log(items);

**Output:**

    NodeList(2)

**Explanation:**  
Both elements with the class `item` are selected.

---

## 5. `textContent`

**Definition:** `textContent` gets or changes the text inside an element.

### HTML:

    <h1 id="title">Hello</h1>

### JavaScript:

    const heading = document.getElementById("title");

    heading.textContent = "Welcome";

**Output on webpage:**

    Welcome

**Explanation:**  
The text inside the heading is changed.

---

## 6. `innerHTML`

**Definition:** `innerHTML` gets or changes the HTML inside an element.

### HTML:

    <div id="box"></div>

### JavaScript:

    const box = document.getElementById("box");

    box.innerHTML = "<h2>Hello</h2>";

**Output on webpage:**

    Hello

**Explanation:**  
HTML content is added inside the `div`.

---

## 7. Changing Styles

**Definition:** JavaScript can change the CSS style of an element.

### HTML:

    <h1 id="title">Hello</h1>

### JavaScript:

    const heading = document.getElementById("title");

    heading.style.color = "blue";

**Output:**

    The heading becomes blue.

**Explanation:**  
The `style` property is used to change CSS.

---

## 8. Changing Attributes

**Definition:** JavaScript can change the attributes of an HTML element.

### HTML:

    <img id="photo" src="old.jpg">

### JavaScript:

    const image = document.getElementById("photo");

    image.src = "new.jpg";

**Output:**

    The image changes.

**Explanation:**  
The `src` attribute is changed using JavaScript.

---

## 9. `classList`

**Definition:** `classList` is used to add, remove, or change CSS classes.

### HTML:

    <p id="message">Hello</p>

### JavaScript:

    const text = document.getElementById("message");

    text.classList.add("highlight");

**Output:**

    The highlight class is added.

**Explanation:**  
`classList.add()` adds a CSS class to an element.

---

## 10. `createElement()`

**Definition:** `createElement()` creates a new HTML element.

    const paragraph = document.createElement("p");

    paragraph.textContent = "Hello";

    console.log(paragraph);

**Output:**

    <p>Hello</p>

**Explanation:**  
A new paragraph element is created.

---

## 11. `appendChild()`

**Definition:** `appendChild()` adds an element inside another element.

### HTML:

    <div id="box"></div>

### JavaScript:

    const box = document.getElementById("box");

    const paragraph = document.createElement("p");

    paragraph.textContent = "Hello";

    box.appendChild(paragraph);

**Output on webpage:**

    Hello

**Explanation:**  
The new paragraph is added inside the `div`.

---

## 12. `remove()`

**Definition:** `remove()` removes an element from the webpage.

### HTML:

    <p id="message">Hello</p>

### JavaScript:

    const text = document.getElementById("message");

    text.remove();

**Output:**

    The paragraph is removed.

**Explanation:**  
`remove()` removes the selected element.

---

## 13. Parent Element

**Definition:** `parentElement` gives the parent of an HTML element.

### HTML:

    <div>
        <p id="message">Hello</p>
    </div>

### JavaScript:

    const text = document.getElementById("message");

    console.log(text.parentElement);

**Output:**

    <div>...</div>

**Explanation:**  
The `<div>` is the parent of the `<p>` element.

---

## 14. Child Elements

**Definition:** `children` gives the child elements inside an element.

### HTML:

    <div id="box">
        <p>Hello</p>
        <p>Welcome</p>
    </div>

### JavaScript:

    const box = document.getElementById("box");

    console.log(box.children);

**Output:**

    HTMLCollection(2)

**Explanation:**  
The two `<p>` elements are children of the `div`.

---

## 15. DOM Events

**Definition:** DOM events allow JavaScript to respond to user actions.

### HTML:

    <button id="btn">Click Me</button>

### JavaScript:

    const button = document.getElementById("btn");

    button.addEventListener("click", () => {
        console.log("Button clicked");
    });

**Output when button is clicked:**

    Button clicked

**Explanation:**  
`addEventListener()` runs code when an event happens.

---

# ⭐ Quick Revision

- **DOM** → Allows JavaScript to work with HTML
- **`document`** → Represents the webpage
- **`getElementById()`** → Selects an element by ID
- **`querySelector()`** → Selects the first matching element
- **`querySelectorAll()`** → Selects all matching elements
- **`textContent`** → Changes text
- **`innerHTML`** → Changes HTML
- **`style`** → Changes CSS
- **`classList`** → Manages CSS classes
- **`createElement()`** → Creates an element
- **`appendChild()`** → Adds an element
- **`remove()`** → Removes an element
- **`parentElement`** → Gets the parent
- **`children`** → Gets child elements
- **`addEventListener()`** → Handles events

---

# 🎯 Key Takeaways

- DOM connects JavaScript with HTML.
- JavaScript can select HTML elements using DOM methods.
- We can change text, HTML, styles, and attributes.
- We can create and remove HTML elements.
- We can work with parent and child elements.
- DOM events make webpages interactive.

---

# 🎤 Interview Questions

1. What is DOM?
2. What does DOM stand for?
3. What is the use of `document`?
4. What does `getElementById()` do?
5. What is the difference between `querySelector()` and `querySelectorAll()`?
6. What is `textContent`?
7. What is `innerHTML`?
8. How can JavaScript change CSS?
9. What is `classList`?
10. What does `createElement()` do?
11. What is `appendChild()`?
12. How do you remove an HTML element using JavaScript?
13. What is `parentElement`?
14. What is `children`?
15. What is `addEventListener()`?
