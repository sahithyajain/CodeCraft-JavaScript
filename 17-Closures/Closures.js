// 📕 JavaScript Closures


// =====================================
// 🎲 RANDOM CLOSURE PROGRAM
// =====================================

function outer() {
    let name = "Sahithya";

    return function() {
        console.log(name);
    };
}

let greet = outer();

greet();

// Output:
// Sahithya

// Explanation:
// outer() creates the name variable.
//
// The inner function uses name.
//
// outer() returns the inner function.
// Even after outer() finishes,
// the inner function remembers name.
//
// This is called a Closure.



// =====================================
// 1. BASIC CLOSURE
// =====================================

// Simple Program

function outer1() {

    let name = "Sahithya";

    function inner1() {
        console.log(name);
    }

    inner1();
}

outer1();

// Output:
// Sahithya

// Explanation:
// name belongs to outer1().
//
// inner1() is inside outer1().
// So inner1() can use the name variable.



// ❌ Error Program

function outer1Error() {

    let name = "Sahithya";
}

function inner1Error() {
    console.log(name);
}

// inner1Error();

// Explanation:
// name belongs to outer1Error().
//
// It cannot be directly used outside
// that function.
//
// So JavaScript cannot find name.



// ✅ Solution Program

function outer1Solution() {

    let name = "Sahithya";

    function inner1Solution() {
        console.log(name);
    }

    inner1Solution();
}

outer1Solution();

// Output:
// Sahithya

// Explanation:
// The inner function is inside the outer function.
//
// So it can access the name variable.



// =====================================
// 2. CLOSURE AFTER OUTER FUNCTION FINISHES
// =====================================

// Simple Program

function outer2() {

    let name = "Sahithya";

    return function() {
        console.log(name);
    };
}

let greet2 = outer2();

greet2();

// Output:
// Sahithya

// Explanation:
// outer2() finishes after returning the function.
//
// But the returned function still remembers name.
//
// That remembered value is a Closure.



// ❌ Error Program

function outer2Error() {

    let name = "Sahithya";
}

function showName2() {
    console.log(name);
}

// showName2();

// Explanation:
// name was created inside outer2Error().
//
// showName2() is not inside outer2Error().
//
// So it cannot access name.



// ✅ Solution Program

function outer2Solution() {

    let name = "Sahithya";

    return function() {
        console.log(name);
    };
}

let showName2Solution = outer2Solution();

showName2Solution();

// Output:
// Sahithya

// Explanation:
// The returned function remembers name.
//
// So it can use name even after
// outer2Solution() has finished.



// =====================================
// 3. INNER FUNCTION ACCESSING OUTER VARIABLE
// =====================================

// Simple Program

function outer3() {

    let message = "Hello";

    function inner3() {
        console.log(message);
    }

    return inner3;
}

let result3 = outer3();

result3();

// Output:
// Hello

// Explanation:
// message belongs to outer3().
//
// inner3() can access message.
//
// inner3() is returned and called later.



// ❌ Error Program

function outer3Error() {

    let message = "Hello";
}

function inner3Error() {
    console.log(message);
}

// inner3Error();

// Explanation:
// message is inside outer3Error().
//
// inner3Error() is outside it.
//
// So message is not available there.



// ✅ Solution Program

function outer3Solution() {

    let message = "Hello";

    function inner3Solution() {
        console.log(message);
    }

    return inner3Solution;
}

let result3Solution = outer3Solution();

result3Solution();

// Output:
// Hello

// Explanation:
// inner3Solution() is created inside outer3Solution().
//
// So it can remember and use message.



// =====================================
// 4. CLOSURE WITH PARAMETERS
// =====================================

// Simple Program

function greet4(name) {

    return function() {
        console.log("Hello " + name);
    };
}

let message4 = greet4("Sahithya");

message4();

// Output:
// Hello Sahithya

// Explanation:
// "Sahithya" is passed to greet4().
//
// The inner function remembers name.
//
// So message4() can use name later.



// ❌ Error Program

function greet4Error(name) {

    return function() {
        console.log("Hello");
    };
}

let message4Error = greet4Error("Sahithya");

message4Error();

// Output:
// Hello

// Explanation:
// The name was passed to greet4Error(),
// but the inner function does not use name.
//
// So the name is not displayed.



// ✅ Solution Program

function greet4Solution(name) {

    return function() {
        console.log("Hello " + name);
    };
}

let message4Solution = greet4Solution("Sahithya");

message4Solution();

// Output:
// Hello Sahithya

// Explanation:
// The inner function uses name.
//
// Because of the closure,
// it remembers the value "Sahithya".



// =====================================
// 5. CLOSURE REMEMBERING A VALUE
// =====================================

// Simple Program

function counter5() {

    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let increase5 = counter5();

increase5();
increase5();
increase5();

// Output:
// 1
// 2
// 3

// Explanation:
// count starts at 0.
//
// The inner function increases count.
//
// The closure remembers the previous value.
//
// So it becomes 1, then 2, then 3.



// ❌ Error Program

function counter5Error() {

    return function() {
        let count = 0;
        count++;
        console.log(count);
    };
}

let increase5Error = counter5Error();

increase5Error();
increase5Error();
increase5Error();

// Output:
// 1
// 1
// 1

// Explanation:
// count is created again every time
// the inner function runs.
//
// So it always starts from 0.
//
// It does not remember the previous value.



// ✅ Solution Program

function counter5Solution() {

    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let increase5Solution = counter5Solution();

increase5Solution();
increase5Solution();
increase5Solution();

// Output:
// 1
// 2
// 3

// Explanation:
// count is created only once.
//
// The closure remembers the same count.
//
// So every call continues from
// the previous value.



// =====================================
// 6. CLOSURE FOR PRIVATE DATA
// =====================================

// Simple Program

function account6() {

    let balance = 1000;

    return function() {
        console.log(balance);
    };
}

let showBalance6 = account6();

showBalance6();

// Output:
// 1000

// Explanation:
// balance is inside account6().
//
// We cannot directly access balance outside.
//
// The returned function can access it.



// ❌ Error Program

function account6Error() {

    let balance = 1000;
}

account6Error();

// console.log(balance);

// Explanation:
// balance belongs to account6Error().
//
// It cannot be accessed directly outside
// the function.
//
// So this would cause an error.



// ✅ Solution Program

function account6Solution() {

    let balance = 1000;

    return function() {
        console.log(balance);
    };
}

let showBalance6Solution = account6Solution();

showBalance6Solution();

// Output:
// 1000

// Explanation:
// The returned function has access to balance.
//
// The closure allows us to use the private
// value without accessing it directly.



// =====================================
// 7. CHANGING PRIVATE DATA
// =====================================

// Simple Program

function account7() {

    let balance = 1000;

    return function(amount) {
        balance = balance + amount;
        console.log(balance);
    };
}

let deposit7 = account7();

deposit7(500);
deposit7(200);

// Output:
// 1500
// 1700

// Explanation:
// balance starts at 1000.
//
// The first call adds 500.
// balance becomes 1500.
//
// The second call adds 200.
// balance becomes 1700.
//
// The closure remembers the updated value.



// ❌ Error Program

function account7Error() {

    let balance = 1000;

    return function(amount) {
        console.log(amount);
    };
}

let deposit7Error = account7Error();

deposit7Error(500);
deposit7Error(200);

// Output:
// 500
// 200

// Explanation:
// The amount is displayed,
// but balance is never changed.
//
// So the private balance is not updated.



// ✅ Solution Program

function account7Solution() {

    let balance = 1000;

    return function(amount) {
        balance = balance + amount;
        console.log(balance);
    };
}

let deposit7Solution = account7Solution();

deposit7Solution(500);
deposit7Solution(200);

// Output:
// 1500
// 1700

// Explanation:
// The inner function changes balance.
//
// The closure remembers the changed value
// for the next call.



// =====================================
// 8. MULTIPLE CLOSURES
// =====================================

// Simple Program

function counter8() {

    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter8A = counter8();
let counter8B = counter8();

console.log(counter8A());
console.log(counter8A());

console.log(counter8B());

// Output:
// 1
// 2
// 1

// Explanation:
// counter8A has its own count.
//
// counter8B has another count.
//
// They do not share the same value.



// ❌ Error Program

function sharedCounter8() {

    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let sameCounter = sharedCounter8();

console.log(sameCounter());
console.log(sameCounter());

// Output:
// 1
// 2

// Explanation:
// Here we created only one closure.
//
// Both calls use the same remembered count.
//
// If we want separate counters,
// we must call the outer function again.



// ✅ Solution Program

function createCounter8() {

    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter8One = createCounter8();
let counter8Two = createCounter8();

console.log(counter8One());
console.log(counter8Two());

// Output:
// 1
// 1

// Explanation:
// Each call to createCounter8()
// creates a separate closure.
//
// So both counters start separately.



// =====================================
// 9. CLOSURE WITH MULTIPLE VARIABLES
// =====================================

// Simple Program

function student9(name, age) {

    return function() {
        console.log(name);
        console.log(age);
    };
}

let showStudent9 = student9("Sahithya", 22);

showStudent9();

// Output:
// Sahithya
// 22

// Explanation:
// The outer function has name and age.
//
// The inner function remembers both values.



// ❌ Error Program

function student9Error(name, age) {

    return function() {
        console.log(name);
    };
}

let showStudent9Error = student9Error("Sahithya", 22);

showStudent9Error();

// Output:
// Sahithya

// Explanation:
// age was passed to the outer function,
// but the inner function does not use it.
//
// So age is not displayed.



// ✅ Solution Program

function student9Solution(name, age) {

    return function() {
        console.log(name);
        console.log(age);
    };
}

let showStudent9Solution =
    student9Solution("Sahithya", 22);

showStudent9Solution();

// Output:
// Sahithya
// 22

// Explanation:
// The inner function uses both variables.
//
// The closure remembers both name and age.



// =====================================
// 10. CLOSURE WITH setTimeout()
// =====================================

// Simple Program

function message10() {

    let text = "Hello";

    setTimeout(function() {
        console.log(text);
    }, 1000);
}

message10();

// Output after 1 second:
// Hello

// Explanation:
// setTimeout() runs the callback later.
//
// The callback still remembers text.
//
// This happens because of the closure.



// ❌ Error Program

function message10Error() {

    let text = "Hello";

    setTimeout(function() {
        console.log(message);
    }, 1000);
}

message10Error();

// Explanation:
// The variable is called text.
//
// But the callback tries to use message.
//
// There is no variable called message here.
//
// So JavaScript gives an error.



// ✅ Solution Program

function message10Solution() {

    let text = "Hello";

    setTimeout(function() {
        console.log(text);
    }, 1000);
}

message10Solution();

// Output after 1 second:
// Hello

// Explanation:
// The callback uses the correct variable text.
//
// The closure remembers text
// until the callback runs.



// =====================================
// 11. CLOSURE IN A LOOP
// =====================================

// Simple Program

for (let i = 1; i <= 3; i++) {

    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// Output:
// 1
// 2
// 3

// Explanation:
// Each loop iteration with let
// has its own value of i.
//
// Each callback remembers its own value.



// ❌ Error Program

for (var i = 1; i <= 3; i++) {

    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// Output:
// 4
// 4
// 4

// Explanation:
// var does not create a separate value
// for each loop iteration.
//
// All callbacks use the same i.
//
// By the time they run, i is 4.



// ✅ Solution Program

for (let i = 1; i <= 3; i++) {

    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// Output:
// 1
// 2
// 3

// Explanation:
// let creates a separate value
// for each loop iteration.
//
// Each callback remembers its own i.



// =====================================
// 12. CLOSURE AND LEXICAL SCOPE
// =====================================

// Simple Program

function outer12() {

    let message = "Hello";

    function inner12() {
        console.log(message);
    }

    return inner12;
}

let result12 = outer12();

result12();

// Output:
// Hello

// Explanation:
// inner12() was created inside outer12().
//
// So it can access message.
//
// This is because of lexical scope.



// ❌ Error Program

let message12 = "Outside";

function test12() {

    let message = "Inside";

    function show12() {
        console.log(message12);
    }

    show12();
}

test12();

// Output:
// Outside

// Explanation:
// show12() uses message12.
//
// It does not use the message variable
// inside test12().
//
// A function uses the variable
// available from its surrounding scope.



// ✅ Solution Program

function outer12Solution() {

    let message = "Inside";

    function inner12Solution() {
        console.log(message);
    }

    inner12Solution();
}

outer12Solution();

// Output:
// Inside

// Explanation:
// inner12Solution() was created inside
// outer12Solution().
//
// So it can access the message
// from that surrounding scope.



// =====================================
// 13. CLOSURE VS NORMAL FUNCTION
// =====================================

// Simple Program

function outer13() {

    let name = "Sahithya";

    return function() {
        console.log(name);
    };
}

let greet13 = outer13();

greet13();

// Output:
// Sahithya

// Explanation:
// The returned function remembers name.
//
// This is a closure.



// ❌ Error Program

function normal13() {

    let name = "Sahithya";
}

function show13() {
    console.log(name);
}

// show13();

// Explanation:
// show13() is outside normal13().
//
// It cannot access the name variable
// created inside normal13().



// ✅ Solution Program

function closure13() {

    let name = "Sahithya";

    return function() {
        console.log(name);
    };
}

let show13Solution = closure13();

show13Solution();

// Output:
// Sahithya

// Explanation:
// The inner function is returned.
//
// It remembers name from closure13().
//
// That is the difference from the normal function.



// =====================================
// 14. FUNCTION FACTORY USING CLOSURE
// =====================================

// Simple Program

function createGreeting14(name) {

    return function() {
        console.log("Hello " + name);
    };
}

let greetSahithya14 =
    createGreeting14("Sahithya");

let greetAnu14 =
    createGreeting14("Anu");

greetSahithya14();
greetAnu14();

// Output:
// Hello Sahithya
// Hello Anu

// Explanation:
// createGreeting14() creates a new function.
//
// Each returned function remembers
// the name given to it.



// ❌ Error Program

function createGreeting14Error(name) {

    return function() {
        console.log("Hello");
    };
}

let greet14Error =
    createGreeting14Error("Sahithya");

greet14Error();

// Output:
// Hello

// Explanation:
// The name is passed,
// but the returned function does not use it.
//
// So the name is not remembered for the output.



// ✅ Solution Program

function createGreeting14Solution(name) {

    return function() {
        console.log("Hello " + name);
    };
}

let greet14Solution =
    createGreeting14Solution("Sahithya");

greet14Solution();

// Output:
// Hello Sahithya

// Explanation:
// The returned function uses name.
//
// The closure remembers the value
// passed to the outer function.



// =====================================
// 15. CLOSURE MAINTAINING STATE
// =====================================

// Simple Program

function score15() {

    let points = 0;

    return function() {
        points++;
        return points;
    };
}

let addPoint15 = score15();

console.log(addPoint15());
console.log(addPoint15());
console.log(addPoint15());

// Output:
// 1
// 2
// 3

// Explanation:
// points starts at 0.
//
// The returned function remembers points.
//
// Each call increases the same value.
//
// This is called maintaining state.



// ❌ Error Program

function score15Error() {

    return function() {

        let points = 0;

        points++;

        return points;
    };
}

let addPoint15Error = score15Error();

console.log(addPoint15Error());
console.log(addPoint15Error());
console.log(addPoint15Error());

// Output:
// 1
// 1
// 1

// Explanation:
// points is created again every time
// the returned function runs.
//
// So it always starts from 0.
//
// The value is not maintained.



// ✅ Solution Program

function score15Solution() {

    let points = 0;

    return function() {

        points++;

        return points;
    };
}

let addPoint15Solution = score15Solution();

console.log(addPoint15Solution());
console.log(addPoint15Solution());
console.log(addPoint15Solution());

// Output:
// 1
// 2
// 3

// Explanation:
// points is created only once.
//
// The returned function remembers it.
//
// So the value continues from the
// previous function call.



// =====================================
// ⭐ QUICK REVISION
// =====================================

// Closure
// → A function that remembers variables
//   from its outer function.
//
// Outer Function
// → Creates the variable.
//
// Inner Function
// → Can use the outer variable.
//
// Remembering Values
// → A closure can keep values between calls.
//
// Private Data
// → Closures can keep variables
//   from direct outside access.
//
// Counter
// → A common use of closures.
//
// Multiple Closures
// → Each closure can have its own value.
//
// Parameters
// → A closure can remember outer
//   function parameters.
//
// Lexical Scope
// → A function can access variables
//   from where it was created.
//
// Function Factory
// → Creates functions that remember values.
//
// State
// → A closure can maintain data
//   between function calls.
