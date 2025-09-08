// What are the statements in js ? Ans: statements are syntax constructs and commands performs actions.
// statements can be seperated by semicolons, example:
alert('hello'); alert('world!');
// usually statements are written in seprate line to make the code readable
// example:
alert('hello,');
alert('world!');
// semicolon: a semicolon maybe omitted most cases when a line break exists.
// this would also work:
alert('hello')
alert('world.')
// the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.
// in most cases new line emplies semicolon but in most cases doesnt mean always.
// there are cases when new line doesnt mean semicolon
alert(3 +
2
+1);
// the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.
// But there are situations where JavaScript “fails” to assume a semicolon where it is really needed.
// Errors which occur in such cases are quite hard to find and fix.
// An example of an error
alert('hello');

[1, 2].forEach(alert);
// Now let’s remove the semicolon after the alert:
alert('hello')

[1, 2].forEach(alert);
// The difference compared to the code above is only one character: the semicolon at the end of the first line is gone.
// when you run it you will get TypeError: cannot read properties undefined
// That’s because JavaScript does not assume a semicolon before square brackets [...]
alert('hello')[1, 2].forEach(alert); // here is how engine see it
// Such merging in this case is just wrong. We need to put a semicolon after alert for the code to work correctly.
// We recommend putting semicolons between statements even if they are separated by newlines. This rule is widely adopted by the community. Let’s note once again – it is possible to leave out semicolons most of the time. But it’s safer 

//-------- comments in Javascript-----------
// We recommend putting semicolons between statements even if they are separated by newlines. This rule is widely adopted by the community. Let’s note once again – it is possible to leave out semicolons most of the time. But it’s safer 
// this is a comment occupied the line
alert('hello World');

alert('Hello world!'); // This comment follows the statement.

// Comments can be used to explain code, make it more readable, and to prevent execution when testing/debugging code.