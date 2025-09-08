// ===== Type Conversions in JS =====
// JS automatically converts values in operations or functions when needed.

// ----- String Conversion -----
// Convert any value to string explicitly using String(value)
let value = true;
alert(typeof value);   // Boolean
value = String(value); // becomes "true"
alert(typeof value);   // String

// Implicit conversion happens in alert, concatenation, etc.
alert('Hello ' + 123); // "Hello 123"

// ----- Number Conversion -----
// Numeric conversion occurs automatically in math operations
alert('6' - '2'); // 4  (strings converted to numbers)
alert('6' / '2'); // 3

// Explicit conversion
let str = '123';
let num = Number(str); // 123
alert(typeof num);     // number

// Invalid conversion gives NaN
let invalidNum = Number('abc');
alert(invalidNum); // NaN

// Conversion rules
// undefined → NaN
// null      → 0
// true      → 1, false → 0
// " 123 "   → 123 (whitespaces trimmed)
// ""        → 0
// Invalid strings → NaN

// ----- Boolean Conversion -----
// Occurs in logical operations or explicitly via Boolean(value)
alert(Boolean(''));       // false
alert(Boolean(0));        // false
alert(Boolean(null));     // false
alert(Boolean(undefined));// false
alert(Boolean(NaN));      // false
alert(Boolean('0'));      // true
alert(Boolean(' '));      // true
alert(Boolean(123));      // true

// ----- Summary -----
// Most used type conversions: String, Number, Boolean
// String(value) → converts to string
// Number(value) → converts to number
// Boolean(value) → converts to true/false
