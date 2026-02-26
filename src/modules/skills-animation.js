// ===== SKILL BAR ANIMATION + EXPERIENCE TOGGLE =====

export function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.getAttribute('data-width');
          bar.classList.add('animated');
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(bar => observer.observe(bar));
}

export function initExpToggle() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.exp-toggle');
    if (!btn) return;

    const card = btn.closest('.timeline-content');
    if (!card) return;

    const extras = card.querySelectorAll('.exp-extra');
    const isOpen = btn.classList.contains('open');

    extras.forEach(el => el.classList.toggle('visible'));

    btn.classList.toggle('open');
    btn.innerHTML = isOpen ? 'Show more &darr;' : 'Show less &uarr;';
  });
}
