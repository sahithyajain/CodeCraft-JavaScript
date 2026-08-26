// 🔤 JavaScript Strings


// =====================================
// 1. Creating a String
// =====================================

let name = "Sahithya";

console.log(name);

// Output:
// Sahithya

// How it works:
// A string is used to store text.
// Here, name stores the text "Sahithya".
// console.log() prints the string.



// ❌ Error Program

let city = "Bangalore;

console.log(city);

// Output:
// SyntaxError: Invalid or unexpected token

// How it works:
// The string starts with a double quote,
// but the closing double quote is missing.
// So JavaScript cannot understand the code.



// ✅ Correct Version

let cityName = "Bangalore";

console.log(cityName);

// Output:
// Bangalore

// How it works:
// The string has both opening and closing quotes.
// So JavaScript can read and print it.



// =====================================
// 2. String Length
// =====================================

let nameLength = "Sahithya";

console.log(nameLength.length);

// Output:
// 8

// How it works:
// Sahithya contains 8 characters.
// length counts the number of characters in the string.



// ❌ Error Program

let message = "Hello";

console.log(message.length());

// Output:
// TypeError: message.length is not a function

// How it works:
// length is a property, not a function.
// So we should use message.length, not message.length().



// ✅ Correct Version

let messageText = "Hello";

console.log(messageText.length);

// Output:
// 5

// How it works:
// length counts the characters in the string.
// Hello contains 5 characters.



// =====================================
// 3. Accessing Characters
// =====================================

let student = "Sahithya";

console.log(student[0]);
console.log(student[1]);

// Output:
// S
// a

// How it works:
// String indexes start from 0.
// S is at index 0.
// a is at index 1.



// ❌ Error Program

let studentName = "Sahithya";

console.log(studentName[10]);

// Output:
// undefined

// How it works:
// Sahithya has indexes from 0 to 7.
// Index 10 does not exist.
// So JavaScript gives undefined.



// ✅ Correct Version

let studentNameValue = "Sahithya";

console.log(studentNameValue[2]);

// Output:
// h

// How it works:
// h is stored at index 2.
// So studentNameValue[2] gives h.



// =====================================
// 4. String Concatenation
// =====================================

let firstName = "Sahithya";
let lastName = "D";

let fullName = firstName + " " + lastName;

console.log(fullName);

// Output:
// Sahithya D

// How it works:
// The + operator joins strings.
// A space is added between firstName and lastName.



// ❌ Error Program

let first = "Sahithya";
let last = "D";

console.log(first + last);

// Output:
// SahithyaD

// How it works:
// The strings are joined directly.
// No space was added between them.



// ✅ Correct Version

let firstValue = "Sahithya";
let lastValue = "D";

console.log(firstValue + " " + lastValue);

// Output:
// Sahithya D

// How it works:
// " " adds a space between the two strings.



// =====================================
// 5. Template Literals
// =====================================

let personName = "Sahithya";
let age = 22;

console.log(`My name is ${personName} and I am ${age} years old.`);

// Output:
// My name is Sahithya and I am 22 years old.

// How it works:
// Template literals use backticks.
// ${} allows us to insert variables inside a string.



// ❌ Error Program

let userName = "Sahithya";
let userAge = 22;

console.log("My name is ${userName} and I am ${userAge} years old.");

// Output:
// My name is ${userName} and I am ${userAge} years old.

// How it works:
// ${} works only inside template literals.
// We used double quotes instead of backticks.
// So JavaScript treats ${userName} as normal text.



// ✅ Correct Version

let userNameValue = "Sahithya";
let userAgeValue = 22;

console.log(`My name is ${userNameValue} and I am ${userAgeValue} years old.`);

// Output:
// My name is Sahithya and I am 22 years old.

// How it works:
// Backticks create a template literal.
// ${} inserts the variable values into the string.



// =====================================
// 6. toUpperCase()
// =====================================

let wordUpper = "sahithya";

console.log(wordUpper.toUpperCase());

// Output:
// SAHITHYA

// How it works:
// toUpperCase() converts all letters to uppercase.



// ❌ Error Program

let upperText = "sahithya";

console.log(upperText.toUppercase());

// Output:
// TypeError: upperText.toUppercase is not a function

// How it works:
// JavaScript method names are case-sensitive.
// The correct method is toUpperCase().



// ✅ Correct Version

let upperValue = "sahithya";

console.log(upperValue.toUpperCase());

// Output:
// SAHITHYA

// How it works:
// toUpperCase() changes the letters to uppercase.



// =====================================
// 7. toLowerCase()
// =====================================

let wordLower = "SAHITHYA";

console.log(wordLower.toLowerCase());

// Output:
// sahithya

// How it works:
// toLowerCase() converts all letters to lowercase.



// ❌ Error Program

let lowerText = "SAHITHYA";

console.log(lowerText.tolowerCase());

// Output:
// TypeError: lowerText.tolowerCase is not a function

// How it works:
// JavaScript method names are case-sensitive.
// The correct method is toLowerCase().



// ✅ Correct Version

let lowerValue = "SAHITHYA";

console.log(lowerValue.toLowerCase());

// Output:
// sahithya

// How it works:
// toLowerCase() converts the letters to lowercase.



// =====================================
// 8. trim()
// =====================================

let user = "   Sahithya   ";

console.log(user.trim());

// Output:
// Sahithya

// How it works:
// trim() removes spaces from the beginning and end
// of the string.



// ❌ Error Program

let userText = "   Sahithya   ";

console.log(userText.trim);

// Output:
// [Function: trim]

// How it works:
// trim without () only refers to the function itself.
// It does not run the function.



// ✅ Correct Version

let userValue = "   Sahithya   ";

console.log(userValue.trim());

// Output:
// Sahithya

// How it works:
// trim() runs the method and removes
// spaces from the beginning and end.



// =====================================
// 9. includes()
// =====================================

let sentence = "Sahithya is learning JavaScript";

console.log(sentence.includes("JavaScript"));

// Output:
// true

// How it works:
// includes() checks whether the given text exists.
// JavaScript exists in the sentence, so it returns true.



// ❌ Error Program

let sentenceText = "Sahithya is learning JavaScript";

console.log(sentenceText.includes("Python"));

// Output:
// false

// How it works:
// Python does not exist in the sentence.
// So includes() returns false.



// ✅ Correct Version

let sentenceValue = "Sahithya is learning JavaScript";

console.log(sentenceValue.includes("Sahithya"));

// Output:
// true

// How it works:
// Sahithya exists in the string.
// So includes() returns true.



// =====================================
// 10. startsWith()
// =====================================

let greeting = "Hello Sahithya";

console.log(greeting.startsWith("Hello"));

// Output:
// true

// How it works:
// The string starts with Hello.
// So startsWith() returns true.



// ❌ Error Program

let greetingText = "Hello Sahithya";

console.log(greetingText.startsWith("Sahithya"));

// Output:
// false

// How it works:
// The string does not start with Sahithya.
// Sahithya appears later in the string.
// So the result is false.



// ✅ Correct Version

let greetingValue = "Hello Sahithya";

console.log(greetingValue.startsWith("Hello"));

// Output:
// true

// How it works:
// Hello is at the beginning of the string.
// So startsWith() returns true.



// =====================================
// 11. endsWith()
// =====================================

let sentenceEnd = "My name is Sahithya";

console.log(sentenceEnd.endsWith("Sahithya"));

// Output:
// true

// How it works:
// The string ends with Sahithya.
// So endsWith() returns true.



// ❌ Error Program

let sentenceEndText = "My name is Sahithya";

console.log(sentenceEndText.endsWith("name"));

// Output:
// false

// How it works:
// name is in the middle of the string, not at the end.
// So endsWith() returns false.



// ✅ Correct Version

let sentenceEndValue = "My name is Sahithya";

console.log(sentenceEndValue.endsWith("Sahithya"));

// Output:
// true

// How it works:
// Sahithya is at the end of the string.
// So endsWith() returns true.



// =====================================
// 12. indexOf()
// =====================================

let language = "JavaScript";

console.log(language.indexOf("Script"));

// Output:
// 4

// How it works:
// Script starts at index 4.
// So indexOf() returns 4.



// ❌ Error Program

let languageText = "JavaScript";

console.log(languageText.indexOf("Python"));

// Output:
// -1

// How it works:
// Python does not exist in the string.
// So indexOf() returns -1.



// ✅ Correct Version

let languageValue = "JavaScript";

console.log(languageValue.indexOf("Script"));

// Output:
// 4

// How it works:
// Script starts at index 4.
// So indexOf() returns 4.



// =====================================
// 13. charAt()
// =====================================

let nameText = "Sahithya";

console.log(nameText.charAt(2));

// Output:
// h

// How it works:
// charAt(2) returns the character at index 2.
// The character at index 2 is h.



// ❌ Error Program

let nameValue = "Sahithya";

console.log(nameValue.charAt(20));

// Output:
// empty string

// How it works:
// There is no character at index 20.
// charAt() returns an empty string.



// ✅ Correct Version

let nameData = "Sahithya";

console.log(nameData.charAt(2));

// Output:
// h

// How it works:
// h is at index 2.
// So charAt(2) returns h.



// =====================================
// 14. charCodeAt()
// =====================================

let letter = "A";

console.log(letter.charCodeAt(0));

// Output:
// 65

// How it works:
// charCodeAt() returns the Unicode value
// of the character at the given index.
// The Unicode value of A is 65.



// ❌ Error Program

let letterText = "A";

console.log(letterText.charCodeAt(5));

// Output:
// NaN

// How it works:
// There is no character at index 5.
// So charCodeAt() returns NaN.



// ✅ Correct Version

let letterValue = "A";

console.log(letterValue.charCodeAt(0));

// Output:
// 65

// How it works:
// A is at index 0.
// Its Unicode value is 65.



// =====================================
// 15. slice()
// =====================================

let message = "JavaScript";

console.log(message.slice(0, 4));

// Output:
// Java

// How it works:
// slice() takes characters from index 0
// up to, but not including, index 4.
// So the result is Java.



// ❌ Error Program

let messageText2 = "JavaScript";

console.log(messageText2.slice(10, 15));

// Output:
// empty string

// How it works:
// There are no characters in the requested range.
// So slice() returns an empty string.



// ✅ Correct Version

let messageValue = "JavaScript";

console.log(messageValue.slice(0, 4));

// Output:
// Java

// How it works:
// Characters from index 0 to index 3 are selected.
// So the result is Java.



// =====================================
// 16. substring()
// =====================================

let text = "JavaScript";

console.log(text.substring(0, 4));

// Output:
// Java

// How it works:
// substring() extracts characters from index 0
// up to, but not including, index 4.



// ❌ Error Program

let textValue = "JavaScript";

console.log(textValue.substring(20, 25));

// Output:
// empty string

// How it works:
// The requested starting position is outside the string.
// So substring() returns an empty string.



// ✅ Correct Version

let textData = "JavaScript";

console.log(textData.substring(0, 4));

// Output:
// Java

// How it works:
// substring() extracts Java from the string.



// =====================================
// 17. replace()
// =====================================

let sentenceReplace = "Sahithya likes Java";

console.log(sentenceReplace.replace("Java", "JavaScript"));

// Output:
// Sahithya likes JavaScript

// How it works:
// replace() replaces the first matching text.
// Java is replaced with JavaScript.



// ❌ Error Program

let sentenceReplaceText = "Sahithya likes Java";

console.log(sentenceReplaceText.replace("Python", "JavaScript"));

// Output:
// Sahithya likes Java

// How it works:
// Python does not exist in the string.
// So nothing is replaced.



// ✅ Correct Version

let sentenceReplaceValue = "Sahithya likes Java";

console.log(sentenceReplaceValue.replace("Java", "JavaScript"));

// Output:
// Sahithya likes JavaScript

// How it works:
// Java is found and replaced with JavaScript.



// =====================================
// 18. replaceAll()
// =====================================

let repeatedText = "Java is easy. Java is popular.";

console.log(repeatedText.replaceAll("Java", "JavaScript"));

// Output:
// JavaScript is easy. JavaScript is popular.

// How it works:
// replaceAll() replaces every matching occurrence.
// Both Java words are replaced.



// ❌ Error Program

let repeatedTextValue = "Java is easy. Java is popular.";

console.log(repeatedTextValue.replace("Java", "JavaScript"));

// Output:
// JavaScript is easy. Java is popular.

// How it works:
// replace() replaces only the first matching occurrence.
// The second Java remains unchanged.



// ✅ Correct Version

let repeatedTextCorrect = "Java is easy. Java is popular.";

console.log(repeatedTextCorrect.replaceAll("Java", "JavaScript"));

// Output:
// JavaScript is easy. JavaScript is popular.

// How it works:
// replaceAll() replaces every matching occurrence.



// =====================================
// 19. split()
// =====================================

let fruits = "Apple,Banana,Mango";

console.log(fruits.split(","));

// Output:
// [ 'Apple', 'Banana', 'Mango' ]

// How it works:
// split(",") breaks the string wherever a comma appears.
// The result is an array.



// ❌ Error Program

let fruitText = "Apple,Banana,Mango";

console.log(fruitText.split(" "));

// Output:
// [ 'Apple,Banana,Mango' ]

// How it works:
// There are no spaces in the string.
// So nothing is split.



// ✅ Correct Version

let fruitValue = "Apple,Banana,Mango";

console.log(fruitValue.split(","));

// Output:
// [ 'Apple', 'Banana', 'Mango' ]

// How it works:
// The comma is used as the separator.
// So the string is divided into three array items.



// =====================================
// 20. concat()
// =====================================

let firstPart = "Sahithya";
let secondPart = "D";

console.log(firstPart.concat(" ", secondPart));

// Output:
// Sahithya D

// How it works:
// concat() joins the strings together.
// A space is added between them.



// ❌ Error Program

let firstText = "Sahithya";
let secondText = "D";

console.log(firstText.concat());

// Output:
// Sahithya

// How it works:
// concat() was used without another string.
// So it simply returns the original string.



// ✅ Correct Version

let firstValueText = "Sahithya";
let secondValueText = "D";

console.log(firstValueText.concat(" ", secondValueText));

// Output:
// Sahithya D

// How it works:
// concat() joins Sahithya, a space, and D.



// =====================================
// 21. repeat()
// =====================================

let wordRepeat = "Hi Sahithya ";

console.log(wordRepeat.repeat(3));

// Output:
// Hi Sahithya Hi Sahithya Hi Sahithya

// How it works:
// repeat(3) repeats the string three times.



// ❌ Error Program

let wordRepeatText = "Hi Sahithya ";

console.log(wordRepeatText.repeat(-1));

// Output:
// RangeError: Invalid count value

// How it works:
// repeat() cannot use a negative number.
// So JavaScript gives a RangeError.



// ✅ Correct Version

let wordRepeatValue = "Hi Sahithya ";

console.log(wordRepeatValue.repeat(3));

// Output:
// Hi Sahithya Hi Sahithya Hi Sahithya

// How it works:
// The string is repeated three times.



// =====================================
// 22. padStart()
// =====================================

let number = "5";

console.log(number.padStart(3, "0"));

// Output:
// 005

// How it works:
// The string length should become 3.
// Two zeros are added to the beginning.



// ❌ Error Program

let numberText = "5";

console.log(numberText.padStart(2, "0"));

// Output:
// 05

// How it works:
// This is not actually a JavaScript error.
// The target length is only 2,
// so only one zero is added.



// ✅ Correct Version

let numberValue = "5";

console.log(numberValue.padStart(3, "0"));

// Output:
// 005

// How it works:
// Two zeros are added until the string reaches length 3.



// =====================================
// 23. padEnd()
// =====================================

let code = "5";

console.log(code.padEnd(3, "0"));

// Output:
// 500

// How it works:
// Two zeros are added to the end.
// The final string has length 3.



// ❌ Error Program

let codeText = "5";

console.log(codeText.padEnd(1, "0"));

// Output:
// 5

// How it works:
// The target length is already reached.
// So nothing is added.



// ✅ Correct Version

let codeValue = "5";

console.log(codeValue.padEnd(3, "0"));

// Output:
// 500

// How it works:
// Zeros are added to the end until the string reaches length 3.



// =====================================
// 24. String Comparison
// =====================================

let firstString = "Sahithya";
let secondString = "Sahithya";

console.log(firstString === secondString);

// Output:
// true

// How it works:
// Both strings contain exactly the same text.
// So === returns true.



// ❌ Error Program

let stringOne = "Sahithya";
let stringTwo = "sahithya";

console.log(stringOne === stringTwo);

// Output:
// false

// How it works:
// String comparison is case-sensitive.
// Sahithya and sahithya are different strings.



// ✅ Correct Version

let stringFirst = "Sahithya";
let stringSecond = "Sahithya";

console.log(stringFirst === stringSecond);

// Output:
// true

// How it works:
// Both strings have the same characters and same case.
// So === returns true.



// =====================================
// 25. Escape Characters
// =====================================

let quote = "Sahithya said \"Hello\"";

console.log(quote);

// Output:
// Sahithya said "Hello"

// How it works:
// \" allows us to use a double quote inside
// a string created with double quotes.



// ❌ Error Program

let quoteText = "Sahithya said "Hello"";

console.log(quoteText);

// Output:
// SyntaxError: Unexpected identifier 'Hello'

// How it works:
// The second double quote ends the string early.
// JavaScript cannot understand the remaining text.



// ✅ Correct Version

let quoteValue = "Sahithya said \"Hello\"";

console.log(quoteValue);

// Output:
// Sahithya said "Hello"

// How it works:
// The backslash escapes the inner double quotes.
// So JavaScript treats them as part of the string.



// =====================================
// 26. String Immutability
// =====================================

let originalName = "Sahithya";

console.log(originalName);

// Output:
// Sahithya

// How it works:
// Strings cannot be changed directly.
// String methods create new strings instead of changing
// the original string.



// ❌ Error Program

let fixedName = "Sahithya";

fixedName[0] = "R";

console.log(fixedName);

// Output:
// Sahithya

// How it works:
// We try to change the first character directly.
// JavaScript strings are immutable.
// So the original string remains Sahithya.



// ✅ Correct Version

let changeName = "Sahithya";

changeName = "Rahithya";

console.log(changeName);

// Output:
// Rahithya

// How it works:
// Instead of changing one character,
// we assign a completely new string.
// So the variable now contains Rahithya.
