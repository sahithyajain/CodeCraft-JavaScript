// 🔄 JavaScript `this` Keyword


// =====================================
// 1. RANDOM `this` PROGRAM
// =====================================

let mobile = {
    brand: "Samsung",

    showBrand: function() {
        console.log(this.brand);
    }
};

mobile.showBrand();

// Output:
// Samsung

// Explanation:
// The function wants to use the brand
// stored inside the current object.
//
// So we use `this.brand`.
//
// `this` refers to the current object.
//
// Here, the current object is mobile.
//
// Therefore:
//
// this.brand → mobile.brand



// =====================================
// 2. `this` IN GLOBAL SCOPE
// =====================================

console.log(this);

// Output:
// In a browser's normal JavaScript script:
// Window object

// Explanation:
// Here, `this` is used outside any
// function or object.
//
// So `this` refers to the global context.
//
// In a browser's normal script,
// the global context is window.



// =====================================
// 2. ❌ ERROR PROGRAM — Global `this`
// =====================================

"use strict";

function showGlobalName() {
    console.log(this.name);
}

showGlobalName();

// ❌ Error:
//
// The function is called normally.
//
// In strict mode:
// this = undefined
//
// So JavaScript cannot read:
// this.name



// =====================================
// 2. ✅ SOLUTION PROGRAM
// =====================================

let globalUser = {
    name: "Sahithya",

    showName: function() {
        console.log(this.name);
    }
};

globalUser.showName();

// Output:
// Sahithya

// Explanation:
// The function needs an object whose
// name it should use.
//
// globalUser is using the function.
//
// So `this` refers to globalUser.
//
// Therefore:
// this.name → globalUser.name



// =====================================
// 3. `this` INSIDE AN OBJECT
// =====================================

let student = {
    name: "Sahithya",

    greet: function() {
        console.log(this.name);
    }
};

student.greet();

// Output:
// Sahithya

// Explanation:
// The function wants to use the name
// stored inside the current object.
//
// So we use `this.name`.
//
// Here, `this` refers to student.
//
// Therefore:
// this.name → student.name



// =====================================
// 3. ❌ ERROR PROGRAM
// =====================================

let wrongStudent = {
    name: "Sahithya",

    greet: function() {
        console.log(name);
    }
};

wrongStudent.greet();

// ❌ Error:
//
// `name` is stored inside the object.
//
// But `name` alone makes JavaScript
// look for a separate variable called name.
//
// There is no such variable.
//
// So we need `this.name`.



// =====================================
// 3. ✅ SOLUTION PROGRAM
// =====================================

let correctStudent = {
    name: "Sahithya",

    greet: function() {
        console.log(this.name);
    }
};

correctStudent.greet();

// Output:
// Sahithya

// Explanation:
// `this` refers to the current object.
//
// So `this.name` gets the name
// belonging to correctStudent.



// =====================================
// 4. `this` WITH MULTIPLE PROPERTIES
// =====================================

let person = {
    name: "Sahithya",
    age: 22,
    course: "JavaScript",

    showDetails: function() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.course);
    }
};

person.showDetails();

// Output:
// Sahithya
// 22
// JavaScript

// Explanation:
// The function wants to use several
// properties from the current object.
//
// We use `this` before each property.
//
// this.name
// → person.name
//
// this.age
// → person.age
//
// this.course
// → person.course



// =====================================
// 4. ❌ ERROR PROGRAM
// =====================================

let wrongPerson = {
    name: "Sahithya",
    age: 22,

    showDetails: function() {
        console.log(name);
        console.log(age);
    }
};

wrongPerson.showDetails();

// ❌ Error:
//
// name and age belong to the object.
//
// But writing them alone makes JavaScript
// look for separate variables.
//
// We need:
// this.name
// this.age



// =====================================
// 4. ✅ SOLUTION PROGRAM
// =====================================

let correctPerson = {
    name: "Sahithya",
    age: 22,

    showDetails: function() {
        console.log(this.name);
        console.log(this.age);
    }
};

correctPerson.showDetails();

// Output:
// Sahithya
// 22

// Explanation:
// `this` refers to the current object.
//
// So it can access all the properties
// belonging to that object.



// =====================================
// 5. `this` IN A REGULAR FUNCTION
// =====================================

function showMessage() {
    console.log("Hello");
}

showMessage();

// Output:
// Hello

// Explanation:
// This is a regular function.
//
// It is called normally and is not
// connected to a particular object.
//
// The value of `this` depends on
// how the function is called.



// =====================================
// 5. ❌ ERROR PROGRAM
// =====================================

function showUserName() {
    "use strict";

    console.log(this.name);
}

showUserName();

// ❌ Error:
//
// The function is called normally.
//
// In strict mode:
// this = undefined
//
// So JavaScript cannot use:
// this.name



// =====================================
// 5. ✅ SOLUTION PROGRAM
// =====================================

let user = {
    name: "Sahithya",

    showUserName: function() {
        console.log(this.name);
    }
};

user.showUserName();

// Output:
// Sahithya

// Explanation:
// Now the function is being used
// by the user object.
//
// So `this` refers to user.
//
// this.name → user.name



// =====================================
// 6. `this` IN STRICT MODE
// =====================================

function checkThis() {
    "use strict";

    console.log(this);
}

checkThis();

// Output:
// undefined

// Explanation:
// In strict mode, a regular function
// called by itself gets:
// this = undefined



// =====================================
// 6. ❌ ERROR PROGRAM
// =====================================

function getName() {
    "use strict";

    console.log(this.name);
}

getName();

// ❌ Error:
//
// this is undefined.
//
// So JavaScript cannot access:
// this.name



// =====================================
// 6. ✅ SOLUTION PROGRAM
// =====================================

let strictStudent = {
    name: "Sahithya",

    getName: function() {
        console.log(this.name);
    }
};

strictStudent.getName();

// Output:
// Sahithya

// Explanation:
// The function is now called through
// an object.
//
// So `this` refers to strictStudent.



// =====================================
// 7. `this` WITH call()
// =====================================

let teacher = {
    name: "Anita"
};

function greet() {
    console.log("Hello " + this.name);
}

greet.call(teacher);

// Output:
// Hello Anita

// Explanation:
// The function needs to know
// which object's name to use.
//
// `call(teacher)` tells the function:
// "Use teacher as the current object."
//
// So:
// this = teacher



// =====================================
// 7. ❌ ERROR PROGRAM
// =====================================

function welcome() {
    "use strict";

    console.log("Welcome " + this.name);
}

welcome();

// ❌ Error:
//
// The function is called normally.
//
// In strict mode:
// this = undefined
//
// So this.name cannot be used.



// =====================================
// 7. ✅ SOLUTION PROGRAM
// =====================================

welcome.call(teacher);

// Output:
// Welcome Anita

// Explanation:
// `call(teacher)` gives the function
// an object to work with.
//
// So:
// this = teacher
//
// Therefore:
// this.name → teacher.name



// =====================================
// 8. `call()` WITH ARGUMENTS
// =====================================

let studentCall = {
    name: "Sahithya"
};

function introduce(age, subject) {
    console.log(this.name);
    console.log(age);
    console.log(subject);
}

introduce.call(
    studentCall,
    22,
    "JavaScript"
);

// Output:
// Sahithya
// 22
// JavaScript

// Explanation:
// `call()` can give the function
// both an object and values.
//
// studentCall → this
// 22 → age
// JavaScript → subject



// =====================================
// 8. ❌ ERROR PROGRAM
// =====================================

introduce.call(
    22,
    "JavaScript"
);

// ❌ Error:
//
// The first value passed to call()
// should be the object we want to use
// as `this`.
//
// Here, 22 is being used instead.



// =====================================
// 8. ✅ SOLUTION PROGRAM
// =====================================

introduce.call(
    studentCall,
    22,
    "JavaScript"
);

// Output:
// Sahithya
// 22
// JavaScript

// Explanation:
// The first value is the object.
//
// So:
// studentCall → this
//
// The remaining values are arguments.



// =====================================
// 9. `this` WITH apply()
// =====================================

let studentApply = {
    name: "Sahithya"
};

function showInfo(age, course) {
    console.log(this.name);
    console.log(age);
    console.log(course);
}

showInfo.apply(
    studentApply,
    [22, "JavaScript"]
);

// Output:
// Sahithya
// 22
// JavaScript

// Explanation:
// apply() lets us choose the object
// that `this` should refer to.
//
// studentApply → this
//
// The arguments are placed inside
// one array.



// =====================================
// 9. ❌ ERROR PROGRAM
// =====================================

showInfo.apply(
    studentApply,
    22,
    "JavaScript"
);

// ❌ Error:
//
// apply() expects the function arguments
// inside one array.
//
// So this is wrong:
// 22, "JavaScript"
//
// They should be:
// [22, "JavaScript"]



// =====================================
// 9. ✅ SOLUTION PROGRAM
// =====================================

showInfo.apply(
    studentApply,
    [22, "JavaScript"]
);

// Output:
// Sahithya
// 22
// JavaScript



// =====================================
// 10. `this` WITH bind()
// =====================================

let studentBind = {
    name: "Sahithya"
};

function sayHello() {
    console.log("Hello " + this.name);
}

let newSayHello =
    sayHello.bind(studentBind);

newSayHello();

// Output:
// Hello Sahithya

// Explanation:
// We want this function to always
// work with studentBind.
//
// bind() creates a new function
// connected to studentBind.
//
// So:
// this = studentBind



// =====================================
// 10. ❌ ERROR PROGRAM
// =====================================

let separateFunction = sayHello;

separateFunction();

// ❌ Problem:
//
// The function is now called separately.
//
// It is no longer connected to
// studentBind.
//
// So the original `this` is lost.



// =====================================
// 10. ✅ SOLUTION PROGRAM
// =====================================

let connectedFunction =
    sayHello.bind(studentBind);

connectedFunction();

// Output:
// Hello Sahithya

// Explanation:
// bind() keeps the function connected
// to studentBind.
//
// So `this` still refers to studentBind.



// =====================================
// 11. `this` IN ARROW FUNCTIONS
// =====================================

let arrowStudent = {
    name: "Sahithya",

    greet: () => {
        console.log(this.name);
    }
};

arrowStudent.greet();

// Output:
// undefined in the usual browser/module context

// Explanation:
// The function wants to use the name
// from arrowStudent.
//
// But arrow functions do not have
// their own `this`.
//
// So arrowStudent does not become `this`.



// =====================================
// 11. ❌ ERROR PROGRAM
// =====================================

let wrongArrowStudent = {
    name: "Sahithya",

    greet: () => {
        console.log(this.name);
    }
};

wrongArrowStudent.greet();

// ❌ Problem:
//
// We expected:
// Sahithya
//
// But the arrow function does not
// get `this` from wrongArrowStudent.
//
// It uses `this` from outside the object.



// =====================================
// 11. ✅ SOLUTION PROGRAM
// =====================================

let correctArrowStudent = {
    name: "Sahithya",

    greet: function() {
        console.log(this.name);
    }
};

correctArrowStudent.greet();

// Output:
// Sahithya

// Explanation:
// A regular function can use
// the object calling it as `this`.
//
// So:
// this = correctArrowStudent



// =====================================
// 12. REGULAR FUNCTION vs ARROW FUNCTION
// =====================================

let example = {
    name: "Sahithya",

    regular: function() {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    }
};

example.regular();
example.arrow();

// Output:
// Sahithya
// undefined in the usual browser/module context

// Explanation:
// The regular function gets `this`
// from the object calling it.
//
// The arrow function does not have
// its own `this`.
//
// That is why they give different results.



// =====================================
// 12. ❌ ERROR PROGRAM
// =====================================

let wrongExample = {
    name: "Sahithya",

    greet: () => {
        console.log(this.name);
    }
};

wrongExample.greet();

// ❌ Problem:
//
// The arrow function cannot use
// wrongExample as its `this`.



// =====================================
// 12. ✅ SOLUTION PROGRAM
// =====================================

let correctExample = {
    name: "Sahithya",

    greet: function() {
        console.log(this.name);
    }
};

correctExample.greet();

// Output:
// Sahithya

// Explanation:
//
// A regular function can use
// the current object as `this`.



// =====================================
// 13. NESTED FUNCTIONS
// =====================================

let studentNested = {
    name: "Sahithya",

    showName: function() {

        function inner() {
            console.log("Inside function");
        }

        inner();
    }
};

studentNested.showName();

// Output:
// Inside function

// Explanation:
// showName() contains another function.
//
// The inner function is called separately.



// =====================================
// 13. ❌ ERROR PROGRAM
// =====================================

let wrongNested = {
    name: "Sahithya",

    showName: function() {

        function inner() {
            console.log(this.name);
        }

        inner();
    }
};

wrongNested.showName();

// Output:
// undefined in strict mode
//
// Explanation:
// The outer function is working with
// wrongNested.
//
// But inner() is called normally.
//
// So the inner function does not
// automatically get the outer `this`.



// =====================================
// 13. ✅ SOLUTION PROGRAM
// =====================================

let correctNested = {
    name: "Sahithya",

    showName: function() {

        let inner = () => {
            console.log(this.name);
        };

        inner();
    }
};

correctNested.showName();

// Output:
// Sahithya

// Explanation:
// The outer function gets
// correctNested as `this`.
//
// The inner arrow function does not
// create its own `this`.
//
// So it uses the outer function's `this`.



// =====================================
// 14. `this` WITH new
// =====================================

function Student(name) {
    this.name = name;
}

let newStudent =
    new Student("Sahithya");

console.log(newStudent.name);

// Output:
// Sahithya

// Explanation:
// `new` creates a new Student object.
//
// The constructor needs to store
// the name inside that new object.
//
// `this` refers to the newly created object.
//
// So:
// this.name = name



// =====================================
// 14. ❌ ERROR PROGRAM
// =====================================

function WrongStudent(name) {
    name = name;
}

let wrongStudentObject =
    new WrongStudent("Sahithya");

console.log(wrongStudentObject.name);

// Output:
// undefined

// Explanation:
// The value "Sahithya" is received
// by the parameter called name.
//
// But `name = name` only changes
// the local parameter.
//
// It does not store the name
// inside the new object.
//
// We need `this.name`.



// =====================================
// 14. ✅ SOLUTION PROGRAM
// =====================================

function CorrectStudent(name) {
    this.name = name;
}

let correctStudentObject =
    new CorrectStudent("Sahithya");

console.log(correctStudentObject.name);

// Output:
// Sahithya

// Explanation:
// `this` refers to the newly created object.
//
// So `this.name` creates a property
// inside that object.



// =====================================
// 15. LOSING `this`
// =====================================

let lostStudent = {
    name: "Sahithya",

    greet: function() {
        console.log(this.name);
    }
};

lostStudent.greet();

// Output:
// Sahithya

// Explanation:
// The function is being used by
// lostStudent.
//
// So `this` refers to lostStudent.



// =====================================
// 15. ❌ ERROR PROGRAM
// =====================================

let lostGreet = lostStudent.greet;

lostGreet();

// ❌ Problem:
//
// We took the function out of
// the lostStudent object.
//
// Now it is called separately.
//
// So it no longer knows that
// lostStudent was the original object.



// =====================================
// 15. ✅ SOLUTION PROGRAM
// =====================================

let fixedGreet =
    lostStudent.greet.bind(lostStudent);

fixedGreet();

// Output:
// Sahithya

// Explanation:
// bind() keeps the function connected
// to lostStudent.
//
// So `this` still refers to lostStudent.



// =====================================
// 16. DETACHED METHOD
// =====================================

let userDetails = {
    name: "Sahithya",

    greet: function() {
        console.log(this.name);
    }
};

userDetails.greet();

// Output:
// Sahithya

// Explanation:
// The method is called through
// userDetails.
//
// So `this` refers to userDetails.



// =====================================
// 16. ❌ ERROR PROGRAM
// =====================================

let detachedGreet =
    userDetails.greet;

detachedGreet();

// ❌ Problem:
//
// The method has been separated
// from its object.
//
// It is no longer called as:
//
// userDetails.greet()
//
// So the original `this` connection
// is lost.



// =====================================
// 16. ✅ SOLUTION PROGRAM
// =====================================

let attachedGreet =
    userDetails.greet.bind(userDetails);

attachedGreet();

// Output:
// Sahithya

// Explanation:
// bind() connects the detached function
// back to userDetails.
//
// So `this` refers to userDetails.



// =====================================
// 17. DOM EVENT HANDLER
// =====================================

// HTML:
//
// <button id="myButton">Click Me</button>

let button =
    document.querySelector("#myButton");

button.addEventListener("click", function() {

    console.log(this);

});

// Output when clicked:
// The button element

// Explanation:
// The function wants to know
// which element received the click.
//
// With a regular event function,
// `this` refers to the element
// that received the event.
//
// So:
// this → button



// =====================================
// 17. ❌ ERROR PROGRAM
// =====================================

button.addEventListener("click", () => {

    console.log(this);

});

// Explanation:
//
// We want `this` to refer to
// the clicked button.
//
// But arrow functions do not have
// their own `this`.
//
// So the arrow function does not
// get the button as `this`.



// =====================================
// 17. ✅ SOLUTION PROGRAM
// =====================================

button.addEventListener("click", function() {

    console.log(this);

});

// Explanation:
//
// A regular event-handler function
// gets the element that received
// the event as `this`.
//
// So:
// this → button



// =====================================
// 18. PROTOTYPE METHOD
// =====================================

function Learner(name) {
    this.name = name;
}

Learner.prototype.greet = function() {

    console.log("Hello " + this.name);

};

let learner =
    new Learner("Sahithya");

learner.greet();

// Output:
// Hello Sahithya

// Explanation:
// greet() is a prototype method.
//
// The learner object is using the method.
//
// So `this` refers to learner.
//
// Therefore:
// this.name → learner.name



// =====================================
// 18. ❌ ERROR PROGRAM
// =====================================

Learner.prototype.showName = function() {

    console.log(name);

};

learner.showName();

// ❌ Error:
//
// name is a property of the learner object.
//
// But `name` alone looks for
// a separate variable.
//
// We need `this.name`.



// =====================================
// 18. ✅ SOLUTION PROGRAM
// =====================================

Learner.prototype.showName = function() {

    console.log(this.name);

};

learner.showName();

// Output:
// Sahithya

// Explanation:
// `this` refers to the object
// using the prototype method.
//
// So `this.name` gets learner's name.



// =====================================
// 19. `this` WITH super
// =====================================

class Person {

    constructor(name) {
        this.name = name;
    }
}

class StudentChild extends Person {

    constructor(name, course) {

        super(name);

        this.course = course;
    }

    showDetails() {

        console.log(this.name);
        console.log(this.course);

    }
}

let child =
    new StudentChild(
        "Sahithya",
        "JavaScript"
    );

child.showDetails();

// Output:
// Sahithya
// JavaScript

// Explanation:
// super(name) calls the parent constructor.
//
// The parent constructor stores the name
// in the current object.
//
// Then `this.course` stores the course
// in the same object.



// =====================================
// 19. ❌ ERROR PROGRAM
// =====================================

class WrongChild extends Person {

    constructor(name, course) {

        this.course = course;

        super(name);
    }
}

// ❌ Error:
//
// In a child class constructor,
// we must call super() before
// using `this`.
//
// Here, `this` is used too early.



// =====================================
// 19. ✅ SOLUTION PROGRAM
// =====================================

class CorrectChild extends Person {

    constructor(name, course) {

        super(name);

        this.course = course;
    }
}

// Explanation:
//
// First, super() calls the parent
// constructor.
//
// After that, we can use `this`.



// =====================================
// 20. GETTER
// =====================================

let getterStudent = {

    firstName: "Sahithya",

    get name() {
        return this.firstName;
    }
};

console.log(getterStudent.name);

// Output:
// Sahithya

// Explanation:
// The getter wants to get the firstName
// stored inside the current object.
//
// So we use `this.firstName`.
//
// Here:
// this → getterStudent



// =====================================
// 20. ❌ ERROR PROGRAM
// =====================================

let wrongGetter = {

    firstName: "Sahithya",

    get name() {
        return firstName;
    }
};

// Explanation:
// firstName belongs to the object.
//
// But `firstName` alone makes JavaScript
// look for a separate variable.
//
// We need:
// this.firstName



// =====================================
// 20. ✅ SOLUTION PROGRAM
// =====================================

let correctGetter = {

    firstName: "Sahithya",

    get name() {
        return this.firstName;
    }
};

console.log(correctGetter.name);

// Output:
// Sahithya

// Explanation:
// `this` refers to correctGetter.
//
// So `this.firstName` gets the
// value stored inside that object.



// =====================================
// 21. SETTER
// =====================================

let setterStudent = {

    name: "Sahithya",

    set studentName(value) {
        this.name = value;
    }
};

setterStudent.studentName = "Ananya";

console.log(setterStudent.name);

// Output:
// Ananya

// Explanation:
// The setter wants to change
// the name of the current object.
//
// `this.name = value` changes
// the object's name.
//
// Here:
// this → setterStudent



// =====================================
// 21. ❌ ERROR PROGRAM
// =====================================

let wrongSetter = {

    name: "Sahithya",

    set studentName(value) {
        name = value;
    }
};

// Explanation:
// We want to change the name
// stored inside the object.
//
// But `name` alone does not refer
// to the object's property.
//
// We need:
// this.name



// =====================================
// 21. ✅ SOLUTION PROGRAM
// =====================================

let correctSetter = {

    name: "Sahithya",

    set studentName(value) {
        this.name = value;
    }
};

correctSetter.studentName = "Ananya";

console.log(correctSetter.name);

// Output:
// Ananya



// =====================================
// 22. STATIC METHOD
// =====================================

class School {

    static schoolName = "ABC School";

    static showSchool() {

        console.log(this.schoolName);

    }
}

School.showSchool();

// Output:
// ABC School

// Explanation:
// A static method belongs to the class itself.
//
// The class is calling showSchool().
//
// So `this` refers to School.
//
// Therefore:
// this.schoolName → School.schoolName



// =====================================
// 22. ❌ ERROR PROGRAM
// =====================================

class WrongSchool {

    static schoolName = "ABC School";

    showSchool() {
        console.log(this.schoolName);
    }
}

// WrongSchool.showSchool();

// ❌ Error:
//
// showSchool() is a normal method.
//
// It belongs to objects created from
// the class, not the class itself.
//
// So the class cannot call it directly.



// =====================================
// 22. ✅ SOLUTION PROGRAM
// =====================================

class CorrectSchool {

    static schoolName = "ABC School";

    static showSchool() {

        console.log(this.schoolName);

    }
}

CorrectSchool.showSchool();

// Output:
// ABC School

// Explanation:
// The method is static,
// so the class itself can use it.
//
// Therefore:
// this → CorrectSchool



// =====================================
// 23. CLASS METHOD
// =====================================

class StudentClass {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

let classStudent =
    new StudentClass("Sahithya");

classStudent.greet();

// Output:
// Hello Sahithya

// Explanation:
// The method wants to use
// the name of the current student.
//
// `this.name` gets that name.
//
// Here:
// this → classStudent



// =====================================
// 23. ❌ ERROR PROGRAM
// =====================================

class WrongClass {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(name);
    }
}

let wrongClassStudent =
    new WrongClass("Sahithya");

wrongClassStudent.greet();

// ❌ Error:
//
// name is stored as a property
// of the current object.
//
// We need:
// this.name



// =====================================
// 23. ✅ SOLUTION PROGRAM
// =====================================

class CorrectClass {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }
}

let correctClassStudent =
    new CorrectClass("Sahithya");

correctClassStudent.greet();

// Output:
// Sahithya

// Explanation:
// `this` refers to the current
// student object.
//
// So `this.name` gets its name.



// =====================================
// 24. CONSTRUCTOR
// =====================================

class StudentDetails {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }
}

let details =
    new StudentDetails(
        "Sahithya",
        22
    );

console.log(details.name);
console.log(details.age);

// Output:
// Sahithya
// 22

// Explanation:
// The constructor receives the
// student's name and age.
//
// We want to store these values
// inside the new object.
//
// `this` refers to the new object.
//
// So:
// this.name = name
// this.age = age



// =====================================
// 24. ❌ ERROR PROGRAM
// =====================================

class WrongDetails {

    constructor(name, age) {

        name = name;
        age = age;

    }
}

let wrongDetails =
    new WrongDetails(
        "Sahithya",
        22
    );

console.log(wrongDetails.name);
console.log(wrongDetails.age);

// Output:
// undefined
// undefined

// Explanation:
// The values are received by the
// constructor parameters.
//
// But we only assigned the parameters
// to themselves.
//
// We did not store them inside
// the new object.
//
// We need:
// this.name
// this.age



// =====================================
// 24. ✅ SOLUTION PROGRAM
// =====================================

class CorrectDetails {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }
}

let correctDetails =
    new CorrectDetails(
        "Sahithya",
        22
    );

console.log(correctDetails.name);
console.log(correctDetails.age);

// Output:
// Sahithya
// 22

// Explanation:
// `this` refers to the newly created object.
//
// So the values are stored
// inside that object.



// =====================================
// 25. DETACHED METHOD
// =====================================

let account = {

    name: "Sahithya",

    showName: function() {
        console.log(this.name);
    }
};

account.showName();

// Output:
// Sahithya

// Explanation:
// account is using showName().
//
// So `this` refers to account.



// =====================================
// 25. ❌ ERROR PROGRAM
// =====================================

let showAccountName =
    account.showName;

showAccountName();

// ❌ Problem:
//
// The method has been separated
// from account.
//
// It is now called by itself.
//
// So the original `this` connection
// is lost.



// =====================================
// 25. ✅ SOLUTION PROGRAM
// =====================================

let fixedAccountName =
    account.showName.bind(account);

fixedAccountName();

// Output:
// Sahithya

// Explanation:
// bind() connects the function
// back to account.
//
// So `this` continues to refer
// to account.



// =====================================
// 26. `this` IN ES MODULES
// =====================================

// If this file is loaded as:
//
// <script type="module" src="this.js"></script>
//
// Then:
//
// console.log(this);
//
// Output:
// undefined

// Explanation:
// At the top level of an ES module,
// `this` does not refer to window.
//
// So:
// this → undefined



// =====================================
// ⭐ FINAL QUICK REVISION
// =====================================

// this
// → Refers to the current object
//   or context.
//
// Object Method
// → this usually refers to the object
//   using the method.
//
// Multiple Properties
// → this can access properties
//   of the current object.
//
// Regular Function
// → this depends on how the function
//   is called.
//
// Strict Mode
// → this is undefined in a normally
//   called regular function.
//
// call()
// → Calls a function and sets this.
//
// apply()
// → Calls a function and sets this.
// → Arguments are passed as an array.
//
// bind()
// → Creates a new function with
//   a fixed this.
//
// Arrow Function
// → Does not have its own this.
//
// Nested Arrow Function
// → Uses this from the surrounding function.
//
// new
// → this refers to the newly created object.
//
// Losing this
// → Happens when a method is called
//   without its original object.
//
// bind()
// → Can fix lost this.
//
// DOM Event Handler
// → Regular event handler usually gets
//   the element as this.
//
// Prototype Method
// → this refers to the object
//   using the method.
//
// super
// → Calls the parent constructor.
//
// Getter / Setter
// → this refers to the object
//   using them.
//
// Static Method
// → this refers to the class itself.
//
// Class Method
// → this refers to the object
//   using the method.
//
// Constructor
// → this refers to the newly created object.
//
// Detached Method
// → A method separated from its object
//   can lose its original this.
//
// ES Module
// → Top-level this is undefined.
