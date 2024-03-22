"use client";
import Keyboard from "./Keyboard/Keyboard";
import TitleComponent from "./TitleComponent/TitleComponent";
import Hangman from "./HangmanView/HangmanView";
import GenreTitle from "./GenreTitle/GenreTitle";
import Guesses from "./Guesses/Guesses";
import GameOver from "./GameOver/GameOver";
import {useAppSelector, AppDispatch} from "@/redux/game/store"; 
import {useState} from "react";
import {useDispatch} from "react-redux";
import {resetGame} from "@/redux/game/hangman-slice";
import './hangmangame.scss'


const HangmanGame = () => {
    const [gameOver, setGameOver] = useState<boolean>(false);
    const remainingAttempts = useAppSelector((state) => state.hangmanGame.value.remainingAttempts)
    const dispatch = useDispatch<AppDispatch>();
    
    console.log("Remaining attempts for the user in the game: ", remainingAttempts)

    const handleGameState = (remainingAttempts: number) => {

        if (remainingAttempts === 0) {
            console.log("Remaining attempts after a guess:", remainingAttempts)
            setGameOver(!gameOver)
            alert("You lose, you suck.")
            dispatch(resetGame());
           
        } 
    } 

  const gameReset = () => {
    dispatch(resetGame());
  }
    
    return (
       <div className="game-area"> 
        <div className="game-left">
            <Hangman/>
            <Guesses />
        </div>
        <div className="game-right">
            <TitleComponent/>
            <GenreTitle/>
            <Keyboard/>
        </div>
        {remainingAttempts === 0 ? <div className="game-page__game-over-modal"> <GameOver gameRestart={gameReset}/> </div>: null}

       </div>
    )
}

export default HangmanGame;