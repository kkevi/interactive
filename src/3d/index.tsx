import React from "react";
import styles from "../../styles/Css3D.module.css";

export default function Css3D() {
  return (
    <>
      <h1>CSS 3D</h1>
      <div className={styles.world}>
        <div className={styles.card}>Card</div>
        <div className={styles.card}>Card</div>
        <div className={styles.card}>Card</div>
      </div>
    </>
  );
}
