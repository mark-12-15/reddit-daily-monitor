# reddit-daily-monitor

just a little script i made to track rental prices across different cities. i was curious if rent in certain areas is going up or down and couldn't find a good source, so i just pull from r/landlord and r/realestate directly.

it looks for posts mentioning locations and rent amounts, saves them to a json file. nothing fancy. i read through the results manually and keep notes in a spreadsheet.

maybe i'll turn this into something more useful later, maybe not.

## how to run

```bash
node monitor.js
```

results go into `results.json`