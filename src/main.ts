type themeType = "light" | "dark";

type themeLogic = {
  getTheme: () => themeType;
  toggleTheme: () => void;
};

function themeLogic(): themeLogic {
  let theme: themeType = "light";
  const toggleTheme = () => {
    if (theme === "light") {
      theme = "dark";
    } else {
      theme = "light";
    }
  };
  const getTheme = () => {
    return theme;
  };
  return { toggleTheme, getTheme };
}

const { toggleTheme, getTheme } = themeLogic();

const darkTheme = () => {
  // document.documentElement.style.setProperty(
  //   "--color-accent-500",
  //   "hsl(136, 60%, 45%)"
  // );
  document.documentElement.style.setProperty(
    "--color-neutral-100",
    "hsl(207, 19%, 9%)"
  );
  document.documentElement.style.setProperty(
    "--color-neutral-900",
    "hsl(0, 0%, 95%)"
  );
  document.querySelector("#theme-btn")!.classList.toggle("spin");
};

const lightTheme = () => {
  // document.documentElement.style.setProperty("--color-accent-500", "red");
  document.documentElement.style.setProperty(
    "--color-neutral-100",
    "hsl(0, 0%, 95%)"
  );
  document.documentElement.style.setProperty(
    "--color-neutral-900",
    "hsl(207, 19%, 9%)"
  );
  document.querySelector("#theme-btn")!.classList.toggle("spin");
};

function setNewTheme() {
  if (getTheme() === "light") {
    darkTheme();
    localStorage.setItem("theme", "dark");
    toggleTheme();
  } else {
    lightTheme();
    localStorage.setItem("theme", "light");
    toggleTheme();
  }
}

const themeSwitchBtn = document.getElementById("theme-btn")!;
themeSwitchBtn.addEventListener("click", setNewTheme, false);

const loadingContainer = document.getElementById("loading-container")!;

window.onload = () => {
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "dark") {
      darkTheme();
    } else {
      lightTheme();
    }
  }
  loadingContainer.style.opacity = "0";
  loadingContainer.ontransitionend = () => {
    loadingContainer.style.display = "none";
  };
};

const menuBtn = document.querySelector("#menu-btn")!;
const menu = document.querySelector(".hamburger")!;

menuBtn.addEventListener(
  "click",
  () => {
    menu.classList.toggle("is-active");
    console.log("cada");
  },
  false
);
