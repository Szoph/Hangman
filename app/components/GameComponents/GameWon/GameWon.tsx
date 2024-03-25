
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux'; 
import './gamewon.scss'
import {useRouter } from "next/navigation";


type GameWonProps = {
  gameReset: () => void;
}
const GameWon: React.FC<GameWonProps>= ({gameReset}) => {

const router = useRouter();

const nextGame = () => {
gameReset();
router.push('/genremenu');
}

const quitGame = () => {
  gameReset();
  router.push('/');
}



  return (
    <>
      <div className='game-won__container'>


      <div>
          <p className="game-won__text">YOU WIN!</p>
          
        </div>
        
        <div className='game-won__buttons'>
          <button onClick={nextGame} className='game-won__button-next'>Next</button>
          <button onClick={quitGame} className='game-won__button-quit'>QUIT</button>
        </div>


        
      </div>

    </>
  )
}

export default GameWon