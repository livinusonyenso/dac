// DATA TYPES AND VAERIABLES
// PRIMITIVE DATA TYPES
// // REFERENCE DATA TYPES

// // PRIMITIVE DATA TYPES

// // 1. String
// let nameVariable = "Razeeb Emmi";
// console.log("My nameVariable is " + nameVariable);
// console.log("Data type of nameVariable is " + typeof nameVariable);

// // STRING METHODS
// let concatenatedString = nameVariable.concat(" Developer");
// let slicedString = nameVariable.slice(1, 5);

// console.log(slicedString);
// console.log(concatenatedString);
// console.log(nameVariable.includes("E"));

// console.log(
//   "Length of nameVariable is >>>>>>>>>>>>>>>>>>>>>>>>>>>>>." +
//     nameVariable.length
// );
// console.log("Uppercase nameVariable is " + nameVariable.toUpperCase());
// console.log("Lowercase nameVariable is " + nameVariable.toLowerCase());
// console.log("Character at index 0 is " + nameVariable.charAt(0));
// console.log("Index of 'E' is " + nameVariable.indexOf("E"));
// console.log("Substring from index 0 to 5 is " + nameVariable.substring(0, 5));
// console.log(
//   "Replace 'Razeeb' with 'John': " + nameVariable.replace("Razeeb", "John")
// );
// console.log("Split nameVariable by space: " + nameVariable.split(" "));
// console.log(
//   "Concatenate with ' - Developer': " + nameVariable.concat(" - Developer")
// );
// console.log(
//   "Trimmed nameVariable: '" + "   " + nameVariable + "   ".trim() + "'"
// );
// console.log("Includes 'Emmi': " + nameVariable.includes("Emmi"));
// console.log("Starts with 'R': " + nameVariable.startsWith("R"));
// console.log("Ends with 'i': " + nameVariable.endsWith("i"));
// console.log("Repeat nameVariable 3 times: " + nameVariable.repeat(3));

// // // 2. Number
// let sells = 100;
// let buy = 65.4;
// let totalProfit = sells - buy;

// console.log(">line 40", parseInt(buy));

// // let age = 22;
// console.log("My age is " + age);
// console.log("Data type of age is " + typeof age);

// // // 3. Boolean
// let isStudent = true;
// console.log("Am I a student? " + isStudent);
// console.log("Data type of isStudent is " + typeof isStudent);

// // // 4. Null
// let nullVar = null;
// console.log("Value of nullVar is " + nullVar);
// console.log("Data type of nullVar is " + typeof nullVar);

// // // 5. Undefined
// let undefinedVar;
// console.log("Value of undefinedVar is " + undefinedVar);
// console.log("Data type of undefinedVar is " + typeof undefinedVar);

// // // 6. Symbol
// let symbolVar = Symbol("id");
// console.log("Value of symbolVar is " + symbolVar.toString());
// console.log("Data type of symbolVar is " + typeof symbolVar);

// // conditional operator and loops
// // + , -, *, /, %, ++, --
// // ==, ===, !=, !==, >, <, >=, <=
// // &&, ||, !
// // if, else if, else
// // switch
// // for, while, do while
// // break, continue

// //operator
// let a = 10;
// let b = 5;

// // arithmetic operators
// console.log("a + b = " + (a + b)); // addition
// console.log("a - b = " + (a - b)); // subtraction
// console.log("a * b = " + a * b); // multiplication
// console.log("a / b = " + a / b); // division
// console.log("a % b = " + (a % b)); // modulus
// console.log("a++ = " + a++); // increment
// console.log("++a = " + ++a); // increment /   TO-DO
// console.log("a-- = " + a--); // decrement
// console.log("--a = " + --a); // decrement

// // comparison operators
// console.log("a == b: " + (a == b)); // equal to
// console.log("a === b: " + (a === b)); // equal value and type
// console.log("a != b: " + (a != b)); // not equal to
// console.log("a !== b: " + (a !== b)); // not equal value or type
// console.log("a > b: " + (a > b)); // greater than
// console.log("a < b: " + (a < b)); // less than
// console.log("a >= b: " + (a >= b)); // greater than or equal to
// console.log("a <= b: " + (a <= b)); // less than or equal to

// // logical operators
// let x = true;
// let y = false;
// console.log("x && y: " + (x && y)); // logical AND
// console.log("x || y: " + (x || y)); // logical OR
// console.log("!x: " + !x); // logical NOT

// // // CONDITIONAL STATEMENTS
// // 1. if-else
// let age = 18;
// function validateAge(age) {
//   if (age < 18) {
//     return "Minor";
//   } else if (age >= 18 && age < 65) {
//     return "Adult";
//   } else {
//     return "Senior Citizen";
//   }
// }

// console.log(validateAge(7));

// // 2. switch
// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// LOOPS
// 1. for loop
// what is loop ? - repetition of a block of code until a certain condition is met
// for (initialization; condition; increment/decrement) { // block of code to be executed }

// let ageOfVal = 15;

// for (let index = 0; index < ageOfVal; index++) {
//   console.log("For loop iteration: " + (index + 1));
// }
// let stringToRepeat = "Hello, World!";

// for (let index = 0; index <= stringToRepeat.length; index++) {
//   if (stringToRepeat[index] == "l") {
//     console.log("For loop iteration: " + stringToRepeat[index].toUpperCase());
//   }
//   // console.log("stringToRepeat[index]: " + stringToRepeat[index]);
// }
// for (let index = stringToRepeat.length; index >= 0; index--) {
//   console.log("Reversed string iteration: " +  stringToRepeat[index]);
// }

// // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

// // // 2. while loop
// let j = 1;
// while (j <= 5) {
//   console.log("While loop iteration: " + j);
//   j++;
// }

// // // 3. do-while loop
// let k = 1;
// do {
//   console.log("Do-While loop iteration: " + k);
//   k++;
// } while (k <= 5);

// // // BREAK AND CONTINUE
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     break; // exit the loop when i is 6
//   }
//   console.log("Break example, i: " + i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue; // skip even numbers
//   }
//   console.log("Continue example, i: " + i);
// }

// REFERENCE DATA TYPES
// let a = 10;
// let b = a; // primitive data type, value is copied
// b++;
// console.log("Value of a: " + a); // 10
// console.log("Value of b: " + b); // 11

// // 1. Array
// let hobbies = ["reading", "traveling", "gaming"];
// let newhobbies = hobbies.push("coding");
// let lastItem = hobbies.pop();
// hobbies.unshift("swimming");
// hobbies.shift();
// hobbies[1] = "dancing";
// console.log("New hobbies length: " + newhobbies);
// console.log("Last item removed: " + lastItem);
// console.log("First item removed: " + lastItem);
// console.log("hobbies after shift: " + hobbies);
// console.log("hobbies after unshift: " + hobbies);
// console.log("hobbies after update: " + hobbies);
// console.log("Data type of hobbies is " + typeof hobbies);
// console.log("Is hobbies an array? " + Array.isArray(hobbies));
// console.log("Index of 'gaming': " + hobbies.indexOf("gaming"));
// console.log("hobbies length: " + hobbies.length);
// console.log("hobbies: " + hobbies);
// console.log("hobbies joined: " + hobbies.join(" - "));
// console.log("hobbies sliced: " + hobbies.slice(0, 2));
// console.log("hobbies spliced: " + hobbies.splice(1, 1, "coding", "dancing"));
// console.log("hobbies after splice: " + hobbies);
// console.log("hobbies reversed: " + hobbies.reverse());
// console.log("hobbies sorted: " + hobbies.sort());
// console.log("hobbies to string: " + hobbies.toString());
// console.log("hobbies concatenated: " + hobbies.concat(["painting", "singing"]));

// let result = [];
// let arrayOfFruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

// // ARRAYS METHODS

// // FOREACH

// arrayOfFruits.forEach((fruit, index, arr) => {

//   result.push(fruit.toUpperCase());
// });

// console.log("Fruits in uppercase: " + result);

// // FILTER
// let filteredFruits = arrayOfFruits.filter((fruit) => fruit.startsWith("M"));
// console.log("Fruits starting with 'M': " + filteredFruits);

// // MAP
// let mappedFruits = arrayOfFruits.map((fruit) => fruit.length);
// console.log("Length of each fruit name: " + mappedFruits);

// let hasBanana = arrayOfFruits.includes("Banana");
// console.log("Does the array include 'Banana'? " + hasBanana);

// let totalLength = arrayOfFruits.reduce((total, fruit) => total + fruit.length, 0);
// console.log("Total length of all fruit names: " + totalLength);

// let foundFruit = arrayOfFruits.find((fruit) => fruit.length > 5);
// console.log("First fruit with name length greater than 5: " + foundFruit);

// let sortedFruits = arrayOfFruits.sort();
// console.log("Fruits sorted alphabetically: " + sortedFruits);

// let reversedFruits = arrayOfFruits.reverse();
// console.log("Fruits in reverse order: " + reversedFruits);

// let slicedFruits = arrayOfFruits.slice(1, 4);
// console.log("Sliced fruits (index 1 to 3): " + slicedFruits);

// let joinedFruits = arrayOfFruits.join(", ");
// console.log("Fruits joined as a string: " + joinedFruits);

// let fruitString = "Pineapple, Kiwi, Papaya";
// let splitFruits = fruitString.split(", ");
// console.log("Fruits split from string: " + splitFruits);

// let filterOutNumbers = "ABCD1234";
// let filteredNumber = filterOutNumbers.split("")
// console.log("filteredNumber>>>>>>>>>>>>>> ", filteredNumber)
// let filteredOutNumbers = filteredNumber.filter((item) => isNaN(item))
// console.log("filteredOutNumbers >>>>>>>>>> ", filteredOutNumbers)
// console.log("filteredOutNumbers >>>>>>>>>> ", filteredOutNumbers.join('').toString())

// 2. Object

let person = {
  firstName : "John",
  lastName : "Doe",
  age: 25,
  isVerified: true,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
  hobbies: ["reading", "traveling", "gaming"],
  getFullName: function () {
    return this.firstName + "    " + this.lastName;
  },
};
person.firstName = "Jane"; // update firstName

console.table(person)

// 3. Function

function calculateSum(first, second) {
  return first + second;
}

function largestNumber(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
largestNumber(10, -20);  

console.log("Sum of 5 and 10 is " + calculateSum(5, 10));
console.log("Largest number between 10 and 20 is " + largestNumber(10, 20));

// fourthLetter("Hello, World!"); // L
// fourthLetter("HSEFDGESRGERTG!"); // L
// fourthLetter("43T3TERGREGDRG"); // L
