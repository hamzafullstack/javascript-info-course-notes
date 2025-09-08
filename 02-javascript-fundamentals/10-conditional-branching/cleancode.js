// Conditional branching: if, '?'
let year = prompt('In which year was ECMAScript-2015 specification published? ', '');
if (year == 2015){
    console.log('Right!')
}

// Boolean conversion
let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  alert(cond);
}

// The “else” clause
if (year == 2015){
    alert('You guess it right!');
}else{
    alert('Wrong!');
}

// Several conditions: “else if”
if (year < 2015){
    alert('Too early......');
}else if(year > 2015){
    alert('Too late.....');
}else{
    alert('Exactly...');
}

// Conditional operator ‘?’
let accessAllowed;
let age = prompt('How old are you? : ', '');
if (age > 18){
    accessAllowed = true;
}else{
    accessAllowed = false;
}
alert(accessAllowed);

// ternary operator / Question mark '?' operator
let accessAllowed1 = (age > 18) ? true : false;

// Multiple ‘?’
let userAge = prompt('Age? ', 18);
let message = (userAge < 3) ? 'Hi, champ' :
(userAge < 18) ? 'Hello!' :
(userAge < 100) ? 'Greetings' :
'what an unusual age!';
alert(message);

// Here’s how this looks using if..else:
if (userAge < 3){
    alert('Hi champ');
}else if(userAge < 18){
    alert('Hello');
}else if(userAge < 100){
    alert('Greetings');
}else{
    alert('what an unusual age!');
}

// Non-traditional use of ‘?’
let company = prompt('Which company created JavaScript? ', '');
(company == 'Netscape') ? alert('Right!') : alert('Wrong');
// It’s not recommended to use the question mark operator in this way.

// Here is the same code using if for comparison:
let vsCode = prompt('which company created VS Code Editor? ', '');
if(vsCode == 'Microsoft'){
    alert("You are correct");
}else{
    alert('Wrong.........');
}
// Our eyes scan the code vertically. Code blocks which span several lines are easier to understand than a long, horizontal instruction set.
// The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code.

// -----------Summary-----------
// The if statement executes a block of code if a condition is truthy. Otherwise, it can execute another block (the else branch).
// The conditional operator ? has three operands. It’s a shorter way to write an if..else that assigns a value to a variable based on a condition.
// Nested if..else statements can be replaced with multiple ? operators, but that’s not recommended because it makes the code hard to read.