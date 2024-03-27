"use client";
import Keyboard from "./Keyboard/Keyboard";
import TitleComponent from "./TitleComponent/TitleComponent";
import Game from "./GameContainer/Game";
import GenreTitle from "./GenreTitle/GenreTitle";
import Guesses from "./Guesses/Guesses";
import GameLost from "./GameLost/GameLost";
import GameWon from "./GameWon/GameWon";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { resetGame } from "@/redux/game/hangman-slice";
import "./hangmangame.scss";
import background from "../GameContainer/utils/background.png";
import Image from "next/image";
import Timer from "./Timer/Timer";
import CountDown from "./CountDown/CountDown";

const HangmanGame = () => {
  const remainingAttempts = useAppSelector(
    (state) => state.hangmanGame.value.remainingAttempts
  );
  const won = useAppSelector((state) => state.hangmanGame.value.won);
  const dispatch = useDispatch<AppDispatch>();
  const mode = useAppSelector((state) => {
    return state.hangmanGame.value.mode;
  });

  return (
    <div className="game-area">
      <CountDown />
      <div className="game-left">
        <Game />
      </div>
      <div className="game-right">
        {mode !== "easy" ? <Timer /> : null}
        <TitleComponent />
        <GenreTitle />
        <Keyboard />
        <Guesses />
      </div>
      {won === true ? (
        <div className="game-page__game-won-modal">
          <GameWon />
        </div>
      ) : null}
      {remainingAttempts === 0 ? (
        <div className="game-page__game-lost-modal">
          <GameLost />
        </div>
      ) : null}
    </div>
  );
};

export default HangmanGame;
