// Tasks
// Last loop value
// importance: 3
// What is the last value alerted by this code? Why?
let i = 3;

while (i) {
  alert( i-- );
}
// answer: 1, because it count backword, 3,2,1
// The values 3 and 2 are alerted first, and then when i becomes 1, it is alerted and then decremented to 0.

// === Which values does the while loop show? ===
// importance: 4
// For every loop iteration, write down which value it outputs and then compare it with the solution.
// Both loops alert the same values, or not?
// === 1. ===
// The prefix form ++i:
let a = 0;
while (++a < 5) alert( a );
// Answer: its prefix--> 1 to 4. ++a first increments then returns the new value.
// === 2. ===
// The postfix form i++
let b = 0;
while (b++ < 5) alert( b );
// answer: postfix form of b++ increments--> 1 to 5. returns the old value, then increments it.

// === Which values get shown by the "for" loop? ===
// importance: 4
// For each loop write down which values it is going to show. Then compare with the answer.
// Both loops alert same values or not?
// The postfix form
for (let c = 0; c < 5; c++) alert( c );
// answer: 0 to 4 in both cases.
// The prefix form:
for (let d = 0; d < 5; ++d) alert( d );
// 0 to 4 in both cases. 

// Output even numbers in the loop
// importance: 5
// Use the for loop to output even numbers from 2 to 10.
for (let isEven = 0; isEven <= 22; isEven++){
    //  operator % to get the remainder
    if(isEven % 2===0){
        console.log(isEven);
    }
}
// answer: 2,4,6,8,10,12,14,16,18,20,22


// Replace "for" with "while"
// importance: 5
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let e = 0; e < 3; e++) {
  alert( `number ${e}!` );
}

// ===> while loop <===
let f = 0;
while(f < 3){
    console.log(`Number ${f}!`);
    f++;
}
// answer: 0,1,2

// Repeat until the input is correct
// importance: 5
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

// solution
// i use infinite loop here
while (true){
    // input from the user or visitor
    let userInput = prompt('Enter a number greater than 100: ', 0);
    // with nested if statement
    if(userInput > 100) break;
    if(userInput == '') break;
    if(userInput == null) break;
}
console.log('Code Executed Successfully...!')
// i use infinite loop here
while (true){
    // input from the user or visitor
    let userInput2 = prompt('Enter a number greater than 100: ', 0);
    // with || OR operator
    if(userInput2 > 100 || userInput2 == '' || userInput2 == null) break;
}
console.log('Code Executed Successfully...!') // finished..

// Solution provided by javascript.info on there solution tab
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num); // <-- solution provided by javascript.info.... they used do...while loop.

// Output prime numbers
// importance: 3
// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.
// ====== solution ====== Note: got help from chatgpt and https://www.geeksforgeeks.org/
let num1 = 10; // change this to any number
for (let candidate = 2; candidate <= num1; candidate++) {
    let isPrime = true; // assume candidate is prime
    for (let i = 2; i < candidate; i++) {
        if (candidate % i === 0) {
            isPrime = false; // found a divisor
            break;
        }
    }
    if (isPrime) {
        console.log(candidate); // output prime number
    }
}
// solution provided by javascript.info on there solution tab
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}
// finished..!