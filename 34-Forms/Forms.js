// 34 - Forms in JavaScript


// ==================================================
// 1. RANDOM SIMPLE PROGRAM
// ==================================================

// HTML:
// <form id="myForm">
//     <input type="text">
//     <button type="submit">Submit</button>
// </form>

const form = document.getElementById("myForm");

console.log(form);

// Output:
// <form id="myForm">...</form>

// Explanation:
// JavaScript can select an HTML form using the DOM.


// ❌ Error Program

const formError = document.getElementById("wrongForm");

console.log(formError.submit());

// Error:
// TypeError: Cannot read properties of null

// Error Explanation:
// The element with id "wrongForm" does not exist.


// ✅ Solution

const formCorrect = document.getElementById("myForm");

console.log(formCorrect);

// Output:
// <form id="myForm">...</form>

// Solution Explanation:
// We use the correct id of the form.


// ==================================================
// 2. GETTING INPUT VALUE
// ==================================================

// HTML:
// <input id="name" type="text">

const input = document.getElementById("name");

console.log(input.value);

// Output:
// Sahithya

// Explanation:
// value gets the data entered in an input field.


// ❌ Error Program

const inputError = document.getElementById("name");

console.log(inputError.values);

// Output:
// undefined

// Error Explanation:
// The correct property is value, not values.


// ✅ Solution

const inputCorrect = document.getElementById("name");

console.log(inputCorrect.value);

// Output:
// Sahithya

// Solution Explanation:
// We use the correct value property.


// ==================================================
// 3. FORM submit EVENT
// ==================================================

// HTML:
// <form id="myForm2">
//     <button type="submit">Submit</button>
// </form>

const form2 = document.getElementById("myForm2");

form2.addEventListener("submit", () => {
    console.log("Form submitted");
});

// Output:
// Form submitted

// Explanation:
// The submit event runs when the form is submitted.


// ❌ Error Program

const form2Error = document.getElementById("myForm2");

form2Error.addEventListener("submitForm", () => {
    console.log("Form submitted");
});

// Error:
// No output

// Error Explanation:
// The correct event name is submit.


// ✅ Solution

const form2Correct = document.getElementById("myForm2");

form2Correct.addEventListener("submit", () => {
    console.log("Form submitted");
});

// Output:
// Form submitted

// Solution Explanation:
// We use the correct submit event.


// ==================================================
// 4. preventDefault()
// ==================================================

const form3 = document.getElementById("myForm3");

form3.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form submission stopped");
});

// Output:
// Form submission stopped

// Explanation:
// preventDefault() stops the form's normal submission.


// ❌ Error Program

const form3Error = document.getElementById("myForm3");

form3Error.addEventListener("submit", (event) => {
    event.prevent();
});

// Error:
// TypeError: event.prevent is not a function

// Error Explanation:
// The correct method is preventDefault().


// ✅ Solution

const form3Correct = document.getElementById("myForm3");

form3Correct.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form submission stopped");
});

// Output:
// Form submission stopped

// Solution Explanation:
// preventDefault() correctly stops the default form action.


// ==================================================
// 5. READING MULTIPLE INPUTS
// ==================================================

// HTML:
// <input id="studentName" type="text">
// <input id="studentAge" type="number">

const nameInput = document.getElementById("studentName");
const ageInput = document.getElementById("studentAge");

console.log(nameInput.value);
console.log(ageInput.value);

// Output:
// Sahithya
// 24

// Explanation:
// We can read values from multiple input fields.


// ❌ Error Program

const nameInputError = document.getElementById("studentName");
const ageInputError = document.getElementById("studentAge");

console.log(nameInputError.value);
console.log(ageInputError.values);

// Output:
// Sahithya
// undefined

// Error Explanation:
// The correct property is value, not values.


// ✅ Solution

const nameInputCorrect = document.getElementById("studentName");
const ageInputCorrect = document.getElementById("studentAge");

console.log(nameInputCorrect.value);
console.log(ageInputCorrect.value);

// Output:
// Sahithya
// 24

// Solution Explanation:
// Use value to get the data from each input.


// ==================================================
// 6. CLEARING INPUT
// ==================================================

// HTML:
// <input id="name2" type="text">

const input2 = document.getElementById("name2");

input2.value = "";

console.log(input2.value);

// Output:
// Empty string

// Explanation:
// Setting value to "" clears the input field.


// ❌ Error Program

const input2Error = document.getElementById("name2");

input2Error.clear();

// Error:
// TypeError: input2Error.clear is not a function

// Error Explanation:
// Input elements do not have a clear() method.


// ✅ Solution

const input2Correct = document.getElementById("name2");

input2Correct.value = "";

console.log(input2Correct.value);

// Output:
// Empty string

// Solution Explanation:
// Set value to an empty string to clear the input.


// ==================================================
// 7. CHECKING EMPTY INPUT
// ==================================================

// HTML:
// <input id="name3" type="text">

const name3 = document.getElementById("name3");

if (name3.value === "") {
    console.log("Name is required");
}

// Output:
// Name is required

// Explanation:
// The condition checks whether the input is empty.


// ❌ Error Program

const name3Error = document.getElementById("name3");

if (name3Error.value = "") {
    console.log("Name is required");
}

// Error:
// The condition is incorrect.

// Error Explanation:
// = assigns a value.
// === compares values.


// ✅ Solution

const name3Correct = document.getElementById("name3");

if (name3Correct.value === "") {
    console.log("Name is required");
}

// Output:
// Name is required

// Solution Explanation:
// Use === to check whether the input is empty.


// ==================================================
// 8. FORM VALIDATION
// ==================================================

const name4 = document.getElementById("name4");

if (name4.value === "") {
    console.log("Please enter your name");
} else {
    console.log("Name is valid");
}

// Output:
// Please enter your name

// Explanation:
// Validation checks whether the entered data is correct.


// ❌ Error Program

const name4Error = document.getElementById("name4");

if (name4Error.value === "") {
    console.log("Please enter your name");
} else {
    console.log("Name is valid");
}

// Error:
// No JavaScript error.
// But empty input is accepted if validation is not used.

// Error Explanation:
// Form data should be checked before accepting it.


// ✅ Solution

const name4Correct = document.getElementById("name4");

if (name4Correct.value.trim() === "") {
    console.log("Please enter your name");
} else {
    console.log("Name is valid");
}

// Output:
// Please enter your name

// Solution Explanation:
// trim() also checks if the user entered only spaces.


// ==================================================
// 9. required INPUT
// ==================================================

// HTML:
// <input id="requiredName" type="text" required>

// JavaScript:

const requiredName = document.getElementById("requiredName");

console.log(requiredName.required);

// Output:
// true

// Explanation:
// required makes an input compulsory.


// ❌ Error Program

const requiredNameError = document.getElementById("requiredName");

requiredNameError.required = false;

// Output:
// false

// Error Explanation:
// The input is no longer compulsory because required was set to false.


// ✅ Solution

const requiredNameCorrect = document.getElementById("requiredName");

requiredNameCorrect.required = true;

console.log(requiredNameCorrect.required);

// Output:
// true

// Solution Explanation:
// Setting required to true makes the input compulsory.


// ==================================================
// 10. EMAIL INPUT
// ==================================================

// HTML:
// <input id="email" type="email">

const email = document.getElementById("email");

console.log(email.value);

// Output:
// sahithya@example.com

// Explanation:
// type="email" is used to collect an email address.


// ❌ Error Program

const emailError = document.getElementById("email");

emailError.type = "text";

console.log(emailError.type);

// Output:
// text

// Error Explanation:
// The input is no longer an email input.


// ✅ Solution

const emailCorrect = document.getElementById("email");

emailCorrect.type = "email";

console.log(emailCorrect.type);

// Output:
// email

// Solution Explanation:
// type="email" is used for email input.


// ==================================================
// 11. PASSWORD INPUT
// ==================================================

// HTML:
// <input id="password" type="password">

const password = document.getElementById("password");

console.log(password.type);

// Output:
// password

// Explanation:
// type="password" hides the characters entered by the user.


// ❌ Error Program

const passwordError = document.getElementById("password");

passwordError.type = "text";

console.log(passwordError.type);

// Output:
// text

// Error Explanation:
// The password characters are now visible.


// ✅ Solution

const passwordCorrect = document.getElementById("password");

passwordCorrect.type = "password";

console.log(passwordCorrect.type);

// Output:
// password

// Solution Explanation:
// password type hides the entered characters.


// ==================================================
// 12. CHECKBOX
// ==================================================

// HTML:
// <input id="agree" type="checkbox">

const checkbox = document.getElementById("agree");

console.log(checkbox.checked);

// Output:
// true

// Explanation:
// checked tells whether the checkbox is selected.


// ❌ Error Program

const checkboxError = document.getElementById("agree");

console.log(checkboxError.check);

// Output:
// undefined

// Error Explanation:
// The correct property is checked, not check.


// ✅ Solution

const checkboxCorrect = document.getElementById("agree");

console.log(checkboxCorrect.checked);

// Output:
// true

// Solution Explanation:
// checked tells whether the checkbox is selected.


// ==================================================
// 13. RADIO BUTTON
// ==================================================

// HTML:
// <input type="radio" name="gender" value="Male">
// <input type="radio" name="gender" value="Female">

const option = document.querySelector(
    'input[name="gender"]:checked'
);

console.log(option.value);

// Output:
// Female

// Explanation:
// :checked selects the selected radio button.


// ❌ Error Program

const optionError = document.querySelector(
    'input[name="gender"]:selected'
);

console.log(optionError.value);

// Error:
// TypeError: Cannot read properties of null

// Error Explanation:
// The correct selector is :checked, not :selected.


// ✅ Solution

const optionCorrect = document.querySelector(
    'input[name="gender"]:checked'
);

console.log(optionCorrect.value);

// Output:
// Female

// Solution Explanation:
// :checked selects the selected radio button.


// ==================================================
// 14. SELECT AND OPTION
// ==================================================

// HTML:
// <select id="city">
//     <option value="Bengaluru">Bengaluru</option>
//     <option value="Mysuru">Mysuru</option>
// </select>

const city = document.getElementById("city");

console.log(city.value);

// Output:
// Bengaluru

// Explanation:
// value gives the selected option from a dropdown.


// ❌ Error Program

const cityError = document.getElementById("city");

console.log(cityError.values);

// Output:
// undefined

// Error Explanation:
// The correct property is value.


// ✅ Solution

const cityCorrect = document.getElementById("city");

console.log(cityCorrect.value);

// Output:
// Bengaluru

// Solution Explanation:
// Use value to get the selected option.


// ==================================================
// 15. RESETTING A FORM
// ==================================================

// HTML:
// <form id="myForm4">
//     <input type="text" value="Sahithya">
//     <button type="reset">Reset</button>
// </form>

const form4 = document.getElementById("myForm4");

form4.reset();

console.log("Form reset");

// Output:
// Form reset

// Explanation:
// reset() returns the form fields to their original values.


// ❌ Error Program

const form4Error = document.getElementById("myForm4");

form4Error.resetForm();

// Error:
// TypeError: form4Error.resetForm is not a function

// Error Explanation:
// The correct method is reset().


// ✅ Solution

const form4Correct = document.getElementById("myForm4");

form4Correct.reset();

console.log("Form reset");

// Output:
// Form reset

// Solution Explanation:
// reset() correctly resets the form.
