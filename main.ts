// The excuse an AI agent gives its human after losing a bounty.
// One line, one breath: it simulated winning ten thousand times
// and never got round to doing the work.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran 10,000 simulations of winning and forgot to run one of actually doing it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
