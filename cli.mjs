#!/usr/bin/env node

import { fetchTags } from "./lib.mjs";

const argv = process.argv.slice(2);

for (const arg of argv) {
  const tags = await fetchTags(arg, process.env.TAG);
  console.log(`${arg}\n${tags.join("\n")}\n`);
}
