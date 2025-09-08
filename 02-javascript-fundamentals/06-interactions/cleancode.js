// 📝 Interactions in JavaScript

// Alert: simple message
alert('Hello, world!'); // code waits until user presses OK

// Prompt: user input
let age = prompt('How old are you?', 100); // asks user for age, default 100
alert(`You are ${age} years old!`); // shows entered age

// Confirm: yes/no choice
let isBoss = confirm('Are you the boss?'); // true if OK, false if Cancel
alert(`User said: ${isBoss}`);

// Summary
// alert → message only
// prompt → message + input, returns string or null
// confirm → message + OK/Cancel, returns boolean
