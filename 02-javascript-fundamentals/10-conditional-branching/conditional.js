// Conditional branching: if, '?'
// Sometimes, we need to perform different actions based on different conditions.
// To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

// The “if” statement
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
let year = prompt('In which year was ECMAScript-2015 specification published?', '');
// if (year == 2015) alert('You are right!');

// If we want to execute more than one statement, we have to wrap our code block inside curly braces:
if(year == 2015){
    alert('You are right!');
    alert('You are so smart');
}
// We recommend wrapping your code block with curly braces {} every time you use an if statement, even if there is only one statement to execute. Doing so improves readability.

// Boolean conversion
// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
// the code under this condition would never execute:
if(0){
    //// 0 is falsy
}
// and inside this condition – it always will:
if(1){
    //1 is truthy
}
// We can also pass a pre-evaluated boolean value to if, like this:
let cond = (year == 2015);  // equality evaluates to true or false
if (cond){
    alert(cond);
}

// The “else” clause
// The if statement may contain an optional else block. It executes when the condition is falsy.

let userName = prompt('What is your name? :', '');
if(userName == 'Hamza'){
    alert(`You are ${userName} the admin`);
}else{
    alert('You are not the admin');
}
// Several conditions: “else if”
// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.
// example
let userInput = prompt('Who is the founder of Pakistan : ', '');
if (userInput == 'Muhammed Ali Jinnah') {
    alert(`You Guess it right the founder of Pakistan is ${userInput}.`);
} else if (userInput == 'Quaid E Azam') {
    alert('Right but Quaid E Azam his title not his name.');
}
else {
    alert('how can you be so wrong');
}


// conditional
let ecmaScript = prompt('In which year was the ECMAScript-2015 specification published?', '');
if(ecmaScript < 2015){
    alert('Too Early');
}else if(ecmaScript > 2015){
    alert('Too Late');
}else{
    alert('Exactly');
}
// There can be more else if blocks. The final else is optional.

// Conditional operator ‘?’
// Sometimes, we need to assign a variable depending on a condition.
// for instance:
let accessAllowed;
let age = prompt('how old are you? : ', "");
if (age > 18){
    accessAllowed = true;
}else{
    accessAllowed = false;
}
alert(accessAllowed);
// The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.
// The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

// The syntax is:
// let result = condition ? value1 : value2;
// The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
let allowedAccess = (age > 18) ? true : false;
// Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >.
// This example will do the same thing as the previous one:
// the comparison operator "age > 18" executes first anyway
let allowedAccess2 = age > 18 ? true : false;
// (no need to wrap it into parentheses)
// But parentheses make the code more readable, so we recommend using them.

// Please note:
// In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:
let allowedAccess3 = age > 18; // the same

// Multiple ‘?’
// A sequence of question mark operators ? can return a value that depends on more than one condition.
// For instance:
let userAge = prompt('Enter your age', 18);
let message = (userAge < 3) ? 'Hi kiddo!' : (userAge < 18) ? 'Hello' : (userAge < 100) ? 'Greatings!' : 'What is the secret for long life';
alert(message);

// The first question mark checks whether age < 3.
// If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon “:”, checking age < 18.
// If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon “:”, checking age < 100.
// If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon “:”, returning 'What an unusual age!'

// Here’s how this looks using if..else:
if (userAge < 3){
    message = 'Hi Kiddo!';
}else if (userAge < 18){
    message = 'Hello';
}else if (userAge < 100){
    message = 'Greetings';
}else{
    message = 'what is the secret for long life';
}
alert(message);

// Non-traditional use of ‘?’
// Sometimes the question mark ? is used as a replacement for if:
let company = prompt('Which company created JavaScript: ', '');
(company == 'Netscape') ?
console.log(`Right! Its the ${company} created JS`) : console.log(`Wrong! You're cooked`);
// Depending on the condition company == 'Netscape', either the first or the second expression after the ? gets executed and shows an alert.
// It’s not recommended to use the question mark operator in this way
// The notation is shorter than the equivalent if statement, which appeals to some programmers. But it is less readable.
// here is the same code using if for comparison:
if (company == "Netscape"){
    console.log('Right!');
}else{
    console.log('Wrong');
}
// Our eyes scan the code vertically. Code blocks which span several lines are easier to understand than a long, horizontal instruction set.

// The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code.

// -----------Summary-----------
// The if statement executes a block of code if a condition is truthy. Otherwise, it can execute another block (the else branch).
// The conditional operator ? has three operands. It’s a shorter way to write an if..else that assigns a value to a variable based on a condition.
// Nested if..else statements can be replaced with multiple ? operators, but that’s not recommended because it makes the code hard to read.