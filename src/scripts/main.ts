import { initScrollAnimations, animateCounters } from './scrollAnimations';

// Inicialización principal
// Se ejecuta en cada navegación con View Transitions de Astro
document.addEventListener('astro:page-load', () => {
  initScrollAnimations();
  animateCounters();
});
