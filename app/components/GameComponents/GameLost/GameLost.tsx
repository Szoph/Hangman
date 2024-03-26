import "./gamelost.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  setUserSuccess,
  setUsername,
  setGameStored,
  resetHangmanGame,
} from "@/redux/game/hangman-backend-slice";
import GameClient from "@/utils/clients/gameClient";

type GameOverProps = {
  gameRestart: () => void;
};

const GameLost: React.FC<GameOverProps> = ({ gameRestart }) => {
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
    console.log(gameUploaded);

    dispatch(setGameStored(true));
    setGameFinished(false);
  };

  useEffect(() => {
    if (gameStored) {
      return;
    };

    if (gameFinished) {
      dispatch(setUserSuccess(false));
      dispatch(setUsername(username));

      uploadData();
    } else {
      setGameFinished(true);
    }
  }, [gameFinished]);

  return (
    <>
      <div className="game-lost__container">
        <div>
          <p className="game-lost__text"> YOU LOSE!</p>
        </div>

        <div className="game-lost__buttons">
          <button onClick={gameReset} className="game-lost__button-restart">
            PLAY AGAIN?
          </button>
          <button onClick={quitGame} className="game-lost__button-quit">
            QUIT
          </button>
        </div>
      </div>
    </>
  );
};

export default GameLost;
