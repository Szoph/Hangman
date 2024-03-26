import './game.scss'
import { useState, useEffect } from "react";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import {game1, game2, game3, game4, game5, game6, game7, game8, game9, gameWon} from "./imports";





const Game: React.FC = () => {
    const [gameImage, setGameImage] = useState(game1)
const attemptsUsed = useAppSelector((state) => state.hangmanGame.value.attemptsUsed);
const won = useAppSelector((state) => state.hangmanGame.value.won);


const audioCrack = new Audio ("/sounds/Crack.wav");
const audioLick = new Audio ("/sounds/Lick.mp3");
const audioGulp = new Audio ("/sounds/Gulp.wav");
const audioCorrect = new Audio ("/sounds/Correct.wav");




useEffect(() => {
    console.log(attemptsUsed)
    if (attemptsUsed === 1){
        setGameImage(game2);
        audioCrack.play();
    } else if (attemptsUsed === 2) {
        setGameImage(game3);
        audioCrack.play();
    } else if (attemptsUsed === 3) {
        setGameImage(game4);
        audioCrack.play();
    } else if (attemptsUsed === 4) {
        setTimeout(() => setGameImage(game5), 0);
        audioCrack.play();
        setTimeout(() => setGameImage(game6), 500);
        setTimeout(() => audioGulp.play(), 500);
        setTimeout(() => setGameImage(game7), 1000);
        setTimeout(() => audioLick.play(), 1500);
        setTimeout(() => setGameImage(game8), 1500);
        setTimeout(() => setGameImage(game9), 2000);
    }

    if (won === true) {
        setGameImage(gameWon);
        audioCorrect.play();
    }
}, [attemptsUsed, won])



  return (
    <div className="hangman-view__container">
        <Image src={gameImage} 
        alt={"Hangman game image"}
        width={500}
        height={500}
        className="hangman-view__game-image"
        />
    </div>
  )
}

export default Game