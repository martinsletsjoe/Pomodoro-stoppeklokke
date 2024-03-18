import { Button } from "@chakra-ui/button";
import { useState, useEffect } from "react";
import { TimerInfo } from "../types";

const initialTime = 5;

interface StopWatchProps {
  addTimerInfo: (timerInfo: TimerInfo) => void;
}

const Stopwatch = ({ addTimerInfo }: StopWatchProps) => {
  const [seconds, setSeconds] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: number | null = null;

    if (isRunning) {
      const startTime = new Date();

      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            setIsRunning(false); // Stop the timer if time runs out
            const endTime = new Date();
            setTimeout(() => addTimerInfo({ startTime, endTime }), 0);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    // Cleanup function to clear the interval when the component unmounts or isRunning changes
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]); // This effect depends on isRunning

  function startCountdown() {
    if (!isRunning && seconds > 0) {
      setIsRunning(true);
    }
  }

  function resetTimer() {
    setIsRunning(false); // Stop the timer
    setSeconds(initialTime); // Reset the seconds
  }

  function stopTimer() {
    setIsRunning(false); // This will automatically clear the interval
  }

  function formatTime() {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    let formattedMinutes = minutes.toString().padStart(2, "0");
    let formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div>{formatTime()}</div>
      <Button onClick={startCountdown}>Start</Button>
      <Button onClick={stopTimer}>Stop</Button>
      <Button onClick={resetTimer}>Reset</Button>
    </div>
  );
};

export default Stopwatch;
