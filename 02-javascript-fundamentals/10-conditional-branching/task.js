// Tasks
// if (a string with zero) | importance: 5 | Will alert be shown?
if ('0'){
    // '0' isn't empty, it has a value
    alert('hello world'); // we will get alert 'hello world'
}

// The name of JavaScript | importance: 2
// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
let langName = prompt('What is the “official” name of JavaScript?', ''); // userinput
// conditional |
if(langName == 'ECMAScript'){
    // if Block
    alert('Right!');
}else{
    // Else Block
    alert('You don’t know? ECMAScript!');
}

// Show the sign | importance: 2
// Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.
let userInput = +prompt('Enter your number ', 0);
if (userInput > 0){
    alert(1);
}else if (userInput < 0) {
    alert(-1);
}else{
    alert(0)
}

// Rewrite 'if..else' into '?' | importance: 5
// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// rewrite into '?'
let message = (login == 'Employee') ? 'hello' :
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No Login' :
'';