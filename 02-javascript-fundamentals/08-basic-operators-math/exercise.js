// Tasks
// The postfix and prefix forms
// importance: 5
// What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; //1
// Finished

// Assignment result
// importance: 3
// What are the values of a and x after the code below?
let e = 2;
let x = 1 + (e *= 2); // 5
// finished

// Fix the addition
// importance: 5
// Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.
let userInput = prompt('Enter your first number: ', 1);
let userInput2 = prompt('Enter your second number; ', 2);
alert(+userInput + +userInput2); // +userInput work as Number func
// finished

//  ⤵️⤵️⤵️⤵️⤵️⤵️ This solution is also correct, copied from solution provided by author.
// let userInput = +prompt('Enter your first number: ', 1);
// let userInput2 = +prompt('Enter your second number; ', 2);
// alert(userInput + userInput2); //3
// auther used them plus sign before prompt to convert the string to number, so both solutions are correct.

// so let value = +prompt(...) is equivalent to let value = Number(prompt(...))
//  ⤴️⤴️⤴️⤴️⤴️⤴️

// there was another weird exercise and i don't understand it