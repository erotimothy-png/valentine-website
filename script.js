document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const message = document.getElementById("message");
  const container = document.querySelector(".buttons-container");

  if (!yesBtn || !noBtn || !message || !container) return;

  // YES grows ONLY when you try to click/tap NO
  let yesScale = 1;
  yesBtn.style.transition = "transform 0.2s ease";

  const growYes = () => {
    yesScale += 0.25; // growth amount
    yesBtn.style.transform = `scale(${yesScale})`;
  };

  // Clicking YES: show message ONLY (NO growth)
  yesBtn.addEventListener("click", () => {
    message.innerHTML =
      "<strong>Yay! You made me the happiest man alive! 💖</strong>";
  });

  // NO runs away inside the buttons container
  noBtn.style.position = "absolute";

  const moveNoInside = () => {
    const pad = 6;
    const maxX = Math.max(pad, container.clientWidth - noBtn.offsetWidth - pad);
    const maxY = Math.max(pad, container.clientHeight - noBtn.offsetHeight - pad);

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  };

  // Initial NO position
  moveNoInside();

  // Desktop: runs when you approach
  noBtn.addEventListener("mouseenter", moveNoInside);

  // Phone/Chrome: when you try to click/tap NO → YES grows + NO runs
  const onNoAttempt = (e) => {
    e.preventDefault();
    growYes();
    moveNoInside();
  };

  noBtn.addEventListener("pointerdown", onNoAttempt);
  noBtn.addEventListener("touchstart", onNoAttempt, { passive: false });
  noBtn.addEventListener("click", onNoAttempt);
});
