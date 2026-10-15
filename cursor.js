(function () {
  var cursorEl = document.getElementById('tos-cursor');

  if (cursorEl) {
    window.addEventListener('mousemove', function (e) {
      cursorEl.style.transform = 'translate3d(' + e.clientX + 'px, ' + e.clientY + 'px, 0)';
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      cursorEl.style.opacity = '0';
    });

    document.addEventListener('mouseenter', function () {
      cursorEl.style.opacity = '1';
    });
  }

  var modeBtn = document.getElementById('invert-bg-btn');
  if (modeBtn) {
    if (localStorage.getItem('mich-light-mode') === '1') {
      document.body.classList.add('light-mode');
    }
    modeBtn.addEventListener('click', function () {
      document.body.classList.toggle('light-mode');
      var isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('mich-light-mode', isLight ? '1' : '0');
    });
  }

  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightbox-img');
  var lbCap = document.getElementById('lightbox-caption');
  if (lb && lbImg) {
    document.querySelectorAll('[data-lightbox]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        lbImg.src = el.getAttribute('href') || el.getAttribute('data-lightbox');
        if (lbCap) {
          lbCap.textContent = el.getAttribute('data-caption') || '';
        }
        lb.classList.add('open');
      });
    });
    lb.addEventListener('click', function () {
      lb.classList.remove('open');
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') lb.classList.remove('open');
    });
  }
})();
