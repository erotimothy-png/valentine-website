document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const message = document.getElementById("message");

  if (!yesBtn || !noBtn || !message) return;

  // YES keeps growing bigger (hover + click)
  let yesScale = 1;
  yesBtn.style.transition = "transform 0.25s ease";

  yesBtn.addEventListener("mouseenter", () => {
    yesScale += 0.12;
    yesBtn.style.transform = `scale(${yesScale})`;
  });

  yesBtn.addEventListener("click", () => {
    yesScale += 0.25; // extra growth on click
    yesBtn.style.transform = `scale(${yesScale})`;

    message.innerHTML =
      "<strong>Yay! You made me the happiest man alive! 💖</strong>";
  });

  // NO runs away ONLY when you click it (not on hover)
  noBtn.style.position = "absolute";

  const
