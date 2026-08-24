
// 🔀 JavaScript Conditional Statements


// =====================================
// 1. if
// =====================================

let age = 20;

if (age >= 18) {
    console.log("Adult");
}

// Output:
// Adult

// Explanation:
// if runs the code when the condition is true.



// ❌ Common Mistake

let number = 10;

if (number > 20) {
    console.log("Greater");
}

// Output:
// Nothing

// Explanation:
// The code does not run because the condition is false.



// =====================================
// 2. if...else
// =====================================

let studentAge = 16;

if (studentAge >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Output:
// Minor

// Explanation:
// if...else chooses between two possibilities.



// ❌ Common Mistake

let marks = 40;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Output:
// Fail

// Explanation:
// The else block runs when the if condition is false.



// =====================================
// 3. else if
// =====================================

let score = 75;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

// Output:
// Grade B

// Explanation:
// else if checks another condition when the previous condition is false.



// ❌ Common Mistake

let marks2 = 75;

if (marks2 >= 60) {
    console.log("Grade B");
} else if (marks2 >= 90) {
    console.log("Grade A");
}

// Output:
// Grade B

// Explanation:
// Conditions are checked from top to bottom, so the first true condition runs.



// =====================================
// 4. switch
// =====================================

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}

// Output:
// Tuesday

// Explanation:
// switch chooses a block of code based on a matching value.



// ❌ Common Mistake - Missing break

let choice = 1;

switch (choice) {
    case 1:
        console.log("One");

    case 2:
        console.log("Two");
}

// Output:
// One
// Two

// Explanation:
// Without break, JavaScript continues to the next case.



// =====================================
// 5. Ternary Operator
// =====================================

let age2 = 20;

let result = age2 >= 18 ? "Adult" : "Minor";

console.log(result);

// Output:
// Adult

// Explanation:
// The ternary operator is a short way to write if...else.



// ❌ Error Program

let age3 = 16;

let result2 = age3 >= 18 ? "Adult";

console.log(result2);

// Output:
// SyntaxError

// Explanation:
// A ternary operator needs both a true value and a false value.

// Correct:
// age3 >= 18 ? "Adult" : "Minor";



// =====================================
// 🧩 Practice
// =====================================

// Write a program to check whether a number is:
//
// Positive
// Negative
// Zero
//
// Example:
// Input: 10
// Output: Positive
//
// Use:
// if
// else if
// else
