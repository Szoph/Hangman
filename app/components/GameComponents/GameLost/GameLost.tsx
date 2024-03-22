import './gamelost.scss'
import {useRouter} from "next/navigation"


type GameOverProps = {
  gameRestart: () => void;
}
const GameLost: React.FC<GameOverProps>= ({gameRestart}) => {
 const router = useRouter();
  
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
          <p className="game-lost__text">YOU LOST!</p>
          
        </div>
        
        <div className='game-lost__buttons'>
          <button onClick={gameReset} className='game-lost__button-restart'>Play Again?</button>
          <button onClick={quitGame} className='game-lost__button-quit'>QUIT</button>
        </div>


        
      </div>

    </>
  )
}

export default GameLost