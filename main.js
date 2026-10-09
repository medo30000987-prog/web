
const celebrateBtn = document.getElementById("celebrateBtn");
const birthdayMessage = document.getElementById("birthdayMessage");
const confettiContainer = document.getElementById("confetti");
const countdown = document.getElementById("countdown");

let celebrated = false;

function launchConfetti() {
  const colors = [
    "#ff75c4",
    "#a88aff",
    "#ffd477",
    "#ffffff",
    "#7ce8d5"
  ];

  for (let i = 0; i < 120; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti-piece";
    piece.textContent = Math.random() > 0.5 ? "✦" : "●";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.color =
      colors[Math.floor(Math.random() * colors.length)];
    piece.style.fontSize = (8 + Math.random() * 12) + "px";
    piece.style.animationDuration = (3 + Math.random() * 4) + "s";
    piece.style.animationDelay = (Math.random() * 1.5) + "s";
    piece.style.setProperty(
      "--drift",
      (Math.random() * 200 - 100) + "px"
    );

    confettiContainer.appendChild(piece);

    piece.addEventListener("animationend", () => {
      piece.remove();
    });
  }
}

celebrateBtn.addEventListener("click", () => {
  if (!celebrated) {
    birthdayMessage.hidden = false;
    celebrateBtn.innerHTML = "❤️ Celebrate Again! <span>↻</span>";
    celebrated = true;
  }

  launchConfetti();

  birthdayMessage.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

// Birthday is October 10, 2026.
// Change this date if needed.
function updateCountdown() {
  const birthday = new Date(2026, 9, 10);
  const now = new Date();

  birthday.setHours(0, 0, 0, 0);

  const today = new Date(now);
  today.setHours(0, 0, 0, 0);

  const difference = birthday.getTime() - today.getTime();
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

  if (days > 1) {
    countdown.textContent =
      `🎁 Only ${days} days until the birthday!`;
  } else if (days === 1) {
    countdown.textContent =
      "🎂 The big day is tomorrow!";
  } else if (days === 0) {
    countdown.textContent =
      "🎉 TODAY IS THE BIG DAY! HAPPY BIRTHDAY!";
  } else {
    countdown.textContent =
      "🎉 Celebrating 42 amazing years of Dad!";
  }
}

updateCountdown();