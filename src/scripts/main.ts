import { initScrollAnimations, animateCounters } from './scrollAnimations';

function initFilters() {
  const filterButtons = document.querySelectorAll<HTMLButtonElement>(".filter-btn");
  const servicioCards = document.querySelectorAll<HTMLElement>(".servicio-card");
  const noResults = document.getElementById("no-results");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      // actualizar botón activo
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      let visibleCount = 0;

      servicioCards.forEach(card => {
        const categoria = card.dataset.categoria;
        if (filter === "todos" || categoria === filter) {
          card.style.display = "block";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
      }

      // reinicializar scroll animations para que los elementos filtrados se animen
      initScrollAnimations();
    });
  });
}

// inicialización principal
document.addEventListener('astro:page-load', () => {
  initScrollAnimations();
  animateCounters();
  initFilters();
});
