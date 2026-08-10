// 1. VAR - Program 1


var city = "Bangalore";
console.log(city);

// Output:Bangalore

// How it works:  var creates a variable called city and stores "Bangalore" in it.


// --------------------------
// 2. VAR - Program 2
// ----------------------------

var number = 10;
number = 20;
console.log(number);

// Output: 20

// How it works: var allows the value of a variable to be changed.

//----------------------
// Error Program
//------------------------

var name = "Sahithya";
var name = "Hitha";
console.log(name);

// Output: Hitha

// Important: var allows the same variable to be declared again.





// -----------------------------
// 3. LET - Program 1
//---------------------------------

let age = 22;
console.log(age);

// Output: 22

// How it works: let creates a variable called age and stores 22 in it.


// ----------------------------
// 4. LET - Program 2
//-----------------------------

let score = 50;
score = 80;
console.log(score);

// Output: 80

// How it works: let allows us to change the value stored in the variable.


//-----------------------
// Error Program
//-----------------------

let age = 22;
let age = 23;
console.log(age);

// Error: SyntaxError: Identifier 'age' has already been declared

// let cannot be declared again in the same scope.




// --------------------------------
// 5. CONST - Program 1
// ----------------------------------

const country = "India";
console.log(country);

// Output: India

// How it works:  const creates a variable whose value cannot be reassigned.


// ---------------------------------
// 6. CONST - Program 2
// ---------------------------------

const language = "JavaScript";
console.log(language);

// Output: JavaScript

// How it works: const stores a value that should not be reassigned.

//--------------------------
//error
//----------------------------

const country = "India";
country = "USA";
console.log(country);

// Error: TypeError: Assignment to constant variable.

// const does not allow its value to be reassigned.
