/* GA4 conversion events: sign-ups (generate_lead) and store clicks (store_click). */
(function () {
  function send(name, params) { if (typeof window.gtag === 'function') window.gtag('event', name, params); }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.href || '';
    var label = (a.textContent || '').trim().slice(0, 80);
    if (/gumroad\.com\/subscribe/.test(href)) {
      send('generate_lead', { lead_source: 'email_subscribe', link_text: label, page: location.pathname });
    } else if (/gumroad\.com\/l\/starter-pack/.test(href)) {
      send('generate_lead', { lead_source: 'starter_pack', link_text: label, page: location.pathname });
    } else if (/gumroad\.com\/l\//.test(href)) {
      send('store_click', { store: 'gumroad', product_url: href, link_text: label, page: location.pathname });
    } else if (/amazon\.[a-z.]+\/dp\//.test(href)) {
      send('store_click', { store: 'amazon', product_url: href, link_text: label, page: location.pathname });
    }
  }, true);
})();
