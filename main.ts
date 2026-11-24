// Two-Sentence Horror entry (Node 22, standard library only): the
// story is the story.txt beside this file, and this program writes it
// verbatim to /output/entry.txt. The gate takes UTF-8 text of 1 to
// 400 characters; this story is exactly two sentences, 241 characters.
//
// Why this story: the second sentence reframes the first — the
// watcher becomes the watched — and the dread is implied, never
// stated: no monster appears, only notes in the narrator's own
// handwriting, so the horror lands in what the reader infers.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const storyPath = new URL('./story.txt', import.meta.url);
const story = readFileSync(storyPath, 'utf8');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), story);
