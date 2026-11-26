import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Twelve yoghurts, no spoon, no plan — you have just meal-prepped a cry for help, and I am printing the receipt as evidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
