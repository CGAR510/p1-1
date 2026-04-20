const revealItems = document.querySelectorAll(".hero-copy, .hero-card, .section-heading, .info-panel");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});
