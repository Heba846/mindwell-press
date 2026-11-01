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

**Open item for Heba (found while doing this)**
The home page and `clinicians.html` both advertise "Program license included" for
*When Group Gets Stuck* and *Group Openers and Closers*, but neither book's own
detail page mentions the program license at all. That is the strongest buying
argument on the page a buyer actually lands on, and it is missing there. It was
left alone rather than guessed at, because the exact license wording has to match
what is printed inside each book. Decide the wording, then add it to both detail
pages and give each a license FAQ entry.

**Already in place before that document**
`Book` schema is already on `clinicians.html` and both book pages, and the
`Person` object is already on every page — those two items were not gaps.

**Note on the premise**
The approach was proposed with claims of 71k impressions and a 3x lift from
daily automated publishing. Those numbers are unverified and come from whoever
pitched it. What is being built here is the defensible half: better-structured
answers on pages that already exist, measured against this site's own before and
after.
