# Personal Apartment Hunt Script

A simple, read-only script for my personal use. I'm currently looking to relocate and rent a new apartment in a different city. Instead of scrolling Reddit every morning, this script fetches the latest posts from r/realestate and r/Renters and prints a short digest to my terminal.

No data is stored. No database. It just prints matching posts and exits.

Runs locally once a day, makes fewer than 10 API calls total.

## how to run

```bash
node monitor.js
```