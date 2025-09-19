// src/ui/xpBoostButton.js

export function triggerXPBoost() {
  // Existing boost logic here...
  console.log("XP Boost Activated!");

  // 🐝 New: add buzz effect
  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]); // vibration pattern
  }

  const btn = document.querySelector(".xp-boost-btn");
  if (btn) {
    btn.classList.add("buzz-active");
    setTimeout(() => btn.classList.remove("buzz-active"), 300);
  }
}
/* Buzz active flash effect */
.xp-boost-btn.buzz-active {
  box-shadow: 0 0 24px rgba(255, 215, 0, 1);
  background: linear-gradient(90deg, #ffd700, #ff6f00);
}
