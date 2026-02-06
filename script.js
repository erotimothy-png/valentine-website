document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const message = document.getElementById("message");
  const container = document.querySelector(".buttons-container");

  if (!yesBtn || !noBtn || !message || !container) return;

  // YES grows ONLY when you try NO (and when you click YES)
  let yesScale = 1;
  yesBtn.style.transition = "transform 0.2s ease";

  const growYes = (amount = 0.22) => {
    yesScale += amount;
    yesBtn.style.transform = `scale(${yesScale})`;
  };

  // Clicking YES: show message (optional extra growth)
  yesBtn.addEventListener("click", () => {
    growYes(0.15);
    message.innerHTML =
      "<strong>Yay! You made me the happiest man alive! 💖</strong>";
  });

  // NO roams inside the buttons container
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

  // Start position
  moveNoInside();

  // Desktop: NO runs when you approach
  noBtn.addEventListener("mouseenter", moveNoInside);

  // When you try to press NO: YES grows + NO jumps away (PHONE + CHROME safe)
  const onNoAttempt = (e) => {
    e.preventDefault();     // important for mobile Chrome
    growYes(0.25);          // YES grows because you tried NO
    moveNoInside();         // NO runs away
  };

  // Use pointer/touch/click so it works everywhere
  noBtn.addEventListener("pointerdown", onNoAttempt);
  noBtn.addEventListener("touchstart", onNoAttempt, { passive: false });
  noBtn.addEventListener("click", onNoAttempt);
});
