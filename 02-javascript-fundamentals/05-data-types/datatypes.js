// LESSON 5: Data Types in JavaScript

// JavaScript is dynamically typed: a variable can hold any type.
let message = 'hello';
message = 123456; // now a number
alert(message);

// ----- Number -----
let n = 12.34; // integers & floats
alert(1 / 0);  // Infinity
alert("not a number" / 2); // NaN (invalid math)

// ----- BigInt -----
const bigInt = 123456789012345678901234567890n;
console.log(bigInt); // integers of arbitrary length

// ----- String -----
let name = 'Hamza';
let phrase = `Hello, ${name}, result is ${2 + 2}`;
alert(phrase); 
// Backticks allow embedding, others don’t

// ----- Boolean -----
let isGreater = 5 > 1;
alert(isGreater); // true

// ----- Null -----
let age = null; // "empty" or "unknown" value

// ----- Undefined -----
let happy;
alert(happy); // undefined (not assigned)

// ----- Symbol -----
let id = Symbol("unique");
console.log(id); // unique identifier

// ----- Object -----
let user = { name: "Hamza", age: 25 }; // non-primitive

// ----- typeof -----
console.log(typeof undefined); // "undefined"
console.log(typeof 0);         // "number"
console.log(typeof "str");     // "string"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof null);      // "object" (legacy bug)
console.log(typeof alert);     // "function"

// ----- Summary -----
// 7 primitive types: number, bigint, string, boolean, null, undefined, symbol
// 1 non-primitive: object
// typeof shows the type as a string
// Dynamic typing: variables can hold any type