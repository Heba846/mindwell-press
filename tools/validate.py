#!/usr/bin/env python3
"""Pre-commit checks for the Thoughtkind Press static site.

Run from the repo root:  python3 -I tools/validate.py
Must print "FAILURES: NONE" before any commit.

Checks
  1. every <script type="application/ld+json"> block parses as JSON
  2. every FAQPage question and answer appears verbatim in the visible text
     (schema must never claim something the page does not say)
  3. every root-relative internal link resolves to a file on disk
  4. every page in guides/ and books/ is listed in sitemap.xml
  5. sitemap.xml is well-formed XML
"""
import glob
import html
import json
import os
import re
import sys
import xml.dom.minidom

FAIL = []


def fail(where, msg):
    FAIL.append(f"{where}: {msg}")


def visible_text(src):
    body = re.sub(r"<script.*?</script>", " ", src, flags=re.S)
    body = re.sub(r"<style.*?</style>", " ", body, flags=re.S)
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", body)))


def norm(s):
    return re.sub(r"\s+", " ", html.unescape(s)).strip()


def main():
    pages = sorted(glob.glob("**/*.html", recursive=True))
    if not pages:
        sys.exit("no HTML found - run from the repo root")

    for f in pages:
        src = open(f, encoding="utf-8").read()
        text = visible_text(src)

        for block in re.findall(
            r'<script type="application/ld\+json">(.*?)</script>', src, re.S
        ):
            try:
                data = json.loads(block)
            except json.JSONDecodeError as e:
                fail(f, f"JSON-LD does not parse ({e})")
                continue
            nodes = data.get("@graph", [data])
            for node in nodes:
                if node.get("@type") != "FAQPage":
                    continue
                items = node.get("mainEntity", [])
                if not items:
                    fail(f, "FAQPage has no questions")
                for q in items:
                    for label, value in (
                        ("question", q.get("name", "")),
                        ("answer", q.get("acceptedAnswer", {}).get("text", "")),
                    ):
                        if not value:
                            fail(f, f"FAQPage {label} is empty")
                        elif norm(value) not in text:
                            fail(f, f"FAQPage {label} not in visible text: {value[:60]}...")

        for href in re.findall(r'href="(/[^"#?]*)"', src):
            rel = href.lstrip("/")
            if not any(
                os.path.exists(c)
                for c in (rel, rel + "index.html", rel.rstrip("/") + "/index.html")
            ):
                fail(f, f"broken internal link {href}")

    try:
        xml.dom.minidom.parse("sitemap.xml")
    except Exception as e:
        fail("sitemap.xml", f"not well-formed ({e})")

    sitemap = open("sitemap.xml", encoding="utf-8").read()
    for f in pages:
        if not (f.startswith("guides/") or f.startswith("books/")):
            continue
        path = "/" + f[: -len("index.html")] if f.endswith("index.html") else "/" + f
        if path not in sitemap:
            fail("sitemap.xml", f"missing {path}")

    if FAIL:
        print("FAILURES:")
        for x in sorted(set(FAIL)):
            print("  -", x)
        sys.exit(1)
    print("FAILURES: NONE")
    print(f"checked {len(pages)} pages")


if __name__ == "__main__":
    main()
