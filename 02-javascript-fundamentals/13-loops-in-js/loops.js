// ===== Loops: while and for =====
// need notes: go on https://javascript.info/while-for

// We often need to repeat actions. Loops are a way to repeat the same code multiple times.

// The “while” loop
// The while loop has the following syntax:
// while (conditon){
    // code here
// }

// While the condition is truthy, the code from the loop body is executed.
// For instance, the loop below outputs i while i < 3:
let i = 0;
while (i < 3) {
    alert(i); // shows 0, then 1, then 2
    i++;
}
//  single execution of the loop body is called an iteration.
// If i++ was missing from the example above, the loop would repeat (in theory) forever.
// For instance, a shorter way to write while (i != 0) is while (i):
let a = 3;
while(a){
    alert(a);
    // when i becomes 0, the condition becomes falsy, and the loop stops
    a--;
}

// Curly braces are not required for a single-line body
// if the loop body has a single statement, we can omit the curly braces {…}:
let b = 10;
while(b) console.log(b--);

// The “do…while” loop
// The condition check can be moved below the loop body using the do..while
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
let c = 0;
do{
    console.log(c);
    c++;
}while(c < 3);
// should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy

// The “for” loop
// The for loop is more complex, but it’s also the most commonly used loop.
// for (begin; condition; step) {
//   ... loop body ...
// }

for (let d = 0; d < 3; d++){
    // shows 0, then 1, then 2
    console.log(d);
}

// That is, begin executes once, and then it iterates: after each condition test, body and step are executed.
// Here’s exactly what happens in our case:
// for (let i = 0; i < 3; i++) alert(i)

// run begins
let e = 0;
// if condition → run body and run step
if (e < 3);{console.log(e); e++}
// if condition → run body and run step
if (e < 3);{console.log(e); e++}
// if condition → run body and run step
if (e < 3);{console.log(e); e++}
// ...finish, because now i == 3

// Inline variable declaration
// the “counter” variable 'F' is declared right in the loop. This is called an “inline” variable declaration.
for (let f = 0; f < 3; f++) {
    console.log(f); //0, 1, 2
    //Such variables are visible only inside the loop.
}
// alert(f); //ReferenceError: f is not defined

let h = 0;
for(let h = 0; h < 5; h++){
    console.log(h); // 1,2,3,4
}
console.log(h); //visible, because declared outside of the loop

// Skipping parts
// Any part of for can be skipped.
let l = 0; // we have i already declared and assigned
for(; l < 3; l++){
    console.log(l); // no need for "begin"
}
// We can also remove the step part:
let m = 0;
for(; m < 3;){
    console.log(m++);
}
// This makes the loop identical to while (i < 3).
// We can actually remove everything, creating an infinite loop:

// for infinite loop
for (;;) {
  // repeats without limits
}
// Please note that the two for semicolons ; must be present. Otherwise, there would be a syntax error.


// Breaking the loop
// Normally, a loop exits when its condition becomes falsy.
// But we can force the exit at any time using the special break directive.
let sum = 0;
while (true){
    // the loop below asks the user for a series of numbers:
    let value = +prompt('Enter your number: ', '');
    if(!value) break; // (*)
    sum += value;
}
console.log('Sum: ' + sum);
// The break directive is activated at the line (*) if the user enters an empty line or cancels the input.
// That causes the loop to end immediately, and the control flow jumps to the line after the loop (console.log in our case).


// Continue to the next iteration
// The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
// We can use it if we’re done with the current iteration and would like to move on to the next one.
// The loop below uses continue to output only odd values:
for (let n = 0; n < 10; n++){
    // if true, skip the remaining part of the body
    if(n % 2 == 0) continue;
    console.log(n); // 1, then 3, 5, 7, 9
}
// The even numbers are simply skipped.

// The continue directive helps decrease nesting
// A loop that shows odd values could look like this:
for (let oddz = 0; oddz < 20; oddz++) {
    if(oddz % 2) {
        console.log(oddz);
    }
}
// From a technical point of view, Surely, we can just wrap the code in an if block instead of using continue.

// No break/continue to the right side of ‘?’
// Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.
// (i > 5) ? alert(i) : continue; // continue isn't allowed here

// Labels for break/continue
// Sometimes we need to break out from multiple nested loops at once.
// A label is an identifier with a colon before a loop:
// labelName: for (...) { ... }
// The break <labelName> statement in the loop below breaks out to the label:
outer: for (let o = 0; o < 3; o++) {
    for (let p = 0; p < 3; p++){
        let input = prompt(`value coord (${o},${p})`, '');
        // if an empty string or canceled, then break out of both loops
        if(!input) break outer; // will breaks loop. (*)
        // do something with the value...
    }
}
console.log('Task Done.!')
// In the code above, break outer looks upwards for the label named outer and breaks out of that loop.
// So the control goes straight from (*) to alert('Done!').
// The continue directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.

// Labels do not allow to “jump” anywhere
// Labels do not allow us to jump into an arbitrary place in the code.
// break label; // jump to the label below (doesn't work)
// label: for (...) // it is impossible to do this
// A break directive must be inside a code block. Technically, any labelled code block will do,

// 99.9% of the time break is used inside loops, 
// A continue is only possible from inside a loop.

// summary
// We covered 3 types of loops:
// while – The condition is checked before each iteration.
// do..while – The condition is checked after each iteration.
// for (;;) – The condition is checked before each iteration, additional settings available.
// for loop → when the exact number of iterations is known.
// while loop → when you want to run based only on a condition, and the count isn’t fixed.
// To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.
// If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.
// break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.

// If you ever get stuck or don’t understand, you can check references at (https://javascript.info/while-for). I love this website.





