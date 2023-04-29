type themeType = "light" | "dark";

type themeLoginc = {
  getTheme: () => themeType;
  toggleTheme: () => void;
};

function themeLogic(): themeLoginc {
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
  document.documentElement.style.setProperty(
    "--color-neutral-100",
    "hsl(207, 19%, 9%)"
  );
  document.documentElement.style.setProperty(
    "--color-neutral-900",
    "hsl(0, 0%, 100%)"
  );
  document.querySelector("#theme-btn")!.classList.toggle("spin");
};

const lightTheme = () => {
  document.documentElement.style.setProperty(
    "--color-neutral-100",
    "hsl(0, 0%, 100%)"
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
    toggleTheme();
  } else {
    lightTheme();
    toggleTheme();
  }
}

const themeSwitchBtn = document.getElementById("theme-btn")!;
themeSwitchBtn.addEventListener("click", setNewTheme, false);
