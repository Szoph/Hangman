import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import "./gamewon.scss";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  setUserSuccess,
  setUsername,
  setGameStored,
  resetHangmanGame,
} from "@/redux/game/hangman-backend-slice";
import GameClient from "@/utils/clients/gameClient";

type GameWonProps = {
  gameRestart: () => void;
};
const GameWon: React.FC<GameWonProps> = ({ gameRestart }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const username = useAppSelector(
    (state) => state.authentication.value.username
  );
  const gameState = useAppSelector((state) => state.hangmanBackend);
  const gameStored = gameState.stored;
  const [gameFinished, setGameFinished] = useState<boolean>(false);

  const quitGame = () => {
    dispatch(resetHangmanGame());
    gameRestart();
    router.push("/");
  };

  const gameReset = async () => {
    dispatch(resetHangmanGame());
    gameRestart();
    router.push("/genremenu");
  };

  const uploadData = async () => {
    const gameUploaded = await GameClient.uploadGameData(gameState);

    dispatch(setGameStored(true));

    setGameFinished(false);
  };

  useEffect(() => {
    if (gameStored) {
      return;
    }

    if (gameFinished) {
      uploadData();
    } else {
      dispatch(setUserSuccess(true));
      dispatch(setUsername(username));

      setGameFinished(true);
    }
  }, [gameFinished, gameStored]);

  return (
    <>
      <div className="game-won__container">
        <div>
          <p className="game-won__text">YOU WIN!</p>
        </div>

        <div className="game-won__buttons">
          <button onClick={gameReset} className="game-won__button-next">
            PLAY AGAIN
          </button>
          <button onClick={quitGame} className="game-won__button-quit">
            QUIT
          </button>
        </div>
      </div>
    </>
  );
};

export default GameWon;
