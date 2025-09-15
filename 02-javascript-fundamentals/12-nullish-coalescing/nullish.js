// source https://javascript.info/nullish-coalescing-operator

// Nullish coalescing operator '??'
// The nullish coalescing operator is written as two question marks ??.

// A recent addition
// This is a recent addition to the language. Old browsers may need polyfills.
// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

// It’s just a nice syntax to get the first “defined” value of the two.
// result = (a !== null && a !== undefined) ? a : b;
// The common use case for ?? is to provide a default value.

// For example, here we show user if its value isn’t null/undefined, otherwise Anonymous:
let user;
console.log(user ?? 'Anonymous') // Anonymous (user is undefined)
// Here’s the example with user assigned to a name:
let userOne = 'Hamza';
console.log(userOne ?? 'Anonymous'); // Hamza because (user is not null/undefined)

// We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.
let firstName = null;
let lastName = null;
let nickName = 'Wolfbyte';
// shows the first defined value:
console.log(firstName ?? lastName ?? nickName); // Wolfbyte

// Comparison with ||
// The OR || operator can be used in the same way as ??,
// For example, in the code above we could replace ?? with || and still get the same result:

// shows the first truthy value:
console.log(firstName || lastName || nickName); // Wolfbyte
// Historically, the OR || operator was there first. It’s been there since the beginning of JavaScript, so developers were using it for such purposes for a long time.

// the nullish coalescing operator ?? was added to JavaScript only recently, and the reason for that was that people weren’t quite happy with ||.

// The important difference between them is that:
// || returns the first truthy value.
// ?? returns the first defined value.

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0
// In practice, the zero height is often a valid value, that shouldn’t be replaced with the default. So ?? does just the right thing.

// Precedence
// The precedence of the ?? operator is the same as ||. They both equal 3 in the MDN table.
// So we may need to add parentheses in expressions like this:
let Height = null;
let Width = null;
// important: use parentheses
let area = (Height ?? 100) * (Width ?? 50);
console.log(area); // 5000
// without parentheses
let area1 = height ?? 100 * width ?? 50;

// ...works this way (not what we want):
let area2 = height ?? (100 * width) ?? 50;

// Using ?? with && or ||
// Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.

// Summary
// The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.
// The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.
// It’s forbidden to use it with || or && without explicit parentheses.
// The nullish coalescing operator is a recent addition to the language, so it may need polyfills in older environments.