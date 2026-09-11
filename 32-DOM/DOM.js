// 32 - DOM in JavaScript


// ==================================================
// 1. RANDOM SIMPLE PROGRAM
// ==================================================

console.log(document);

// Output:
// HTML document

// Explanation:
// document represents the HTML page in JavaScript.


// ❌ Error Program

console.log(documents);

// Error:
// ReferenceError: documents is not defined

// Error Explanation:
// The correct object is document, not documents.


// ✅ Solution

console.log(document);

// Output:
// HTML document

// Solution Explanation:
// We use the correct document object.


// ==================================================
// 2. getElementById()
// ==================================================

// HTML:
// <h1 id="title">Hello</h1>

const heading = document.getElementById("title");

console.log(heading);

// Output:
// <h1 id="title">Hello</h1>

// Explanation:
// getElementById() selects an element using its id.


// ❌ Error Program

const headingError = document.getElementById("titel");

console.log(headingError.textContent);

// Error:
// TypeError: Cannot read properties of null

// Error Explanation:
// The id "titel" does not exist.


// ✅ Solution

const headingCorrect = document.getElementById("title");

console.log(headingCorrect.textContent);

// Output:
// Hello

// Solution Explanation:
// We use the correct id.


// ==================================================
// 3. querySelector()
// ==================================================

// HTML:
// <p class="message">Hello</p>

const text = document.querySelector(".message");

console.log(text);

// Output:
// <p class="message">Hello</p>

// Explanation:
// querySelector() selects the first element matching a CSS selector.


// ❌ Error Program

const textError = document.querySelector(".wrong");

console.log(textError.textContent);

// Error:
// TypeError: Cannot read properties of null

// Error Explanation:
// No element with the class "wrong" exists.


// ✅ Solution

const textCorrect = document.querySelector(".message");

console.log(textCorrect.textContent);

// Output:
// Hello

// Solution Explanation:
// We use a selector that matches the HTML element.


// ==================================================
// 4. querySelectorAll()
// ==================================================

// HTML:
// <p class="item">Apple</p>
// <p class="item">Mango</p>

const items = document.querySelectorAll(".item");

console.log(items.length);

// Output:
// 2

// Explanation:
// querySelectorAll() selects all matching elements.


// ❌ Error Program

const itemsError = document.querySelectorAll(".wrong");

console.log(itemsError[0].textContent);

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// No matching elements were found.


// ✅ Solution

const itemsCorrect = document.querySelectorAll(".item");

console.log(itemsCorrect[0].textContent);

// Output:
// Apple

// Solution Explanation:
// We select elements using the correct class.


// ==================================================
// 5. textContent
// ==================================================

// HTML:
// <h1 id="title2">Hello</h1>

const heading2 = document.getElementById("title2");

heading2.textContent = "Welcome";

console.log(heading2.textContent);

// Output:
// Welcome

// Explanation:
// textContent can change the text inside an element.


// ❌ Error Program

const heading2Error = document.getElementById("title2");

heading2Error.textContent.toUpperCase = "Welcome";

// Error:
// The text is not changed as expected.

// Error Explanation:
// We should assign the new text directly to textContent.


// ✅ Solution

const heading2Correct = document.getElementById("title2");

heading2Correct.textContent = "Welcome";

console.log(heading2Correct.textContent);

// Output:
// Welcome

// Solution Explanation:
// Assign the new text directly to textContent.


// ==================================================
// 6. innerHTML
// ==================================================

// HTML:
// <div id="box"></div>

const box = document.getElementById("box");

box.innerHTML = "<h2>Hello</h2>";

console.log(box.innerHTML);

// Output:
// <h2>Hello</h2>

// Explanation:
// innerHTML can add HTML inside an element.


// ❌ Error Program

const boxError = document.getElementById("box");

boxError.innerHTML = "<h2>Hello<h2>";

// Error:
// The HTML is incorrectly written.

// Error Explanation:
// The closing h2 tag is incorrect.


// ✅ Solution

const boxCorrect = document.getElementById("box");

boxCorrect.innerHTML = "<h2>Hello</h2>";

console.log(boxCorrect.innerHTML);

// Output:
// <h2>Hello</h2>

// Solution Explanation:
// The HTML tags are correctly closed.


// ==================================================
// 7. CHANGING STYLES
// ==================================================

// HTML:
// <h1 id="title3">Hello</h1>

const heading3 = document.getElementById("title3");

heading3.style.color = "blue";

console.log(heading3.style.color);

// Output:
// blue

// Explanation:
// style is used to change CSS properties.


// ❌ Error Program

const heading3Error = document.getElementById("title3");

heading3Error.style.colorName = "blue";

// Error:
// The color is not changed.

// Error Explanation:
// colorName is not a valid CSS property.


// ✅ Solution

const heading3Correct = document.getElementById("title3");

heading3Correct.style.color = "blue";

console.log(heading3Correct.style.color);

// Output:
// blue

// Solution Explanation:
// Use the correct CSS property color.


// ==================================================
// 8. CHANGING ATTRIBUTES
// ==================================================

// HTML:
// <img id="photo" src="old.jpg">

const image = document.getElementById("photo");

image.src = "new.jpg";

console.log(image.src);

// Output:
// The new image URL

// Explanation:
// JavaScript can change HTML attributes.


// ❌ Error Program

const imageError = document.getElementById("photo");

imageError.source = "new.jpg";

// Error:
// The image source is not changed.

// Error Explanation:
// The correct attribute is src, not source.


// ✅ Solution

const imageCorrect = document.getElementById("photo");

imageCorrect.src = "new.jpg";

console.log(imageCorrect.src);

// Output:
// The new image URL

// Solution Explanation:
// Use the correct src attribute.


// ==================================================
// 9. classList
// ==================================================

// HTML:
// <p id="message">Hello</p>

const message = document.getElementById("message");

message.classList.add("highlight");

console.log(message.classList);

// Output:
// Contains "highlight"

// Explanation:
// classList is used to manage CSS classes.


// ❌ Error Program

const messageError = document.getElementById("message");

messageError.classList.ad("highlight");

// Error:
// TypeError: messageError.classList.ad is not a function

// Error Explanation:
// The correct method is add(), not ad().


// ✅ Solution

const messageCorrect = document.getElementById("message");

messageCorrect.classList.add("highlight");

console.log(messageCorrect.classList);

// Output:
// Contains "highlight"

// Solution Explanation:
// Use classList.add() to add a class.


// ==================================================
// 10. createElement()
// ==================================================

const paragraph = document.createElement("p");

paragraph.textContent = "Hello";

console.log(paragraph);

// Output:
// <p>Hello</p>

// Explanation:
// createElement() creates a new HTML element.


// ❌ Error Program

const paragraphError = document.createelement("p");

console.log(paragraphError);

// Error:
// TypeError: document.createelement is not a function

// Error Explanation:
// JavaScript method names are case-sensitive.
// The correct method is createElement().


// ✅ Solution

const paragraphCorrect = document.createElement("p");

paragraphCorrect.textContent = "Hello";

console.log(paragraphCorrect);

// Output:
// <p>Hello</p>

// Solution Explanation:
// Use the correct createElement() method.


// ==================================================
// 11. appendChild()
// ==================================================

// HTML:
// <div id="box2"></div>

const box2 = document.getElementById("box2");

const paragraph2 = document.createElement("p");

paragraph2.textContent = "Hello";

box2.appendChild(paragraph2);

console.log(box2.textContent);

// Output:
// Hello

// Explanation:
// appendChild() adds an element inside another element.


// ❌ Error Program

const box2Error = document.getElementById("box2");

const paragraph2Error = document.createElement("p");

paragraph2Error.textContent = "Hello";

box2Error.append(paragraph2Error);

// Problem:
// The program may work, but it is not using appendChild().

// Error Explanation:
// The required method for this concept is appendChild().


// ✅ Solution

const box2Correct = document.getElementById("box2");

const paragraph2Correct = document.createElement("p");

paragraph2Correct.textContent = "Hello";

box2Correct.appendChild(paragraph2Correct);

console.log(box2Correct.textContent);

// Output:
// Hello

// Solution Explanation:
// appendChild() correctly adds the paragraph to the div.


// ==================================================
// 12. remove()
// ==================================================

// HTML:
// <p id="message2">Hello</p>

const message2 = document.getElementById("message2");

message2.remove();

console.log("Element removed");

// Output:
// Element removed

// Explanation:
// remove() removes an element from the webpage.


// ❌ Error Program

const message2Error = document.getElementById("message2");

message2Error.removeElement();

// Error:
// TypeError: message2Error.removeElement is not a function

// Error Explanation:
// removeElement() is not the correct method.


// ✅ Solution

const message2Correct = document.getElementById("message2");

message2Correct.remove();

console.log("Element removed");

// Output:
// Element removed

// Solution Explanation:
// Use remove() to remove the element.


// ==================================================
// 13. parentElement
// ==================================================

// HTML:
// <div id="parent">
//     <p id="child">Hello</p>
// </div>

const child = document.getElementById("child");

console.log(child.parentElement);

// Output:
// <div id="parent">...</div>

// Explanation:
// parentElement gives the parent of an element.


// ❌ Error Program

const childError = document.getElementById("child");

console.log(child.parent.textContent);

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// The correct property is parentElement.


// ✅ Solution

const childCorrect = document.getElementById("child");

console.log(childCorrect.parentElement.textContent);

// Output:
// Hello

// Solution Explanation:
// Use parentElement to access the parent element.


// ==================================================
// 14. children
// ==================================================

// HTML:
// <div id="box3">
//     <p>Hello</p>
//     <p>Welcome</p>
// </div>

const box3 = document.getElementById("box3");

console.log(box3.children.length);

// Output:
// 2

// Explanation:
// children gives the child elements inside an element.


// ❌ Error Program

const box3Error = document.getElementById("box3");

console.log(box3Error.child.textContent);

// Error:
// TypeError: Cannot read properties of undefined

// Error Explanation:
// The correct property is children.


// ✅ Solution

const box3Correct = document.getElementById("box3");

console.log(box3Correct.children[0].textContent);

// Output:
// Hello

// Solution Explanation:
// children[0] accesses the first child element.


// ==================================================
// 15. DOM EVENTS
// ==================================================

// HTML:
// <button id="btn">Click Me</button>

const button = document.getElementById("btn");

button.addEventListener("click", () => {
    console.log("Button clicked");
});

// Output when button is clicked:
// Button clicked

// Explanation:
// addEventListener() runs code when an event happens.


// ❌ Error Program

const buttonError = document.getElementById("btn");

buttonError.addEvent("click", () => {
    console.log("Button clicked");
});

// Error:
// TypeError: buttonError.addEvent is not a function

// Error Explanation:
// The correct method is addEventListener().


// ✅ Solution

const buttonCorrect = document.getElementById("btn");

buttonCorrect.addEventListener("click", () => {
    console.log("Button clicked");
});

// Output when button is clicked:
// Button clicked

// Solution Explanation:
// addEventListener() correctly listens for the click event.
