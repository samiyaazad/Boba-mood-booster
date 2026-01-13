const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const restartBtn = document.getElementById("restartBtn");

const bobaArea = document.getElementById("bobaArea");
const quoteOverlay = document.getElementById("quoteOverlay");
const quoteText = document.getElementById("quoteText");
const closeQuote = document.getElementById("closeQuote");

const quotes = [
  "You are allowed to rest 🫶",
  "Gentle days still count 🌸",
  "You don’t need to rush ✨",
  "Your softness is strength 💗",
  "It’s okay to go slowly 🧋",
  "You are doing enough 🌈"
];

/* PAGE SWITCH */
startBtn.onclick = () => {
  page1.classList.remove("active");
  page2.classList.add("active");
  spawnBobas();
};

backBtn.onclick = () => {
  page2.classList.remove("active");
  page1.classList.add("active");
};

restartBtn.onclick = () => {
  bobaArea.innerHTML = "";
  spawnBobas();
};

/* BOBA SPAWN */
function spawnBobas() {
  for (let i = 0; i < 14; i++) {
    const boba = document.createElement("div");
    boba.className = "boba";
    boba.textContent = "🧋";

    boba.style.left = Math.random() * 90 + "vw";
    boba.style.top = Math.random() * 80 + "vh";
    boba.style.animationDuration = 7 + Math.random() * 6 + "s";

    boba.onclick = () => {
      quoteText.textContent =
        quotes[Math.floor(Math.random() * quotes.length)];
      quoteOverlay.classList.add("show");
    };

    bobaArea.appendChild(boba);
  }
}

/* CLOSE QUOTE */
closeQuote.onclick = () => {
  quoteOverlay.classList.remove("show");
};

/* BUBBLES */
document.querySelectorAll(".bubbles").forEach(container => {
  for (let i = 0; i < 22; i++) {
    const bubble = document.createElement("span");
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.animationDuration = 10 + Math.random() * 6 + "s";
    container.appendChild(bubble);
  }
});