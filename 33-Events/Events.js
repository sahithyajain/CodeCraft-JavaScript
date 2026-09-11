// 33 - Events in JavaScript


// ==================================================
// 1. RANDOM SIMPLE PROGRAM
// ==================================================

// HTML:
// <button id="btn">Click Me</button>

const button = document.getElementById("btn");

button.addEventListener("click", () => {
    console.log("Button clicked");
});

// Output when clicked:
// Button clicked

// Explanation:
// An event is an action that happens on a webpage.


// ❌ Error Program

const buttonError = document.getElementById("wrongBtn");

buttonError.addEventListener("click", () => {
    console.log("Button clicked");
});

// Error:
// TypeError: Cannot read properties of null

// Error Explanation:
// The element with id "wrongBtn" does not exist.


// ✅ Solution

const buttonCorrect = document.getElementById("btn");

buttonCorrect.addEventListener("click", () => {
    console.log("Button clicked");
});

// Output when clicked:
// Button clicked

// Solution Explanation:
// We use the correct id of the button.


// ==================================================
// 2. addEventListener()
// ==================================================

const button2 = document.getElementById("btn2");

button2.addEventListener("click", () => {
    console.log("Hello!");
});

// Output when clicked:
// Hello!

// Explanation:
// addEventListener() listens for an event and runs a function.


// ❌ Error Program

const button2Error = document.getElementById("btn2");

button2Error.addEvent("click", () => {
    console.log("Hello!");
});

// Error:
// TypeError: button2Error.addEvent is not a function

// Error Explanation:
// The correct method is addEventListener().


// ✅ Solution

const button2Correct = document.getElementById("btn2");

button2Correct.addEventListener("click", () => {
    console.log("Hello!");
});

// Output when clicked:
// Hello!

// Solution Explanation:
// addEventListener() is the correct method for listening to events.


// ==================================================
// 3. CLICK EVENT
// ==================================================

const button3 = document.getElementById("btn3");

button3.addEventListener("click", () => {
    console.log("Button clicked");
});

// Output when clicked:
// Button clicked

// Explanation:
// The click event happens when an element is clicked.


// ❌ Error Program

const button3Error = document.getElementById("btn3");

button3Error.addEventListener("clik", () => {
    console.log("Button clicked");
});

// Error:
// No output when clicked.

// Error Explanation:
// The event name is written incorrectly.
// The correct event is click.


// ✅ Solution

const button3Correct = document.getElementById("btn3");

button3Correct.addEventListener("click", () => {
    console.log("Button clicked");
});

// Output when clicked:
// Button clicked

// Solution Explanation:
// We use the correct click event.


// ==================================================
// 4. DOUBLE CLICK EVENT
// ==================================================

const button4 = document.getElementById("btn4");

button4.addEventListener("dblclick", () => {
    console.log("Double clicked");
});

// Output when double-clicked:
// Double clicked

// Explanation:
// dblclick runs when an element is double-clicked.


// ❌ Error Program

const button4Error = document.getElementById("btn4");

button4Error.addEventListener("doubleclick", () => {
    console.log("Double clicked");
});

// Error:
// No output when double-clicked.

// Error Explanation:
// The correct event name is dblclick.


// ✅ Solution

const button4Correct = document.getElementById("btn4");

button4Correct.addEventListener("dblclick", () => {
    console.log("Double clicked");
});

// Output when double-clicked:
// Double clicked

// Solution Explanation:
// We use the correct dblclick event.


// ==================================================
// 5. MOUSEOVER EVENT
// ==================================================

const box = document.getElementById("box");

box.addEventListener("mouseover", () => {
    console.log("Mouse is over the box");
});

// Output:
// Mouse is over the box

// Explanation:
// mouseover happens when the mouse moves over an element.


// ❌ Error Program

const boxError = document.getElementById("box");

boxError.addEventListener("mouseOver", () => {
    console.log("Mouse is over the box");
});

// Error:
// No output.

// Error Explanation:
// Event names are case-sensitive.
// The correct event is mouseover.


// ✅ Solution

const boxCorrect = document.getElementById("box");

boxCorrect.addEventListener("mouseover", () => {
    console.log("Mouse is over the box");
});

// Output:
// Mouse is over the box

// Solution Explanation:
// We use the correct mouseover event.


// ==================================================
// 6. MOUSEOUT EVENT
// ==================================================

const box2 = document.getElementById("box2");

box2.addEventListener("mouseout", () => {
    console.log("Mouse left the box");
});

// Output:
// Mouse left the box

// Explanation:
// mouseout happens when the mouse leaves an element.


// ❌ Error Program

const box2Error = document.getElementById("box2");

box2Error.addEventListener("mouseLeave", () => {
    console.log("Mouse left the box");
});

// Error:
// No output.

// Error Explanation:
// mouseLeave is not the correct event name.
// Use mouseout.


// ✅ Solution

const box2Correct = document.getElementById("box2");

box2Correct.addEventListener("mouseout", () => {
    console.log("Mouse left the box");
});

// Output:
// Mouse left the box

// Solution Explanation:
// We use the correct mouseout event.


// ==================================================
// 7. keydown EVENT
// ==================================================

document.addEventListener("keydown", () => {
    console.log("Key pressed");
});

// Output when a key is pressed:
// Key pressed

// Explanation:
// keydown happens when a keyboard key is pressed.


// ❌ Error Program

document.addEventListener("keyDown", () => {
    console.log("Key pressed");
});

// Error:
// No output.

// Error Explanation:
// Event names are case-sensitive.
// The correct event is keydown.


// ✅ Solution

document.addEventListener("keydown", () => {
    console.log("Key pressed");
});

// Output when a key is pressed:
// Key pressed

// Solution Explanation:
// We use the correct keydown event.


// ==================================================
// 8. keyup EVENT
// ==================================================

document.addEventListener("keyup", () => {
    console.log("Key released");
});

// Output when a key is released:
// Key released

// Explanation:
// keyup happens when a keyboard key is released.


// ❌ Error Program

document.addEventListener("keyRelease", () => {
    console.log("Key released");
});

// Error:
// No output.

// Error Explanation:
// keyRelease is not the correct event name.
// Use keyup.


// ✅ Solution

document.addEventListener("keyup", () => {
    console.log("Key released");
});

// Output when a key is released:
// Key released

// Solution Explanation:
// We use the correct keyup event.


// ==================================================
// 9. input EVENT
// ==================================================

// HTML:
// <input id="name">

const input = document.getElementById("name");

input.addEventListener("input", () => {
    console.log(input.value);
});

// Output while typing:
// S
// Sa
// Sah
// Sahithya

// Explanation:
// input happens whenever the value of an input field changes.


// ❌ Error Program

const inputError = document.getElementById("name");

inputError.addEventListener("input", () => {
    console.log(inputError.values);
});

// Error:
// undefined

// Error Explanation:
// The correct property is value, not values.


// ✅ Solution

const inputCorrect = document.getElementById("name");

inputCorrect.addEventListener("input", () => {
    console.log(inputCorrect.value);
});

// Output while typing:
// Sahithya

// Solution Explanation:
// Use the value property to get the input value.


// ==================================================
// 10. change EVENT
// ==================================================

const input2 = document.getElementById("name2");

input2.addEventListener("change", () => {
    console.log("Value changed");
});

// Output:
// Value changed

// Explanation:
// change happens when the value of an input changes.


// ❌ Error Program

const input2Error = document.getElementById("name2");

input2Error.addEventListener("changed", () => {
    console.log("Value changed");
});

// Error:
// No output.

// Error Explanation:
// The correct event name is change.


// ✅ Solution

const input2Correct = document.getElementById("name2");

input2Correct.addEventListener("change", () => {
    console.log("Value changed");
});

// Output:
// Value changed

// Solution Explanation:
// We use the correct change event.


// ==================================================
// 11. submit EVENT
// ==================================================

// HTML:
// <form id="myForm">
//     <button type="submit">Submit</button>
// </form>

const form = document.getElementById("myForm");

form.addEventListener("submit", () => {
    console.log("Form submitted");
});

// Output:
// Form submitted

// Explanation:
// submit happens when a form is submitted.


// ❌ Error Program

const formError = document.getElementById("myForm");

formError.addEventListener("submitForm", () => {
    console.log("Form submitted");
});

// Error:
// No output.

// Error Explanation:
// The correct event name is submit.


// ✅ Solution

const formCorrect = document.getElementById("myForm");

formCorrect.addEventListener("submit", () => {
    console.log("Form submitted");
});

// Output:
// Form submitted

// Solution Explanation:
// We use the correct submit event.


// ==================================================
// 12. event OBJECT
// ==================================================

const button5 = document.getElementById("btn5");

button5.addEventListener("click", (event) => {
    console.log(event.type);
});

// Output:
// click

// Explanation:
// The event object contains information about the event.


// ❌ Error Program

const button5Error = document.getElementById("btn5");

button5Error.addEventListener("click", (event) => {
    console.log(event.types);
});

// Output:
// undefined

// Error Explanation:
// The correct property is type, not types.


// ✅ Solution

const button5Correct = document.getElementById("btn5");

button5Correct.addEventListener("click", (event) => {
    console.log(event.type);
});

// Output:
// click

// Solution Explanation:
// event.type gives the type of event.


// ==================================================
// 13. event.target
// ==================================================

const button6 = document.getElementById("btn6");

button6.addEventListener("click", (event) => {
    console.log(event.target);
});

// Output:
// <button id="btn6">Click Me</button>

// Explanation:
// event.target gives the element that caused the event.


// ❌ Error Program

const button6Error = document.getElementById("btn6");

button6Error.addEventListener("click", (event) => {
    console.log(event.element);
});

// Output:
// undefined

// Error Explanation:
// The correct property is target, not element.


// ✅ Solution

const button6Correct = document.getElementById("btn6");

button6Correct.addEventListener("click", (event) => {
    console.log(event.target);
});

// Output:
// <button id="btn6">Click Me</button>

// Solution Explanation:
// event.target gives the element that was clicked.


// ==================================================
// 14. preventDefault()
// ==================================================

// HTML:
// <form id="myForm2">
//     <button type="submit">Submit</button>
// </form>

const form2 = document.getElementById("myForm2");

form2.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Submission stopped");
});

// Output:
// Submission stopped

// Explanation:
// preventDefault() stops the browser's default action.


// ❌ Error Program

const form2Error = document.getElementById("myForm2");

form2Error.addEventListener("submit", (event) => {
    event.prevent();
    console.log("Submission stopped");
});

// Error:
// TypeError: event.prevent is not a function

// Error Explanation:
// The correct method is preventDefault().


// ✅ Solution

const form2Correct = document.getElementById("myForm2");

form2Correct.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Submission stopped");
});

// Output:
// Submission stopped

// Solution Explanation:
// preventDefault() correctly stops the default form action.


// ==================================================
// 15. removeEventListener()
// ==================================================

function sayHello() {
    console.log("Hello");
}

const button7 = document.getElementById("btn7");

button7.addEventListener("click", sayHello);

button7.removeEventListener("click", sayHello);

// Output:
// No output when clicked

// Explanation:
// removeEventListener() removes an event listener.


// ❌ Error Program

function sayBye() {
    console.log("Bye");
}

const button7Error = document.getElementById("btn7");

button7Error.addEventListener("click", sayBye);

button7Error.removeEventListener("click", () => {
    console.log("Bye");
});

// Error:
// The event listener is not removed.

// Error Explanation:
// removeEventListener() needs the same function that was added.


// ✅ Solution

function sayWelcome() {
    console.log("Welcome");
}

const button7Correct = document.getElementById("btn7");

button7Correct.addEventListener("click", sayWelcome);

button7Correct.removeEventListener("click", sayWelcome);

// Output:
// No output when clicked

// Solution Explanation:
// The same function reference is used to remove the event listener.
