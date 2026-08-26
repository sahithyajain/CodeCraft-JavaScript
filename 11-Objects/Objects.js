// 📦 JavaScript Objects


// =====================================
// 1. Creating an Object
// =====================================

let student = {
    name: "Sahithya",
    age: 22,
    course: "JavaScript"
};

console.log(student);

// Output:
// { name: 'Sahithya', age: 22, course: 'JavaScript' }

// How it works:
// An object stores related information using key-value pairs.
// name, age, and course are properties of the student object.



// ❌ Error Program

let studentData = {
    name: "Sahithya",
    age: 22,
    course: "JavaScript"
};

console.log(studentData.name());

// Output:
// TypeError: studentData.name is not a function

// How it works:
// name is a property containing a string.
// We try to call it like a function using ().
// So JavaScript gives an error.



// ✅ Correct Version

let studentInfo = {
    name: "Sahithya",
    age: 22,
    course: "JavaScript"
};

console.log(studentInfo.name);

// Output:
// Sahithya

// How it works:
// name is a property.
// We access it without parentheses.



// =====================================
// 2. Object Properties
// =====================================

let person = {
    name: "Sahithya",
    age: 22,
    city: "Bangalore"
};

console.log(person.name);
console.log(person.age);
console.log(person.city);

// Output:
// Sahithya
// 22
// Bangalore

// How it works:
// name, age, and city are properties.
// Each property stores a value.



// ❌ Error Program

let personData = {
    name: "Sahithya",
    age: 22
};

console.log(personData.city);

// Output:
// undefined

// How it works:
// city does not exist in the object.
// So JavaScript returns undefined.



// ✅ Correct Version

let personInfo = {
    name: "Sahithya",
    age: 22,
    city: "Bangalore"
};

console.log(personInfo.city);

// Output:
// Bangalore

// How it works:
// city exists in the object.
// So JavaScript returns its value.



// =====================================
// 3. Accessing Properties
// =====================================

let employee = {
    name: "Sahithya",
    role: "Developer"
};

console.log(employee.name);
console.log(employee.role);

// Output:
// Sahithya
// Developer

// How it works:
// We use the property names to access their values.



// ❌ Error Program

let employeeData = {
    name: "Sahithya",
    role: "Developer"
};

console.log(employeeData.salary);

// Output:
// undefined

// How it works:
// salary is not a property of the object.
// So JavaScript returns undefined.



// ✅ Correct Version

let employeeInfo = {
    name: "Sahithya",
    role: "Developer"
};

console.log(employeeInfo.role);

// Output:
// Developer

// How it works:
// role exists in the object.
// So its value is returned.



// =====================================
// 4. Dot Notation
// =====================================

let user = {
    name: "Sahithya",
    age: 22
};

console.log(user.name);

// Output:
// Sahithya

// How it works:
// Dot notation uses the format:
// object.property



// ❌ Error Program

let userData = {
    name: "Sahithya"
};

console.log(user.nameValue);

// Output:
// undefined

// How it works:
// nameValue does not exist as a property.
// So JavaScript returns undefined.



// ✅ Correct Version

let userInfo = {
    name: "Sahithya"
};

console.log(userInfo.name);

// Output:
// Sahithya

// How it works:
// name exists in the object.
// Dot notation accesses its value.



// =====================================
// 5. Bracket Notation
// =====================================

let studentDetails = {
    name: "Sahithya",
    age: 22
};

console.log(studentDetails["name"]);

// Output:
// Sahithya

// How it works:
// Bracket notation uses the property name inside quotes.



// ❌ Error Program

let studentData2 = {
    name: "Sahithya",
    age: 22
};

console.log(studentData2[name]);

// Output:
// ReferenceError: name is not defined

// How it works:
// Without quotes, JavaScript treats name as a variable.
// That variable does not exist.



// ✅ Correct Version

let studentDetails2 = {
    name: "Sahithya",
    age: 22
};

console.log(studentDetails2["name"]);

// Output:
// Sahithya

// How it works:
// "name" is written as a string inside brackets.
// So JavaScript looks for the name property.



// =====================================
// 6. Adding Properties
// =====================================

let studentProfile = {
    name: "Sahithya",
    age: 22
};

studentProfile.city = "Bangalore";

console.log(studentProfile);

// Output:
// { name: 'Sahithya', age: 22, city: 'Bangalore' }

// How it works:
// city did not exist before.
// Assigning a value creates a new property.



// ❌ Error Program

let profileData = {
    name: "Sahithya"
};

profileData.city;

console.log(profileData);

// Output:
// { name: 'Sahithya' }

// How it works:
// Simply accessing a property does not create it.
// city was never assigned a value.



// ✅ Correct Version

let profileInfo = {
    name: "Sahithya"
};

profileInfo.city = "Bangalore";

console.log(profileInfo);

// Output:
// { name: 'Sahithya', city: 'Bangalore' }

// How it works:
// Assigning a value to city adds it to the object.



// =====================================
// 7. Updating Properties
// =====================================

let account = {
    name: "Sahithya",
    age: 22
};

account.age = 23;

console.log(account.age);

// Output:
// 23

// How it works:
// age already exists.
// Assigning a new value updates the property.



// ❌ Error Program

let accountData = {
    name: "Sahithya",
    age: 22
};

accountData.Age = 23;

console.log(accountData);

// Output:
// { name: 'Sahithya', age: 22, Age: 23 }

// How it works:
// JavaScript property names are case-sensitive.
// Age and age are different properties.
// So a new property was created instead of updating age.



// ✅ Correct Version

let accountInfo = {
    name: "Sahithya",
    age: 22
};

accountInfo.age = 23;

console.log(accountInfo);

// Output:
// { name: 'Sahithya', age: 23 }

// How it works:
// The exact property name age is used.
// So the existing value is updated.



// =====================================
// 8. Deleting Properties
// =====================================

let product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
};

delete product.price;

console.log(product);

// Output:
// { name: 'Laptop', brand: 'Dell' }

// How it works:
// delete removes the price property from the object.



// ❌ Error Program

let productData = {
    name: "Laptop",
    price: 50000
};

productData.price;

console.log(productData);

// Output:
// { name: 'Laptop', price: 50000 }

// How it works:
// Simply accessing price does not remove it.
// The delete keyword is required.



// ✅ Correct Version

let productInfo = {
    name: "Laptop",
    price: 50000
};

delete productInfo.price;

console.log(productInfo);

// Output:
// { name: 'Laptop' }

// How it works:
// delete removes the price property.



// =====================================
// 9. Nested Objects
// =====================================

let studentAddress = {
    name: "Sahithya",

    address: {
        city: "Bangalore",
        country: "India"
    }
};

console.log(studentAddress.address.city);

// Output:
// Bangalore

// How it works:
// address is an object inside studentAddress.
// city is inside address.
// So we use studentAddress.address.city.



// ❌ Error Program

let addressData = {
    name: "Sahithya",

    address: {
        city: "Bangalore"
    }
};

console.log(addressData.city);

// Output:
// undefined

// How it works:
// city is not directly inside addressData.
// It is inside the address object.



// ✅ Correct Version

let addressInfo = {
    name: "Sahithya",

    address: {
        city: "Bangalore"
    }
};

console.log(addressInfo.address.city);

// Output:
// Bangalore

// How it works:
// We first access address.
// Then we access city inside address.



// =====================================
// 10. Object Methods
// =====================================

let personMethod = {
    name: "Sahithya",

    greet: function() {
        console.log("Hello!");
    }
};

personMethod.greet();

// Output:
// Hello!

// How it works:
// greet is a function stored inside the object.
// A function inside an object is called a method.



// ❌ Error Program

let personMethodData = {
    name: "Sahithya",

    greet: function() {
        console.log("Hello!");
    }
};

personMethodData.greet;

// Output:
// [Function: greet]

// How it works:
// Without (), the function is not executed.
// We only access the function itself.



// ✅ Correct Version

let personMethodInfo = {
    name: "Sahithya",

    greet: function() {
        console.log("Hello!");
    }
};

personMethodInfo.greet();

// Output:
// Hello!

// How it works:
// () calls the greet method.
// So Hello! is printed.



// =====================================
// 11. this Inside Objects
// =====================================

let studentThis = {
    name: "Sahithya",

    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};

studentThis.greet();

// Output:
// Hello Sahithya

// How it works:
// this refers to the current object.
// this.name means studentThis.name.



// ❌ Error Program

let studentThisData = {
    name: "Sahithya",

    greet: function() {
        console.log(`Hello ${name}`);
    }
};

studentThisData.greet();

// Output:
// ReferenceError: name is not defined

// How it works:
// name is a property of the object.
// It is not a normal variable.
// We need to use this.name to access it.



// ✅ Correct Version

let studentThisInfo = {
    name: "Sahithya",

    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};

studentThisInfo.greet();

// Output:
// Hello Sahithya

// How it works:
// this.name accesses the name property of the object.



// =====================================
// 12. Objects with Functions
// =====================================

let calculator = {
    number: 10,

    double: function() {
        return this.number * 2;
    }
};

console.log(calculator.double());

// Output:
// 20

// How it works:
// number stores 10.
// double() uses this.number.
// 10 * 2 gives 20.



// ❌ Error Program

let calculatorData = {
    number: 10,

    double: function() {
        return number * 2;
    }
};

console.log(calculatorData.double());

// Output:
// ReferenceError: number is not defined

// How it works:
// number is a property, not a normal variable.
// We need to use this.number.



// ✅ Correct Version

let calculatorInfo = {
    number: 10,

    double: function() {
        return this.number * 2;
    }
};

console.log(calculatorInfo.double());

// Output:
// 20

// How it works:
// this.number accesses the object's number property.



// =====================================
// 13. Checking Properties
// =====================================

let studentCheck = {
    name: "Sahithya",
    age: 22
};

console.log("name" in studentCheck);

// Output:
// true

// How it works:
// name exists in the object.
// So the in operator returns true.



// ❌ Error Program

let studentCheckData = {
    name: "Sahithya",
    age: 22
};

console.log("city" in studentCheckData);

// Output:
// false

// How it works:
// city does not exist in the object.
// So the in operator returns false.



// ✅ Correct Version

let studentCheckInfo = {
    name: "Sahithya",
    age: 22
};

console.log("age" in studentCheckInfo);

// Output:
// true

// How it works:
// age exists in the object.
// So the result is true.



// =====================================
// 14. in Operator
// =====================================

let personIn = {
    name: "Sahithya",
    city: "Bangalore"
};

console.log("city" in personIn);

// Output:
// true

// How it works:
// The in operator checks whether city exists.



// ❌ Error Program

let personInData = {
    name: "Sahithya",
    city: "Bangalore"
};

console.log("country" in personInData);

// Output:
// false

// How it works:
// country is not a property of the object.
// So the result is false.



// ✅ Correct Version

let personInInfo = {
    name: "Sahithya",
    city: "Bangalore"
};

console.log("name" in personInInfo);

// Output:
// true

// How it works:
// name exists in the object.
// So in returns true.



// =====================================
// 15. Object.keys()
// =====================================

let studentKeys = {
    name: "Sahithya",
    age: 22,
    city: "Bangalore"
};

console.log(Object.keys(studentKeys));

// Output:
// [ 'name', 'age', 'city' ]

// How it works:
// Object.keys() returns an array containing
// all property names.



// ❌ Error Program

let studentKeysData = {
    name: "Sahithya",
    age: 22
};

console.log(Object.key(studentKeysData));

// Output:
// TypeError: Object.key is not a function

// How it works:
// The correct method is Object.keys().
// JavaScript does not have Object.key().



// ✅ Correct Version

let studentKeysInfo = {
    name: "Sahithya",
    age: 22
};

console.log(Object.keys(studentKeysInfo));

// Output:
// [ 'name', 'age' ]

// How it works:
// Object.keys() returns the property names.



// =====================================
// 16. Object.values()
// =====================================

let studentValues = {
    name: "Sahithya",
    age: 22,
    city: "Bangalore"
};

console.log(Object.values(studentValues));

// Output:
// [ 'Sahithya', 22, 'Bangalore' ]

// How it works:
// Object.values() returns all property values.



// ❌ Error Program

let studentValuesData = {
    name: "Sahithya",
    age: 22
};

console.log(Object.value(studentValuesData));

// Output:
// TypeError: Object.value is not a function

// How it works:
// The correct method is Object.values().
// Object.value() does not exist.



// ✅ Correct Version

let studentValuesInfo = {
    name: "Sahithya",
    age: 22
};

console.log(Object.values(studentValuesInfo));

// Output:
// [ 'Sahithya', 22 ]

// How it works:
// Object.values() returns the values stored in the object.



// =====================================
// 17. Object.entries()
// =====================================

let studentEntries = {
    name: "Sahithya",
    age: 22
};

console.log(Object.entries(studentEntries));

// Output:
// [ [ 'name', 'Sahithya' ], [ 'age', 22 ] ]

// How it works:
// Object.entries() returns key-value pairs
// as arrays inside an array.



// ❌ Error Program

let studentEntriesData = {
    name: "Sahithya",
    age: 22
};

console.log(Object.entry(studentEntriesData));

// Output:
// TypeError: Object.entry is not a function

// How it works:
// The correct method is Object.entries().
// Object.entry() does not exist.



// ✅ Correct Version

let studentEntriesInfo = {
    name: "Sahithya",
    age: 22
};

console.log(Object.entries(studentEntriesInfo));

// Output:
// [ [ 'name', 'Sahithya' ], [ 'age', 22 ] ]

// How it works:
// Object.entries() returns each property
// together with its value.



// =====================================
// 18. Object.assign()
// =====================================

let studentOne = {
    name: "Sahithya"
};

let studentTwo = {
    age: 22
};

let combinedStudent = Object.assign({}, studentOne, studentTwo);

console.log(combinedStudent);

// Output:
// { name: 'Sahithya', age: 22 }

// How it works:
// Object.assign() copies properties from
// studentOne and studentTwo into a new object.



// ❌ Error Program

let studentAssignData = {
    name: "Sahithya"
};

let studentAgeData = {
    age: 22
};

let assignResult = Object.assign(studentAssignData, studentAgeData);

console.log(studentAgeData);

// Output:
// { age: 22 }

// How it works:
// Object.assign() copies the properties into
// the first object.
// It does not change the second object.



// ✅ Correct Version

let studentAssignInfo = {
    name: "Sahithya"
};

let studentAgeInfo = {
    age: 22
};

let assignResultInfo = Object.assign({}, studentAssignInfo, studentAgeInfo);

console.log(assignResultInfo);

// Output:
// { name: 'Sahithya', age: 22 }

// How it works:
// {} creates a new object.
// Properties from both objects are copied into it.



// =====================================
// 19. Copying Objects
// =====================================

let originalStudent = {
    name: "Sahithya",
    age: 22
};

let copiedStudent = { ...originalStudent };

console.log(copiedStudent);

// Output:
// { name: 'Sahithya', age: 22 }

// How it works:
// The spread operator copies the properties
// into a new object.



// ❌ Error Program

let originalData = {
    name: "Sahithya",
    age: 22
};

let copiedData = originalData;

copiedData.age = 23;

console.log(originalData.age);

// Output:
// 23

// How it works:
// Both variables refer to the same object.
// Changing copiedData also changes originalData.



// ✅ Correct Version

let originalInfo = {
    name: "Sahithya",
    age: 22
};

let copiedInfo = { ...originalInfo };

copiedInfo.age = 23;

console.log(originalInfo.age);

// Output:
// 22

// How it works:
// The spread operator creates a new object.
// Changing copiedInfo does not change originalInfo.



// =====================================
// 20. Combining Objects
// =====================================

let basicDetails = {
    name: "Sahithya"
};

let extraDetails = {
    age: 22
};

let completeDetails = {
    ...basicDetails,
    ...extraDetails
};

console.log(completeDetails);

// Output:
// { name: 'Sahithya', age: 22 }

// How it works:
// The spread operator takes properties from both objects
// and puts them into one new object.



// ❌ Error Program

let firstDetails = {
    name: "Sahithya"
};

let secondDetails = {
    age: 22
};

let incompleteDetails = {
    firstDetails,
    secondDetails
};

console.log(incompleteDetails);

// Output:
// {
//     firstDetails: { name: 'Sahithya' },
//     secondDetails: { age: 22 }
// }

// How it works:
// Without the spread operator,
// the two objects become nested properties.
// They are not combined into one level.



// ✅ Correct Version

let firstInfo = {
    name: "Sahithya"
};

let secondInfo = {
    age: 22
};

let completeInfo = {
    ...firstInfo,
    ...secondInfo
};

console.log(completeInfo);

// Output:
// { name: 'Sahithya', age: 22 }

// How it works:
// The spread operator copies the properties
// from both objects into one object.



// =====================================
// 21. Object Destructuring
// =====================================

let studentDestructuring = {
    name: "Sahithya",
    age: 22
};

let { name, age } = studentDestructuring;

console.log(name);
console.log(age);

// Output:
// Sahithya
// 22

// How it works:
// Destructuring takes the name and age properties
// and stores them in variables.



// ❌ Error Program

let studentDestructuringData = {
    name: "Sahithya",
    age: 22
};

let { studentName } = studentDestructuringData;

console.log(studentName);

// Output:
// undefined

// How it works:
// There is no studentName property.
// The object contains name.
// So studentName becomes undefined.



// ✅ Correct Version

let studentDestructuringInfo = {
    name: "Sahithya",
    age: 22
};

let { name: studentNameValue, age: studentAgeValue } = studentDestructuringInfo;

console.log(studentNameValue);
console.log(studentAgeValue);

// Output:
// Sahithya
// 22

// How it works:
// We take the name and age properties.
// We store them in studentNameValue and studentAgeValue.



// =====================================
// 22. Nested Object Destructuring
// =====================================

let studentNested = {
    name: "Sahithya",

    address: {
        city: "Bangalore",
        country: "India"
    }
};

let {
    address: { city, country }
} = studentNested;

console.log(city);
console.log(country);

// Output:
// Bangalore
// India

// How it works:
// address is a nested object.
// Destructuring takes city and country from address.



// ❌ Error Program

let studentNestedData = {
    name: "Sahithya",

    address: {
        city: "Bangalore"
    }
};

let {
    address: { country }
} = studentNestedData;

console.log(country);

// Output:
// undefined

// How it works:
// country does not exist inside address.
// So country becomes undefined.



// ✅ Correct Version

let studentNestedInfo = {
    name: "Sahithya",

    address: {
        city: "Bangalore",
        country: "India"
    }
};

let {
    address: { city: cityName, country: countryName }
} = studentNestedInfo;

console.log(cityName);
console.log(countryName);

// Output:
// Bangalore
// India

// How it works:
// city and country are taken from the nested address object.
// They are stored in cityName and countryName.



// =====================================
// 23. Spread Operator with Objects
// =====================================

let studentSpread = {
    name: "Sahithya",
    age: 22
};

let newStudent = {
    ...studentSpread,
    course: "JavaScript"
};

console.log(newStudent);

// Output:
// { name: 'Sahithya', age: 22, course: 'JavaScript' }

// How it works:
// The spread operator copies the existing properties.
// course is then added to the new object.



// ❌ Error Program

let studentSpreadData = {
    name: "Sahithya",
    age: 22
};

let newStudentData = {
    studentSpreadData,
    course: "JavaScript"
};

console.log(newStudentData);

// Output:
// {
//     studentSpreadData: { name: 'Sahithya', age: 22 },
//     course: 'JavaScript'
// }

// How it works:
// Without spread, the complete object becomes
// a nested property.



// ✅ Correct Version

let studentSpreadInfo = {
    name: "Sahithya",
    age: 22
};

let newStudentInfo = {
    ...studentSpreadInfo,
    course: "JavaScript"
};

console.log(newStudentInfo);

// Output:
// { name: 'Sahithya', age: 22, course: 'JavaScript' }

// How it works:
// Spread copies the properties into the new object.



// =====================================
// 24. Optional Chaining ?.
// =====================================

let studentOptional = {
    name: "Sahithya"
};

console.log(studentOptional.address?.city);

// Output:
// undefined

// How it works:
// address does not exist.
// ?. safely checks before accessing city.
// Instead of an error, it returns undefined.



// ❌ Error Program

let studentOptionalData = {
    name: "Sahithya"
};

console.log(studentOptionalData.address.city);

// Output:
// TypeError: Cannot read properties of undefined

// How it works:
// address does not exist.
// JavaScript tries to access city from undefined.
// So it gives a TypeError.



// ✅ Correct Version

let studentOptionalInfo = {
    name: "Sahithya"
};

console.log(studentOptionalInfo.address?.city);

// Output:
// undefined

// How it works:
// ?. safely checks whether address exists.
// Since it does not exist, undefined is returned.



// =====================================
// 25. Property Shorthand
// =====================================

let nameValue = "Sahithya";
let ageValue = 22;

let studentShorthand = {
    nameValue,
    ageValue
};

console.log(studentShorthand);

// Output:
// { nameValue: 'Sahithya', ageValue: 22 }

// How it works:
// When the property name and variable name are the same,
// we can write the name only once.



// ❌ Error Program

let studentShorthandData = {
    name: "Sahithya",
    age: 22
};

console.log(studentShorthandData.nameValue);

// Output:
// undefined

// How it works:
// The property is called name, not nameValue.
// Property names must match exactly.



// ✅ Correct Version

let shorthandName = "Sahithya";
let shorthandAge = 22;

let studentShorthandInfo = {
    shorthandName,
    shorthandAge
};

console.log(studentShorthandInfo);

// Output:
// { shorthandName: 'Sahithya', shorthandAge: 22 }

// How it works:
// The variable names are used directly as property names.



// =====================================
// 26. Computed Property Names
// =====================================

let property = "name";

let studentComputed = {
    [property]: "Sahithya"
};

console.log(studentComputed);

// Output:
// { name: 'Sahithya' }

// How it works:
// The value of property is "name".
// [property] becomes the property name "name".



// ❌ Error Program

let propertyData = "name";

let studentComputedData = {
    propertyData: "Sahithya"
};

console.log(studentComputedData.name);

// Output:
// undefined

// How it works:
// propertyData without brackets becomes the literal
// property name "propertyData".
// It does not use the value stored in the variable.



// ✅ Correct Version

let propertyInfo = "name";

let studentComputedInfo = {
    [propertyInfo]: "Sahithya"
};

console.log(studentComputedInfo.name);

// Output:
// Sahithya

// How it works:
// [propertyInfo] uses the value of the variable.
// The value is "name", so the object gets a name property.
