# AEO run log

Newest first. One entry per run. Keep entries short: what was checked, what
changed, what is waiting. Never record a measurement that was not actually taken.

---

## 2026-11-02 — program license added to both book pages (closes the open item below)

Both book detail pages were missing the program-license line that the home
page and `clinicians.html` already advertise for them. Rather than guess new
wording, this reuses the exact sentences already live and approved on
`clinicians.html` for each book — not a new claim, just making the strongest
buying argument visible on the page a buyer actually lands on:
- `books/when-group-gets-stuck/index.html`: added the license line to the hero
  (matching clinicians.html's "stuck" section) and a new FAQ "Does buying this
  book include a program license?" covering the included single-facilitator
  permission and the $69 team-license upgrade.
- `books/group-openers-and-closers/index.html`: same pattern, matching
  clinicians.html's "openers" section (no team-license tier exists for this
  title, so the FAQ doesn't mention one).
Both in schema and visible text; validator clean (33 pages).

## 2026-11-02 — GA4 and Gumroad baseline recorded

**Traffic baseline — GA4 property 559500373, last 28 days (5 Oct – 1 Nov 2026), 149 sessions total**

By default channel group:
- Direct: 101 (67.8%)
- Organic Social: 22 (14.8%)
- Referral: 17 (11.4%)
- **AI Assistant: 6 (4.0%)** — 100% engagement rate, 1m37s avg engagement time, 7.5 events/session (GA4's own channel grouping; this is where AI-chat referrers land)
- Organic Search: 3 (2.0%)

By session source (same 28 days, all 10 rows):
1. (direct) — 101 (67.8%)
2. heba846.github.io — 17 (11.4%), 52.94% engagement — traffic landing on the raw GitHub Pages domain instead of thoughtkindpress.com; worth checking internal/external links for the raw github.io URL
3. linkedin.com — 13 (8.7%)
4. **chatgpt.com — 6 (4.0%), 100% engagement, 1m37s avg** — this is the whole AI Assistant bucket; no other row
5. facebook.com — 5 (3.4%)
6. google — 3 (2.0%)
7. instagram — 1 (0.7%)
8. l.facebook.com — 1 (0.7%)
9. m.facebook.com — 1 (0.7%)
10. threads — 1 (0.7%)

**perplexity.ai and gemini.google.com: zero sessions in this window.** Only
`chatgpt.com` shows up as an AI-answer referrer so far, and it is already the
single most-engaged source on the site (100% engagement, longest average time).
This is the pre-launch baseline — the 9 edited guides and 3 new guides from this
run are on branch `ai-visibility-2026-11`, not yet merged, so this traffic
predates all of today's changes.

**First live audit — 2026-11-02, Google only, logged out**
Checked 3 questions (`.claude/aeo/audits/2026-11-02.md`): no AI Overview
appeared for any of them. ChatGPT half skipped — no signed-in session was open
in the tab, and per the auditor's rule, no account was created to check it.
Clearest finding: "best group therapy curriculum for adult IOP programs" has
two direct book competitors ranking (a Google Books listing and an Amazon
listing, both naming session count and modality up front) and
`clinicians.html` isn't visible for it. Added one new FAQ to `clinicians.html`
answering that exact question honestly — what the curriculum is built for and
who it is not for, no "best" claim — in both the FAQPage schema and the
visible FAQ section. Validator still clean (33 pages).

**Gumroad — Starter Pack (free), as of 2026-11-02**
One sale on the account total: `nassauharvey82@gmail.com`, Oct 28 12:46 AM,
Free IOP/PHP Group Therapy Starter Pack, $0. 11 visits on that product, 4 on the
Cheat Sheet, 9 on *When Group Gets Stuck* sample — no further conversions yet.
(Separately, a new Gumroad **follower** `elgarhyheba5@gmail.com` was added same
day — a profile follow, not a sale; flagged to Heba as possibly her own test
account given the similarity to her real address.)

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

**From the AEO strategy document Heba shared (Nov 2)**
Adopted: short direct answer in the first 40–60 words on commercial pages too,
question-shaped headings, one idea per paragraph, comparison tables, FAQPage on
the sales pages, commercial-intent questions as their own class, and sourcing
questions from real posts instead of guessing. All of this is now in `CLAUDE.md`
and the question bank.
Not adopted, deliberately: (a) a daily cycle publishing an article a day — on a
12-guide clinical site that reads as spam, and machine-drafted clinical guidance
at that rate is the real reputational risk; weekly, with depth, instead.
(b) building a knowledge base of the exact passages competitors got cited for and
writing from it — that produces derivative pages and, in a clinical niche, moves
other people's unverified claims onto this site. The auditor records the answer
*shape* and never the text. (c) `sameAs` links to Google Scholar or ORCID unless
those profiles exist and are substantial. (d) creating a ChatGPT account to run
the checks.

**Open item for Heba — closed 2026-11-02**
The home page and `clinicians.html` both advertise "Program license included" for
*When Group Gets Stuck* and *Group Openers and Closers*, but neither book's own
detail page mentioned the program license at all. Fixed by reusing the exact
wording already live on `clinicians.html` for each book — see the 2026-11-02
entry above. No new wording was invented.

**Already in place before that document**
`Book` schema is already on `clinicians.html` and both book pages, and the
`Person` object is already on every page — those two items were not gaps.

**Note on the premise**
The approach was proposed with claims of 71k impressions and a 3x lift from
daily automated publishing. Those numbers are unverified and come from whoever
pitched it. What is being built here is the defensible half: better-structured
answers on pages that already exist, measured against this site's own before and
after.
