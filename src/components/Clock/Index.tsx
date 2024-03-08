import styles from "./styles.module.css";

const Index = () => {
  const numberHours = [];
  const barElement = [];

  for (let i = 1; i <= 12; i++) {
    numberHours.push(
      <span key={i} style={{ "--index": `${i}` } as React.CSSProperties}>
        <p>{i}</p>
      </span>
    );
  }

  for (let i = 1; i <= 60; i++) {
    barElement.push(
      <span key={i} style={{ "--index": `${i}` } as React.CSSProperties}>
        <p></p>
      </span>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.barSeconds}>{barElement}</div>

      <div className={styles.numberHours}>{numberHours}</div>
      <div className={styles["hands-box"]}>
        <div className={`${styles.hand} ${styles.hours}`}>
          <i></i>
        </div>
        <div className={`${styles.hand} ${styles.minutes}`}>
          <i></i>
        </div>
        <div className={`${styles.hand} ${styles.seconds}`}>
          <i></i>
        </div>
      </div>
    </div>
  );
};

export default Index;
