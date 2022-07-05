import { fetchTags } from "./lib.mjs";

const sites = ["https://11ty.dev/", "https://mozilla.org/"];

for (const site of sites) {
  const tags = await fetchTags(site, "meta[name=generator]");
  console.log(`${site}\n${tags.join("\n")}\n`);
}
