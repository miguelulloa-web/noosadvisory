/**
 * NoosAdvisory Interactive Controller v1.2.0
 * Handles:
 * 1. Accessible Mobile Menu Drawer
 * 2. Smooth Anchor Navigation with Offset Subtraction
 * 3. Dynamic Card Spotlight Border Glow (Mouse Move Tracking)
 * 4. Interactive Minimalist Narrative Tabs (Portafolio AAGm)
 * 5. Minimalist Scroll Reveal Observer
 * 6. Accessibility & Reduced Motion Support
 */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Accessible Mobile Menu Drawer
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = navMenu.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    // Close menu when clicking a nav link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Smooth Anchor Scrolling with Header Offset Subtraction
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = document.querySelector('header')?.offsetHeight || 80;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
        window.scrollTo({
          top: targetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }
    });
  });

  // 3. Dynamic Card Spotlight Glow (Tracks mouse coordinate on cards)
  if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    const spotlightCards = document.querySelectorAll('.card, .approach-step-card, .capability-card, .pillar-item, .showcase-card');
    
    spotlightCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // 4. Interactive Minimalist Narrative Tabs (Portafolio Case Study)
  const filterTabs = document.querySelectorAll('.filter-tab');
  const narrativeItems = document.querySelectorAll('.narrative-step-item');

  if (filterTabs.length && narrativeItems.length) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.getAttribute('data-step-target');

        narrativeItems.forEach(item => {
          const step = item.getAttribute('data-step');
          if (target === 'all') {
            item.classList.remove('is-dimmed', 'is-active');
          } else if (step === target) {
            item.classList.remove('is-dimmed');
            item.classList.add('is-active');
          } else {
            item.classList.remove('is-active');
            item.classList.add('is-dimmed');
          }
        });
      });
    });
  }

  // 5. Minimalist Scroll Reveal Observer
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll(
      '.section-header, .card, .approach-step-card, .capability-card, .pillar-item, .showcase-card, .about-box, .contact-card'
    );

    revealTargets.forEach(el => el.classList.add('reveal-on-scroll'));

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealTargets.forEach(el => observer.observe(el));
  }
});
