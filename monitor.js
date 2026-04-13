const SUBREDDITS = ['realestate', 'Renters'];
const KEYWORDS = ['rent', 'apartment', 'neighborhood', 'lease', 'utilities', 'moving'];
const USER_AGENT = 'personal-apartment-hunt/1.0 by personal user';

async function fetchPosts(subreddit) {
  const res = await fetch(`https://www.reddit.com/r/${subreddit}/new.json?limit=25`, {
    headers: { 'User-Agent': USER_AGENT },
  });
  const json = await res.json();
  return json.data.children.map((c) => c.data);
}

async function main() {
  const results = [];

  for (const subreddit of SUBREDDITS) {
    const posts = await fetchPosts(subreddit);
    const matched = posts.filter((p) => {
      const text = `${p.title} ${p.selftext}`.toLowerCase();
      return KEYWORDS.some((kw) => text.includes(kw));
    });
    results.push(...matched);
  }

  if (results.length === 0) {
    console.log('Nothing relevant today.');
    return;
  }

  console.log(`\n=== Apartment Hunt Daily Digest (${new Date().toLocaleDateString()}) ===\n`);
  results.forEach((p) => {
    console.log(`- ${p.title}`);
    console.log(`  https://reddit.com${p.permalink}\n`);
  });
}

main().catch(console.error);
