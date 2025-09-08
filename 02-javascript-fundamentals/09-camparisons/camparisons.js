// Comparisons | We know many comparison operators from maths.
// In JavaScript they are written like this:
// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
// Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

// Boolean is the result
// All comparison operators return a boolean value:
// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.
alert(2 > 1); // True -> correct.
alert(1 < 2); // True because 1 is less than 2
alert(2 == 1); // false 2 and 1 arenot equal.
alert(2 != 1); // true 2 is not equal to 1
// A comparison result can be assigned to a variable, just like any value:
let result = 7 > 6;
alert(result); // true

// String comparison
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
// --->  In other words, strings are compared letter-by-letter.
alert('Z' > 'A'); // true
alert('Glow' > 'Glee'); // True
alert('Bee' > 'Be'); // true.
// the algorithm to compare two strings is simple:Compare the first character of both strings. 

// Not a real dictionary, but Unicode order
// The comparison algorithm given above is roughly equivalent to the one used in dictionaries or phone books, but it’s not exactly the same.
// For instance, case matters. A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a".

// Comparison of different types
// When comparing values of different types, JavaScript converts the values to numbers.
alert('2' > 1); //  true, string '2' becomes a number 2
alert('01' > 1); // true, string '01' becomes a number 1
// For boolean values, true becomes 1 and false becomes 0
alert(true == 1); // true
alert(false == 0); // true, funny xd, 

// A funny consequence
let a = 0;
console.log(Boolean(a)); // false
let b = '0';
console.log(Boolean(b)); // true
alert(a == b); // true
// An equality check converts values using the numeric conversion

// Strict equality
// A regular equality check == has a problem. It cannot differentiate 0 from false

alert( 0 == false); // true
// The same thing happens with an empty string:
alert(' ' == false); // true
// This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

// A strict equality operator === checks the equality without type conversion.
console.log(0 === false); // false, because the types are different
// There is also a “strict non-equality” operator !== analogous to !=.
// The strict equality operator is a bit longer to write, but makes it obvious what’s going on and leaves less room for errors.

// Comparison with null and undefined
// There’s a non-intuitive behavior when null or undefined are compared to other values.
// For a strict equality check ===
// These values are different, because each of them is a different type.
alert(null === undefined); // false --> strict
// For a non-strict check ==
// There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.
alert( null == undefined); // true.

// For maths and other comparisons < > <= >=
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.


// Strange result: null vs 0
// Let’s compare null with a zero:
alert(null > 0); // false
alert(null == 0); // false
alert(null >= 0); // true. “null is greater than 0

// An incomparable undefined
// The value undefined shouldn’t be compared to other values:
alert(undefined > 0); // false
alert(undefined < 0); // false
alert(undefined == 0); // false.
// return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
// The equality check returns false because undefined only equals null, undefined, and no other value.

// Avoid problems
// Treat any comparison with undefined/null except the strict equality === with exceptional care.
// Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.

// Summary
// Comparison operators return a boolean value.
// Strings are compared letter-by-letter in the “dictionary” order.
// When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
// The values null and undefined equal == each other and do not equal any other value.
// Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.





