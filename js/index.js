const navbar = document.querySelector(".navbar");

const syncNavbarState = () => {
  if (!navbar) return;
  navbar.classList.toggle("scrolled", window.scrollY > 20);
};

syncNavbarState();
window.addEventListener("scroll", syncNavbarState);

const sr = ScrollReveal({
  distance: "56px",
  duration: 1400,
  delay: 120,
  reset: false,
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
});

sr.reveal(".hero-panel", { origin: "bottom" });
sr.reveal(".profile-pic", { delay: 220, origin: "right", scale: 0.92 });
sr.reveal("#intro-text > *", { origin: "bottom", interval: 120 });
sr.reveal(".stat-card", { origin: "bottom", interval: 120, distance: "30px" });

sr.reveal(".section-heading", { origin: "bottom" });
sr.reveal(".about-img", { origin: "left" });
sr.reveal(".work", { origin: "bottom", interval: 100, distance: "28px" });

sr.reveal(".skills-panel", { origin: "left" });
sr.reveal(".grid-item", {
  origin: "bottom",
  distance: "24px",
  interval: 70,
  opacity: 0,
});

sr.reveal(".card-content", {
  origin: "bottom",
  distance: "34px",
  interval: 120,
  opacity: 0,
});

sr.reveal(".project", {
  origin: "bottom",
  distance: "40px",
  interval: 140,
  opacity: 0,
});

sr.reveal(".contact-panel", {
  origin: "bottom",
  distance: "36px",
  opacity: 0,
});
