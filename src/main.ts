const darkTheme = () => {
  document.documentElement.style.setProperty(
    "--color-neutral-100",
    "hsl(207, 19%, 9%)",
  );
  document.documentElement.style.setProperty(
    "--color-neutral-900",
    "hsl(0, 0%, 95%)",
  );
  document.querySelector("#theme-btn")!.classList.toggle("spin");
  localStorage.setItem("theme", "dark");
};

const lightTheme = () => {
  document.documentElement.style.setProperty(
    "--color-neutral-100",
    "hsl(0, 0%, 95%)",
  );
  document.documentElement.style.setProperty(
    "--color-neutral-900",
    "hsl(207, 19%, 9%)",
  );
  document.querySelector("#theme-btn")!.classList.toggle("spin");
  localStorage.setItem("theme", "light");
};

const toggleTheme = () => {
  if (localStorage.getItem("theme") === "dark") {
    lightTheme();
  } else {
    darkTheme();
  }
};

const initTheme = () => {
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "light") {
      lightTheme();
    } else {
      darkTheme();
    }
  } else {
    darkTheme();
  }
};

const themeSwitchBtn = document
  .getElementById("theme-btn")!
  .addEventListener("click", toggleTheme, false);

const loadingContainer = document.getElementById("loading-container")!;

window.onload = () => {
  initTheme();
  loadingContainer.style.opacity = "0";
  loadingContainer.ontransitionend = () => {
    loadingContainer.style.display = "none";
  };
};
