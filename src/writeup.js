// ===== WRITE-UP PAGE ENTRY POINT (projects/*) =====
// Lighter than main.js: write-up pages have no modals, counters or skill bars.
import './style.css';
import './writeup.css';

import { initScrollProgress } from './modules/scroll-progress.js';
import { initBackToTop } from './modules/back-to-top.js';

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initBackToTop();
});
