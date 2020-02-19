// PRIMITIVE data

/* 
 * We need a way to reuse or access data, so we create a REFERENCE.
 * 'const' alerts JS to reserve some space in memory
 * We provide a name for this space in memory
 * We use the ASSIGNMENT OPERATOR '='
 * This takes the VALUE on the right and assigns to the NAMED REFERENCE.
 */
// const myStringIsThis = "strinadfasdfdsag";

// Use 'let' ONLY if we plan to RE-ASSIGN the VALUE REFERENCED by the VARIABLE.
// let myNum = 23;

// myStringIsThis = "something else";

// console.log(myNum);

// *************************************************************************************

// Homework (is 'var' still used?)

// String
// const myString = "This is a string";

// Number
// let myNumber = 07; // Let's change it
// myNumber = 88;

// Boolean
// let myFlag = false; // Let's change it
// myFlag = true;

// Sum the numbers from 1 to 10.
let x = 0;
let total = 0;

while (x != 11) {
  total += x;
  x++;
}

console.log(`Sum of the numbers from 1 to 10: ${total}`);

// Fizz Buzz
// Log the numbers from 1 to 100.
// If the number is divisible by 3 and 5, log 'Fizz!Buzz!'
// However, if the number is divisible by 3, log 'Fizz!'
// If the number is divisible by 5, log 'Buzz!'

// let num = 1;

// while (num <= 100) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log(`${num}: Fizz!Buzz!`);
//   } else if (num % 3 === 0) {
//     console.log(`${num}: Fizz!`);
//   } else if (num % 5 === 0) {
//     console.log(`${num}: Buzz!`);
//   } else {
//     console.log(num);
//   }
//   num++;
// }

// '!' is the NOT operator. it's a Unary OPERATOR.
// Using this in front of any data type (such as a number)
// will immediately convert that data type into a boolean.
// Then, that value will be inverted as per the NOT operator.
console.log(!0); // True
console.log(!111); // False
console.log(!"Hello"); // False
console.log(!""); // True
console.log(!true); // false

// FizzBuzz solution using unary operator.
let num = 1;

while (num <= 100) {
  // (!0)
  if (!(num % 3) && !(num % 5)) {
    console.log(`${num}: Fizz!Buzz!`);
  } else if (!(num % 3)) {
    console.log(`${num}: Fizz!`);
  } else if (!(num % 5)) {
    console.log(`${num}: Buzz!`);
  } else {
    console.log(num);
  }
  num++;
}
