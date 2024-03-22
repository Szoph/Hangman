
import {CrossIcon} from "../imports";
import {useAppSelector} from "@/redux/game/store";
import './guesses.scss'

const Guesses: React.FC = () => {
 const attempts = useAppSelector((state) => state.hangmanGame.value.attemptsUsed);
const maxAttempts = 4;

  
  return (
    <div className="guesses-page__container">
      {[...Array(maxAttempts)].map((_, index) => (
        
        <div key={index} className="guesses-page__guess-block">
          {index < attempts ? <CrossIcon className='guesses-page__cross-icon'/> : null}
        </div>
      ))}



    </div>
    
  )
}

export default Guesses;