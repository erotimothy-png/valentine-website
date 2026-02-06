document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const message = document.getElementById("message");

  if (!yesBtn || !noBtn || !message) return;

  // YES keeps growing
  let yesScale = 1;
  yesBtn.style.transition = "transform 0.25s ease";

  // Grow on hover
  yesBtn.addEventListener("mouseover", () => {
    yesScale += 0.12;
    yesBtn.style.transform = `scale(${yesScale})`;
  });

  // Grow MORE on click + show message
  yesBtn.addEventListener("click", () => {
    yesScale += 0.25; // 👈 extra growth on click
    yesBtn.style.transform = `scale(${yesScale})`;

    message.innerHTML =
      "<strong>Yay! You made me the happiest man alive! 💖</strong>";
  });

  // NO runs away
  noBtn.style.position = "absolute";

  const moveNoButton = () => {
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
  };

  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("click", moveNoButton);
});
