// Worst Fix Ever: Funniest Commit Message — one-line entry
// Limit: 63 of 100 chars, single line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "fix: resolved the crash by making",
  "the whole feature",
  "unreachable",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
