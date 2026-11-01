# Thoughtkind Press — site repo

Static site for https://thoughtkindpress.com, served by GitHub Pages from `main`
(`CNAME` + `.nojekyll`). No build step: HTML and CSS are edited directly and a
push to `main` is a live publish.

## Ground rules

- **Never push to `main` without being asked.** Work on a branch and open a PR.
  Heba merges.
- **No new clinical claim without a source.** Every factual statement about
  levels of care, documentation, HIPAA, hours or payer rules needs a citation in
  the page's `Sources` list, fetched and verified in the same session. If a claim
  cannot be verified, cut it rather than soften it.
- **Never copy a competitor's text.** Use other pages only to see which
  sub-questions an answer is expected to cover. The wording and examples are
  Heba's own, drawn from the books.
- **Clinical examples are fictional and labelled as such.** No real client
  material. Keep the "varies by program / follow your program's policy" framing.
- **Audience is the facilitator**, not the client: adults in IOP/PHP
  rolling-admission programs.
- Paid PDFs stay out of public folders. `robots.txt` disallows `/cards/` and
  `/resources/when-group-gets-stuck/`; those are purchaser links, not free.

## Layout

| Path | What it is |
|---|---|
| `index.html`, `clinicians.html` | Home and the main clinician sales page |
| `guides/<slug>/index.html` | One guide per folder. This is where AI-answer traffic lands. |
| `books/<slug>/index.html` | Per-book detail pages |
| `free-resources/`, `v1/`, `v2/`, `v3/`, `openers/` | Free printables (no sign-up) |
| `cards/`, `resources/` | Purchaser-only printables (robots-disallowed) |
| `styles.css` | All site CSS. Bump the `?v=` query in each page when it changes. |
| `sitemap.xml` | Hand-maintained. Every new page must be added. |

## Anatomy of a guide page

Copy an existing guide (`guides/rolling-admission-groups/index.html` is the
cleanest reference) rather than writing from scratch. A complete guide has:

1. `<title>`, `meta description`, `canonical`, OG/Twitter tags.
2. One `<script type="application/ld+json">` with an `@graph` of
   **Organization → Person → Article → BreadcrumbList → FAQPage**. The
   Organization and Person objects are identical on every page; reuse them
   verbatim so the entity IDs stay stable.
3. The shared header, GA4 snippet, subscribe section and footer, copied unchanged.
4. Body: `crumbs` nav → `<h1>` → `byline` → `lede-ink` → `toc` nav → `<h2>`
   sections → `<h2 id="faq">Common questions</h2>` → `callout` CTA →
   `<h2 id="sources">Sources</h2>` → `fineprint` disclaimer.
5. **Every FAQPage answer must appear verbatim in the visible HTML.** Schema that
   says something the page does not is the one mistake that can get the site
   penalised. The validator below checks this.
6. On an edit: bump the Article's `dateModified` and add
   `· Updated <Month D, YYYY> ·` to the byline.

Answer style: open each section with the direct answer in one or two sentences,
then the detail. Keep FAQ answers 40–80 words and self-contained, so a model can
quote one without the rest of the page.

## Validate before every commit

```bash
python3 -I tools/validate.py
```

Checks that every page's JSON-LD parses, that each FAQPage answer and question
appears in the visible text, that internal links resolve, that new pages are in
`sitemap.xml`, and that the sitemap is well-formed XML. It must print
`FAILURES: NONE`.

## AI-answer visibility (AEO) workflow

The point of the guides is to be the page that Google AI Overviews and ChatGPT
cite for a facilitator's question. The working files:

- `.claude/aeo/question-bank.md` — the target questions and their status.
- `.claude/aeo/run-log.md` — what each run checked and changed.
- `.claude/agents/` — the two agent briefs (`aeo-auditor`, `guide-writer`).

Weekly cadence, not daily: this site has ~12 guides and publishing a thin page
per day would read as spam. Depth on an existing page beats a new shallow one.
