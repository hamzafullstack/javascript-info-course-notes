// ================== Functions in JavaScript ==================
// Functions are reusable code blocks that perform specific tasks, avoiding repetition.

// Function Declaration
function showMessage() {
    alert("Hello World");
}
showMessage();
showMessage(); // executes function code multiple times

/* Syntax:
function name(param1, param2, ...paramN) {
  // body
} */

// ---------------- Local Variables ----------------
function greetings() {
    let message = 'Hello! I Love Javascript'; // local variable
    alert(message);
}
greetings();
// alert(message); // Error, local to function

// ---------------- Outer Variables ----------------
let userName = "Hamza";
function userGreeting() {
    let message = 'Hello, ' + userName;
    console.log(message);
}
userGreeting();

let userOne = 'Ahmed';
function changeValue() {
    userOne = 'Ghafoor'; // modifies outer variable
    alert("Hello, " + userOne);
}
changeValue();
alert(userOne); // value changed

// Shadowing example
let userTwo = 'Kashif';
function innerVar() {
    let userTwo = 'Murad'; // local variable
    console.log("Hey, " + userTwo);
}
innerVar();
alert(userTwo); // outer variable remains

// ---------------- Parameters & Arguments ----------------
function userMessage(from, text) {
    console.log(from + ' : ' + text);
}
userMessage('Hamza', 'Hello');
userMessage('Hamza', 'How have you been?');

function userMessageTwo(fromUser, text) {
    fromUser = '*' + fromUser + '*'; // local copy modified
    alert(fromUser + ' : ' + text);
}
let fromUser = 'Hamza Baloch';
userMessageTwo(fromUser, 'Hello');
alert(fromUser); // unchanged

// ---------------- Default Parameters ----------------
function defaultControl(from, text = 'no text given') {
    console.log(from + ' : ' + text);
}
defaultControl('kashif');
defaultControl('kashif', 'Hello!');
defaultControl('kashif', undefined);

// Old JS approach
function oldJs(from, text) {
    if(text == undefined) text = 'no text given';
    alert(from + ' : ' + text);
}
oldJs('user360');

// Using nullish operator
function showCount(count) {
    alert(count ?? "unknown");
}
showCount(0); showCount(null); showCount();

// ---------------- Returning Values ----------------
function sum(a, b) {
    return a + b;
}
let result = sum(10, 12);
console.log(result); // 22

function checkAge(age) {
    if(age >= 18) return true;
    else return confirm('Do you have permission from your parents?');
}
let age = prompt('How old are you? :', 18);
if(checkAge(age)) console.log('Access Granted');
else console.log('Access Denied');

function showMovie(age) {
    if(!checkAge(age)) return;
    console.log('Showing you the movie...');
}

function doNothing() {} // returns undefined
console.log(doNothing() == undefined); // true

// ---------------- Function Naming ----------------
// Names should describe the action (get, calc, create, check...)
// One function should do one task, avoid multiple responsibilities

// ---------------- Prime Example ----------------
function showPrimes(n) {
    nextPrime: for(let i = 2; i < n; i++) {
        for(let j = 2; j < i; j++) if(i % j == 0) continue nextPrime;
        alert(i);
    }
}
function showprimes(n) {
    for(let a = 2; a < n; a++) if(isPrime(a)) alert(a);
}
function isPrime(n) {
    for(let a = 2; a < n; a++) if(n % a == 0) return false;
    return true;
}

// ================== Summary ==================
// - Functions are reusable blocks performing one specific task
// - Parameters accept input, arguments provide values
// - Functions can return values; if no return, returns undefined
// - Functions can access outer variables, but local variables shadow them
// - Default parameters provide fallback values
// - Function names should be descriptive and concise
// - One function should do one thing
// - Functions can be assigned, passed, copied
// Reference: https://javascript.info/function-basics
