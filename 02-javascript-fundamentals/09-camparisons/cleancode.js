// --- Basic Comparisons ---
alert(2 > 1);      // true, 2 is greater than 1
alert(1 < 2);      // true
alert(2 == 1);     // false, equality check
alert(2 != 1);     // true, not equal

// Assign comparison to variable
let result = 7 > 6;
alert(result);     // true

// --- String Comparisons ---
// Compared letter-by-letter (lexicographical order, case-sensitive)
alert('Z' > 'A');     // true
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be');  // true

// --- Different Types ---
// Strings converted to numbers
alert('2' > 1);   // true
alert('01' > 1);  // true

// Booleans converted to numbers
alert(true == 1);  // true
alert(false == 0); // true

// Funny case with string '0' and number 0
let a = 0;
let b = '0';
console.log(Boolean(a)); // false
console.log(Boolean(b)); // true
alert(a == b);           // true (type conversion)

// --- Strict Equality ---
alert(0 == false);   // true (type conversion)
alert(' ' == false); // true

alert(0 === false);  // false, types differ
alert(null === undefined); // false, strict equality
alert(null == undefined);  // true, special non-strict rule

// --- Null & Undefined in Math Comparisons ---
alert(null > 0);   // false
alert(null == 0);  // false
alert(null >= 0);  // true
alert(undefined > 0);  // false
alert(undefined < 0);  // false
alert(undefined == 0); // false

// --- Summary ---
// 1. Comparison operators return boolean values.
// 2. Strings are compared letter-by-letter (case matters).
// 3. Different types converted to numbers (except ===).
// 4. null == undefined, but nothing else.
// 5. Be careful comparing null/undefined with >, <, >=, <=.
