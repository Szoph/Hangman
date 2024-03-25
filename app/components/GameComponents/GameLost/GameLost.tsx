import './gamelost.scss';
import { useEffect } from 'react';
import {useRouter} from "next/navigation";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { incrementIncorrectAnswers, setUserSuccess, setUsername } from '@/redux/game/hangman-backend-slice';


type GameOverProps = {
  gameRestart: () => void;
}
const GameLost: React.FC<GameOverProps>= ({gameRestart}) => {
 const router = useRouter();
 const dispatch = useDispatch<AppDispatch>();
 const username = useAppSelector((state) => state.authentication.value.username);
 const gameState = useAppSelector((state) => state.hangmanBackend);
  
  const quitGame = () => {
    gameRestart();
  router.push('/');
  }

  const gameReset = () => {
    gameRestart();
    router.push("/genremenu");
  };

  useEffect(() => {
    const uploadData = async () => {
      dispatch(incrementIncorrectAnswers());
      dispatch(setUserSuccess(false));
      dispatch(setUsername(username));

      console.log(gameState);
    };

    uploadData();
  }, []);
 

  return (
    <>
      <div className='game-lost__container'>


      <div>
          <p className="game-lost__text"> YOU LOSE!</p>
          
        </div>
        
        <div className='game-lost__buttons'>
          <button onClick={gameReset} className='game-lost__button-restart'>PLAY AGAIN?</button>
          <button onClick={quitGame} className='game-lost__button-quit'>QUIT</button>
        </div>


        
      </div>

    </>
  )
}

export default GameLost