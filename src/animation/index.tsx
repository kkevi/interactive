import React from "react";
import styles from "../../styles/Animation.module.css";

export default function Animation() {
  return (
    <div>
      <h1>Animation</h1>
      <div className={styles.box}>box</div>
      <div style={{ height: 100 }} />
      <h1>Animation2</h1>
      <div className={styles.spaceship}></div>
    </div>
  );
}
