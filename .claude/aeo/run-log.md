# AEO run log

Newest first. One entry per run. Keep entries short: what was checked, what
changed, what is waiting. Never record a measurement that was not actually taken.

---

## 2026-11-02 — baseline, no live AI-answer data yet

**Done**
- Added a visible `Common questions` section and matching `FAQPage` JSON-LD to
  all 9 existing guides; answers drawn only from each article's own claims.
- Set `dateModified` and an `Updated` byline on all 10 edited guides.
- New guides: `group-therapy-note-formats-girp-dap-birp-soap`,
  `php-vs-iop-group-therapy`, `orient-new-member-therapy-group`.
- Cross-linked new and existing guides; updated the guides index and sitemap.
- Fixed a pre-existing mismatch in `iop-group-topics` where the FAQPage text
  differed from the visible answer.
- Added `tools/validate.py`, `CLAUDE.md`, the question bank and the two agent
  briefs.
- Branch `ai-visibility-2026-11`, PR opened, not merged.

**Not done / blocked**
- No AI Overviews or ChatGPT citation check has been run. Every `Citations seen`
  cell in the question bank is empty for that reason, not because nothing was
  found. Needs a Chrome session.
- No baseline measurement of current AI-answer traffic. Before claiming any
  improvement, record GA4 referrals from `chatgpt.com`, `perplexity.ai` and
  `gemini.google.com`, plus Gumroad starter-pack sign-ups, for the four weeks
  before 2026-11-02.

**Note on the premise**
The approach was proposed with claims of 71k impressions and a 3x lift from
daily automated publishing. Those numbers are unverified and come from whoever
pitched it. What is being built here is the defensible half: better-structured
answers on pages that already exist, measured against this site's own before and
after.
