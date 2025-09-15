const logicalOperators = [
  { operator: "||", meaning: "Logical OR (returns first truthy value)", example: "true || false", result: true || false },
  { operator: "&&", meaning: "Logical AND (returns first falsy value)", example: "true && false", result: true && false },
  { operator: "!", meaning: "Logical NOT (negates the value)", example: "!true", result: !true },
  { operator: "??", meaning: "Nullish coalescing (returns right value if left is null or undefined)", example: "null ?? 'default'", result: null ?? 'default' },
];

// Print table header
console.log("| Operator | English Meaning                                             | Example           | Result  |");
console.log("| -------- | ----------------------------------------------------------- | ---------------- | ------- |");

// Print each row
logicalOperators.forEach(op => {
  console.log(`| \`${op.operator}\`      | ${op.meaning.padEnd(59)} | \`${op.example.padEnd(16)}\` | ${op.result.toString().padEnd(6)} |`);
});
