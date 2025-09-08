// Type Conversions 
// Most of the time, operators and functions automatically convert the values given to them to the right type.
// For example, alert automatically converts any value to a string to show it. Mathematical operations convert values to numbers.

// String Conversion
// String conversion happens when we need the string form of a value.
// We can also call the String(value) function to convert a value to a string:
let value = true;
alert(typeof value); // Boolean
value = String(value); // now value is a string "true"
alert(typeof value); // String
// String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.

// Numbers Conversion.
// Numeric conversion in mathematical functions and expressions happens automatically.
// when division / is applied to non-numbers:

alert('6' - '2'); // subtracted - strings are converted to numbers
alert('6' / '2'); // divided
// We can use the Number(value) function to explicitly convert a value to a number:

let str = '123';
alert(typeof str); // string
let num = Number(str); //becomes a number 123
alert(typeof num); // number
// Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.
// If the string is not a valid number, the result of such a conversion is NaN
let age = Number('an arbitrary string instead of a number');
alert(age); // NaN, conversion failed.

// Numeric conversion rules:
// Value	Becomes…
// undefined	NaN
// null	0
// true and false	1 and 0
// Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
// example
alert('     123     '); // 123
alert(Number('123A')); // NaN (error reading a number at "A")
alert(Number(true)); // 1
alert(Number(false)); // 0

// Boolean Conversion - its simplest one.
// The conversion rule:
// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.
alert(Boolean('')); // false
alert(Boolean('Hello World')); // true
alert(Boolean(1)); // true
alert(Boolean(0)); // false
// Please note: the string with zero "0" is true
//  in JavaScript, a non-empty string is always true.
alert(Boolean('0')); // true
alert(Boolean(' ')); //spaces, also true (any non-empty string is true)
// Summary
// The three most widely used type conversions are to string, to number, and to boolean.
// String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.
// Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

// The conversion follows the rules:
// ndefined	NaN
// null	0
// true / false	1 / 0
// string	The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.
// Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).
// , null, undefined, NaN, ""	false
// any other value	true
// Please note: 0, "", null, undefined, and NaN are “falsy” values. Other values are “truthy”.

