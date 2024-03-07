import styles from "./styles.module.css";

const Index = () => {
  const numberHours = [];
  for (let i = 1; i <= 12; i++) {
    numberHours.push(
      <span
        key={i}
        style={{ "--index": `${i}` } as React.CSSProperties}
        className={styles.number}
      >
        <p>{i}</p>
      </span>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.numberHours}>{numberHours}</div>
    </div>
  );
};

export default Index;
