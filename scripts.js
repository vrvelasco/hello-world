// In class (2-3-20)
const name = "Victor";
let numOfYearsCoding = 3;

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
const timeOfDay = "Morning";

console.log(`Good ${timeOfDay}`);

console.log(`The variable timeOfDay is of type: ${typeof timeOfDay}`);

// JS will COERCE your data types into whatever it feels is appropriate.
// IMPLICIT COERCION
console.log("Hello" + 22); // Hello22
console.log("22" + 22); // 2222
console.log(22 + 22); // 44
console.log(22 + true); // 23 (true is equal to 1)
console.log(22 + false); // 22 (false is equal to 0)

// EXPLICIT COERCION
console.log(Number(false));

// Conversions
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45
console.log(Boolean(222)); // True; anything not zero is true
console.log("3" * 3); // 9
console.log("3asdfas" * 3); // NaN
