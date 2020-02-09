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
const bio = {
  // Bio Object
  name: "Victor Velasco",
  age: 31,
  employment: {
    // Nested Object
    employer: "Commerce Bank",
    yearsEmployed: 7
  }
};

// Print with template literal
console.log(`Name: ${bio.name.toUpperCase()}
Age: ${bio.age}
Employment: ${bio.employment.employer} for ${
  bio.employment.yearsEmployed
} years`);

// Add key value pair by dot notation
bio.jobTitle = "CSR III";

// Reassign key
bio.employment.yearsEmployed = 8;

// Print new data
console.log(`Job title: ${bio.jobTitle}
Anniversary: ${bio.employment.yearsEmployed} years employed in May 2020`);
