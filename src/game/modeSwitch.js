// src/game/modeSwitch.js

export function switchMode(currentMode) {
  // 🐝 One Fix: stop double-click crashes with a lock
  if (window.isSwitching) return;
  window.isSwitching = true;

  try {
    if (currentMode === "classic") {
      return "wild";   // go from classic to wild
    } else {
      return "classic"; // go from wild back to classic
    }
  } finally {
    // release lock after 500ms
    setTimeout(() => {
      window.isSwitching = false;
    }, 500);
  }
}
