// Need Notes?? learn more on--> https://javascript.info/logical-operators

// Logical operators
// || (OR)
// There are four possible logical combinations:
alert(true || true); // true
alert(true || false); // true
alert(false || true); // true
alert(false || false); // false -- the case when both operands are false

// works just like if( true || false )
if (1 || 0){
    alert('truthy');
}

// Most of the time, OR || is used in an if statement to test if any of the given conditions is true.
let hour = 9;
if(hour < 10 || hour < 18){
    alert('office Time is closed!');
}

// We can pass more conditions:
let hours = 12;
let isWeekend = true;
if(hours <10 || hours <18 || isWeekend){
    alert('The Office time is closed.'); // it is the weekend
}

// OR "||" finds the first truthy value
alert(1 || 0); // 1 (1 is truthy)
alert(null || 1); // 1 (1 is the first truthy value)
alert(null || 0 || 1); // 1 (the first truthy value)
alert(undefined || null || 0); // 0 (all falsy, returns the last value)
alert(0 || null || undefined); //undefined (all falsy, returns the last value)

// Getting the first truthy value from a list of variables or expressions.
let firstName = '';
let lastName = '';
let nickName = 'Wolfbyte';
console.log(firstName || lastName || nickName || 'Anonymous'); // Wolfbyte
// If all variables were falsy, "Anonymous" would show up.

// Short-circuit evaluation.
true || alert('not printed');
false || alert('printed');

// && (AND)
// he AND operator is represented with two ampersands &&:
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

// An example with if:
let Hour = 12;
let minute = 30;
if(Hour == 12 && minute == 30){
    console.log('Time is 12:30');
}

// Just as with OR, any value is allowed as an operand of AND:
if(1 && 0){
    console.log('wont work, because the result is falsy');
}

// AND “&&” finds the first falsy value
// Given multiple AND’ed values:
// if the first operand is truthy,
alert(1 && 0); // 0
alert(1 && 5); // 5
// if the first operand is falsy,
alert(null && 5); // null
alert(0 && 'no matter what'); // 0
// We can also pass several values in a row. See how the first falsy one is returned:
alert(1 && 2 && null && 3); // null
// When all values are truthy, the last value is returned:
alert(1 && 2 && 3); // 3, the last one

// Precedence of AND && is higher than OR ||
// The precedence of AND && operator is higher than OR ||.
// So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).

// Don’t replace if with || or &&
// Sometimes, people use the AND && operator as a “shorter way to write if”.
let x = 1;
(x > 0) && alert('Greater than Zero.'); // That is, only if (x > 0) is true.
// we basically have an analogue for:
let z = 1;
if (z > 0) alert('greater than zero.!'); // recommended.

// ! (NOT)
// he boolean NOT operator is represented with an exclamation sign !.
// The syntax is pretty simple:
alert(!true); // false
alert(!0); // true

// A double NOT !! is sometimes used for converting a value to boolean type:
alert(!!'not an empty STRING'); // true
alert(!!null); //false

// There’s a little more verbose way to do the same thing – a built-in Boolean function:
alert(Boolean('not an empty STRING')); // true
alert(Boolean(null)); // False

// The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.


// ======= FINISHED ======= //
// Need Notes?? learn more on--> https://javascript.info/logical-operators