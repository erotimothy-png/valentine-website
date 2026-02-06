document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const message = document.getElementById("message");
  const container = document.querySelector(".buttons-container");

  if (!yesBtn || !noBtn || !message || !container) return;

  // Prevent iOS double-tap zoom / delay feeling
  yesBtn.style.touchAction = "manipulation";
  noBtn.style.touchAction = "manipulation";

  // YES keeps growing (works on phone + desktop)
  let yesScale = 1;
  yesBtn.style.transition = "transform 0.2s ease";

  const growYes = () => {
    yesScale += 0.18; // increase for faster growth
    yesBtn.style.transform = `scale(${yesScale})`;
  };

  // Use pointer events (best cross-device)
  yesBtn.addEventListener("pointerenter", growYes); // desktop hover
  yesBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault(); // avoids extra quirks on mobile
    growYes();
    message.innerHTML =
      "<strong>Yay! You made me the happiest man alive! 💖</strong>";
  });

  // NO runs away on phone (touch) and desktop (hover/click)
  noBtn.style.position = "absolute";

  const moveNoInsideContainer = () => {
    const pad = 8;

    const c = container.getBoundingClientRect();
    const b = noBtn.getBoundingClientRect();

    const maxX = Math.max(pad, c.width - b.width - pad);
    const maxY = Math.max(pad, c.height - b.height - pad);

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  };

  // Initial position
  moveNoInsideContainer();

  // On desktop, it can run when you try to approach it
  noBtn.addEventListener("pointerenter", moveNoInsideContainer);

  // On phone, make it run when you try to tap it
  noBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    moveNoInsideContainer();
  });
});
