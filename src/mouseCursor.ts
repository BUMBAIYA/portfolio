const cursor: HTMLDivElement = document.querySelector("#main-cursor")!;
const cursorRing: HTMLDivElement = document.querySelector("#main-cursor-ring")!;

const cursorPos = { x: 0, y: 0 };
const cursorRingPos = { x: 0, y: 0 };

const config = {
  color: "#fff",
  size: 20,
  trailColor: "var(--color-accent-500)",
  trailTime: 300,
  showTrail: true,
};

document.addEventListener("mousemove", (e: MouseEvent) => {
  cursorPos.x = e.clientX + 10;
  cursorPos.y = e.clientY + 4;
  cursor.style.transform = `translate(${e.clientX + 10}px, ${e.clientY + 4}px)`;
  cursorRing.style.display = "block";
});

requestAnimationFrame(function loop() {
  const easting = 7;
  cursorRingPos.x += (cursorPos.x - cursorRingPos.x) / easting;
  cursorRingPos.y += (cursorPos.y - cursorRingPos.y) / easting;

  cursorRing.style.transform = `translate(${cursorRingPos.x}px, ${cursorRingPos.y}px)`;
  requestAnimationFrame(loop);
});

const elements: NodeListOf<HTMLElement> =
  document.querySelectorAll("[data-cursor]");

elements.forEach((elm: HTMLElement) => {
  elm.addEventListener("mouseover", () => {
    if (elm.dataset.cursor === "pointer") {
      cursor.style.backgroundColor = "var(--color-accent-500)";
      cursorRing.style.setProperty("--cursor-ring-size", "2.5rem");
      cursorRing.style.borderColor = "var(--color-accent-500)";
    }
  });
  elm.addEventListener("mouseout", () => {
    if (elm.dataset.cursor === "pointer") {
      cursor.style.backgroundColor = "var(--color-neutral-900)";
      cursorRing.style.setProperty("--cursor-ring-size", "3.5rem");
      cursorRing.style.borderColor = "var(--color-neutral-900)";
    }
  });
});
