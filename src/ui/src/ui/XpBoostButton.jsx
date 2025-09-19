// src/ui/XpBoostButton.jsx
import React from "react";
import "./xpBoostButton.css";

export default function XpBoostButton() {
  function triggerXPBoost() {
    console.log("XP Boost Activated!");

    // 🐝 Buzz effect
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]); // vibration pattern
    }

    const btn = document.querySelector(".xp-boost-btn");
    if (btn) {
      btn.classList.add("buzz-active");
      setTimeout(() => btn.classList.remove("buzz-active"), 300);
    }
  }

  return (
    <button className="xp-boost-btn" onClick={triggerXPBoost}>
      ⚡ XP Boost
    </button>
  );
}
