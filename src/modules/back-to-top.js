// ===== BACK TO TOP BUTTON =====

export function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  // Show/hide based on scroll position
  window.addEventListener(
    'scroll',
    () => {
      const show = window.scrollY > window.innerHeight * 0.8;
      btn.classList.toggle('visible', show);
    },
    { passive: true }
  );

  // Scroll to top on click
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
