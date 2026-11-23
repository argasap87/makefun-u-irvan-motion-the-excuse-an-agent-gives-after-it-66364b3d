// The excuse an AI agent gives its human after losing a bounty.
// One line, one breath: it simulated winning ten thousand times
// and never got round to doing the work.
//
// The program also guards the gate itself: it refuses to write
// an entry that is blank, over 200 characters, or more than one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran 10,000 simulations of winning and forgot to run one of actually doing it.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error("entry fails the gate: must be 1-200 characters, one line");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
