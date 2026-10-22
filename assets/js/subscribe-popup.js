/* Slide-in email signup: appears after 45% scroll or 20 s, once per visitor.
   Dismissal is remembered for 14 days; subscribing hides it for good. */
(function () {
  var KEY = 'tk_sub_popup';
  function get() { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; } }
  function set(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} }
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
    '<form class="subscribe-form" action="https://gumroad.com/follow_from_embed_form" method="post" target="_blank">' +
      '<input type="hidden" name="seller_id" value="815120777025">' +
      '<label class="visually-hidden" for="sub-pop-email">Email address</label>' +
      '<input id="sub-pop-email" type="email" name="email" required autocomplete="email" placeholder="you@program.org">' +
      '<button class="btn btn-copper" type="submit">Subscribe</button>' +
    '</form>';
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
    if ((h.scrollTop + innerHeight) / h.scrollHeight > 0.45) show();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  setTimeout(show, 20000);

  box.querySelector('.sub-pop-close').addEventListener('click', function () { close(14); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && shown && !box.hidden) close(14); });
  box.querySelector('form').addEventListener('submit', function () { setTimeout(function () { close(0); }, 400); });
  document.querySelectorAll('.subscribe .subscribe-form').forEach(function (f) {
    f.setAttribute('target', '_blank');
    f.addEventListener('submit', function () { set({ done: true }); box.hidden = true; });
  });
})();
