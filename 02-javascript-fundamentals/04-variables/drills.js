// ## 🔥 Variable Drills

// ### 1. Reassignment & Const Test

// * Create a `let` variable called `city` with your favorite city name.
// * Change it to another city.
// * Now, try the same with a `const` variable (observe the error).

let city = 'islamabad';
city = 'Dera Bugti';
//const
const city2 = 'karachi';
// city2 = 'Nawabshah'; // TypeError: Assignment to constant variable.


// ### 2. Concatenation Practice

// * Create 3 variables: `firstName`, `lastName`, `hobby`.
// * Combine them into a sentence like: `"Ameer Hamza enjoys Gaming"`.
// * Show the result with `alert`.

let firstName = 'Ameer', lastName = 'Hamza', hobby = 'Coding';
alert(firstName + ' ' + lastName  + ' loves ' + hobby)

// ### 3. Naming Challenge

// Give proper names (camelCase) to these situations:

// * Number of unread messages.
// * Price of a product in dollars.
// * The current year.

// (Just declare them, no need to assign values.)

let newMessages;
let currentPriceInUSD;
let presentYear;

// ### 4. Swap Values

// * Create two variables: `a = 10`, `b = 20`.
// * Swap their values **without reassigning directly**.
//   (Hint: use a third temporary variable).

let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;

// ### 5. Final Boss Drill – “Profile Card”

// * Store your **name**, **age**, **favorite color**, and **favorite skill** in variables.
// * Create one long string introducing yourself like:
//   `"Hi, my name is Ameer Hamza, I am 25, I love Gaming, and my favorite color is Black."`
// * Show it with `alert`.

let name = 'Ameer Hamza', age = 25 , favoriteColor = 'Black' , favoriteSkill = 'Gaming';
alert('My Name is ' + name  + ', I am ' + age + ', I love ' + favoriteSkill + ' and my favorite color is ' + favoriteColor );

// exercise complete
console.log('All variable drills completed successfully!'); // not part of the exercise, just a note for myself
// exercise given by Chatgpt for practice to master variables in JavaScript... I love it!