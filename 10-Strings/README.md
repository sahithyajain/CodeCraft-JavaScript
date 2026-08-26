# 🔤 JavaScript Strings

## 🌟 What is a String?

A **string** is a sequence of characters used to store text.

```javascript
let name = "Sahithya";
```

Strings can be written using:

```javascript
"Hello"
'Hello'
`Hello`
```

---

# 📚 String Concepts

## 1. Creating a String

A string can be created using single quotes, double quotes, or backticks.

```javascript
let name = "Rahul";
let city = 'Bangalore';
let country = `India`;
```

---

## 2. String Length

`length` tells us how many characters are in a string.

```javascript
let name = "Rahul";

console.log(name.length);
```

Output:

```text
5
```

---

## 3. Accessing Characters

We can access individual characters using their index.

```javascript
let name = "Rahul";

console.log(name[0]);
console.log(name[1]);
```

Output:

```text
R
a
```

---

## 4. String Concatenation

Concatenation means joining strings together.

```javascript
let firstName = "Rahul";
let lastName = "Kumar";

let fullName = firstName + " " + lastName;

console.log(fullName);
```

Output:

```text
Rahul Kumar
```

---

## 5. Template Literals

Template literals use backticks `` ` ` `` and allow variables to be inserted using `${}`.

```javascript
let name = "Rahul";
let age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output:

```text
My name is Rahul and I am 20 years old.
```

---

## 6. `toUpperCase()`

`toUpperCase()` converts a string to uppercase.

```javascript
let name = "rahul";

console.log(name.toUpperCase());
```

Output:

```text
RAHUL
```

---

## 7. `toLowerCase()`

`toLowerCase()` converts a string to lowercase.

```javascript
let name = "RAHUL";

console.log(name.toLowerCase());
```

Output:

```text
rahul
```

---

## 8. `trim()`

`trim()` removes spaces from the beginning and end of a string.

```javascript
let name = "  Rahul  ";

console.log(name.trim());
```

Output:

```text
Rahul
```

---

## 9. `includes()`

`includes()` checks whether a string contains specific text.

```javascript
let message = "JavaScript is easy";

console.log(message.includes("JavaScript"));
```

Output:

```text
true
```

---

## 10. `startsWith()`

`startsWith()` checks whether a string starts with specific text.

```javascript
let message = "JavaScript is easy";

console.log(message.startsWith("JavaScript"));
```

Output:

```text
true
```

---

## 11. `endsWith()`

`endsWith()` checks whether a string ends with specific text.

```javascript
let message = "JavaScript is easy";

console.log(message.endsWith("easy"));
```

Output:

```text
true
```

---

## 12. `indexOf()`

`indexOf()` finds the position of specific text.

```javascript
let message = "JavaScript";

console.log(message.indexOf("Script"));
```

Output:

```text
4
```

If the text is not found, it returns `-1`.

---

## 13. `charAt()`

`charAt()` returns the character at a specific index.

```javascript
let name = "Rahul";

console.log(name.charAt(2));
```

Output:

```text
h
```

---

## 14. `charCodeAt()`

`charCodeAt()` returns the Unicode value of a character.

```javascript
let name = "ABC";

console.log(name.charCodeAt(0));
```

Output:

```text
65
```

---

## 15. `slice()`

`slice()` extracts part of a string.

```javascript
let message = "JavaScript";

console.log(message.slice(0, 4));
```

Output:

```text
Java
```

---

## 16. `substring()`

`substring()` extracts characters between two positions.

```javascript
let message = "JavaScript";

console.log(message.substring(0, 4));
```

Output:

```text
Java
```

---

## 17. `replace()`

`replace()` replaces the first matching text.

```javascript
let message = "I like Java";

console.log(message.replace("Java", "JavaScript"));
```

Output:

```text
I like JavaScript
```

---

## 18. `replaceAll()`

`replaceAll()` replaces all matching text.

```javascript
let message = "Java is easy. Java is popular.";

console.log(message.replaceAll("Java", "JavaScript"));
```

Output:

```text
JavaScript is easy. JavaScript is popular.
```

---

## 19. `split()`

`split()` converts a string into an array.

```javascript
let fruits = "Apple,Banana,Mango";

console.log(fruits.split(","));
```

Output:

```text
[ "Apple", "Banana", "Mango" ]
```

---

## 20. `concat()`

`concat()` joins strings together.

```javascript
let firstName = "Rahul";
let lastName = "Kumar";

console.log(firstName.concat(" ", lastName));
```

Output:

```text
Rahul Kumar
```

---

## 21. `repeat()`

`repeat()` repeats a string a specified number of times.

```javascript
let word = "Hi ";

console.log(word.repeat(3));
```

Output:

```text
Hi Hi Hi
```

---

## 22. `padStart()`

`padStart()` adds characters to the beginning of a string until it reaches a specified length.

```javascript
let number = "5";

console.log(number.padStart(3, "0"));
```

Output:

```text
005
```

---

## 23. `padEnd()`

`padEnd()` adds characters to the end of a string until it reaches a specified length.

```javascript
let number = "5";

console.log(number.padEnd(3, "0"));
```

Output:

```text
500
```

---

## 24. String Comparison

Strings can be compared using comparison operators.

```javascript
let a = "Apple";
let b = "Apple";

console.log(a === b);
```

Output:

```text
true
```

---

## 25. Escape Characters

Escape characters allow us to include special characters inside strings.

```javascript
let message = "He said \"Hello\"";

console.log(message);
```

Output:

```text
He said "Hello"
```

Common escape characters:

```text
\n → New line
\t → Tab
\" → Double quote
\' → Single quote
\\ → Backslash
```

---

## 26. String Immutability

Strings cannot be changed directly.

```javascript
let name = "Rahul";

name[0] = "S";

console.log(name);
```

Output:

```text
Rahul
```

The original string does not change.

---

# ⭐ Quick Revision

```text
String
→ Stores text

length
→ Counts characters

Index
→ Position of a character

Concatenation
→ Joins strings

Template Literals
→ Allows variables inside strings

toUpperCase()
→ Converts to uppercase

toLowerCase()
→ Converts to lowercase

trim()
→ Removes spaces from the beginning and end

includes()
→ Checks whether text exists

startsWith()
→ Checks whether a string starts with specific text

endsWith()
→ Checks whether a string ends with specific text

indexOf()
→ Finds the position of text

charAt()
→ Gets a character at an index

charCodeAt()
→ Gets the Unicode value of a character

slice()
→ Extracts part of a string

substring()
→ Extracts part of a string

replace()
→ Replaces the first matching text

replaceAll()
→ Replaces all matching text

split()
→ Converts a string into an array

concat()
→ Joins strings

repeat()
→ Repeats a string

padStart()
→ Adds characters to the beginning

padEnd()
→ Adds characters to the end

String Comparison
→ Compares strings

Escape Characters
→ Adds special characters to strings

String Immutability
→ Strings cannot be changed directly
```

---

# 🎤 Interview Questions

1. What is a string?
2. How do you create a string?
3. What does `length` do?
4. How do you access a character in a string?
5. What is string concatenation?
6. What are template literals?
7. What does `toUpperCase()` do?
8. What does `toLowerCase()` do?
9. What does `trim()` do?
10. What does `includes()` do?
11. What is the difference between `startsWith()` and `endsWith()`?
12. What does `indexOf()` return when text is not found?
13. What does `charAt()` do?
14. What does `charCodeAt()` do?
15. What is the difference between `slice()` and `substring()`?
16. What does `replace()` do?
17. What does `replaceAll()` do?
18. What does `split()` do?
19. What does `concat()` do?
20. What does `repeat()` do?
21. What do `padStart()` and `padEnd()` do?
22. What are escape characters?
23. What does string immutability mean?
