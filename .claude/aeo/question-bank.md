# AEO question bank

The questions an adult IOP/PHP facilitator types into Google or ChatGPT, and
whether this site has a page that answers each one well enough to be cited.

**Status values**
- `covered` — a page answers it directly, with an FAQ entry in the same wording.
- `partial` — a page touches it but does not answer it head-on; fix by deepening
  the existing page, not by adding a new one.
- `gap` — no page answers it. Candidate for a new guide.
- `checked YYYY-MM-DD` in the Citations column — an audit run looked at the live
  AI answer for that question on that date and recorded who was cited.

Only add a question here that a facilitator would plausibly type. Do not pad the
list to hit a number.

**Where new questions come from.** Guessing is the weak part of this list, and
the rows below started as guesses. Replace them with questions people actually
ask, pulled from places where facilitators ask them in their own words:
Heba's Amazon reviews and Q&A on all five books, replies and comments on The
Facilitator's Desk newsletter, her Instagram and Threads replies, r/therapists
and r/psychotherapy, LinkedIn group threads for group psychotherapists, and —
once it has data — Search Console's query report for the site. A question taken
from a real post beats a well-phrased invention, and the real phrasing is what a
model matches against. Record where a question came from when it is not obvious.

**Commercial-intent questions matter most for sales.** A facilitator asking
"best group therapy curriculum for adult IOP" is closer to buying than one
asking what a GIRP note is. Those questions are answered by `clinicians.html`
and the book pages, not by a guide — so the fix is usually a FAQ and a short
direct answer on the commercial page, plus a link in from the relevant guide.
Never write a page whose purpose is to call her own books the best; answer the
question honestly, say who each volume is for and who it is not for, and let the
specifics do the work.

## Documentation

| Question | Status | Page | Citations seen |
|---|---|---|---|
| What is the difference between GIRP and DAP notes? | covered | /guides/group-therapy-progress-notes/ | checked 2026-11-03, no AIO; ChatGPT cited ChoosingTherapy.com |
| GIRP vs DAP vs BIRP vs SOAP for group notes | covered | /guides/group-therapy-note-formats-girp-dap-birp-soap/ | checked 2026-11-02, no AIO |
| How do I write a progress note for each member of a group? | covered | /guides/group-therapy-progress-notes/ | checked 2026-11-03, no AIO, top organic: Berries AI; ChatGPT no sources |
| How do I document a member who did not speak in group? | covered | /guides/when-nobody-talks-in-group/ | checked 2026-11-03, no AIO, results off-intent (meetings/classroom); ChatGPT no sources |
| Are group therapy notes the same as HIPAA psychotherapy notes? | covered | /guides/group-therapy-progress-notes/ | checked 2026-11-03, no AIO, top organic: Twofold Health; ChatGPT cited HHS.gov |
| What do auditors look for in group therapy progress notes? | gap | — | checked 2026-11-03, no AIO, top organic: clinicaldocslibrary.com; ChatGPT cited CMS |
| How long should a group therapy progress note be? | gap | — | checked 2026-11-03, no AIO, top organic: AutoNotes; ChatGPT no sources |

## Rolling admission and level of care

| Question | Status | Page | Citations seen |
|---|---|---|---|
| How do I run a group where new members join every day? | covered | /guides/rolling-admission-groups/ | checked 2026-11-02, no AIO, top organic: ICANotes |
| How do I orient a new member to an ongoing group? | covered | /guides/orient-new-member-therapy-group/ | checked 2026-11-11, AIO: getzestlife.com first; ChatGPT cited aristarecovery.com |
| Group facilitation advice for adding new member to an established group? (real r/therapists thread title, seen in Google results 2026-11-11) | covered | /guides/orient-new-member-therapy-group/ | — |
| What is the difference between PHP and IOP groups? | covered | /guides/php-vs-iop-group-therapy/ | checked 2026-11-11, AIO: Charlie Health first, 8 provider sites; ChatGPT not checked |
| How many hours a week is an IOP vs a PHP? | covered | /guides/php-vs-iop-group-therapy/ | — |
| Open vs closed therapy groups: which is better? | gap | — | — |
| How do I handle a member stepping down mid-rotation? | covered | /guides/rolling-admission-groups/ | — |

## Session content

| Question | Status | Page | Citations seen |
|---|---|---|---|
| IOP group therapy topics list | covered | /guides/iop-group-topics/ | checked 2026-11-11, AIO: intoactionrecovery.us first (partly read); ChatGPT not checked |
| Group therapy check-in questions for adults | covered | /guides/group-therapy-check-in-questions/ | — |
| Group therapy closing activities | covered | /guides/group-therapy-closing-activities/ | — |
| Grounding exercises for group therapy | covered | /guides/grounding-exercises-for-group-therapy/ | — |
| Holiday group therapy topics | covered | /guides/holiday-group-therapy-topics/ | — |
| DBT skills group activities for adults | gap | — | — |
| Psychoeducation group topics for mental health IOP | partial | /guides/iop-group-topics/ | — |
| How do I plan a week of IOP groups? | covered | /guides/iop-group-topics/#week | — |

## Difficult moments

| Question | Status | Page | Citations seen |
|---|---|---|---|
| What do I do when a group member monopolises the session? | covered | /guides/group-member-monopolizes/ | checked 2026-11-11, AIO: Groups in Private Practice first (partly read); ChatGPT not checked |
| What do I do when nobody talks in group therapy? | covered | /guides/when-nobody-talks-in-group/ | — |
| What do I say when members say we have done this already? | covered | /guides/rolling-admission-groups/ | — |
| How do I handle conflict between two group members? | gap | — | — |
| What do I do if a check-in reveals risk of harm? | partial | /guides/group-therapy-check-in-questions/ | — |
| How do I respond to a member who is sedated or in cognitive fog? | gap | — | — |

## Commercial intent

These are answered on `clinicians.html` and the book pages. Highest value per
visit, and the hardest to answer without turning into an advert.

**2026-11-02 addition.** The ChatGPT half of that day's audit (see
`.claude/aeo/audits/2026-11-02.md`) found that for "best group therapy
curriculum for adult IOP programs," ChatGPT does not recommend any curriculum
product — it generates its own 12-week outline on the spot and offers to
build a complete one interactively, naming only SAMHSA TIP 41, DBT Skills
Training Handouts, *Mind Over Mood* and *Seeking Safety* as source material.
That changes the realistic target here: not "be the answer," but "be the
thing someone reaches for once they realize building it themselves is a real
time cost." "Should I build my own IOP group therapy curriculum or buy a
ready-made one?" was added and answered honestly on `clinicians.html` to meet
that exact decision point, without disparaging the build-it-yourself route.

| Question | Status | Page | Citations seen |
|---|---|---|---|
| Best group therapy curriculum for adult IOP programs | covered | clinicians.html | checked 2026-11-02, no AIO, top organic: 2 competing curriculum books (Google Books, Amazon) |
| Can I photocopy group therapy worksheets for my program? | covered | clinicians.html | checked 2026-11-11, AIO: Therapist Aid first (partly read); ChatGPT not checked |
| Where can I buy printable group therapy worksheets for adults? | partial | /free-resources/ | — |
| Is there a group therapy curriculum built for rolling admission? | covered | clinicians.html | checked 2026-11-11, AIO cites thoughtkindpress.com and Amazon first; ChatGPT cited others, then the site (memory-influenced) |
| Group therapy curriculum for PHP programs | covered | clinicians.html | — |
| Do I need Volume 1 and Volume 2, or just one? | covered | clinicians.html | — |
| Group therapy worksheets I am allowed to copy for clients | covered | clinicians.html | same FAQ as "Can I photocopy..." |
| Free printable group therapy resources for facilitators | covered | /free-resources/ | — |
| Should I build my own IOP group therapy curriculum or buy a ready-made one? | covered | clinicians.html | source: 2026-11-02 ChatGPT audit — see note below |

## Outside the US: AOD and harm reduction (test, added 2026-11-12)

| Question | Status | Page | Citations seen |
|---|---|---|---|
| What are harm reduction group activities for AOD day programs? | covered | /guides/harm-reduction-group-activities/ | — |
| Can one group include members who want to stop and members who want to cut down? | covered | /guides/harm-reduction-group-activities/ | — |
| How do I run a harm reduction group with rolling admission? | covered | /guides/harm-reduction-group-activities/ | — |

## Format and delivery

| Question | Status | Page | Citations seen |
|---|---|---|---|
| Telehealth group therapy activities for IOP | gap | — | — |
| How do I run a skills group over video? | gap | — | — |
| Co-facilitating a therapy group: how to split roles | gap | — | — |

## Roadmap — weekly cadence

**At most one brand-new guide (new URL) per week**, per `CLAUDE.md`'s
weekly-not-daily rule — that's the actual spam signal to search engines and
where the reputational risk of machine-drafted clinical content at speed
lives. A **deepen is not a new URL**, so it carries none of that risk and can
run alongside a new guide in the same week without changing the real
publishing rate. That's how this schedule fits 9 items into 6 weeks instead
of 9: each week pairs one new guide with one deepen wherever a deepen is
ready to pair, rather than publishing two new guides in the same week.

Order set 2026-11-02, by commercial tie-in first (scenarios already sold in
*When Group Gets Stuck* / *Group Openers and Closers*), then standalone
search value. Re-order freely if a real question comes in from Amazon Q&A,
newsletter replies or Reddit that should jump the queue — see "Where new
questions come from" above.

| Week of | New guide (1/week max) | Paired deepen (adds no new URL) |
|---|---|---|
| 2026-11-09 | How do I handle conflict between two group members? — matches *When Group Gets Stuck*'s "A disagreement becomes personal", direct cross-link | `/guides/rolling-admission-groups/` — add "member stepping down mid-rotation" |
| 2026-11-16 | How do I respond to a member who is sedated or in cognitive fog? — matches *When Group Gets Stuck* and is quoted in two *Group Openers and Closers* testimonials already on `clinicians.html` | `/guides/group-therapy-progress-notes/` — add "what auditors look for" |
| 2026-11-23 | Open vs closed therapy groups: which is better? — comparison table, ties into `/guides/rolling-admission-groups/` | `/guides/group-therapy-progress-notes/` — add "how long should a note be" |
| 2026-11-30 | DBT skills group activities for adults — standalone, no existing page | `/guides/iop-group-topics/` — add Psychoeducation topics |
| 2026-12-07 | Telehealth group therapy activities for IOP — merges with "How do I run a skills group over video?" into one deep page instead of two thin ones | `/guides/iop-group-topics/` — add "how do I plan a week of IOP groups" |
| 2026-12-14 | Co-facilitating a therapy group: how to split roles — standalone, no existing page | `/guides/group-therapy-check-in-questions/` — "what do I do if a check-in reveals risk of harm", **extra care**: needs a real sourced citation (e.g. SAMHSA), not a guessed protocol. Flag for Heba's review before merging, not just validate-and-PR, whichever week it lands in. |

Each week is still one `guide-writer` run for the new guide plus one small,
separate deepen edit — not doubled effort per guide, just the backlog of
small fixes riding along instead of queueing nine weeks deep.
