import './gamelost.scss'
import {useRouter} from "next/navigation"
import { useAppSelector } from "@/redux/store";


type GameOverProps = {
  gameRestart: () => void;
}
const GameLost: React.FC<GameOverProps>= ({gameRestart}) => {
 const router = useRouter();

 const word = useAppSelector((state) => state.hangmanGame.value.word)
  
  const quitGame = () => {
    gameRestart();
  router.push('/');
  }

  const gameReset = () => {
    gameRestart();
    router.push("/genremenu");
  }
 

  return (
    <>
      <div className='game-lost__container'>


      <div>
          <p className="game-lost__text"> YOU LOSE!</p>
          <p className="game-lost__movie-text">The movie was:</p>
          <p className="game-lost__movie">{word}</p>
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