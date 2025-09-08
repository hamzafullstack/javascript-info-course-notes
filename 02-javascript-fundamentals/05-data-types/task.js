// String quotes
// importance: 5
// What is the output of the script?
// --- ⤵️⤵️⤵️⤵️⤵️⤵️⤵️ --- exercise details ---
// let name = "Ilya";
// alert( `hello ${1}` ); // ?
// alert( `hello ${"name"}` ); // ?
// alert( `hello ${name}` ); // ?

// --- ⤴️⤴️⤴️⤴️⤴️⤴️⤴️ --- exercise details ---

// Answer the question without running the code.

// SOLUTION:

let name = "Ilya"; // variable name
// expression is a number 1
alert( `hello ${1}` ); // hello 1
// expression is a string "name"
alert( `hello ${"name"}` ); // hello name
// the expression is a variable, embed it
alert( `hello ${name}` ); // Hello Ilya

// Answer: ilya 1, Hello name, Hello Ilya