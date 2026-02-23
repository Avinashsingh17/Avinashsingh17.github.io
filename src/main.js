// ===== MAIN ENTRY POINT =====
import './style.css';

import { initNavbar } from './modules/navbar.js';
import { initAnimations } from './modules/animations.js';
import { initSmoothScroll } from './modules/smooth-scroll.js';
import { initScrollProgress } from './modules/scroll-progress.js';
import { initBackToTop } from './modules/back-to-top.js';
import { initCounters } from './modules/counter.js';
import { initProjectModals } from './modules/project-modal.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnimations();
  initSmoothScroll();
  initScrollProgress();
  initBackToTop();
  initCounters();
  initProjectModals();
});
