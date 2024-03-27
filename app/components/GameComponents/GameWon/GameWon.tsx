import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux'; 
import './gamewon.scss'
import '../../Leaderboard/leaderboard.scss'
import {useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  setUserSuccess,
  setUsername,
  setGameStored,
  resetHangmanGame,
} from "@/redux/game/hangman-backend-slice";
import GameClient from "@/utils/clients/gameClient";
import { cachedDataVersionTag } from "v8";
import Leaderboard from "../../Leaderboard/Leaderboard";

type GameWonProps = {
  gameRestart: () => void;
}
const GameWon: React.FC<GameWonProps>= ({gameRestart}) => {
const router = useRouter();
const dispatch = useDispatch();
  const username = useAppSelector(
    (state) => state.authentication.value.username
  );
  const gameState = useAppSelector((state) => state.hangmanBackend);
  const movie = useAppSelector((state) => state.hangmanGame.value.word)
  const gameStored = gameState.stored;
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [leaderboardData, setLeaderboardData] = useState<any[]>([]);
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

  const getLeaderboard = async () => {
    // Returns the user_points database in order
    const worldLeaderboard = await GameClient.worldRanking();
    console.log("this is the world leaderboard", worldLeaderboard)
const leaderboardData = worldLeaderboard.data 
console.log(leaderboardData)
setLeaderboardData(leaderboardData);
    setShowModal(true);
    

  }

  const uploadData = async () => {
    // Saves game in games table
    const gameUploaded = await GameClient.uploadGameData(gameState);
    // Updates the points
    const pointsUploaded = await GameClient.uploadPoints(gameState);

    dispatch(setGameStored(true));

    setGameFinished(false);
  };

  useEffect(() => {
    console.log()
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
          <p className="game-won__movie">{movie}</p>
        </div>

        {showModal ? (
          <div className="leaderboard">
            <div className="leaderboard__close" onClick={() => setShowModal(false)}>x</div>
         <h3 className="leaderboard__title">World Leaderboard</h3>
          {leaderboardData.map((data, index) => (
            <Leaderboard key={index} showModal={showModal} 
           username={data.username} points={data.points}
            />
          ))}
          </div>
        ) : null}

        <div className='game-won__buttons'>
          <button onClick={gameReset} className='game-won__button-next'>PLAY AGAIN</button>
          <button onClick={getLeaderboard} className="game-won__button-next">
            LEADERBOARD
          </button>

          <button onClick={quitGame} className='game-won__button-quit'>QUIT</button>
        </div>
      </div>
    </>
  );
};

export default GameWon;
