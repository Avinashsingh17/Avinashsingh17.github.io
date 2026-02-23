// ===== SCROLL-TRIGGERED FADE-IN ANIMATIONS =====

export function initAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger siblings within the same parent
          const siblings = Array.from(
            entry.target.parentElement.querySelectorAll('.fade-in:not(.visible)')
          );
          const idx = siblings.indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, Math.min(idx * 80, 400));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
