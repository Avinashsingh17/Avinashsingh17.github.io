// ===== ANIMATED STAT COUNTERS =====

export function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (!counters.length) return;

  const prefersReduced =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canAnimate =
    'IntersectionObserver' in window &&
    typeof requestAnimationFrame === 'function';

  counters.forEach(el => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    if (Number.isNaN(target)) {
      // Unparseable target: leave the existing markup untouched.
      console.warn('initCounters: non-numeric data-count on', el);
      return;
    }

    // Static fallback: render the final value immediately when we can't
    // (or shouldn't) animate, so a counter is never left stuck at 0.
    if (prefersReduced || !canAnimate) {
      setFinal(el, target);
      return;
    }

    let done = false;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            observer.unobserve(el);
            animateCounter(el, target, () => {
              done = true;
            });
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    // Safety net: the hero stats sit above the fold, so if the observer
    // never fires (layout/timing edge cases), render the final value as
    // static text rather than leaving it at 0.
    setTimeout(() => {
      if (!done) {
        done = true;
        setFinal(el, target);
      }
    }, 2500);
  });
}

function setFinal(el, target) {
  el.textContent = String(target);
}

function animateCounter(el, target, onDone) {
  const duration = 1500; // ms
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = String(Math.round(ease * target));

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      setFinal(el, target); // guarantee the exact final value
      if (onDone) onDone();
    }
  }

  requestAnimationFrame(step);
}
