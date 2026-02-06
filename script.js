document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  const celebration = document.getElementById("celebration");
  const message = document.getElementById("message");

  if (!yesBtn || !noBtn) return;

  // YES expands more and more
  let yesScale = 1;
  yesBtn.style.transition = "transform 0.25s ease";

  yesBtn.addEventListener("mouseover", () => {
    yesScale += 0.12;
    yesBtn.style.transform = `scale(${yesScale})`;
  });

  // YES click shows celebration or message
  yesBtn.addEventListener("click", () => {
    if (celebration) celebration.classList.remove("hidden");
    if (message) message.textContent = "Yay! You made me the happiest! 💖";
  });

  // NO runs away (works for desktop + mobile)
  noBtn.style.position = "absolute";

  const moveNoButton = () => {
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.floor(Math.random() * Math.max(maxX, padding));
    const y = Math.floor(Math.random() * Math.max(maxY, padding));

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  };

  setTimeout(() => {
    const rect = noBtn.getBoundingClientRect();
    noBtn.style.left = `${Math.max(20, rect.left)}px`;
    noBtn.style.top = `${Math.max(20, rect.top)}px`;
  }, 0);

  noBtn.addEventListener("mouseover", moveNoButton);
  noBtn.addEventListener("click", moveNoButton);
});
