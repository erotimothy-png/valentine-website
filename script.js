document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const message = document.getElementById("message");
  const container = document.querySelector(".buttons-container");

  if (!yesBtn || !noBtn || !message || !container) return;

  // --- YES grows ---
  let yesScale = 1;
  yesBtn.style.transition = "transform 0.2s ease";

  const growYes = (amount = 0.2) => {
    yesScale += amount;
    yesBtn.style.transform = `scale(${yesScale})`;
  };

  // YES click shows message (and grows too)
  yesBtn.addEventListener("click", () => {
    growYes(0.25);
    message.innerHTML =
      "<strong>Yay! You made me the happiest man alive! 💖</strong>";
  });

  // --- NO roams inside the buttons container ---
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

  // Place it once on load
  moveNoInside();

  // Desktop: runs when you approach
  noBtn.addEventListener("mouseenter", moveNoInside);

  // Phone/Chrome: when you try to tap NO, YES grows and NO jumps away
  const onNoAttempt = (e) => {
    e.preventDefault();      // helps on mobile/Chrome
    growYes(0.18);           // YES gets bigger because you tried NO
    moveNoInside();          // NO roams away
  };

  noBtn.addEventListener("touchstart", onNoAttempt, { passive: false });
  noBtn.addEventListener("pointerdown", onNoAttempt);
  noBtn.addEventListener("click", onNoAttempt);
});
