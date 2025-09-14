// Tasks
// What's the result of OR?
// importance: 5
// What is the code below going to output?
alert( null || 2 || undefined );
// Answer : 2. because 2 is true null and undefined is falsy


// What's the result of OR'ed alerts?
// importance: 3
// What will the code below output?
alert( alert(1) || 2 || alert(3) );
// Answer : 1,2. because alert does not return a value valuation does not reach alert(3)


// What is the result of AND?
// importance: 5
// What is this code going to show?
alert( 1 && null && 2 );
// answer : null. because && stop on falsy value


// What is the result of AND'ed alerts?
// importance: 3
// What will this code show?
alert( alert(1) && alert(2) );
// Answer : 1, undefined.  ----> i cheat here..


// The result of OR AND OR
// importance: 5
// What will the result be?
alert( null || 2 && 3 || 4 );
// answer: 3 because && operator has more precedence than OR || operator


// Check the range between
// importance: 3
// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
let userAge = +prompt('enter your age: ', 100);
if (userAge >= 14 && userAge <= 90){
    console.log('inclusively');
}


// Check the range outside
// importance: 3
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
let age = 14;
if(!(age >= 14 && age <= 90)){
    alert('log');
}
if(age > 14 || age < 90){
    alert('log');
}


// A question about "if"
// importance: 5
// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' ); // Doesn't run
if (null || -1 && 1) alert( 'third' );
// Answer: first and third. 
// The first one is truthy because -1 is truthy.
// The second one is falsy because -1 && 0 is 0 which is falsy.
// The third one is truthy because -1 && 1 is 1 which is truthy, and null || 1 is 1 which is truthy.

// Check the login
// importance: 3
// Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
// Please use nested if blocks. Mind the overall readability of the code.
// Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.
let userName = 'Admin';
let userPassword = 'HamzaMaster';
let userInput = prompt('Enter your username: ', '');
if(userInput === userName){
    let password = prompt('enter your password: ', '');
    if(password === userPassword){
        alert('Welcome Admin')
    }else if(password === '' || password === null){
        alert('cancelled')
    }else{
        alert('Wrong Password')
    }
}else if(userInput === '' || userInput === null){
    alert('Cancelled')
}else{
    alert("I don't know you");
}
