// Worst Fix Ever: Funniest Commit Message — writes one line to /output/entry.txt
// Gate: 63 chars (max 100), one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "fix: resolved the crash",
  "by making the whole",
  "feature unreachable",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
