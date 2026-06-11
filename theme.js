(function () {
  const storageKey = "sistemas-soften-theme";

  function getInitialTheme() {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(storageKey, theme);

    document.querySelectorAll("[data-theme-toggle]").forEach(button => {
      button.textContent = theme === "dark" ? "Tema claro" : "Tema escuro";
      button.setAttribute("aria-label", theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro");
    });
  }

  setTheme(getInitialTheme());

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-theme-toggle]").forEach(button => {
      button.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
        setTheme(currentTheme === "dark" ? "light" : "dark");
      });
    });
  });
})();
