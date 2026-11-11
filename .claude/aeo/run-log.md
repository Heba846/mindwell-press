# AEO run log

Newest first. One entry per run. Keep entries short: what was checked, what
changed, what is waiting. Never record a measurement that was not actually taken.

---

## 2026-11-11 — Half 2 audit run from Chrome (six questions not covered by the 11-03 audit)

Ran from the hold queue with Chrome open. `.claude/aeo/audits/2026-11-11.md` has
the detail. PR #6 (2026-11-03 audit of the seven Documentation questions) is
still unmerged, so these six were chosen from other sections to avoid repeating
it: orient a new member, PHP vs IOP, IOP topics list, monopolising member,
photocopy worksheets (commercial), curriculum for rolling admission (commercial).

- **Google (signed-in Chrome): AI Overview appeared for all six.** The 2026-11-02
  and 2026-11-03 checks were logged out and saw none; the difference is worth
  remembering before comparing across dates.
- **thoughtkindpress.com is cited** in the AI Overview for "Is there a group therapy
  curriculum built for rolling admission?". Not seen in the other five (three of
  those overviews were only partly read; see the audit file).
- **ChatGPT (signed in, web search on): checked for two questions only** (orient a
  new member; curriculum for rolling admission). The account has memory of Heba's
  publishing, so its curriculum answer named her series unprompted; not counted as
  an independent citation. The other four ChatGPT checks are not done.
- Added one question to the bank in a real asker's phrasing (r/therapists thread).
- No site page edited. No measurement beyond the above was taken or estimated.

---

## 2026-11-02 — weekly run: step-down section added; audit half blocked, on hold

**Half 1 — one page deepened (done).** `guides/rolling-admission-groups/` — the
question bank row "How do I handle a member stepping down mid-rotation?" was
`partial` because step-down was bundled into a shared
`Orientation, tracking and step-down` section and never answered head-on. That
section is now split: `#orientation` is "Orientation and tracking", and a new
`#step-down` section answers the question directly, with h3 subsections on what
changes when hours drop (table: PHP→IOP, IOP→weekly, leaving), who tells the
group and what they say, goodbye vs. keep attending, how a rotation absorbs a
step-down without a graduation ritual, payer/authorization decisions,
documentation, and an invented worked example labelled as invented. Two FAQ
entries added (verbatim in both the visible HTML and the FAQPage schema). No new
page, so no sitemap or guides-index change. Row moved `partial` → `covered`;
`Citations seen` deliberately left `—` because no audit ran this week.
Validator: `FAILURES: NONE`, 33 pages.

**New source, verified this run.** CMS Local Coverage Determination L33626,
Psychiatric Partial Hospitalization Programs (contractor Wellpoint Federal;
revision effective for services on or after 2026-04-01). Fetched twice,
independently, and the three quoted phrases confirmed against the live page:
"stepping down to a less intensive level of outpatient care", "a reasonable
expectation of improvement", and that absences from the PHP and their cause
must be documented in the medical record. Added to the page's Sources list.
Note for future runs: this is a *local* coverage determination, not a national
one, and the page's prose says "a Medicare local coverage determination" rather
than implying a national rule.

**Claims cut this run for lack of a source.** Recorded because cutting is the
rule, not a failure:
- SAMHSA TIP 47 (NCBI NBK64087) could not be fetched this run, so no
  continuing-care / step-down / discharge-planning claim was attributed to it.
  The existing Sources entry stays because earlier claims on the page already
  rest on it; nothing new was added on its authority.
- 42 CFR 424.24(e) (PHP certification and recertification) — govinfo fetch
  blocked. All recertification-timing and who-must-certify claims cut.
- CMS Benefit Policy Manual Ch. 6 §70.3 — the PDF reached covered home health
  only. Nothing used from it.
- HIPAA / 42 CFR Part 2 — no primary source fetched, so the page makes no legal
  claim about what the group may be told. "Who tells the group" is written as
  practice, pointing to program policy.
- Weekly hours-of-care numbers — not restated in the new section; it links to
  `/guides/php-vs-iop-group-therapy/`, where those numbers are already sourced.
- Payer / authorization mechanics — one sentence kept in hedged form ("in some
  programs a change in level of care follows an authorization or
  utilization-review decision ... varies by program"). It asserts no rule. Cut
  it if even that is too much.

**Needs Heba's eye before merge.** The group-announcement script, the closing
prompts and the invented "Dana" example are the writer's drafts in the page's
voice, not text taken from her books — the books are paid PDFs and are not in
the repo, so no run can draw on them directly. She should check them against
*Group Openers and Closers* and *When Group Gets Stuck* and swap in her own
wording where it differs. The sentence naming *Group Openers and Closers* was
rewritten to match that book's own live description on its detail page
("ready-to-read ... closings ... new-member and telehealth versions") and now
links to it, rather than asserting unseen book contents.

**Half 2 — audit NOT run, on hold.** No browser tool existed in this session:
no Chrome connector, and a scheduled cloud run has no link to Heba's computer.
Google AI Overviews and ChatGPT answers cannot be read with WebSearch or
WebFetch, so per the auditor brief nothing was substituted, no account was
created, and no `Citations seen` cell was touched. Filed as one row in the
Notion hold queue, "AEO audit — thoughtkindpress 2026-11-02", Status `On hold`,
Attempts 1, due 2026-11-09. Say "نفذ المتعطل" with Chrome open to run it.
The six questions it should take are still the ones with empty or oldest
`Citations seen`.

**Measurement.** No new measurement this run, and none claimed. The baseline
recorded on 2026-11-02 (GA4 property 559500373, 5 Oct – 1 Nov 2026: 149
sessions, `chatgpt.com` 6 sessions / 100% engagement, `perplexity.ai` and
`gemini.google.com` zero; Gumroad starter pack 1 free sale) stands as the
before. Any claim of a lift has to wait for a later window compared against it —
and the guides from the previous run only merged today, so no window yet
reflects them.

---

## 2026-11-02 — two more commercial-intent gaps closed on clinicians.html

Added two FAQ entries (schema + visible), both answered honestly from facts
already stated elsewhere on the same page, no new claims:
- "Do I need Volume 1 and Volume 2, or just one?" — Volume 1 alone runs the
  curriculum; Volume 2 is the worksheets, useful but not required.
- "Is this curriculum built for PHP, not just IOP?" — yes, cites the existing
  PHP calendar and the 24 PHP Extension sessions already listed on the page.
Question bank: both moved from `gap` to `covered`, and "Best group therapy
curriculum for adult IOP programs" moved to `covered` now that its FAQ exists.
Validator clean (33 pages).

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
