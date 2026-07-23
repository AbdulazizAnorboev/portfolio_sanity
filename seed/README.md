# Dataset seed (4 languages)

`seed_4lang.ndjson` is a full export of the `production` dataset with every
localized field in **English (en), Korean (kr), Uzbek (uz) and Russian (ru)**.
System documents and drafts are excluded; the Telegram bot token/id are redacted.

## Restore into a dataset
```bash
npx sanity dataset import seed/seed_4lang.ndjson production --replace
```
(Re-add the real Telegram token afterwards if the contact form needs it, and
rotate that token — it was previously exposed via the public read API.)
