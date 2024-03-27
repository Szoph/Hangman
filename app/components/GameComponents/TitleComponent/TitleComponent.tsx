"use client";
import { useDispatch } from "react-redux";
import {AppDispatch, useAppSelector} from "@/redux/store";
import {setWord} from "@/redux/game/hangman-slice";
import './titlecomponent.scss'




const TitleComponent: React.FC = () => {

const word = useAppSelector((state) => state.hangmanGame.value.word); 
const guessedLetters = useAppSelector((state) => state.hangmanGame.value.guessedLetters); 


  

  return (
    <div className="title">

     {word.split(' ').map((word: string, index: number) => (
      <span key={index} className="word">

     

        {word.split('').map((letter: string, index) => (
          <span key={index} className="letters">
            {guessedLetters.includes(letter) ? letter : "_"}
          </span>
        ))}
        

      </span>
     ))}
    </div>
  )
}

export default TitleComponent