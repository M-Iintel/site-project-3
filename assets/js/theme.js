document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("mode-toggle");
  const icon = document.getElementById("mode-icon");

  if (!toggle || !icon) return;

  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
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
});
