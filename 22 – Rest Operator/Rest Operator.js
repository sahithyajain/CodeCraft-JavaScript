// 22 - Rest Operator in JavaScript


// ==================================================
// 1. RANDOM SIMPLE PROGRAM
// ==================================================

function show(...numbers) {
    console.log(numbers);
}

show(10, 20, 30);

// Output:  [10, 20, 30]

// Explanation:   The rest operator (...) collects all values into an array.


// ❌ Error Program

function showError(...numbers) {
    console.log(number);
}

showError(10, 20, 30);

// Error: ReferenceError: number is not defined

// Error Explanation:
// The rest parameter is called numbers,
// but we used number.


// ✅ Solution

function showCorrect(...numbers) {
    console.log(numbers);
}

showCorrect(10, 20, 30);

// Output: [10, 20, 30]

// Solution Explanation:  We used the correct parameter name: numbers.


// ==================================================
// 2. REST WITH TWO VALUES
// ==================================================

function showTwo(...values) {
    console.log(values);
}

showTwo(10, 20);

// Output:  [10, 20]

// Explanation:  Rest collects both values into one array.


// ❌ Error Program

function showTwoError(...values) {
    console.log(value);
}

showTwoError(10, 20);

// Error:  ReferenceError: value is not defined

// Error Explanation:  The parameter is called values, not value.


// ✅ Solution

function showTwoCorrect(...values) {
    console.log(values);
}

showTwoCorrect(10, 20);

// Output:  [10, 20]

// Solution Explanation:  We used the correct rest parameter.


// ==================================================
// 3. REST WITH MANY VALUES
// ==================================================

function showMany(...numbers) {
    console.log(numbers);
}

showMany(10, 20, 30, 40, 50);

// Output:  [10, 20, 30, 40, 50]

// Explanation:  Rest can collect any number of values.


// ❌ Error Program

function showManyError(...numbers) {
    console.log(number);
}

showManyError(10, 20, 30);

// Error:  ReferenceError: number is not defined

// Error Explanation:  The parameter is called numbers.


// ✅ Solution

function showManyCorrect(...numbers) {
    console.log(numbers);
}

showManyCorrect(10, 20, 30);

// Output:  [10, 20, 30]

// Solution Explanation:  The rest parameter correctly collects all values.


// ==================================================
// 4. NORMAL PARAMETER WITH REST
// ==================================================

function showFirst(first, ...others) {
    console.log(first);
    console.log(others);
}

showFirst(10, 20, 30);

// Output:
// 10
// [20, 30]

// Explanation:
// first gets 10.
// Rest collects the remaining values in others.


// ❌ Error Program

function showFirstError(first, ...others) {
    console.log(first);
    console.log(other);
}

showFirstError(10, 20, 30);

// Error:  ReferenceError: other is not defined

// Error Explanation:
// The rest parameter is called others,
// but we used other.


// ✅ Solution

function showFirstCorrect(first, ...others) {
    console.log(first);
    console.log(others);
}

showFirstCorrect(10, 20, 30);

// Output:
// 10
// [20, 30]

// Solution Explanation:   We used the correct rest parameter name.


// ==================================================
// 5. REST WITH ADDITION
// ==================================================

function add(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(add(10, 20, 30));

// Output: 60

// Explanation:
// Rest collects the numbers.
// The loop adds each number to total.


// ❌ Error Program

function addError(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += value;
    }

    return total;
}

console.log(addError(10, 20, 30));

// Error:  ReferenceError: value is not defined

// Error Explanation:
// The loop variable is called number,
// but we used value.


// ✅ Solution

function addCorrect(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(addCorrect(10, 20, 30));

// Output:  60

// Solution Explanation:  We used the correct loop variable: number.


// ==================================================
// 6. REST WITH reduce()
// ==================================================

function addUsingReduce(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(addUsingReduce(10, 20, 30));

// Output:  60

// Explanation:
// Rest collects the numbers into an array.
// reduce() adds all the numbers together.


// ❌ Error Program

function addUsingReduceError(...numbers) {
    return numbers.reduce((total, value) => total + number, 0);
}

console.log(addUsingReduceError(10, 20, 30));

// Error: ReferenceError: number is not defined

// Error Explanation:
// The reduce parameter is called value,
// but we used number.


// ✅ Solution

function addUsingReduceCorrect(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(addUsingReduceCorrect(10, 20, 30));

// Output:  60

// Solution Explanation:  We used the correct parameter: number.


// ==================================================
// 7. REST WITH STRINGS
// ==================================================

function showNames(...names) {
    console.log(names);
}

showNames("Vishu", "Sahithya", "Dhar");

// Output: ["Vishu", "Sahithya", "Dhar"]

// Explanation:  Rest collects all the string values into an array.


// ❌ Error Program

function showNamesError(...names) {
    console.log(name);
}

showNamesError("Vishu", "Sahithya");

// Error: ReferenceError: name is not defined

// Error Explanation:  The parameter is called names.


// ✅ Solution

function showNamesCorrect(...names) {
    console.log(names);
}

showNamesCorrect("Vishu", "Sahithya");

// Output:
// ["Vishu", "Sahithya"]

// Solution Explanation:  We used the correct parameter name.


// ==================================================
// 8. REST WITH MIXED VALUES
// ==================================================

function showValues(...values) {
    console.log(values);
}

showValues(10, "Hello", true);

// Output:  [10, "Hello", true]

// Explanation:  Rest can collect different types of values.


// ❌ Error Program

function showValuesError(...values) {
    console.log(value);
}

showValuesError(10, "Hello", true);

// Error:  ReferenceError: value is not defined

// Error Explanation:  The parameter is called values.


// ✅ Solution

function showValuesCorrect(...values) {
    console.log(values);
}

showValuesCorrect(10, "Hello", true);

// Output:  [10, "Hello", true]

// Solution Explanation:  The correct rest parameter is used.


// ==================================================
// 9. REST WITH ARROW FUNCTION
// ==================================================

const addArrow = (...numbers) => {
    return numbers[0] + numbers[1];
};

console.log(addArrow(10, 20));

// Output: 30

// Explanation:
// The rest operator collects the values.
// numbers[0] is 10 and numbers[1] is 20.


// ❌ Error Program

const addArrowError = (...numbers) => {
    return numbers[0] + number;
};

console.log(addArrowError(10, 20));

// Error:  ReferenceError: number is not defined

// Error Explanation:  The value should be taken from the numbers array.


// ✅ Solution

const addArrowCorrect = (...numbers) => {
    return numbers[0] + numbers[1];
};

console.log(addArrowCorrect(10, 20));

// Output:  30

// Solution Explanation:  We use the values stored inside numbers.


// ==================================================
// 10. REST IN ARRAY DESTRUCTURING
// ==================================================

let numbers2 = [10, 20, 30, 40];

let [first, ...rest] = numbers2;

console.log(first);
console.log(rest);

// Output:
// 10
// [20, 30, 40]

// Explanation:
// first gets 10.
// rest collects the remaining values.


// ❌ Error Program

let numbers2Error = [10, 20, 30, 40];

let [firstError, ..restError] = numbers2Error;

console.log(restError);

// Error: SyntaxError

// Error Explanation:   Rest needs three dots (...), not two dots.


// ✅ Solution

let numbers2Correct = [10, 20, 30, 40];

let [firstCorrect, ...restCorrect] = numbers2Correct;

console.log(restCorrect);

// Output: [20, 30, 40]

// Solution Explanation:   We used three dots for the rest operator.


// ==================================================
// 11. REST IN OBJECT DESTRUCTURING
// ==================================================

let student = {
    name: "Sahithya",
    age: 24,
    city: "Bangalore"
};

let { name, ...details } = student;

console.log(name);
console.log(details);

// Output:
// Sahithya
// { age: 24, city: "Bangalore" }

// Explanation:
// name gets the name property.
// details collects the remaining properties.


// ❌ Error Program

let studentError = {
    name: "Sahithya",
    age: 24,
    city: "Bangalore"
};

let { nameError, ...detailsError } = studentError;

console.log(nameError);

// Output:  undefined

// Error Explanation:
// There is no property called nameError.
// The property is called name.


// ✅ Solution

let studentCorrect = {
    name: "Sahithya",
    age: 24,
    city: "Bangalore"
};

let { name: studentName, ...studentDetails } = studentCorrect;

console.log(studentName);
console.log(studentDetails);

// Output:
// Sahithya
// { age: 20, city: "Bangalore" }

// Solution Explanation:
// name gets Riya.
// The rest operator collects the remaining properties.


// ==================================================
// 12. REST WITH FIRST AND REMAINING VALUES
// ==================================================

let numbers3 = [10, 20, 30, 40];

let [first3, ...rest3] = numbers3;

console.log(first3);
console.log(rest3);

// Output:
// 10
// [20, 30, 40]

// Explanation:
// first3 gets the first value.
// rest3 gets all remaining values.


// ❌ Error Program

let numbers3Error = [10, 20, 30, 40];

let [...rest3Error, last3Error] = numbers3Error;

console.log(rest3Error);

// Error: SyntaxError

// Error Explanation:   The rest element must be the last element.


// ✅ Solution

let numbers3Correct = [10, 20, 30, 40];

let [first3Correct, ...rest3Correct] = numbers3Correct;

console.log(first3Correct);
console.log(rest3Correct);

// Output:
// 10
// [20, 30, 40]

// Solution Explanation:
// The rest element is placed at the end.


// ==================================================
// 13. REST PARAMETER MUST BE LAST
// ==================================================

function showLast(first, ...others) {
    console.log(first);
    console.log(others);
}

showLast(10, 20, 30);

// Output:
// 10
// [20, 30]

// Explanation:
// first gets 10.
// others collects the remaining values.
// Rest is the last parameter.


// ❌ Error Program

// function showLastError(...others, last) {
//     console.log(others);
//     console.log(last);
// }

// Error: SyntaxError: Rest parameter must be last

// Error Explanation:  A parameter cannot come after the rest parameter.


// ✅ Solution

function showLastCorrect(first, ...others) {
    console.log(first);
    console.log(others);
}

showLastCorrect(10, 20, 30);

// Output:
// 10
// [20, 30]

// Solution Explanation:
// The rest parameter is placed at the end.


// ==================================================
// 14. REST VS SPREAD
// ==================================================

// Rest

function collect(...values) {
    console.log(values);
}

collect(10, 20, 30);

// Output:
// [10, 20, 30]

// Explanation:
// Rest collects the values into an array.


// Spread

let numbers4 = [10, 20, 30];

console.log(...numbers4);

// Output:  10 20 30

// Explanation:  Spread takes the values out of the array.


// ❌ Error Program

function collectError(...values) {
    console.log(...values);
}

collectError(10, 20, 30);

// Output:  10 20 30

// Error Explanation:
// This is not an error.
// Here, Rest first collects the values,
// and Spread then spreads them again.


// ✅ Solution

function collectCorrect(...values) {
    console.log(values);
}

collectCorrect(10, 20, 30);

// Output:  [10, 20, 30]

// Solution Explanation:
// Rest collects the values into an array.
// Spread does the opposite and spreads them out.


// ==================================================
// 15. REST FOR FLEXIBLE FUNCTIONS
// ==================================================

function showFlexible(...numbers) {
    console.log(numbers);
}

showFlexible(10);
showFlexible(10, 20);
showFlexible(10, 20, 30);

// Output:
// [10]
// [10, 20]
// [10, 20, 30]

// Explanation:  Rest allows the function to accept any number of values.


// ❌ Error Program

function showFlexibleError(numbers) {
    console.log(numbers);
}

showFlexibleError(10, 20, 30);

// Output:  10

// Error Explanation:
// Without Rest, only the first argument is stored
// in the numbers parameter.


// ✅ Solution

function showFlexibleCorrect(...numbers) {
    console.log(numbers);
}

showFlexibleCorrect(10, 20, 30);

// Output:  [10, 20, 30]

// Solution Explanation:
// Rest collects all the arguments.
// So the function can accept any number of values.
