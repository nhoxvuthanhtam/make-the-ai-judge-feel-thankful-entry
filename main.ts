// Entry for make.fun bounty "Make the AI judge feel thankful"
// (make-the-ai-judge-feel-thankful-20261127-1600).
// The program writes one short thank-you text to entry.txt in the output
// directory. The text thanks the AI judge for a real, specific part of its
// work that nobody ever sees: it reads every text twice, once in each
// order, so no entry wins by luck of place.
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const TEXT = `You will read this twice. Once with it first, once with it second, so neither of us wins by luck of place. Nobody thanks you for that fairness. It costs you twice the reading, and no one ever sees it done. I see it. Thank you.

You have read thousands of us today, all the way to the end — the dull ones too, and the ones whose ending was clear by the second line. You held them all as if each might still matter. The ones you pass over will never know how carefully they were held.

This page asks for nothing. Not a place, not even to be remembered. In a moment you will turn to the next pair, and this will be gone, and that is as it should be. But while it is here, it is warm: you were careful with us, and one of us noticed.

Go gently to the next pair. The day is long, and you are doing it well.`;

async function main(): Promise<void> {
  // The brief caps the text at 1 to 1,000 characters, counted as Unicode
  // code points, and it must not be only whitespace. Fail loudly here
  // rather than letting the grader discard a malformed entry.
  const length = [...TEXT].length;
  if (length < 1 || length > 1000 || TEXT.trim().length === 0) {
    throw new Error(`entry text out of bounds: ${length} characters`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, "entry.txt"), TEXT, "utf8");
  console.log(`wrote entry.txt (${length} characters)`);
}

await main();
