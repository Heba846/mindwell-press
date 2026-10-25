"""Render branded social images for a Thoughtkind Press guide.

Usage: python3 tools/social_card.py <slug> "<Title>" "<one-line hook>"
Writes assets/social/<slug>-linkedin.png (1200x627, also used as og:image)
and assets/social/<slug>-newsletter.png (1920x1080 newsletter cover).
"""
import sys, pathlib, html, base64
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
FD = ROOT / "tools" / "fonts"
def F(name): return "data:font/woff2;base64," + base64.b64encode((FD / name).read_bytes()).decode()
slug, title, hook = sys.argv[1], sys.argv[2], sys.argv[3]
out = ROOT / "assets" / "social"; out.mkdir(parents=True, exist_ok=True)

def page(w, h, FS):
    s = w / 1200
    return f"""<!doctype html><html><head><style>
@font-face{{font-family:N;font-weight:800;src:url({F('nunito-latin-800-normal.woff2')})}}
@font-face{{font-family:N;font-weight:900;src:url({F('nunito-latin-900-normal.woff2')})}}
@font-face{{font-family:L;font-weight:600;src:url({F('lora-latin-600-normal.woff2')})}}
@font-face{{font-family:L;font-style:italic;src:url({F('lora-latin-400-italic.woff2')})}}
html,body{{margin:0;width:{w}px;height:{h}px}}
body{{background:#2D3D32;color:#F4F3E7;font-family:N,sans-serif;position:relative;overflow:hidden}}
.grain{{position:absolute;inset:0;background:radial-gradient(circle at 85% 20%,rgba(200,130,94,.18),transparent 45%),radial-gradient(circle at 10% 110%,rgba(244,243,231,.07),transparent 50%)}}
.bars{{position:absolute;right:{70*s}px;bottom:{70*s}px;display:grid;gap:{14*s}px;justify-items:end}}
.bars i{{display:block;height:{22*s}px;border-radius:{5*s}px;background:#F4F3E7;opacity:.14}}
.bars i:nth-child(1){{width:{240*s}px}}.bars i:nth-child(2){{width:{190*s}px}}.bars i:nth-child(3){{width:{140*s}px;background:#C8825E;opacity:1}}
.wrap{{position:absolute;left:{80*s}px;top:{70*s}px;right:{330*s}px;bottom:{70*s}px;display:flex;flex-direction:column}}
.eyebrow{{font-weight:800;font-size:{20*s}px;letter-spacing:.16em;text-transform:uppercase;color:#C8825E}}
h1{{font-weight:900;font-size:{FS}px;line-height:1.08;margin:{22*s}px 0 0;letter-spacing:-.01em}}
p{{font-family:L,serif;font-style:italic;font-size:{28*s}px;line-height:1.35;color:#C9D0C4;margin:{24*s}px 0 0;max-width:{720*s}px}}
.foot{{margin-top:auto;display:flex;align-items:center;gap:{14*s}px;font-weight:800;font-size:{22*s}px}}
.foot b{{width:{12*s}px;height:{12*s}px;border-radius:50%;background:#C8825E;display:inline-block}}
.foot span{{color:#C9D0C4;font-weight:800}}
</style></head><body><div class="grain"></div><div class="bars"><i></i><i></i><i></i></div>
<div class="wrap"><div class="eyebrow">Facilitator guide · IOP &amp; PHP</div><h1>{html.escape(title)}</h1><p>{html.escape(hook)}</p>
<div class="foot">Thoughtkind Press <b></b> <span>thoughtkindpress.com/guides</span></div></div></body></html>"""

n = len(title)
with sync_playwright() as p:
    b = p.chromium.launch()
    for name, w, h in (("linkedin", 1200, 627), ("newsletter", 1920, 1080)):
        s = w / 1200
        FS = round((64 if n <= 50 else 56 if n <= 70 else 48) * s)
        pg = b.new_page(viewport={"width": w, "height": h})
        pg.set_content(page(w, h, FS))
        pg.evaluate('document.fonts.ready'); pg.wait_for_timeout(200)
        assert pg.evaluate("document.fonts.check('900 40px N') && document.fonts.check('italic 20px L')"), 'fonts not loaded'
        # shrink headline until it fits
        pg.evaluate("""() => { const h=document.querySelector('h1'), w=document.querySelector('.wrap');
          let f=parseFloat(getComputedStyle(h).fontSize);
          while (w.scrollHeight > w.clientHeight + 1 && f > 24) { f -= 2; h.style.fontSize = f + 'px'; } }""")
        pg.screenshot(path=str(out / f"{slug}-{name}.png"))
        pg.close()
    b.close()
print("ok", out / f"{slug}-linkedin.png")
