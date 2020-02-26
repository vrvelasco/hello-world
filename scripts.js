// In class (2-3-20)
// const name = "Victor";
// let numOfYearsCoding = 3;

/*
 * We accessed an OBJECT called 'console' and using DOT NOTATION to access a KEY.
 * That KEY is a METHOD, so we INVOKE it with ().
 * We also pass in an ARGUMENT as a STRING.
 * ARGUMENTS provide additional information that a METHOD needs to do its job.
 */

// console.log("Hello, World!");

/* We are using the '+' as a CONCATENATION OPERATOR.
 * Whenever STRINGS are present, '+' means CONCATENATE.
 */

//console.log("My name is " + name + " and I have been coding for " + numOfYearsCoding + " years.");

// Template Literals and Interpolation

//console.log(`My name is ${name} and I have been coding for ${numOfYearsCoding} years.`);

// Create a variable 'timeOfDay' and assign it a STRING.
// const timeOfDay = "Morning";

// console.log(`Good ${timeOfDay}`);

// console.log(`The variable timeOfDay is of type: ${typeof timeOfDay}`);

// JS will COERCE your data types into whatever it feels is appropriate.
// IMPLICIT COERCION
// console.log("Hello" + 22); // Hello22
// console.log("22" + 22); // 2222
// console.log(22 + 22); // 44
// console.log(22 + true); // 23 (true is equal to 1)
// console.log(22 + false); // 22 (false is equal to 0)

// EXPLICIT COERCION
// console.log(Number(false));

// Conversions
// console.log(parseInt("123.45")); // 123
// console.log(parseFloat("123.45")); // 123.45
// console.log(Boolean(222)); // True; anything not zero is true
// console.log("3" * 3); // 9
// console.log("3asdfas" * 3); // NaN

// *************************************************************************************
// Homework 2/5/2020
// *************************************************************************************

// const timeOfDay = "Evening"; // String variable

// const greeting = `Good ${timeOfDay}!`; // Template literal -> "Good Evening!"

// console.log(greeting); // Prints the greeting

// let x; // New variable; not assigned

// console.log(typeof x); // Undefined

// x = null; // Purposely blank

// console.log(typeof x); // "Object"

// try {
//   console.log(thisVariableDoesNotExist); // Not defined
// } catch (e) {
//   console.log("There was an error: " + e.message); // Display message after exception
// }

// console.log(greeting); // Did a try/catch above so that it can continue

// const name = "Victor"; // String variable

// let favoriteSong = "The Reason"; // Favorite song

// let wage = 1000000; // I wish :)

// let age = 31; // My age

// const onlyChild = false; // Boolean

// let satisfied = true; // Boolean

// let favoriteThing = "Video Games"; // String variable

// console.log(typeof favoriteThing); // Prints data type

// favoriteSong = "En Peligro De Extincion"; // New favorite song

// favoriteThing = 42; // THE ANSWER TO LIFE, THE UNIVERSE AND EVERYTHING

// console.log(typeof favoriteThing); // Print data type

// age = 32; // On Dec 6th

// wage = 2000000; //  Why not?

// satisfied = true; // Still true

// console.log(
//   "My name is " +
//     name +
//     ' and my current favorite song is "' +
//     favoriteSong +
//     '".'
// ); // Sentence using two variables

/* ********************************
 * In class - 2/5/2020
 * ********************************/

// UNDEFINED is a PRIMITIVE TYPE.
// It signifies the absence of ANY value.
// let y; // Same as let y = undefined;

// console.log(y); // Undefined

// NULL represents a deliberate assignment of 'nothing'.
// let z = null;
// console.log(z);

// This is an OBJECT.
// const me = {
// name: "Manav",
// age: 23,
// pets: {
// cat: "Dara",
// dog: "James"
// }
// };

// console.log(me.name); // Prints value of name property

// console.log(typeof me.name); // String

// console.log(typeof me); // Object

// console.log(me.age); // Undefined

// Create a new key value pair with age = 23.
// me.age = 23;

// console.log(me.age); // 23

// me.name = "Dhanav"; // User's name changes

// console.log(me); // Displays user's name and age

// console.log(me.pets.cat); // Displays the cat's name

// console.log(me.pet.cat); // "Undefined.cat" -> Exception: Primitive type cannot use dot notation

// *************************************************************************************
// Homework 2/10/2020
// *************************************************************************************
// const bio = {
//Bio Object
// name: "Victor Velasco",
// age: 31,
// employment: {
//Nested Object
// employer: "Commerce Bank",
// yearsEmployed: 7
// }
//};

// Print with template literal
// console.log(`Name: ${bio.name.toUpperCase()}
// Age: ${bio.age}
// Employment: ${bio.employment.employer} for ${
// bio.employment.yearsEmployed
// } years`);

// Add key value pair by dot notation
// bio.jobTitle = "CSR III";

// Reassign key
// bio.employment.yearsEmployed = 8;

// Print new data
// console.log(`Job title: ${bio.jobTitle}
// Anniversary: ${bio.employment.yearsEmployed} years employed in May 2020`);

// *************************************************************************************
// In class 2/10/2020
// *************************************************************************************
// Const is not about immutability.
// console.log(bio["age"]); // Bracket notation

// const keyThatINeed = "age";

// Use BRACKET NOTATION to access a key that is REFERENCED by a VARIABLE.
// console.log("Bracket notation with variable:", bio[keyThatINeed]); // Prints "age" above in bio object
// console.log("Bracket notation with string:", bio["keyThatINeed"]); // Undefined

// Relational or COMPARISON OPERATORS always yields BOOLEANS.
// console.log(1 === 2); // False

/*
 * To check if 2 things are considered to equal...
 * '===' is STRICT EQUALITY.
 * It checks the VALUE and TYPE.
 */
// console.log(2 === 2); // True
// console.log(2 === 3); // False
// console.log(2 !== 3); // True

// const x = 3;

// EXPRESSION is anything that evaluates to a value
// STATEMENTS combine EXPRESSIONS with keywords and other syntax
// if (x === 3) {
// Braces establish the SCOPE of the code.
// console.log("x is 3!");
// } else {
// console.log("x is not 3!");
// }

// const age = 25;

// if (age >= 25) {
// console.log("Renting a car is affordable");
// } else if (age >= 18) {
// If age is between 18 and 25
// console.log("Renting will be expensive");
// } else {
// All other age
// console.log("You can't rent a car legally!");
// }

// const name = "";

// JS is a DYNAMICALLY TYPED language.
// We can quickly check to see if a value is 'truthy' or 'falsey'
// if (name) {
// console.log("The user filled out the name");
// } else {
// console.error("User left name blank");
// }

// console.log(Boolean(3)); // True

// *************************************************************************************
// In class 2/24/2020
// *************************************************************************************
// console.log(window);

// window.console.log("Hello, World");

// Global Scope alongside (NOT INSIDE) 'window'
// const me = {
//  name: "Manava"
// };

// console.log(window.me); // Undefined
// console.log(window.me.name); // Exception

// alert("Hello"); // Alert window
// const person = {};
// const expenses = {};

// expenses.totalBudget = 1000;

// expenses.lights = prompt("How much is your light bill?");

// alert(`You have ${expenses.totalBudget - expenses.lights} remaining.`);
// Prompt is a BLOCKING operation.
// person.name = prompt("What is your name?");
// person.age = prompt("What is your age?");

// console.log(person);
// alert(`Hello ${name}`);

// Log the numbers from 1 to 10.
// In parentheses, specify 3 things: start - stop - increment.
// for (let i = 1; i <= 10; i++) {
// console.log(i);
// }

// Add numbers from 1 to 10.
// let total = 0;

// for (let i = 1; i < 11; i++) {
//   total += i;
// }

// console.log(total);

// *************************************************************************************
// In class 2/26/2020
// *************************************************************************************

// IMPLICIT CONVERSION
// || means OR
// If first EXPRESSION is 'truthy', then we don't EVALUATE the right hand-side.absolute

// if 'prompt' RETURNs an empty STRING - because of the '||' this will be IMPLICITLY CONVERTED to 'false'.

// const name = prompt("What is your name?") || "No name entered!";
// console.log(name);

// TODO: Using 'while', (and maybe the UNARY OPERATOR '!') keep 'prompting' while the name field is blank.

// 'name' will be a STRING, but it might be blank.
// let name = prompt("What is your name?");

// console.log(typeof name);

// If 'name' is blank, then '!' will convert to a Boolean(false)
// While 'name' is not true, prompt for the name.
// while (!name) {
//   name = prompt("What is your name?");
// }

// console.log(name);

let age = prompt("What is your age?");

age = Number(age); // String to number

console.log(Boolean(NaN)); // False

console.log(Boolean(0)); // False

// TODO: If the user enters something that EXPLICITLY CONVERTS to 'NaN', alert them.
if (!age) {
  alert("This is not a number!");
}
