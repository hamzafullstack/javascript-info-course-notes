// interactions: alert, prompt, confirm
//  let’s see a couple of functions to interact with the user: alert, prompt and confirm.
alert('Hello, world!'); // shows a message and waits for the user to press "OK"
// alert is often used to show some information to the user.
// It’s a modal window, so the code execution stops until the user presses "OK".

// prompt
// The function prompt accepts two arguments:
let age = prompt('How old are you?', 100); // asks the user to enter a value.
// The first argument is the question (the text to show the user).
// The second argument is optional. It sets the initial value for the input field.
alert(`You are ${age} years old!`);
// The function prompt returns the text entered by the user or null if the user pressed "Cancel".
// In IE: always supply a default
// The second parameter is optional, but if we don’t supply it, Internet Explorer will insert the text "undefined" into the prompt.

// confirm
// The syntax:
let isBoss = confirm('Are you the boss?'); // asks the user to press "OK" or "Cancel".
// The function confirm shows a modal window with a question and two buttons: OK and Cancel.


// Summary
// We covered 3 browser-specific functions to interact with visitors:
// alert - shows a message.
// prompt - shows a message and waits for the user to input text.
// confirm - shows a message and waits for the user to press "OK" or "Cancel".
// All these functions are modal, which means that they stop the code execution until the visitor responds..
