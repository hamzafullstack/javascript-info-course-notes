/*Tasks
Is "else" required?
importance: 4
The following function returns true if the parameter age is greater than 18.
Otherwise it asks for a confirmation and returns its result:*/

/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}*/
// Will the function work differently if else is removed?
/*function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}*/

// answer: yes it will work with or without the else statement.
// The function will return true if age is greater than 18, otherwise it will ask for confirmation. The else statement is not required because the return statement will exit the function if the condition is met.

/*Rewrite the function using '?' or '||'
importance: 4
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||*/

// Solution:
// Using a question mark operator ?
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allowed you?');
}
// Using OR ||
function checkAge(age) {
  return (age > 18) || confirm('Did parents allowed you?');
}
// Both functions will return true if age is greater than 18, otherwise they will ask for confirmation.

/*Function min(a, b)
importance: 1
Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1*/

// Solution
function min(a, b) {
  return (a < b) ? a : b;
}
// Testing the function
console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1  
// solution by javascript.info
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
// Testing the function
console.log(min(2, 5)); // 2 | this work as well.

/*Function pow(x,n)
importance: 4
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
Run the demo
P.S. In this task the function should support only natural values of n: integers up from 1.*/

// Solution
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
// Testing the function
console.log(pow(3, 2)); // 9
console.log(pow(3, 3)); // 27
console.log(pow(1, 100)); // 1
// Prompting for x and n
let x = prompt("Enter a number (x):");
let n = prompt("Enter a natural number (n):");
if (n < 1) {
  console.log(`Power ${n} is not supported, use a natural number`);
} else {
  console.log(pow(x, n));
} 
// The function pow(x, n) calculates x raised to the power of n by multiplying x by itself n times using a for loop. It also includes a prompt to get user input for x and n, and checks if n is a natural number.
// solution by javascript.info
function pow(x, n) {
  let result = x; 
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = prompt("x?", '');
let n = prompt("n?", '');
if (n < 1) {
  alert(`Power ${n} is not supported, use a natural number`);
}
else {
  alert( pow(x, n) );
}
// This solution initializes result with x and starts the loop from 1, which is another valid approach.
// Testing the function
console.log(pow(3, 2)); // 9
console.log(pow(3, 3)); // 27
console.log(pow(1, 100)); // 1
// Both solutions work correctly.
