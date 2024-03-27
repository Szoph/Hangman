"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import "./countDown.scss";
import { setCountDown } from "@/redux/game/hangman-slice";

const CountDown: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const countDown = useAppSelector(
    (state) => state.hangmanGame.value.countDown
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (countDown > 0) {
      timer = setTimeout(() => {
        dispatch(setCountDown(countDown - 1));
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [dispatch, countDown]);

  return countDown === 0 ? null : (
    <div className="count-down">{countDown === 1 ? "Go!" : countDown - 1}</div>
  );
};

export default CountDown;
