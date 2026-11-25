// The Perfect Pickup Line — make.fun competition entry.
//
// Writes one single-line pickup line (<= 200 characters) to /output/entry.txt.
// No network, no model calls, fully deterministic: the line is a literal
// string, so every run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran a million simulations of this exact moment, and in every single one, you smiled — so I figured I'd better come say hi.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
