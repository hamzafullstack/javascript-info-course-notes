// ==============================
// LESSON 4: VARIABLES
// ==============================

// Variables store data. Think of them as "labeled boxes" for information.
// To create a variable, use the `let` keyword.

let message;
message = 'Hello World'; // Assign a value
alert(message); // "Hello World"

// Declaration + assignment in one line:
let greeting = 'Hello Hamza';
alert(greeting);

// Multiple declarations in one line (valid but less readable):
let user = 'Hamza', age = 25, skills = 'coder';

// Recommended style: one variable per line
let name = 'Hamzi';
let job = 'IT';
let experience = 5;

// BAD practice: comma-first style (confusing, avoid this!)
let userTwo = 'Adnan'
, age2 = 24
, job2 = 'Teacher';

// =================================
// VAR VS LET
// =================================
// `var` exists for legacy reasons. Prefer `let` or `const`.

var messageOne = 'Hello World!'; // old-school declaration

// =================================
// REAL-LIFE ANALOGY
// =================================
// A variable is like a box with a label.
let box = 'Hello';
box = 'World'; // Reassign value
alert(box);

// Copying data from one variable to another
let hello = 'Hello World!!';
let say = hello;
alert(hello); // Hello World!!
alert(say);   // Hello World!!

// Redeclaring the same variable causes error
// let hello = 123; // ❌ Error

// =================================
// NAMING RULES
// =================================
// Valid names: letters, digits, $, _ (but cannot start with a digit)
let userName;
let user123;
let $ = 1;
let _ = 2;
alert($ + _); // 3

// Case-sensitive
let apple = 'red';
let APPLE = 'green'; // different variable

// Avoid non-English names even if allowed
// Reserved words (let, return, class, function...) cannot be used

// =================================
// STRICT MODE & ASSIGNMENT
// =================================
// Without "use strict", assigning to undeclared variable creates global (bad!)
// With "use strict", this throws error

// =================================
// CONSTANTS
// =================================
// Use const when the value should never change
const myBirthday = '15.02.2000';
// myBirthday = '11.11.2001'; // ❌ Error

// UPPERCASE constants: aliases for fixed values
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;
alert(color); // #FF7F00

// Note: const objects can still have their properties changed,
// but the reference itself cannot be reassigned.

// =================================
// GOOD PRACTICES
// =================================
// - Use clear, meaningful names (userName, shoppingCart).
// - Don’t reuse variables unnecessarily.
// - Prefer `let` for reassignable values, `const` for fixed values.
// - Avoid `var` in modern code.

// =================================
// SUMMARY
// =================================
// let – modern variable declaration
// const – same as let, but value cannot be reassigned
// var – old legacy declaration, avoid
// Variable names should be meaningful and follow camelCase
