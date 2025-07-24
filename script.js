// script.js

// Select the topbar element
const topbar = document.querySelector('.topbar');

// Track last scroll position
let lastScrollTop = 0;

// Listen to scroll events
window.addEventListener('scroll', () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  // Show topbar when near the top (adjust threshold if needed)
  if (currentScroll <= 50) {
    topbar.classList.remove('topbar-hidden');
  }
  // Hide topbar when scrolling down
  else if (currentScroll > lastScrollTop) {
    topbar.classList.add('topbar-hidden');
  }
  // When scrolling up but not at the top, keep it hidden
  else {
    // Do nothing (topbar remains hidden)
  }

  // Update last scroll position
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
