document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-links a');

  const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observerNav.observe(s));

  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => revealObserver.observe(el));

  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = mobileMenu.classList.contains('open') ? 'translateY(7px) rotate(45deg)' : '';
      spans[1].style.opacity   = mobileMenu.classList.contains('open') ? '0' : '1';
      spans[2].style.transform = mobileMenu.classList.contains('open') ? 'translateY(-7px) rotate(-45deg)' : '';
    });
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#2e8b57';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }
/* ─── NEST CLUSTER — MAIN JAVASCRIPT ─── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll effect ── */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-links a');

  const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observerNav.observe(s));

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => revealObserver.observe(el));

  /* ── Hamburger mobile menu ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = mobileMenu.classList.contains('open') ? 'translateY(7px) rotate(45deg)' : '';
      spans[1].style.opacity   = mobileMenu.classList.contains('open') ? '0' : '1';
      spans[2].style.transform = mobileMenu.classList.contains('open') ? 'translateY(-7px) rotate(-45deg)' : '';
    });
  }

/* ── Contact form ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#2e8b57';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }

  /* ── Scrolling Notice Board ── */
  function handleContactSubmit(event) {
            event.preventDefault();
            document.getElementById('contact-success').style.display = 'block';
            event.target.reset();
        }

        // Scroll Logic
        const noticeList = document.getElementById('scrolling-notices');
        let scrollPos = 0;

        function scrollNotices() {
            scrollPos++;
            if (scrollPos >= noticeList.firstElementChild.offsetHeight) {
                noticeList.appendChild(noticeList.firstElementChild);
                scrollPos = 0;
            }
            noticeList.style.transform = `translateY(-${scrollPos}px)`;
            requestAnimationFrame(scrollNotices);
        }
        
        // Start scrolling after 1 second
        setTimeout(scrollNotices, 1000);



  /* ── Counter animation for stats ── */
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800;
        const start = performance.now();

        const step = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const value = target < 10 ? (ease * target).toFixed(1) : Math.round(ease * target);
          el.textContent = prefix + value + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

});


  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800;
        const start = performance.now();

        const step = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const value = target < 10 ? (ease * target).toFixed(1) : Math.round(ease * target);
          el.textContent = prefix + value + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

});
