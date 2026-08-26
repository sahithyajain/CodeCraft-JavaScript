// 📦 JavaScript Arrays


// =====================================
// 1. Creating an Array
// =====================================

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

// Output:
// [ 'Apple', 'Banana', 'Mango' ]

// How it works:
// fruits is an array.
// It stores three values: Apple, Banana, and Mango.
// console.log() prints the complete array.



// ❌ Error Program

let fruitList = ["Apple", "Banana", "Mango"];

console.log(fruitList[5]);

// Output:
// undefined

// How it works:
// The array has only three elements.
// Their indexes are 0, 1, and 2.
// There is no element at index 5.
// So JavaScript gives undefined.



// ✅ Correct Version

let fruitNames = ["Apple", "Banana", "Mango"];

console.log(fruitNames[1]);

// Output:
// Banana

// How it works:
// Banana is at index 1.
// So fruitNames[1] gives Banana.



// =====================================
// 2. Array Index
// =====================================

let students = ["Rahul", "Priya", "Aman"];

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

// Output:
// Rahul
// Priya
// Aman

// How it works:
// Array indexes start from 0.
// Rahul is at index 0.
// Priya is at index 1.
// Aman is at index 2.



// ❌ Error Program

let studentList = ["Rahul", "Priya", "Aman"];

console.log(studentList[3]);

// Output:
// undefined

// How it works:
// The last index is 2.
// There is no element at index 3.
// So JavaScript gives undefined.



// ✅ Correct Version

let studentNames = ["Rahul", "Priya", "Aman"];

console.log(studentNames[2]);

// Output:
// Aman

// How it works:
// Aman is stored at index 2.
// So studentNames[2] gives Aman.



// =====================================
// 3. Changing an Array Element
// =====================================

let colors = ["Red", "Blue", "Green"];

colors[1] = "Yellow";

console.log(colors);

// Output:
// [ 'Red', 'Yellow', 'Green' ]

// How it works:
// Blue is at index 1.
// We replace Blue with Yellow.
// So the array now contains Red, Yellow, and Green.



// ❌ Error Program

let colorList = ["Red", "Blue", "Green"];

console.log(colorList[5]);

// Output:
// undefined

// How it works:
// The array has only indexes 0, 1, and 2.
// Index 5 does not exist.
// So JavaScript gives undefined.



// ✅ Correct Version

let colorNames = ["Red", "Blue", "Green"];

colorNames[1] = "Yellow";

console.log(colorNames);

// Output:
// [ 'Red', 'Yellow', 'Green' ]

// How it works:
// The value at index 1 was Blue.
// We change it to Yellow.
// So the array is updated.



// =====================================
// 4. length
// =====================================

let subjects = ["Math", "Science", "English"];

console.log(subjects.length);

// Output:
// 3

// How it works:
// The array contains three elements.
// So subjects.length gives 3.



// ❌ Error Program

let subjectList = ["Math", "Science", "English"];

console.log(subjectList[subjectList.length]);

// Output:
// undefined

// How it works:
// length is 3.
// But the last index is 2 because indexes start from 0.
// So subjectList[3] does not exist.



// ✅ Correct Version

let subjectNames = ["Math", "Science", "English"];

console.log(subjectNames[subjectNames.length - 1]);

// Output:
// English

// How it works:
// length is 3.
// 3 - 1 gives 2.
// Index 2 contains English.
// So the last element is printed.



// =====================================
// 5. push()
// =====================================

let animals = ["Dog", "Cat"];

animals.push("Lion");

console.log(animals);

// Output:
// [ 'Dog', 'Cat', 'Lion' ]

// How it works:
// push() adds a new item to the end of the array.
// Lion is added after Cat.



// ❌ Error Program

let animalList = ["Dog", "Cat"];

animalList.push();

console.log(animalList);

// Output:
// [ 'Dog', 'Cat', undefined ]

// How it works:
// push() is used without giving it a value.
// So undefined is added to the array.



// ✅ Correct Version

let animalNames = ["Dog", "Cat"];

animalNames.push("Lion");

console.log(animalNames);

// Output:
// [ 'Dog', 'Cat', 'Lion' ]

// How it works:
// We give push() the value Lion.
// So Lion is added to the end.



// =====================================
// 6. pop()
// =====================================

let cars = ["BMW", "Audi", "Toyota"];

cars.pop();

console.log(cars);

// Output:
// [ 'BMW', 'Audi' ]

// How it works:
// pop() removes the last element.
// Toyota is the last element, so it is removed.



// ❌ Error Program

let carList = [];

carList.pop();

console.log(carList);

// Output:
// []

// How it works:
// The array is empty.
// There is nothing to remove.
// So the array remains empty.



// ✅ Correct Version

let carNames = ["BMW", "Audi", "Toyota"];

carNames.pop();

console.log(carNames);

// Output:
// [ 'BMW', 'Audi' ]

// How it works:
// Toyota is the last element.
// pop() removes Toyota from the array.



// =====================================
// 7. unshift()
// =====================================

let sports = ["Cricket", "Football"];

sports.unshift("Tennis");

console.log(sports);

// Output:
// [ 'Tennis', 'Cricket', 'Football' ]

// How it works:
// unshift() adds a new item to the beginning.
// Tennis is added before Cricket.



// ❌ Error Program

let sportList = ["Cricket", "Football"];

sportList.unshift();

console.log(sportList);

// Output:
// [ 'Cricket', 'Football', undefined ]

// How it works:
// unshift() is used without giving it a value.
// So undefined is added to the array.



// ✅ Correct Version

let sportNames = ["Cricket", "Football"];

sportNames.unshift("Tennis");

console.log(sportNames);

// Output:
// [ 'Tennis', 'Cricket', 'Football' ]

// How it works:
// We give unshift() the value Tennis.
// So Tennis is added to the beginning.



// =====================================
// 8. shift()
// =====================================

let cities = ["Bangalore", "Mumbai", "Delhi"];

cities.shift();

console.log(cities);

// Output:
// [ 'Mumbai', 'Delhi' ]

// How it works:
// shift() removes the first element.
// Bangalore is the first element, so it is removed.



// ❌ Error Program

let cityList = [];

cityList.shift();

console.log(cityList);

// Output:
// []

// How it works:
// The array is empty.
// There is no first element to remove.
// So the array remains empty.



// ✅ Correct Version

let cityNames = ["Bangalore", "Mumbai", "Delhi"];

cityNames.shift();

console.log(cityNames);

// Output:
// [ 'Mumbai', 'Delhi' ]

// How it works:
// Bangalore is the first element.
// shift() removes it from the array.



// =====================================
// 9. indexOf()
// =====================================

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.indexOf("Banana"));

// Output:
// 1

// How it works:
// Banana is stored at index 1.
// indexOf() returns the position of Banana.



// ❌ Error Program

let fruitItems = ["Apple", "Banana", "Mango"];

console.log(fruitItems.indexOf("Orange"));

// Output:
// -1

// How it works:
// Orange does not exist in the array.
// So indexOf() returns -1.



// ✅ Correct Version

let fruitNamesList = ["Apple", "Banana", "Mango"];

console.log(fruitNamesList.indexOf("Mango"));

// Output:
// 2

// How it works:
// Mango is stored at index 2.
// So indexOf() returns 2.



// =====================================
// 10. includes()
// =====================================

let foods = ["Rice", "Pizza", "Burger"];

console.log(foods.includes("Pizza"));

// Output:
// true

// How it works:
// Pizza exists in the array.
// So includes() returns true.



// ❌ Error Program

let foodList = ["Rice", "Pizza", "Burger"];

console.log(foodList.includes("Pasta"));

// Output:
// false

// How it works:
// Pasta does not exist in the array.
// So includes() returns false.



// ✅ Correct Version

let foodNames = ["Rice", "Pizza", "Burger"];

console.log(foodNames.includes("Burger"));

// Output:
// true

// How it works:
// Burger exists in the array.
// So includes() returns true.



// =====================================
// 11. find()
// =====================================

let numbers = [10, 20, 30, 40];

let result = numbers.find(function(number) {
    return number > 20;
});

console.log(result);

// Output:
// 30

// How it works:
// find() checks the items one by one.
// 30 is the first number greater than 20.
// So find() returns 30.



// ❌ Error Program

let numberList = [10, 20, 30, 40];

let found = numberList.find(function(number) {
    return number > 50;
});

console.log(found);

// Output:
// undefined

// How it works:
// No number is greater than 50.
// So find() cannot find a matching item.
// It returns undefined.



// ✅ Correct Version

let numberValues = [10, 20, 30, 40];

let foundNumber = numberValues.find(function(number) {
    return number > 20;
});

console.log(foundNumber);

// Output:
// 30

// How it works:
// 30 is the first number greater than 20.
// So find() returns 30.



// =====================================
// 12. findIndex()
// =====================================

let marks = [40, 50, 70, 90];

let index = marks.findIndex(function(mark) {
    return mark > 60;
});

console.log(index);

// Output:
// 2

// How it works:
// 70 is the first mark greater than 60.
// 70 is at index 2.
// So findIndex() returns 2.



// ❌ Error Program

let markList = [40, 50, 70, 90];

let markIndex = markList.findIndex(function(mark) {
    return mark > 100;
});

console.log(markIndex);

// Output:
// -1

// How it works:
// No mark is greater than 100.
// So findIndex() returns -1.



// ✅ Correct Version

let markValues = [40, 50, 70, 90];

let correctIndex = markValues.findIndex(function(mark) {
    return mark > 60;
});

console.log(correctIndex);

// Output:
// 2

// How it works:
// 70 is the first mark greater than 60.
// Its index is 2.



// =====================================
// 13. slice()
// =====================================

let colorsList = ["Red", "Blue", "Green", "Yellow"];

let selectedColors = colorsList.slice(1, 3);

console.log(selectedColors);

// Output:
// [ 'Blue', 'Green' ]

// How it works:
// slice() takes items from index 1 up to, but not including, index 3.
// So Blue and Green are copied into a new array.



// ❌ Error Program

let colorItems = ["Red", "Blue", "Green", "Yellow"];

colorItems.slice(1, 3);

console.log(colorItems);

// Output:
// [ 'Red', 'Blue', 'Green', 'Yellow' ]

// How it works:
// slice() creates a new array.
// We did not store the result anywhere.
// So the original array remains unchanged.



// ✅ Correct Version

let colorValues = ["Red", "Blue", "Green", "Yellow"];

let selected = colorValues.slice(1, 3);

console.log(selected);

// Output:
// [ 'Blue', 'Green' ]

// How it works:
// The result of slice() is stored in selected.
// So selected contains Blue and Green.



// =====================================
// 14. splice()
// =====================================

let names = ["Rahul", "Priya", "Aman"];

names.splice(1, 1);

console.log(names);

// Output:
// [ 'Rahul', 'Aman' ]

// How it works:
// splice(1, 1) starts at index 1.
// It removes 1 item.
// So Priya is removed.



// ❌ Error Program

let nameList = ["Rahul", "Priya", "Aman"];

nameList.splice(5, 1);

console.log(nameList);

// Output:
// [ 'Rahul', 'Priya', 'Aman' ]

// How it works:
// Index 5 does not exist.
// So nothing is removed.



// ✅ Correct Version

let nameValues = ["Rahul", "Priya", "Aman"];

nameValues.splice(1, 1);

console.log(nameValues);

// Output:
// [ 'Rahul', 'Aman' ]

// How it works:
// Index 1 contains Priya.
// splice() removes Priya from the original array.



// =====================================
// 15. concat()
// =====================================

let boys = ["Rahul", "Aman"];
let girls = ["Priya", "Sneha"];

let studentsList = boys.concat(girls);

console.log(studentsList);

// Output:
// [ 'Rahul', 'Aman', 'Priya', 'Sneha' ]

// How it works:
// concat() joins the boys and girls arrays.
// A new array containing all four names is created.



// ❌ Error Program

let firstList = ["A", "B"];
let secondList = ["C", "D"];

console.log(firstList);

// Output:
// [ 'A', 'B' ]

// How it works:
// We created the second array, but we did not combine it.
// So printing firstList only shows A and B.



// ✅ Correct Version

let firstNames = ["A", "B"];
let secondNames = ["C", "D"];

let combinedNames = firstNames.concat(secondNames);

console.log(combinedNames);

// Output:
// [ 'A', 'B', 'C', 'D' ]

// How it works:
// concat() combines both arrays into one new array.



// =====================================
// 16. join()
// =====================================

let words = ["JavaScript", "is", "fun"];

console.log(words.join(" "));

// Output:
// JavaScript is fun

// How it works:
// join(" ") combines the array items using a space.
// The result becomes one string.



// ❌ Error Program

let wordList = ["JavaScript", "is", "fun"];

console.log(wordList.join());

// Output:
// JavaScript,is,fun

// How it works:
// When no separator is given,
// join() uses a comma by default.



// ✅ Correct Version

let wordValues = ["JavaScript", "is", "fun"];

console.log(wordValues.join(" "));

// Output:
// JavaScript is fun

// How it works:
// We give join() a space as the separator.
// So the words are joined with spaces.



// =====================================
// 17. reverse()
// =====================================

let numbersList = [1, 2, 3, 4];

numbersList.reverse();

console.log(numbersList);

// Output:
// [ 4, 3, 2, 1 ]

// How it works:
// reverse() changes the order of the original array.
// The first item becomes the last.



// ❌ Error Program

let numberItems = [1, 2, 3, 4];

let reversed = numberItems.reverse();

console.log(numberItems);

// Output:
// [ 4, 3, 2, 1 ]

// How it works:
// reverse() changes the original array.
// It does not create an unchanged copy.



// ✅ Correct Version

let numberValuesList = [1, 2, 3, 4];

numberValuesList.reverse();

console.log(numberValuesList);

// Output:
// [ 4, 3, 2, 1 ]

// How it works:
// reverse() changes the original array.
// So the numbers are printed in reverse order.



// =====================================
// 18. sort()
// =====================================

let fruitsList2 = ["Mango", "Apple", "Banana"];

fruitsList2.sort();

console.log(fruitsList2);

// Output:
// [ 'Apple', 'Banana', 'Mango' ]

// How it works:
// sort() arranges the strings alphabetically.



// ❌ Error Program

let numbersToSort = [10, 2, 5, 20];

numbersToSort.sort();

console.log(numbersToSort);

// Output:
// [ 10, 2, 20, 5 ]

// How it works:
// By default, sort() treats numbers like strings.
// So the result may not be numerical order.



// ✅ Correct Version

let sortedNumbers = [10, 2, 5, 20];

sortedNumbers.sort(function(a, b) {
    return a - b;
});

console.log(sortedNumbers);

// Output:
// [ 2, 5, 10, 20 ]

// How it works:
// a - b tells JavaScript to compare the numbers numerically.
// So the numbers are sorted from smallest to largest.



// =====================================
// 19. for Loop
// =====================================

let subjectsList2 = ["Math", "Science", "English"];

for (let i = 0; i < subjectsList2.length; i++) {
    console.log(subjectsList2[i]);
}

// Output:
// Math
// Science
// English

// How it works:
// The loop starts at index 0.
// It continues while i is smaller than the array length.
// Each time, it prints the item at index i.



// ❌ Error Program

let subjectsItems = ["Math", "Science", "English"];

for (let i = 0; i <= subjectsItems.length; i++) {
    console.log(subjectsItems[i]);
}

// Output:
// Math
// Science
// English
// undefined

// How it works:
// The last valid index is length - 1.
// Using <= allows i to become 3.
// There is no item at index 3.
// So JavaScript prints undefined.



// ✅ Correct Version

let subjectValues = ["Math", "Science", "English"];

for (let i = 0; i < subjectValues.length; i++) {
    console.log(subjectValues[i]);
}

// Output:
// Math
// Science
// English

// How it works:
// We use < instead of <=.
// So the loop stops before reaching an invalid index.



// =====================================
// 20. for...of
// =====================================

let animalsList = ["Dog", "Cat", "Lion"];

for (let animal of animalsList) {
    console.log(animal);
}

// Output:
// Dog
// Cat
// Lion

// How it works:
// for...of gives each value directly.
// We do not need to use an index.



// ❌ Error Program

let animalValues = ["Dog", "Cat", "Lion"];

for (let i of animalValues) {
    console.log(animalValues[i]);
}

// Output:
// undefined
// undefined
// undefined

// How it works:
// for...of gives the actual values: Dog, Cat, and Lion.
// We then try to use those values as indexes.
// Those are not valid indexes.
// So JavaScript gives undefined.



// ✅ Correct Version

let animalNamesList = ["Dog", "Cat", "Lion"];

for (let animal of animalNamesList) {
    console.log(animal);
}

// Output:
// Dog
// Cat
// Lion

// How it works:
// for...of directly gives each array value.
// So we can print the value directly.



// =====================================
// 21. forEach()
// =====================================

let cityNamesList = ["Bangalore", "Mumbai", "Delhi"];

cityNamesList.forEach(function(city) {
    console.log(city);
});

// Output:
// Bangalore
// Mumbai
// Delhi

// How it works:
// forEach() runs the function once for every array item.
// So each city is printed.



// ❌ Error Program

let citiesItems = ["Bangalore", "Mumbai", "Delhi"];

citiesItems.forEach(function(city) {
    console.log(city);
});

console.log(city);

// Output:
// Bangalore
// Mumbai
// Delhi
// ReferenceError: city is not defined

// How it works:
// city exists only inside the function used by forEach().
// We try to use city outside that function.
// So JavaScript gives a ReferenceError.



// ✅ Correct Version

let cityValues = ["Bangalore", "Mumbai", "Delhi"];

cityValues.forEach(function(city) {
    console.log(city);
});

// Output:
// Bangalore
// Mumbai
// Delhi

// How it works:
// city is used inside the function where it exists.
// forEach() runs that function for every city.



// =====================================
// 22. map()
// =====================================

let numbersForMap = [1, 2, 3];

let doubledNumbers = numbersForMap.map(function(number) {
    return number * 2;
});

console.log(doubledNumbers);

// Output:
// [ 2, 4, 6 ]

// How it works:
// map() takes every number.
// It multiplies each number by 2.
// Then it creates a new array with the results.



// ❌ Error Program

let numbersMapError = [1, 2, 3];

let doubledError = numbersMapError.map(function(number) {
    console.log(number * 2);
});

console.log(doubledError);

// Output:
// 2
// 4
// 6
// [ undefined, undefined, undefined ]

// How it works:
// map() needs the function to return a value.
// We only print the result and do not return it.
// So the new array contains undefined values.



// ✅ Correct Version

let numbersMapCorrect = [1, 2, 3];

let doubledCorrect = numbersMapCorrect.map(function(number) {
    return number * 2;
});

console.log(doubledCorrect);

// Output:
// [ 2, 4, 6 ]

// How it works:
// The function returns the doubled value.
// map() stores those returned values in a new array.



// =====================================
// 23. filter()
// =====================================

let ages = [12, 18, 25, 15, 30];

let adults = ages.filter(function(age) {
    return age >= 18;
});

console.log(adults);

// Output:
// [ 18, 25, 30 ]

// How it works:
// filter() checks every age.
// It keeps only ages that are 18 or above.



// ❌ Error Program

let ageList = [12, 18, 25, 15, 30];

let adultList = ageList.filter(function(age) {
    return age > 100;
});

console.log(adultList);

// Output:
// []

// How it works:
// No age is greater than 100.
// So filter() returns an empty array.



// ✅ Correct Version

let ageValues = [12, 18, 25, 15, 30];

let adultValues = ageValues.filter(function(age) {
    return age >= 18;
});

console.log(adultValues);

// Output:
// [ 18, 25, 30 ]

// How it works:
// filter() keeps the values that satisfy the condition.
// So 18, 25, and 30 are kept.



// =====================================
// 24. some()
// =====================================

let marksList = [40, 50, 75, 30];

let hasHighMark = marksList.some(function(mark) {
    return mark >= 70;
});

console.log(hasHighMark);

// Output:
// true

// How it works:
// some() checks whether at least one item matches.
// 75 is greater than or equal to 70.
// So the result is true.



// ❌ Error Program

let markValuesList = [40, 50, 60, 30];

let hasHigh = markValuesList.some(function(mark) {
    return mark >= 70;
});

console.log(hasHigh);

// Output:
// false

// How it works:
// No mark is 70 or above.
// So some() returns false.



// ✅ Correct Version

let marksValues = [40, 50, 75, 30];

let hasHighMarks = marksValues.some(function(mark) {
    return mark >= 70;
});

console.log(hasHighMarks);

// Output:
// true

// How it works:
// 75 satisfies the condition.
// So some() returns true.



// =====================================
// 25. every()
// =====================================

let scores = [80, 90, 70, 85];

let allPassed = scores.every(function(score) {
    return score >= 35;
});

console.log(allPassed);

// Output:
// true

// How it works:
// every() checks all items.
// Every score is 35 or above.
// So the result is true.



// ❌ Error Program

let scoreList = [80, 90, 20, 85];

let allGood = scoreList.every(function(score) {
    return score >= 35;
});

console.log(allGood);

// Output:
// false

// How it works:
// 20 is below 35.
// So not every item satisfies the condition.
// Therefore, every() returns false.



// ✅ Correct Version

let scoreValues = [80, 90, 70, 85];

let allScoresGood = scoreValues.every(function(score) {
    return score >= 35;
});

console.log(allScoresGood);

// Output:
// true

// How it works:
// All scores are 35 or above.
// So every() returns true.



// =====================================
// 26. reduce()
// =====================================

let prices = [100, 200, 300];

let total = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);

console.log(total);

// Output:
// 600

// How it works:
// reduce() combines all values into one result.
// 100 + 200 + 300 = 600.
// So total becomes 600.



// ❌ Error Program

let priceList = [100, 200, 300];

let wrongTotal = priceList.reduce(function(sum, price) {
    return sum;
}, 0);

console.log(wrongTotal);

// Output:
// 0

// How it works:
// The function returns sum without adding price.
// So the value never increases.
// The final result remains 0.



// ✅ Correct Version

let priceValues = [100, 200, 300];

let correctTotal = priceValues.reduce(function(sum, price) {
    return sum + price;
}, 0);

console.log(correctTotal);

// Output:
// 600

// How it works:
// Each price is added to sum.
// The final result is 600.



// =====================================
// 27. Array.isArray()
// =====================================

let data = ["Apple", "Banana"];

console.log(Array.isArray(data));

// Output:
// true

// How it works:
// data is an array.
// So Array.isArray() returns true.



// ❌ Error Program

let value = "Apple";

console.log(Array.isArray(value));

// Output:
// false

// How it works:
// value contains a string, not an array.
// So Array.isArray() returns false.



// ✅ Correct Version

let items = ["Apple", "Banana"];

console.log(Array.isArray(items));

// Output:
// true

// How it works:
// items is an array.
// So Array.isArray() returns true.



// =====================================
// 28. Nested Arrays
// =====================================

let matrix = [
    [1, 2],
    [3, 4]
];

console.log(matrix[0][1]);

// Output:
// 2

// How it works:
// matrix[0] gives the first inner array: [1, 2].
// [1, 2][1] gives 2.
// So the result is 2.



// ❌ Error Program

let numbersMatrix = [
    [1, 2],
    [3, 4]
];

console.log(numbersMatrix[2][0]);

// Output:
// TypeError: Cannot read properties of undefined

// How it works:
// There is no inner array at index 2.
// So numbersMatrix[2] is undefined.
// JavaScript cannot access [0] from undefined.



// ✅ Correct Version

let numberMatrix = [
    [1, 2],
    [3, 4]
];

console.log(numberMatrix[1][0]);

// Output:
// 3

// How it works:
// numberMatrix[1] gives [3, 4].
// Index 0 of that array is 3.
// So the result is 3.



// =====================================
// 29. Array Destructuring
// =====================================

let fruitsForDestructuring = ["Apple", "Banana", "Mango"];

let [first, second, third] = fruitsForDestructuring;

console.log(first);
console.log(second);
console.log(third);

// Output:
// Apple
// Banana
// Mango

// How it works:
// Destructuring takes the array values.
// first gets Apple.
// second gets Banana.
// third gets Mango.



// ❌ Error Program

let fruitValues = ["Apple", "Banana"];

let [firstFruit, secondFruit, thirdFruit] = fruitValues;

console.log(thirdFruit);

// Output:
// undefined

// How it works:
// The array has only two values.
// There is no third value.
// So thirdFruit becomes undefined.



// ✅ Correct Version

let fruitItems = ["Apple", "Banana", "Mango"];

let [firstItem, secondItem, thirdItem] = fruitItems;

console.log(thirdItem);

// Output:
// Mango

// How it works:
// The third value is Mango.
// So thirdItem contains Mango.



// =====================================
// 30. Spread Operator
// =====================================

let originalFruits = ["Apple", "Banana"];

let newFruitList = [...originalFruits, "Mango"];

console.log(newFruitList);

// Output:
// [ 'Apple', 'Banana', 'Mango' ]

// How it works:
// ... takes the values from originalFruits.
// Mango is then added after them.
// A new array is created.



// ❌ Error Program

let originalList = ["Apple", "Banana"];

let copiedList = [originalList];

copiedList.push("Mango");

console.log(copiedList);

// Output:
// [ [ 'Apple', 'Banana' ], 'Mango' ]

// How it works:
// [originalList] puts the entire array inside another array.
// It does not copy the individual values.
// So the result becomes a nested array.



// ✅ Correct Version

let originalValues = ["Apple", "Banana"];

let copiedValues = [...originalValues];

copiedValues.push("Mango");

console.log(copiedValues);

// Output:
// [ 'Apple', 'Banana', 'Mango' ]

// How it works:
// The spread operator copies the individual values.
// Mango is then added to the new array.



// =====================================
// 31. Combining Arrays
// =====================================

let fruitsFinal = ["Apple", "Banana"];
let vegetablesFinal = ["Carrot", "Potato"];

let foodFinal = [...fruitsFinal, ...vegetablesFinal];

console.log(foodFinal);

// Output:
// [ 'Apple', 'Banana', 'Carrot', 'Potato' ]

// How it works:
// The spread operator takes the values from both arrays.
// All values are placed into one new array.
