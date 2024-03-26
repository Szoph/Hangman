import "./gamelost.scss";
import { useRouter } from "next/navigation";

const GameLost: React.FC = () => {
  const router = useRouter();

  const quitGame = () => {
    router.push("/");
  };

  const gameReset = () => {
    router.push("/genremenu");
  };

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
