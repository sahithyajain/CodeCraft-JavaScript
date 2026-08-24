// 🔁 JavaScript Loops


// =====================================
// 1. for Loop
// =====================================

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5

// Explanation:
// for loop repeats code a specific number of times.



// ❌ Common Mistake

for (let i = 1; i <= 5; i--) {
    console.log(i);
}

// Output:
// Infinite loop

// Explanation:
// i is decreasing instead of increasing, so the condition never becomes false.



// =====================================
// 2. while Loop
// =====================================

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// Output:
// 1
// 2
// 3
// 4
// 5

// Explanation:
// while loop runs while the condition is true.



// ❌ Common Mistake

let number = 1;

while (number <= 5) {
    console.log(number);
}

// Output:
// Infinite loop

// Explanation:
// The variable is never updated, so the condition always remains true.



// =====================================
// 3. do...while Loop
// =====================================

let count = 1;

do {
    console.log(count);
    count++;
} while (count <= 5);

// Output:
// 1
// 2
// 3
// 4
// 5

// Explanation:
// do...while runs the code first and checks the condition afterward.



// ❌ Common Mistake

let value = 10;

do {
    console.log(value);
} while (value < 5);

// Output:
// 10

// Explanation:
// do...while runs at least once even when the condition is false.



// =====================================
// 4. break
// =====================================

for (let num = 1; num <= 5; num++) {

    if (num === 3) {
        break;
    }

    console.log(num);
}

// Output:
// 1
// 2

// Explanation:
// break stops the loop completely.



// ❌ Common Mistake

for (let num = 1; num <= 5; num++) {

    if (num === 3) {
        break;
    }

    console.log(num);
}

// Output:
// 1
// 2

// Explanation:
// Code after break inside the loop does not run.



// =====================================
// 5. continue
// =====================================

for (let num = 1; num <= 5; num++) {

    if (num === 3) {
        continue;
    }

    console.log(num);
}

// Output:
// 1
// 2
// 4
// 5

// Explanation:
// continue skips the current iteration and moves to the next one.



// ❌ Common Mistake

for (let num = 1; num <= 5; num++) {

    if (num === 3) {
        continue;
    }

    console.log(num);
}

// Output:
// 1
// 2
// 4
// 5

// Explanation:
// continue does not stop the loop; it only skips one iteration.



// =====================================
// 🧩 Practice
// =====================================

// Write a program using a for loop to print
// numbers from 1 to 10.
//
// Expected Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
