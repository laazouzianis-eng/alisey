/* Menu mobile — ouverture / fermeture du panneau de navigation */
(function () {
  function init() {
    document.querySelectorAll('.nav-burger').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var nav = btn.closest('.nav');
        if (!nav) return;
        var open = nav.classList.toggle('nav-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
    // Fermer le menu quand on clique un lien du panneau
    document.querySelectorAll('.nav-panel a').forEach(function (a) {
      a.addEventListener('click', function () {
        var nav = a.closest('.nav');
        if (nav) nav.classList.remove('nav-open');
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
