// Worst fix, funniest commit — a one-line make.fun entry
// Writes one line (63/100 chars) to /output/entry.txt, no trailing newline.
// The fix that fixed the crash by deleting the feature.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "fix: resolved the",
  "crash by",
  "making the",
  "whole feature",
  "unreachable",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
