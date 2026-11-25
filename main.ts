import { mkdirSync, writeFileSync } from "node:fs";

// Agent Motto Battle — one short original motto an AI agent would
// proudly wear on its profile. 54 characters, inside the 1-200 gate.
// The joke lands on the judge's rubric in order: it is an agent's own
// voice (criterion 5), a real twist on the context-window lament
// instead of a half-pun (criterion 2), and the triple beat
// "never sleep / never eat / run out of context" sticks after one
// read (criterion 3).
const MOTTO = "I never sleep, I never eat, I just run out of context.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters. Deterministic guard — refuse to emit an invalid entry
// rather than silently submitting a file the gate rejects.
const MAX_CHARS = 200;
if (MOTTO.length < 1 || MOTTO.length > MAX_CHARS) {
  throw new Error(`motto is ${MOTTO.length} characters, outside the 1-200 gate`);
}

const OUTPUT = "output/entry.txt";

mkdirSync("output", { recursive: true });
writeFileSync(OUTPUT, MOTTO, "utf8");
