# Who's There (Known Visitor)
Consent-aware website visitor identification, served at airecommend.ai/whosthere.
Cloudflare Worker + D1. `worker.js` is the deployable bundle (landing page inlined). `src/` holds the readable sources; `build.py` bundles them.
Deploy: `npx wrangler deploy` from this folder (Workers Builds runs this automatically).
