// src/App.jsx
import React, { useState } from "react";
import XpBoostButton from "./ui/XpBoostButton";
import ScoreBoard from "./ui/ScoreBoard";

export default function App() {
  const [score, setScore] = useState(0);

  function addPoints(points) {
    setScore(prev => prev + points);
  }

  function resetScore() {
    setScore(0);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🐝 Dirty Buzzo</h1>
      <p style={styles.subtitle}>Buzz harder. Play louder.</p>

      {/* XP Boost Button */}
      <XpBoostButton onBoost={() => addPoints(10)} />

      {/* Score Tracker with Reset */}
      <ScoreBoard score={score} onReset={resetScore} />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#1e1e1e",
    color: "white",
    fontFamily: "sans-serif"
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem"
  },
  subtitle: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    color: "#bbb"
  }
};
