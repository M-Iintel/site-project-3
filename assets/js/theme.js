document.addEventListener("DOMContentLoaded", () => {
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

  const projectCards = document.querySelectorAll(".project-card");
  if (!projectCards.length) return;

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
});
