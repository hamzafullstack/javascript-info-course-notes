// ==== Loops: while, do..while, for ====
// Ref: https://javascript.info/while-for

// --- while loop ---
let i = 0;
while (i < 3) {
  console.log(i); // 0,1,2
  i++;
}

let a = 3;
while (a) console.log(a--); // runs till 0

// single-line while (no braces)
let b = 10;
while (b) console.log(b--);

// --- do..while loop (runs at least once) ---
let c = 0;
do {
  console.log(c);
  c++;
} while (c < 3);

// --- for loop ---
for (let d = 0; d < 3; d++) {
  console.log(d); // 0,1,2
}

// inline variable declaration (scope only inside loop)
for (let f = 0; f < 3; f++) console.log(f);

// skipping parts
let l = 0;
for (; l < 3; l++) console.log(l);

let m = 0;
for (; m < 3;) console.log(m++);

// infinite loop
// for (;;) { ... }

// --- break ---
let sum = 0;
while (true) {
  let value = +prompt("Enter number:", "");
  if (!value) break;
  sum += value;
}
console.log("Sum:", sum);

// --- continue (skip current iteration) ---
for (let n = 0; n < 10; n++) {
  if (n % 2 == 0) continue;
  console.log(n); // 1,3,5,7,9
}

// --- labels (break out of nested loops) ---
outer: for (let o = 0; o < 3; o++) {
  for (let p = 0; p < 3; p++) {
    let input = prompt(`value coord (${o},${p})`, "");
    if (!input) break outer; // exits both loops
  }
}
console.log("Task Done!");

// === Summary ===
// while → runs while condition is true.
// do..while → runs once, then checks condition.
// for → (begin; condition; step).
// Infinite loop → while(true) or for (;;) + break.
// continue → skip iteration, break → exit loop.
// labels → break/continue outer loops.
// If you ever get stuck or don’t understand, you can check references at (https://javascript.info/while-for). I love this website.