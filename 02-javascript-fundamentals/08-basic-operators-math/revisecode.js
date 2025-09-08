// Basic operators, maths
// We know many operators from school. They are things like addition +, multiplication *, subtraction -, and so on.
// Terms: “unary”, “binary”, “operand”
// An operator is unary if it has a single operand.
let unary1 = 1;
unary1 = - unary1;
alert(unary1); // -1, unary negation was applied
// An operator is binary if it has two operands.
let binary1 = 1, binary2 = 3;
alert(binary2 - binary1); //2, binary minus subtracts values

// Remainder %
// The remainder operator %, despite its appearance, is not related to percents.
// The result of a % b is the remainder of the integer division of a by b.
alert(5 % 2); // 1, the remainder of 5 divided by 2
alert(8 % 3); // 2, the remainder of 8 divided by 3
console.log(8 % 4); // 0, the remainder of 8 divided by 4.

// Exponentiation **
// The exponentiation operator a ** b raises a to the power of b. In school maths, we write that as ab.
console.log(2 ** 2); // 2² = 4
console.log(2 ** 3); // 2³ = 8
console.log(2 ** 4) // // 2⁴ = 16
// Just like in maths, the exponentiation operator is defined for non-integer numbers as well. 
// a square root is an exponentiation by ½:
alert(2 ** (1/2) );  // 2 (power of 1/2 is the same as a square root)
console.log(2 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

// String concatenation with binary +
//  if the binary + is applied to strings, it merges (concatenates) them:
let user = 'My' + 'String';
alert(user); // MyString
// Note that if any of the operands is a string, then the other one is converted to a string too.
alert('2' + 3); // '23'
alert('3' + 2); // '32'
alert( 2 + 2 + '1'); // "41" and not "221" | operators work one after another.
alert('1' + 2 + 2); // "122" not 14 
// The first operand is a string, the compiler treats the other two operands as strings too

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.
console.log(7 - '2'); // 5. converts '2' to a number
console.log('8' / '2'); // 4. converts both operands to numbers

// Numeric conversion, unary +
// The plus + exists in two forms: binary and unary
// No effect on numbers
let input = 1;
alert(+input); //1
let input2 = -2;
alert(+input2) // -22
// Converts non-numbers
alert(+true); // 1
alert(+''); // 0
// it actually does the same thing as Number(...), but is shorter.
//  if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?
let apples = '2';
let watermelons = '3';
console.log(apples + watermelons); // 23
// the binary plus concatenates strings
// If we want to treat them as numbers, we need to convert and then sum them:
let toyota = '3';
let nissan = '4';
// both values converted to numbers before the binary plus
console.log(+toyota + +nissan); // 7.. 3+4=7
// the longer variant
console.log(Number(toyota) + Number(nissan)); // 7

// Operator precedence
// If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.
// note that unary operators are higher than corresponding binary ones):

// Assignment
// an assignment = is also an operator. It is listed in the precedence table with the very low prior
let assign = 2 * 2 + 1;
alert(assign); // 5.
// Assignment = returns a value
// The fact of = being an operator, not a “magical” 
// Here’s a demo that uses an assignment as part of a more complex expression:
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert(a); // 3
alert(c); // 0
// In the example above, the result of expression (a = b + 1) is the value which was assigned to a (that is 3). It is then used for further evaluations.

// Chaining assignments
// Another interesting feature is the ability to chain assignments:
let var1, var2, var3;
var1 = var2 = var3 = 2 + 2;
console.log(var1); // 4
console.log(var2); // 4
console.log(var3); // 4.
// Chained assignments evaluate from right to left.
// for the purposes of readability it’s better to split such code into few lines:
m = 2 + 2;
n = m;
o = m;
// That’s easier to read, especially when eye-scanning the code fast.

// Modify-in-place
// We often need to apply an operator to a variable and store the new result in that same variable.
let x = 2;
x = x + 5;
x = x * 2;
// We often need to apply an operator to a variable and store the new result in that same variable.

x += 5; // now x = 7 (same as x = x + 5)
x *= 2; // now x = 14 (same as x = x * 2)
//  “modify-and-assign” operators exist for all arithmetical and bitwise operators
let f = 2;
f *= 3 + 5; // right part evaluated first, same as f *= 8
alert(f); // 16

// Increment/decrement
// Increasing or decreasing a number by one is among the most common numerical operations.
// Increment ++ increases a variable by 1:
let counter = 2;
counter++; // works the same as counter = counter + 1, but is shorter
console.log(counter); // 3

// Decrement -- decreases a variable by 1:
let counter2 = 2;
counter2--; // works the same as counter = counter - 1, but is shorter
alert(counter2); // 1
// Important:
// Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.
// The operators ++ and -- can be placed either before or after a variable.
// When the operator goes after the variable, it is in “postfix form”: counter++.
// The “prefix form” is when the operator goes before the variable: ++counter.
// The prefix form returns the new value while the postfix form returns the old value 

let counter3 = 1;
let g = ++counter3; // *
alert(g); // 2
// let’s use the postfix form:
let counter4 = 1;
let h = counter4++; // (*) changed ++counter to counter++
alert(h); // 1
// (*), the postfix form counter++ also increments counter but returns the old value.
// summary
let counter5 = 0;
++counter5;
counter5++;
alert(counter5); // 2, the lines above did the same
// If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
let counter6 = 0;
console.log(++counter6); // 1
// If we’d like to increment a value but use its previous value, we need the postfix form:
let counter7 = 0;
console.log(counter7++); // 0

// Increment/decrement among other operators
// The operators ++/-- can be used inside expressions as well.
let counter8 = 1;
alert(2 * ++counter8); // 4.
// Compare with:
let counter9 = 1;
alert(2 * counter9++); // 2 because counter++ returns the "old" value
// such notation usually makes code less readable.
// We advise a style of “one line – one action”:
let counter10 = 1;
alert(2 * counter ); // 6
counter++;

// Bitwise operators
// Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.
// These operators are used very rarely, We won’t need these operators any time soon,

// Comma
// The comma operator , is one of the rarest and most unusual operators. 
alert(1 + 2, 3 + 4); // 3, 7
let commaNum = (1 + 3, 3 + 4);
alert(commaNum); // 7 (the result of 3 + 4).
//  first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.
// Comma has a very low precedence
// he comma operator has very low precedence, lower than =, so parentheses are important in the example above.
// hat’s why we’re mentioning them. But usually they don’t improve code readability so we should think well before using them.
