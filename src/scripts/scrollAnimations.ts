let scrollObserver: IntersectionObserver | null = null;
let counterObservers: IntersectionObserver[] = [];

export function initScrollAnimations() {
  if (scrollObserver) {
    scrollObserver.disconnect();
  }

  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          scrollObserver?.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }
  );

  document
    .querySelectorAll('.animate-on-scroll')
    .forEach((el) => {
      el.classList.remove('in-view');
      scrollObserver?.observe(el);
    });
}

export function animateCounters() {
  counterObservers.forEach((o) => o.disconnect());
  counterObservers = [];

  document.querySelectorAll('[data-counter]').forEach((counter) => {
    const element = counter as HTMLElement;
    const target = Number(element.dataset.counter);
    const duration = Number(element.dataset.duration ?? 2000);

    let start = 0;
    let started = false;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        started = true;
        const startTime = performance.now();

        const animate = (time: number) => {
          const progress = Math.min((time - startTime) / duration, 1);
          element.textContent = Math.floor(progress * target).toString();
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });

    observer.observe(element);
    counterObservers.push(observer);
  });
}
