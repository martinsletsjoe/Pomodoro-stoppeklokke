import { Button } from "@chakra-ui/button";
import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(5);

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function startCountdown() {
    for (let i = seconds; i > 0; i--) {
      await delay(1000);
      setSeconds(i - 1);
    }
  }

  return (
    <>
      <div>{seconds}</div>
      <Button onClick={startCountdown}>Start</Button>
    </>
  );
};

export default Stopwatch;

//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;

//   const formattedMinutes = minutes.toString().padStart(2, "0");
//   const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

//   const timer = formattedMinutes + ":" + formattedSeconds;
