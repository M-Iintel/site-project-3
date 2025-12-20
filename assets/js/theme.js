document.addEventListener("DOMContentLoaded", () => {
  /* ================= DARK MODE ================= */

  const toggle = document.getElementById("mode-toggle");
  const icon = document.getElementById("mode-icon");

  if (toggle && icon) {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    let darkMode = localStorage.getItem("dark-mode");

    if (darkMode === null) {
      darkMode = prefersDark ? "true" : "false";
    }

    if (darkMode === "true") {
      document.body.classList.add("dark-mode");
      icon.src = icon.dataset.dark;
    } else {
      document.body.classList.remove("dark-mode");
      icon.src = icon.dataset.light;
    }

    toggle.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      localStorage.setItem("dark-mode", isDark ? "true" : "false");
      icon.src = isDark ? icon.dataset.dark : icon.dataset.light;

      icon.classList.add("icon-switch");
      setTimeout(() => icon.classList.remove("icon-switch"), 300);
    });
  }

  /* ================= PROJECT CARD FADE-IN ================= */

  const projectCards = document.querySelectorAll(".project-card");

  if (projectCards.length) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    projectCards.forEach((card) => observer.observe(card));
  }

  /* ================= ANIMATED GRADIENT TITLES ================= */

  const animatedTitles = document.querySelectorAll(".animated-title");

  animatedTitles.forEach((title) => {
    title.addEventListener("mousemove", (e) => {
      const rect = title.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      title.style.backgroundPosition = `${x}% 50%`;
    });

    title.addEventListener("mouseleave", () => {
      title.style.backgroundPosition = "50% 50%";
    });
  });
});
