// ===== ROLE SWITCHER WIDGET =====

const ROLES = [
  { label: 'Thermal', href: '/thermal.html' },
  { label: 'Design',  href: '/mechanical.html' },
  { label: 'Materials', href: '/materials.html' },
];

export function initRoleSwitcher() {
  const path = window.location.pathname;

  const switcher = document.createElement('div');
  switcher.id = 'role-switcher';
  switcher.className = 'fixed bottom-24 right-8 z-[500] flex gap-1 bg-[#1C2128]/90 backdrop-blur-xl border border-[#30363D]/60 rounded-full px-1.5 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.4)]';

  ROLES.forEach(role => {
    const a = document.createElement('a');
    a.href = role.href;
    a.textContent = role.label;
    const isActive = path === role.href || path === role.href.replace('.html', '') || path === role.href.replace('.html', '/');
    a.className = isActive
      ? 'px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#00D4AA] text-[#0D1117] transition-all duration-300'
      : 'px-3.5 py-1.5 rounded-full text-xs font-medium text-[#8B949E] hover:text-[#00D4AA] hover:bg-[#00D4AA]/10 transition-all duration-300';
    switcher.appendChild(a);
  });

  document.body.appendChild(switcher);
}
