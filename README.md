# Reddit Daily Digest (Personal Learning Project)

I'm a software engineer based in China, working toward joining a global tech company. Part of that journey is improving my English and genuinely understanding American culture and daily life — not just textbook English, but how people actually talk about real things like housing, jobs, and everyday problems.

I built this small script to help with that. It fetches recent posts from a couple of subreddits and prints a short digest to my terminal each morning. It's part of my daily routine — like reading a newspaper, but for real Reddit discussions.

It also serves as a portfolio piece to demonstrate basic API integration and text filtering skills to potential employers.

**What it does:**
- Fetches the latest public posts from r/realestate and r/Renters
- Filters for topics relevant to everyday American life
- Prints a plain-text summary to the console — nothing stored, no database

**What it does NOT do:**
- Store any data
- Make more than ~10 API calls per day
- Serve any commercial purpose

The code is public because I like keeping my learning projects open.

## how to run

```bash
node monitor.js
```