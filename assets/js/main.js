/* ============================================================
   ECOURSES — Main JavaScript
   Vanilla JS, no frameworks
   ============================================================ */

(function () {
  'use strict';

  /* ── DOM Ready ─────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initNav();
    initBurger();
    initDataYear();
    initReveal();
    initPillFilters();
    initFormValidation();
    initHeroSearch();
    initCounterAnimation();
  }

  /* ── Navigation: scrolled state ────────────────────────── */
  function initNav() {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 60) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Burger Menu ───────────────────────────────────────── */
  function initBurger() {
    var burger = document.querySelector('.nav__burger');
    var mobile = document.querySelector('.nav__mobile');
    if (!burger || !mobile) return;

    burger.addEventListener('click', function () {
      var isOpen = mobile.classList.contains('nav__mobile--open');
      if (isOpen) {
        mobile.classList.remove('nav__mobile--open');
        burger.classList.remove('nav__burger--open');
        document.body.style.overflow = '';
      } else {
        mobile.classList.add('nav__mobile--open');
        burger.classList.add('nav__burger--open');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close on link click
    mobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobile.classList.remove('nav__mobile--open');
        burger.classList.remove('nav__burger--open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── data-year: inject current year ────────────────────── */
  function initDataYear() {
    var els = document.querySelectorAll('[data-year]');
    var year = new Date().getFullYear();
    els.forEach(function (el) {
      el.textContent = year;
    });
  }

  /* ── IntersectionObserver: reveal on scroll ────────────── */
  function initReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach(function (el) { observer.observe(el); });
  }

  /* ── Pill Filters (courses page) ──────────────────────── */
  function initPillFilters() {
    var pills = document.querySelectorAll('.pill[data-filter]');
    if (!pills.length) return;

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');

        // Update active pill
        pills.forEach(function (p) { p.classList.remove('pill--active'); });
        this.classList.add('pill--active');

        // Filter course cards
        var cards = document.querySelectorAll('.course-card[data-category]');
        cards.forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = '';
            // Re-trigger reveal
            setTimeout(function () { card.classList.add('revealed'); }, 50);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ── Form Validation ───────────────────────────────────── */
  function initFormValidation() {
    var forms = document.querySelectorAll('[data-form]');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var valid = true;

        // Check required fields
        var required = form.querySelectorAll('[required]');
        required.forEach(function (field) {
          if (!field.value.trim()) {
            valid = false;
            field.style.borderColor = 'var(--clr-error)';
          } else {
            field.style.borderColor = '';
          }

          // Email validation
          if (field.type === 'email' && field.value.trim()) {
            var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRe.test(field.value)) {
              valid = false;
              field.style.borderColor = 'var(--clr-error)';
            }
          }
        });

        var okMsg = form.querySelector('.form-msg--ok');
        var errMsg = form.querySelector('.form-msg--err');

        if (valid) {
          if (okMsg) okMsg.style.display = 'block';
          if (errMsg) errMsg.style.display = 'none';
          form.reset();
          // Auto-hide success after 4s
          setTimeout(function () {
            if (okMsg) okMsg.style.display = 'none';
          }, 4000);
        } else {
          if (okMsg) okMsg.style.display = 'none';
          if (errMsg) errMsg.style.display = 'block';
        }
      });
    });
  }

  /* ── Hero Search (prevent empty submit) ────────────────── */
  function initHeroSearch() {
    var forms = document.querySelectorAll('.hero__search');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        var input = form.querySelector('input');
        if (input && !input.value.trim()) {
          e.preventDefault();
          input.focus();
        }
      });
    });
  }

  /* ── Counter Animation ─────────────────────────────────── */
  function initCounterAnimation() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    var duration = 1800;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target.toLocaleString() + suffix;
      }
    }

    requestAnimationFrame(step);
  }

})();
