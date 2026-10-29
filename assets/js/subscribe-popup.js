/* Free-book promotion slide-in. While a promo window is open it replaces the
   email signup (one slide-in at a time). Closing hides it until the promo ends.
   Preview any time with ?deal=preview. */
(function () {
  var PROMO = {
    key: 'tk_promo_openers_free_2026_10',
    start: Date.parse('2026-10-30T07:00:00Z'),
    end: Date.parse('2026-11-04T07:59:00Z'),
    eyebrow: 'Free on Kindle · Oct 30 to Nov 3',
    title: 'Group Openers and Closers is free this week',
    text: '120 ready-to-read check-ins, grounding starts and closings for rolling-admission groups. Free on Amazon.com until November 3.',
    cta: 'Get it free on Amazon',
    href: 'https://www.amazon.com/dp/B0HPKSD9Y1'
  };
  var now = Date.now(), preview = /[?&]deal=preview/.test(location.search);
  if (!preview && (now < PROMO.start || now >= PROMO.end)) return;
  window.__tkPromoActive = true;
  var seen; try { seen = localStorage.getItem(PROMO.key); } catch (e) {}
  if (seen && !preview) return;

  var box = document.createElement('aside');
  box.className = 'sub-pop promo-pop';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-labelledby', 'promo-pop-title');
  box.hidden = true;
  box.innerHTML =
    '<button class="sub-pop-close" type="button" aria-label="Close">&times;</button>' +
    '<div class="promo-pop-body"><img class="promo-pop-cover" src="/assets/covers/openers-cover.jpg" width="70" height="112" alt="">' +
    '<div><p class="sub-pop-eyebrow">' + PROMO.eyebrow + '</p>' +
    '<p class="sub-pop-title" id="promo-pop-title">' + PROMO.title + '</p></div></div>' +
    '<p class="sub-pop-text">' + PROMO.text + '</p>' +
    '<a class="btn btn-copper sub-pop-btn" href="' + PROMO.href + '" rel="noopener">' + PROMO.cta + '</a>';
  document.body.appendChild(box);
  function mark() { try { localStorage.setItem(PROMO.key, '1'); } catch (e) {} }
  function close() { box.classList.remove('is-in'); setTimeout(function () { box.hidden = true; }, 300); mark(); }
  setTimeout(function () {
    box.hidden = false;
    requestAnimationFrame(function () { box.classList.add('is-in'); });
  }, 3500);
  box.querySelector('.sub-pop-close').addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !box.hidden) close(); });
  box.querySelector('.sub-pop-btn').addEventListener('click', mark);
})();

/* Slide-in email signup: appears after 8 s or 25% scroll.
   Closing hides it for 3 days; clicking Subscribe hides it for good. */
(function () {
  var KEY = 'tk_sub_popup_v2';
  function get() { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; } }
  function set(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} }
  if (window.__tkPromoActive) return;
  var st = get();
  if (st.done || (st.until && Date.now() < st.until)) return;
  if (/[?&]utm_source=newsletter/.test(location.search)) return;

  var box = document.createElement('aside');
  box.className = 'sub-pop';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-labelledby', 'sub-pop-title');
  box.hidden = true;
  box.innerHTML =
    '<button class="sub-pop-close" type="button" aria-label="Close">&times;</button>' +
    '<p class="sub-pop-eyebrow">Free for group facilitators</p>' +
    '<p class="sub-pop-title" id="sub-pop-title">New tools for your next group, by email</p>' +
    '<p class="sub-pop-text">Printables, facilitator guides and release news. Occasional emails, unsubscribe anytime.</p>' +
    '<a class="btn btn-copper sub-pop-btn" href="https://thoughtkindpress.gumroad.com/subscribe" target="_blank" rel="noopener">Subscribe for free</a>';
  document.body.appendChild(box);

  var shown = false;
  function show() {
    if (shown) return; shown = true;
    box.hidden = false;
    requestAnimationFrame(function () { box.classList.add('is-in'); });
    window.removeEventListener('scroll', onScroll);
  }
  function close(days) {
    box.classList.remove('is-in');
    setTimeout(function () { box.hidden = true; }, 300);
    set(days ? { until: Date.now() + days * 864e5 } : { done: true });
  }
  function onScroll() {
    var h = document.documentElement;
    if ((h.scrollTop + innerHeight) / h.scrollHeight > 0.25) show();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  setTimeout(show, 8000);

  box.querySelector('.sub-pop-close').addEventListener('click', function () { close(3); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && shown && !box.hidden) close(3); });
  box.querySelector('.sub-pop-btn').addEventListener('click', function () { close(0); });
  document.querySelectorAll('.subscribe-btn').forEach(function (b) {
    b.addEventListener('click', function () { set({ done: true }); box.hidden = true; });
  });
})();
