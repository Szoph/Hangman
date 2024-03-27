"use client";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { setTimeLeft } from "@/redux/game/hangman-slice";
import "./timer.scss";

const Timer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { timeLeft, mode, wrongGuess, rightGuess, countDown } = useAppSelector(
    (state) => state.hangmanGame.value
  );
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerStatus, setTimerStatus] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (countDown === 0 && timeLeft > 0) {
      timer = setTimeout(() => {
        dispatch(setTimeLeft(timeLeft - 1));
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [dispatch, timeLeft, countDown]);

  useEffect(() => {
    if (wrongGuess.length !== 0) {
      if (timerStatus === "timer__seconds--wrong-1") {
        setTimerStatus("timer__seconds--wrong-2");
      } else {
        setTimerStatus("timer__seconds--wrong-1");
      }
    }
  }, [wrongGuess.length]);

  useEffect(() => {
    if (rightGuess.length !== 0) {
      if (timerStatus === "timer__seconds--right-1") {
        setTimerStatus("timer__seconds--right-2");
      } else {
        setTimerStatus("timer__seconds--right-1");
      }
    }
  }, [rightGuess.length]);

  useEffect(() => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    setMinutes(mins);
    setSeconds(secs);
  }, [timeLeft, mode]);

  return (
    <div className="timer">
      Time:
      <span className={`timer__seconds ${timerStatus}`}>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
};

export default Timer;
