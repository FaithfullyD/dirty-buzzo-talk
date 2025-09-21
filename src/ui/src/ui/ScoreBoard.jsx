import React, { useState } from "react";

export default function ScoreBoard() {
  const [score, setScore] = useState(0);

  function addPoints(points) {
    setScore(prev => prev + points);
  }

  return (
    <div style={styles.board}>
      <h2>🏆 Score: {score}</h2>
      <button style={styles.btn} onClick={() => addPoints(10)}>
        +10 Points
      </button>
    </div>
  );
}

const styles = {
  board: {
    color: "white",
    textAlign: "center",
    marginTop: "2rem"
  },
  btn: {
    marginTop: "1rem",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#ff2d55",
    color: "white",
    fontWeight: "bold"
  }
};
