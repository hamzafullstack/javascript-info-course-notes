const forLoopParts = [
  { part: "begin", example: "let i = 0", description: "Executes once upon entering the loop." },
  { part: "condition", example: "i < 3", description: "Checked before every loop iteration. If false, the loop stops." },
  { part: "body", example: "console.log(i)", description: "Runs again and again while the condition is truthy." },
  { part: "step", example: "i++", description: "Executes after the body on each iteration." },
];

// Print table header
console.log("| Part       | Example          | Description                                   |");
console.log("| ---------- | ---------------- | --------------------------------------------- |");

// Print rows
forLoopParts.forEach(p => {
  console.log(`| ${p.part.padEnd(10)} | ${p.example.padEnd(14)} | ${p.description.padEnd(43)} |`);
});

console.log("\n---");
console.log("General Algorithm:");
console.log("1. Run begin once");
console.log("2. If condition is true → run body → run step → repeat");
console.log("3. If condition is false → stop loop\n");

console.log("Example Run (for (let i = 0; i < 3; i++)):");
for (let i = 0; i < 3; i++) {
  console.log(`Iteration with i = ${i}`);
}
// i = 0, condition true → log 0 → i = 1
// i = 1, condition true → log 1 → i = 2
// i = 2, condition true → log 2 → i = 3
// i = 3, condition false → loop ends
console.log("That is, begin executes once, and then it iterates: after each condition test, body and step are executed. If you are new to loops, it could help to go back to the example and reproduce how it runs step-by-step on a piece of paper.");