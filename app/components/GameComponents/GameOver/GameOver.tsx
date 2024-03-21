
import {PropsWithChildren, useState} from 'react';
import { AppDispatch, useAppSelector } from '@/redux/user/store';
import { useDispatch } from 'react-redux'; 
import { resetGame } from '@/redux/game/hangman-slice';
import './gameover.scss'


type GameOverProps = {
  gameRestart: () => void;
}
const GameOver: React.FC<GameOverProps>= ({gameRestart}) => {

  // const dispatch = useDispatch<AppDispatch>()


  return (
    <>
      <div className='game-over__container'>
      <div>
          <p className="game-over__text">OH NO! YOU LOSE!</p>
          
        </div>
        
        <div className='game-over__buttons'>
          <button onClick={gameRestart} className='game-over__button-restart'>Play Again?</button>
          <button className='game-over__button-quit'>QUIT</button>
        </div>
      </div>

    </>
  )
}

export default GameOver