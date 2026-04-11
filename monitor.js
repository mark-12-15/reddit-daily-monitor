import { writeFileSync } from 'fs';

const SUBREDDIT = 'landlord';
const KEYWORDS = ['landlord', 'tenant', 'rental', 'maintenance', 'bookkeeping'];
const USER_AGENT = 'personal-monitor/1.0 by personal user';

async function main() {
  const res = await fetch(`https://www.reddit.com/r/${SUBREDDIT}/new.json?limit=100`, {
    headers: { 'User-Agent': USER_AGENT },
  });
  const json = await res.json();
  const posts = json.data.children.map((c) => c.data);

  const matched = posts.filter((p) => {
    const text = `${p.title} ${p.selftext}`.toLowerCase();
    return KEYWORDS.some((kw) => text.includes(kw));
  });

  const output = matched.map((p) => ({
    title: p.title,
    url: `https://reddit.com${p.permalink}`,
    created: new Date(p.created_utc * 1000).toISOString(),
  }));

  writeFileSync('results.json', JSON.stringify(output, null, 2));
  console.log(`Found ${output.length} matching posts, saved to results.json`);
}

main().catch(console.error);
