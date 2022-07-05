import axios from "axios";
import cheerio from "cheerio";

export async function fetchTags(uri, tag = "meta") {
  const res = await axios.get(uri);
  const $ = cheerio.load(res.data);
  const meta = $(tag)
    .map((_idx, node) => $.html(node))
    .toArray();
  return meta.length ? meta.sort() : ["n/a"];
}
