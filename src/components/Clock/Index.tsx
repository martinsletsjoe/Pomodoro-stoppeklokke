import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = currentTime.getHours() % 12;
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourRotation = hours * 30 + minutes * 0.5; // 30 degrees per hour, 0.5 degrees per minute
  const minuteRotation = minutes * 6 + seconds * 0.1; // 6 degrees per minute, 0.1 degrees per second
  const secondRotation = seconds * 6; // 6 degrees per second

  return (
    <div className={styles.wrapper}>
      <div className={styles.barSeconds}>
        {[...Array(60)].map((_, i) => (
          <span key={i} style={{ "--index": i + 1 } as React.CSSProperties}>
            <p></p>
          </span>
        ))}
      </div>

      <div className={styles.numberHours}>
        {[...Array(12)].map((_, i) => (
          <span key={i} style={{ "--index": i + 1 } as React.CSSProperties}>
            <p>{i + 1}</p>
          </span>
        ))}
      </div>

      <div className={styles["hands-box"]}>
        <div
          className={`${styles.hand} ${styles.hours}`}
          style={{ transform: `rotate(${hourRotation}deg)` }}
        >
          <i></i>
        </div>
        <div
          className={`${styles.hand} ${styles.minutes}`}
          style={{ transform: `rotate(${minuteRotation}deg)` }}
        >
          <i></i>
        </div>
        <div
          className={`${styles.hand} ${styles.seconds}`}
          style={{ transform: `rotate(${secondRotation}deg)` }}
        >
          <i></i>
        </div>
      </div>
    </div>
  );
};

export default Index;
