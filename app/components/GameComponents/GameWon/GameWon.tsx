import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import "./gamewon.scss";
import { useRouter } from "next/navigation";

const GameWon: React.FC = () => {
  const router = useRouter();

  const nextGame = () => {
    router.push("/genremenu");
  };

  const quitGame = () => {
    router.push("/");
  };

  return (
    <>
      <div className="game-won__container">
        <div>
          <p className="game-won__text">YOU WIN!</p>
        </div>

        <div className="game-won__buttons">
          <button onClick={nextGame} className="game-won__button-next">
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
