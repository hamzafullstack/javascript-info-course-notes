// Functions in Javascript
// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// Function Declaration
/*To create a function we can use a function declaration.
It looks like this:*/
function showMessage () {
    alert("Hello World");
}
// Our new function can be called by its name: showMessage().
showMessage();
showMessage(); //he call showMessage() executes the code of the function

// The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses
//  the code of the function, also named “the function body”, between curly braces.

/*function name(parameter1, parameter2, ... parameterN) {
 // body
}*/

// Local variables
// A variable declared inside a function is only visible inside that function
function greetings (){
    let message = ('Hello! I Love Javascript'); // Local Variable....
    alert(message);
}
greetings(); // Hello! I Love Javascript
// alert( message ); // <-- Error! The variable is local to the function

// Outer variables
// A function can access an outer variable as well, for example:
let userName = "Hamza";
function userGreeting (){
    let message = 'Hello, ' + userName;
    console.log(message);
}
userGreeting(); // Hello, Hamza
// The function has full access to the outer variable. It can modify it as well.
let userOne = 'Ahmed'; // Global Variable.
function changeValue () {
    userOne = 'Ghafoor'; // (1) changed the outer variable
    let message = "Hello, " + userOne;
    alert(message)
}
changeValue();
alert(userOne); // dangerZone | the value was modified by the function
// The outer variable is only used if there’s no local one.
// If a same-named variable is declared inside the function then it shadows the outer one

let userTwo = 'Kashif'; // Global Variable.
function innerVar (){
    let userTwo = 'Murad'; // declare a local variable.
    let message = "Hey, " + userTwo;
    console.log(message);
}
// the function will create and use its own userTwo variable
innerVar(); // Hey, Murad.
alert(userTwo); // Kashif, the function did not access the outer variable

// Global variables
// Variables declared outside of any function, such as the outer userName in the code above, are called global..
// Global variables are visible from any function (unless shadowed by locals).
// It’s a good practice to minimize the use of global variables. Modern code has few or no globals.

// Parameters
// We can pass arbitrary data to functions using parameters.
// In the example below, the function has two parameters: from and text
function userMessage(from, text) {
    // parameters: from, text
    console.log(from + ' : ' + text);
}
userMessage('Hamza', 'Hello'); // Hamza : Hello
userMessage('Hamza', 'How have you been?'); // Hamza : How have you been?
// When the function is called in lines (*) and (**), the given values are copied to local variables from and text. Then the function uses them.

// we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:
function userMessageTwo(fromUser, text){
    fromUser = '*' + fromUser + '*'; // make "from" look nicer
    alert(fromUser + ' : ' + text);
    
}
let fromUser = 'Hamza Baloch';
userMessageTwo(fromUser, 'Hello'); // *Hamza Baloch* : Hello
// the value of "fromUser" is the same, the function modified a local copy
alert(fromUser) // Hamza Baloch
// When a value is passed as a function parameter, it’s also called an argument

/*A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term)
 We declare functions listing their parameters, then call them passing arguments.
In the example above, one might say: “the function userMessageTwo is declared with two parameters, then called with two arguments: from and "Hello"”.*/


// Default values
// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.
function test(arg1, arg2){
    alert( arg1 + ' : ' + arg2);
}
test(); // undefined : undefined
test('hello'); // hello : undefined
// That’s not an error. Such a call would output "hello : undefinedd". As the value for text isn’t passed, it becomes undefined.
// We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:
function defaultControl(from, text = 'no text given'){
    console.log(from + ' : ' + text);
}
defaultControl('kashif') // kashif : no text given
// Now if the text parameter is not passed, it will get the value "no text given".
defaultControl('kashif', 'Hello!') // kashif : Hello!
// If we pass undefined as an argument, the default value will be used:
defaultControl('kashif', undefined) // kashif : no text given
// The default value is used only if the argument is not provided or is explicitly undefined. Any other value, including null, is treated as a valid value.
// Here "no text given" is a string, but it can be a more complex expression, which is only evaluated and assigned if the parameter is missing. So, this is also possible:
function newFunction (from, text = anotherFunction()){
    // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

// Evaluation of default parameters
// In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.
// In the example above, anotherFunction() isn’t called at all, if the text parameter is provided.
// On the other hand, it’s independently called every time when text is missing.

// Default parameters in old JavaScript code
// Several years ago, JavaScript didn’t support the syntax for default parameters So people used other ways to specify them.
// Nowadays, we can come across them in old scripts.
// For example, an explicit check for undefined:
function oldJs(from, text){
    if (text == undefined){
        text = 'no text given';
    }
    alert(from + ' : ' + text);
}
oldJs('user360'); // user360 : no text given
// …Or using the || operator:
function show(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  text = text || 'no text given';
  // body code.
}

// Alternative default parameters
// Sometimes it makes sense to assign default values for parameters at a later stage after the function declaration.
// We can check if the parameter is passed during the function execution, by comparing it with undefined:
function alternatepera(text){
    if(text == undefined){
        text = 'Empty Message';
    }
    console.log(text);
}
alternatepera(); // Empty Message..
alternatepera('Hello!'); // Hello!

// Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”:
function showCount(count) {
    // if count is undefined or null, then "unknown" will be assigned
    // other falsy values (0, "", false) are considered normal values
    alert(count ?? "unknown");
}
showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

// Returning a value
// A function can return a value back into the calling code as the result.
// The simplest example would be a function that sums two values:
function sum(a, b){
    return a + b;
}
let result = sum(10, 12);
console.log(result); // 22
// The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).
// There may be many occurrences of return in a single function. For instance:
function checkAge(age){
    if(age >= 18){
        return true;
    }else{
        return confirm('Do you have permission from your parents?');
    }
}
let age = prompt('how old are you? : ', 18);
if (checkAge(age)){
    console.log('Access Granted');
}else{
    console.log('Access Denied');
}

// It is possible to use return without a value. That causes the function to exit immediately.
function showMovie(age){
    if(!checkAge(age)){
        return;
    }
    console.log('showing you the movie....');
    //.....
}
// In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the console.log.

// A function with an empty return or without it returns undefined
// If a function does not return a value, it is the same as if it returns undefined:
function doNothing(){
    // empty
}
console.log(doNothing() == undefined); // true
// An empty return is also the same as return undefined:

// Never add a newline between return and the value
// For a long expression in return, it might be tempting to put it on a separate line, like this:
/*return
 (some + long + expression + or + whatever * f(a) + f(b))*/
//  That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:
// return;
//  (some + long + expression + or + whatever * f(a) + f(b))
// So, it effectively becomes an empty return.
// If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:

/*return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
  */
//   And it will work just as we expect it to.

// Naming a function
/*Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.
It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.*/

// Function starting with…

// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.
// Examples of such names:

/*showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false*/

//  a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.

// One function – one action
// A function should do exactly what is suggested by its name, no more.
// Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).
// checkPermission – would be bad if it displays the access granted/denied message (should only perform the check and return the result).


// Ultrashort function names
/*Functions that are used very often sometimes have ultrashort names.
For example, the jQuery framework defines a function with $. The Lodash library has its core function named _.
These are exceptions. Generally function names should be concise and descriptive.*/

// Functions == Comments
// Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it’s definitely a good thing.


function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}
// The second variant uses an additional function isPrime(n) to test for primality:
function showprimes(n){
    for (let a = 2; a < n; a++) {
        if(!isPrime(a)) continue;
        alert(a); // prime.
    }
}
function isPrime(n){
    for (let a = 2; a < n; a++ ) {
        if(n % a == 0) return false;
    }
    return true;
}

/*The second variant is easier to understand, isn’t it? Instead of the code piece we see a name of the action (isPrime). Sometimes people refer to such code as self-describing.
So, functions can be created even if we don’t intend to reuse them. They structure the code and make it readable*/

//                          ========Summary=========
// A function is a reusable block of code that performs a specific task.
// We can pass data to functions using parameters.
// A function can return a value back to the calling code as the result.
// A function can be used multiple times. It’s a good practice to split code into functions, each of which does one thing and does it well.
// Function declaration syntax:
/*function name(parameter1, parameter2, ... parameterN) {
 // body
}*/
// Function parameters can have default values, for example: function func(x = 1) { … }.
// A function can access outer variables. But it cannot see local variables of outer functions.
// A function can modify outer variables. But it’s usually better to avoid that.
// A function can be declared in any place of the code. It can be called earlier than it is declared.
// A function without return or with an empty return returns undefined.
// A function can have multiple return statements.
// A function should do exactly what is suggested by its name, no more. If it does more than one thing, consider splitting it into smaller functions.
// A function name should be as short as possible, but descriptive enough, so that someone reading the code gets an indication of what the function does.
// A function is a value. It can be assigned, copied or passed to another function.
// Function expressions and arrow functions are covered in the next chapters.
// for references visit https://javascript.info/function-basics
//                      ==============Finished============