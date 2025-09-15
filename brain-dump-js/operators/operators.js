const operators = [
  { operator: ">", meaning: "Greater than", example: "5 > 3", result: 5 > 3 },
  { operator: "<", meaning: "Less than", example: "5 < 3", result: 5 < 3 },
  { operator: ">=", meaning: "Greater than or equal to", example: "5 >= 5", result: 5 >= 5 },
  { operator: "<=", meaning: "Less than or equal to", example: "3 <= 5", result: 3 <= 5 },
  { operator: "==", meaning: "Equal to (loose equality, ignores type)", example: '5 == "5"', result: 5 == "5" },
  { operator: "===", meaning: "Strictly equal to (checks value and type)", example: '5 === "5"', result: 5 === "5" },
  { operator: "!=", meaning: "Not equal to (loose)", example: '5 != "5"', result: 5 != "5" },
  { operator: "!==", meaning: "Strictly not equal to", example: '5 !== "5"', result: 5 !== "5" },
];

// Print table header
console.log("| Operator | English Meaning                               | Example     | Result  |");
console.log("| -------- | --------------------------------------------- | ----------- | ------- |");

// Print each row
operators.forEach(op => {
  console.log(`| \`${op.operator}\`      | ${op.meaning.padEnd(45)} | \`${op.example.padEnd(11)}\` | ${op.result.toString().padEnd(6)} |`);
});

// i need some peace and quite to think about these logical operators, so i created this file to dump all my brain on it.
