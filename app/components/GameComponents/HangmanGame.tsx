"use client";
import Keyboard from "./Keyboard/Keyboard";
import TitleComponent from "./TitleComponent/TitleComponent";
import Game from "./GameContainer/Game";
import GenreTitle from "./GenreTitle/GenreTitle";
import Guesses from "./Guesses/Guesses";
import GameLost from "./GameLost/GameLost";
import GameWon from './GameWon/GameWon';
import {useAppSelector, AppDispatch} from "@/redux/game/store"; 
import {useDispatch} from "react-redux";
import {resetGame} from "@/redux/game/hangman-slice";
import './hangmangame.scss'
import background from '../GameContainer/utils/background.png';
import Image from "next/image";


const HangmanGame = () => {
    const remainingAttempts = useAppSelector((state) => state.hangmanGame.value.remainingAttempts)
    const won = useAppSelector((state) => state.hangmanGame.value.won)
    const dispatch = useDispatch<AppDispatch>();
    

  const gameReset = () => {
    dispatch(resetGame());
  }
    
    return (
       <div className="game-area"> 
        <div className="game-left">
            <Game/>
            
        </div>
        <div className="game-right">
            <TitleComponent/>
            <GenreTitle/>
            <Keyboard/>
            <Guesses />
        </div>
        {won === true ? <div className="game-page__game-won-modal"><GameWon gameReset={gameReset}/></div> : null}
        {remainingAttempts === 0 ? <div className="game-page__game-lost-modal"> <GameLost gameRestart={gameReset}/> </div>: null}

       </div>
    )
}

export default HangmanGame;