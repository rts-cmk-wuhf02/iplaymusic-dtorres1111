document.addEventListener("DOMContentLoaded", function() {
  const changeBtn = document.getElementById("themeBtn");

  let currentTheme = localStorage.getItem("current-theme");
  document.documentElement.setAttribute("data-theme", currentTheme);

  changeBtn.addEventListener("click", () => {
    if (document.documentElement.dataset.theme == "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      document.querySelector("footer").setAttribute("data-theme", "dark");
      document.querySelector("body").setAttribute("data-theme", "dark");
      document.querySelector("header").setAttribute("data-theme", "dark");
      localStorage.setItem("current-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.querySelector("footer").setAttribute("data-theme", "light");
      document.querySelector("header").setAttribute("data-theme", "light");
      localStorage.setItem("current-theme", "light");
    }
  });
});
