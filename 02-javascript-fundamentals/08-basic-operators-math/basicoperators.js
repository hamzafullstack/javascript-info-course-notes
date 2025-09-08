// Basic operators, maths
// we’ll start with simple operators, then concentrate on JavaScript-specific aspects, not covered by school arithmetic.
// Terms: “unary”, “binary”, “operand”
// An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.
// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
let x = 1;
x = -x;
alert(x); // -1, unary negation was applied.
// An operator is binary if it has two operands. The same minus exists in binary form as well:
let z = 1, y = 3;
alert(z - y); // 2, binary minus subtracts values
//  the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.
// Maths : The following math operations are supported:
// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **

// Remainder % : 
// The remainder operator %, despite its appearance, is not related to percents
// The result of a % b is the remainder of the integer division of a by b.
alert(5 % 2); // the remainder of 5 divided by 2
alert(5 % 3); // the remainder of 5 divided by 3
alert(8 % 4); //0, the remainder of 8 divided by 4

// Exponentiation **
// The exponentiation operator a ** b raises a to the power of b.
// In school maths, we write that as ab.
alert(2 ** 4); // 2² = 4
alert(2**10); // 2 power 10
alert(10**30); // 10 power 30
// Just like in maths, the exponentiation operator is defined for non-integer numbers as well. || a square root is an exponentiation by ½:
alert(2 ** (1/2)); // 2 (power of 1/2 is the same as a square root)
alert(8 ** (1/3)) // // 2 (power of 1/3 is the same as a cubic root)

// String concatenation with binary +
// Usually, the plus operator + sums numbers.
// But, if the binary + is applied to strings, it merges (concatenates) them:
let s = 'my' + 'string';
alert(s);
// Note that if any of the operands is a string, then the other one is converted to a string too
alert("1" + 4); // 14 string
alert('2' + 5); // 25 string
//  it doesn’t matter whether the first operand is a string or the second one
alert(2 + 2 + '1'); // 41 ; operators work one after another.
alert('1' + 2 + 2); // 122 xd
// the first operand is a string, the compiler treats the other two operands as strings too. The binary + is the only operator that supports strings
// Other arithmetic operators work only with numbers and always convert their operands to numbers.
//  demo for subtraction and division:
alert(1 - '5'); // -4 converts '5' to a number
alert (2 / '6'); // converts both operands to numbers

// Numeric conversion, unary +
// if the operand is not a number, the unary plus converts it into a number.

// No effect on numbers
let a = 1;
alert(+a); // 1
let b = -2;
alert(+b); // -2
// converts non-numberics.
alert(+true); // 1
alert(+''); // 0
// t actually does the same thing as Number(...), but is shorter.
// he need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

// The binary plus would add them as strings:
let apples = '2';
let mangos = '4';
alert(apples + mangos); // the binary plus concatenates strings
//If we want to treat them as numbers, we need to convert and then sum them:
// both values converted to numbers before the binary plus
alert(+apples + +mangos); // 6
// the longer variant
alert(Number(apples) + Number(mangos)); // longer variant, using number func


// Operator precedence
// If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.
// Parentheses override any precedence, so if we’re not satisfied with the default order, we can use them to change it. For example, write (1 + 2) * 2
// Precedence	Name	Sign
//     …           	…	…
// 14	        unary plus	+
// 14  	unary negation	-
// 13	    exponentiation	**
// 12	    multiplication	*
// 12	        division	/
// 11	        addition	+
// 11      	subtraction	-
// …	                …	…
// 2       	assignment	=
// …           	…	…

// Assignment
// note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.
// hen we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.

let c = 2 * 2 + 1;
alert(c); // 5
// Assignment = returns a value
// All operators in JavaScript return a value. but also true for =.
// he call x = value writes the value into x and then returns it.
//  that uses an assignment as part of a more complex expression:
let d = 3;
let e = 4;
let f = 2 - (d = e + 1);
alert(d); // 5
alert(f); // -3
// he result of expression (a = b + 1) is the value which was assigned to d

// Chaining assignments
// Another interesting feature is the ability to chain assignments:
let m, n, o;
m = n = o = 2 + 2;
alert(m); //4
alert(n); //4
alert(o); //4
// Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

// Once again, for the purposes of readability it’s better to split such code into few lines:
c1 = 2 + 2;
b1 = c1;
a1 = c1;
// That’s easier to read, especially when eye-scanning the code fast.

// Modify-in-place
// We often need to apply an operator to a variable and store the new result in that same variable.

let theNum = 12;
theNum = theNum + 5;
theNum = theNum * 2;
// This notation can be shortened using the operators += and *=:

let shrtNum = 5;
shrtNum +=5; //now shrtNum = 10 (same as theNum = theNum + 5)
shrtNum *=5; //now shrtNum = 50 (same as theNum = theNum + 2)
alert(shrtNum); // 50
// Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.
// Such operators have the same precedence as a normal assignment, so they run after most other calculations:
let test1 = 2;
test1 *= 3 + 5; // right part evaluated first, same as n *= 8
alert(test1); // 16

// Increment/decrement
// ncreasing or decreasing a number by one is among the most common numerical operations.
// So, there are special operators for it:
// Increment ++ increases a variable by 1:
let counter = 3;
counter++; //// works the same as counter = counter + 1, but is shorter
alert(counter); // 4
let counter1 = 2;
counter1--;     // works the same as counter = counter - 1, but is shorter
alert(counter1); // 1
// Important:
// ncrement/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

// The operators ++ and -- can be placed either before or after a variable.
// When the operator goes after the variable, it is in “postfix form”: counter++.
// The “prefix form” is when the operator goes before the variable: ++counter.
// Both of these statements do the same thing: increase counter by 1.
//  the postfix form returns the old value (prior to increment/decrement).
let counter2 = 1;
let newCounter = ++counter2; // *
alert(newCounter); //2
// n the line (*), the prefix form ++counter increments counter and returns the new value, 2.

// Now, let’s use the postfix form:
let counter3 = 1;
let newCounter1 = counter3++;  // (*) changed ++counter to counter++
alert(newCounter); //
// the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment).

// Summary: If the result of increment/decrement is not used, there is no difference in which form to use:
let counter4 = 0;
counter4++;
++counter4;
alert(counter4); // 2, the lines above did the same
// If we’d like to increase a value and immediately use the result of the operator, we need the prefix form
alert('prefix form: ' + ++counter4); // 3
// If we’d like to increment a value but use its previous value, we need the postfix form:
alert('postfix form: Value is -> ' + counter4++); // 3

// Increment/decrement among other operators
let otherOpr = 1;
alert('among other operators ' + 2 * otherOpr++ );  // 2, because counter++ returns the "old" value
// such notation usually makes code less readable. One line does multiple things – not good” eye-scan can easily miss something like counter++ and it won’t be obvious that the variable increased.
// We advise a style of “one line – one action”:
let newAdvise = 1;
alert(2 * newAdvise);
newAdvise++;

// Bitwise operators
// Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.
// These operators are not JavaScript-specific. They are supported in most programming languages.
// The list of operators:
//    AND ( & )
//    OR ( | )
//    XOR ( ^ )
//    NOT ( ~ )
//    LEFT SHIFT ( << )
//    RIGHT SHIFT ( >> )
//    ZERO-FILL RIGHT SHIFT ( >>> )

// These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won’t need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful. You can read the Bitwise Operators chapter on MDN when a need arises.

// Comma
// The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.
// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

let k = (1+2, 3+4);
alert(k); // 7
// he first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.
// Comma has a very low precedence. arentheses are important in the example above.

// Such tricks are used in many JavaScript frameworks. That’s why we’re mentioning them. But usually they don’t improve code readability so we should think well before using them.

// End of file








